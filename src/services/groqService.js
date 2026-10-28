import { buildSmart2PaySystemPrompt, findBestMatch, LEADERSHIP_INFO } from '../data/chatbotFaqData';

const GROQ_API_KEY = import.meta.env.VITE_GROQ_API_KEY || '';
const PRIMARY_MODEL = 'openai/gpt-oss-120b';
const FALLBACK_MODEL = 'openai/gpt-oss-20b';

let cachedSystemPrompt = null;
function getSystemPrompt() {
  if (!cachedSystemPrompt) {
    cachedSystemPrompt = buildSmart2PaySystemPrompt();
  }
  return cachedSystemPrompt;
}

/**
 * Sends chat message to Groq LLM API with Smart2Pay B2B context
 */
export async function sendChatMessage(userMessage, conversationHistory = []) {
  // 1. Check for quick offline FAQ match first (0ms latency answer)
  const offlineMatch = findBestMatch(userMessage);

  try {
    const systemPrompt = getSystemPrompt();

    // Limit conversation history to the last 6 messages for fast processing
    const recentHistory = conversationHistory.slice(-6).map((msg) => ({
      role: msg.role === 'user' ? 'user' : 'assistant',
      content: msg.content,
    }));

    const messages = [
      { role: 'system', content: systemPrompt },
      ...recentHistory,
      { role: 'user', content: userMessage },
    ];

    // Helper for API call
    const callGroq = async (modelName) => {
      const response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${GROQ_API_KEY}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          model: modelName,
          messages,
          temperature: 0.3,
          max_tokens: 600,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.error?.message || `HTTP ${response.status}`);
      }

      const data = await response.json();
      const content = data.choices?.[0]?.message?.content;
      if (!content) {
        throw new Error('Empty response from model');
      }
      return content.trim();
    };

    // Try primary model first, fallback to secondary model on error
    let aiResponse;
    try {
      aiResponse = await callGroq(PRIMARY_MODEL);
    } catch (err) {
      console.warn(`[GroqService] ${PRIMARY_MODEL} failed, falling back to ${FALLBACK_MODEL}:`, err);
      aiResponse = await callGroq(FALLBACK_MODEL);
    }

    return {
      success: true,
      content: aiResponse,
      isOfflineMatch: false,
    };
  } catch (err) {
    console.error('[GroqService] Error querying Groq API:', err);

    // If API fails, seamlessly fallback to offline FAQ match if available
    if (offlineMatch) {
      return {
        success: true,
        content: offlineMatch.answer,
        isOfflineMatch: true,
      };
    }

    // Graceful helpful fallback with direct WhatsApp link
    return {
      success: false,
      content: `I'm having a brief connection issue with our neural engine. For urgent queries, connect directly with our human merchant desk on **WhatsApp at ${LEADERSHIP_INFO.whatsappSupport}** or email **${LEADERSHIP_INFO.supportEmail}**.`,
      isOfflineMatch: false,
    };
  }
}
