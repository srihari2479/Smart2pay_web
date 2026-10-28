/**
 * SMART2PAY B2B & HAPPYPAY KNOWLEDGE BASE & SYSTEM PROMPT
 * Official Knowledge Base for Smart2Pay B2B White-Label Payment Infrastructure
 */

export const LEADERSHIP_INFO = {
  brand: 'Smart2Pay B2B',
  platformType: 'White-Label Multi-Bank Payment Infrastructure & B2B Fintech Rails',
  poweredBy: 'HappyPay B2B Architecture',
  founder: 'Devikiran Kasireddy',
  frontendDevs: 'Choppa Srihari, Gorajana Bindhu Madhav',
  backendDev: 'Amudala Omkar',
  supportEmail: 'support@happypay.biz',
  supportEmailSecondary: 'info@smart2pay.co.in',
  officialWebsites: ['https://smart2pay.co.in', 'https://www.happypay.live'],
  whatsappSupport: '+91 8838607449',
  whatsappUrl: 'https://wa.me/918838607449?text=Hi%20Smart2Pay%20Team%2C%20I%20would%20like%20to%20know%20more%20about%20Smart2Pay%20B2B%20services',
};

export const FAQ_CATEGORIES = [
  // 00. White Label & B2B Solutions
  {
    id: 'whitelabel_b2b',
    name: 'Smart2Pay B2B & White Label',
    icon: '🏢',
    description: 'White-label payment gateway, API rails, merchant onboarding',
    items: [
      {
        question: 'What is Smart2Pay B2B White-Label Solution?',
        answer:
          'Smart2Pay B2B is an institutional-grade, turnkey white-label payment infrastructure. Businesses can launch their own branded payment gateway with multi-bank switches, T+0 settlements, soundbox QR, BBPS, and merchant management dashboards.',
        categoryId: 'whitelabel_b2b',
        keywords: ['white label', 'b2b', 'what is smart2pay', 'white-label solution', 'reseller', 'franchise', 'gateway api'],
      },
      {
        question: 'How do I integrate Smart2Pay B2B APIs?',
        answer:
          'We provide unified REST APIs, mobile SDKs (Android & iOS), and webhook notifications. Connect with our tech desk on WhatsApp (+91 8838607449) to receive sandbox API keys and technical documentation.',
        categoryId: 'whitelabel_b2b',
        keywords: ['api integration', 'developer', 'docs', 'sdk', 'webhook', 'sandbox'],
      },
      {
        question: 'Who owns and built Smart2Pay B2B?',
        answer:
          'Smart2Pay B2B is founded by Devikiran Kasireddy, with frontend development by Choppa Srihari and Gorajana Bindhu Madhav, and backend infrastructure by Amudala Omkar, powered by the HappyPay fintech architecture.',
        categoryId: 'whitelabel_b2b',
        keywords: ['founder', 'owner', 'who built', 'team', 'devikiran', 'developer'],
      },
      {
        question: 'How fast are Smart2Pay merchant settlements?',
        answer:
          'Smart2Pay supports Instant T+0 IMPS/NEFT automated ledger settlements directly into merchant bank accounts, eliminating multi-day holding delays.',
        categoryId: 'whitelabel_b2b',
        keywords: ['settlement speed', 't+0', 'instant settlement', 'merchant payout', 'settlement time'],
      },
    ],
  },

  // 01. Getting Started & Account
  {
    id: 'account',
    name: 'Account & Login',
    icon: '👤',
    description: 'Registration, OTP, profile, account access',
    items: [
      {
        question: 'How do I create a Smart2Pay / HappyPay account?',
        answer:
          'Download or open the app/portal, enter your registered mobile number, and complete the verification OTP steps shown on screen.',
        categoryId: 'account',
        keywords: ['create', 'register', 'sign up', 'new account', 'start'],
      },
      {
        question: 'I did not receive my OTP. What should I do?',
        answer:
          'Check your mobile network and number, wait briefly, then request a new OTP. Never share an OTP with anyone.',
        categoryId: 'account',
        keywords: ['otp', 'not received', 'sms', 'code', 'resend'],
      },
      {
        question: 'I cannot log in. What should I do?',
        answer:
          'Check your mobile number and internet connection, update the app, and try again. If the issue continues, contact Support at support@happypay.biz or WhatsApp +91 8838607449.',
        categoryId: 'account',
        keywords: ['login', 'sign in', 'cannot login', 'cant login', 'stuck'],
      },
      {
        question: 'How do I update my profile?',
        answer:
          'Open Profile in the app and update the available fields. Some changes may require additional verification.',
        categoryId: 'account',
        keywords: ['profile', 'update', 'edit name', 'email', 'change details'],
      },
      {
        question: 'Can I use the app on a new phone?',
        answer:
          'Sign in and complete the security checks shown in the app. SIM or device binding may be required for selected financial services.',
        categoryId: 'account',
        keywords: ['new phone', 'device change', 'switch device', 'another phone'],
      },
      {
        question: 'How do I close my account?',
        answer:
          'Contact Support to review account closure requirements and any pending transactions or balances.',
        categoryId: 'account',
        keywords: ['close account', 'delete account', 'deactivate'],
      },
    ],
  },

  // 02. KYC & Verification
  {
    id: 'kyc',
    name: 'KYC & Verification',
    icon: '🪪',
    description: 'Aadhaar, PAN, bank verification, KYC status',
    items: [
      {
        question: 'Why is KYC required?',
        answer:
          'KYC helps verify your identity and is an RBI regulatory requirement before using financial services, high-value transfers, and payouts.',
        categoryId: 'kyc',
        keywords: ['why kyc', 'kyc required', 'need kyc', 'kyc mandatory'],
      },
      {
        question: 'How do I complete KYC?',
        answer:
          'Open the KYC section in the app and follow the steps shown: Aadhaar verification (via OTP or DigiLocker), PAN card entry, and bank account penny-drop linking.',
        categoryId: 'kyc',
        keywords: ['complete kyc', 'how to kyc', 'do kyc', 'submit kyc'],
      },
      {
        question: 'How do I know if my KYC is complete?',
        answer:
          'Check the KYC status badge in your profile. You will also receive an in-app confirmation notification once approved.',
        categoryId: 'kyc',
        keywords: ['kyc status', 'kyc complete', 'check kyc', 'verified'],
      },
      {
        question: 'My Aadhaar verification failed. What should I do?',
        answer:
          'Check the 12-digit Aadhaar number and ensure your mobile number is linked to Aadhaar for OTP verification. You can also use DigiLocker verification in the app.',
        categoryId: 'kyc',
        keywords: ['aadhaar failed', 'aadhaar error', 'aadhaar verification'],
      },
      {
        question: 'My PAN verification failed. What should I do?',
        answer:
          'Check that the 10-character PAN number and date of birth match your government records exactly, then retry.',
        categoryId: 'kyc',
        keywords: ['pan failed', 'pan error', 'pan card verification'],
      },
      {
        question: 'Why is my KYC under review?',
        answer:
          'Your submitted documents are undergoing verification checks. Please wait for an in-app status update or check if additional clarification is requested.',
        categoryId: 'kyc',
        keywords: ['under review', 'kyc pending', 'verification pending'],
      },
      {
        question: 'What documents do I need for KYC?',
        answer:
          'Typically your Aadhaar number (or DigiLocker access), PAN card, and a verified bank account in your name are required.',
        categoryId: 'kyc',
        keywords: ['kyc documents', 'what documents', 'id proof'],
      },
      {
        question: 'How do I fix rejected KYC?',
        answer:
          'Open the KYC section, review the exact rejection reason displayed, correct details or re-upload clear documents, and resubmit.',
        categoryId: 'kyc',
        keywords: ['rejected kyc', 'kyc rejected', 'fix kyc'],
      },
    ],
  },

  // 03. SIM Binding, Device & Security
  {
    id: 'security',
    name: 'SIM & Device Security',
    icon: '🔒',
    description: 'SIM verification, device binding, MPIN reset',
    items: [
      {
        question: 'What is SIM verification?',
        answer:
          'SIM verification sends an encrypted SMS to confirm that the mobile SIM registered with your account is present in the device you are using.',
        categoryId: 'security',
        keywords: ['sim verification', 'what is sim', 'sim check'],
      },
      {
        question: 'Why is SIM binding required?',
        answer:
          'SIM binding is an RBI-mandated security safeguard that prevents unauthorized access to your wallet and payments from external devices.',
        categoryId: 'security',
        keywords: ['why sim binding', 'sim binding mandatory', 'security binding'],
      },
      {
        question: 'How do I change or reset my MPIN?',
        answer:
          'Go to Profile > Security > Reset MPIN, verify via registered mobile OTP, and set your new MPIN.',
        categoryId: 'security',
        keywords: ['reset mpin', 'change mpin', 'forgot mpin', 'pin'],
      },
      {
        question: 'Will Smart2Pay / HappyPay ask for my OTP or MPIN?',
        answer:
          '**Never.** Our staff will NEVER ask for your OTP, MPIN, password, or CVV. Never share these with anyone under any circumstances.',
        categoryId: 'security',
        keywords: ['share otp', 'ask otp', 'security', 'fraud'],
      },
    ],
  },

  // 04. Wallet, Earnings & History
  {
    id: 'wallet',
    name: 'Wallet & Earnings',
    icon: '💰',
    description: 'Balance, cashback, commissions, passbook',
    items: [
      {
        question: 'What is my wallet used for?',
        answer:
          'Your wallet holds your earnings, cashback, affiliate commissions, and can be used for utility bill payments or direct withdrawal to your bank.',
        categoryId: 'wallet',
        keywords: ['wallet', 'wallet use', 'balance', 'what is wallet'],
      },
      {
        question: 'Where can I check my wallet balance?',
        answer:
          'Open the Wallet tab from the bottom navigation dock to view your available balance, holding balance, and recent ledger entries.',
        categoryId: 'wallet',
        keywords: ['check balance', 'wallet balance', 'view balance'],
      },
      {
        question: 'When will cashback be credited?',
        answer:
          'Cashback is typically credited instantly or within 24 hours once the qualifying transaction is confirmed by the biller or payment gateway.',
        categoryId: 'wallet',
        keywords: ['cashback credited', 'when cashback', 'cashback timing'],
      },
      {
        question: 'Where can I view my earnings history?',
        answer:
          'Navigate to Wallet > Passbook / Transaction History to view all credits, debits, cashback, and withdrawal timestamps.',
        categoryId: 'wallet',
        keywords: ['earnings history', 'passbook', 'history', 'statement'],
      },
    ],
  },

  // 05. Wallet Withdrawal & Bank Account
  {
    id: 'withdrawal',
    name: 'Wallet Withdrawal',
    icon: '🏦',
    description: 'Bank verification, withdrawal status, limits',
    items: [
      {
        question: 'How do I withdraw my available balance?',
        answer:
          'Go to Wallet > Withdraw, select your verified bank account, enter the withdrawal amount (minimum ₹500), and confirm with your MPIN.',
        categoryId: 'withdrawal',
        keywords: ['how to withdraw', 'withdraw money', 'transfer to bank', 'cashout'],
      },
      {
        question: 'Why can\'t I withdraw?',
        answer:
          'Withdrawals require: (1) Completed KYC, (2) Verified bank account in your name, (3) Minimum balance of ₹500, and (4) Daily withdrawal limit compliance.',
        categoryId: 'withdrawal',
        keywords: ['cant withdraw', 'cannot withdraw', 'withdrawal error', 'failed withdraw'],
      },
      {
        question: 'My withdrawal is pending. What should I do?',
        answer:
          'Bank withdrawals typically process within 2 to 24 business hours via IMPS/NEFT. Please do not submit duplicate withdrawal requests while pending.',
        categoryId: 'withdrawal',
        keywords: ['withdrawal pending', 'payout pending', 'pending withdrawal'],
      },
      {
        question: 'Can I withdraw to someone else\'s bank account?',
        answer:
          'No. For anti-money laundering and regulatory compliance, payouts can only be disbursed to a bank account in the verified KYC account holder\'s name.',
        categoryId: 'withdrawal',
        keywords: ['other person bank', 'friends bank', 'third party account'],
      },
    ],
  },

  // 06. Credit Card to Bank Solutions
  {
    id: 'card_to_bank',
    name: 'Card-to-Bank',
    icon: '💳',
    description: 'Credit card transfer, rent, tuition, MDR fee',
    items: [
      {
        question: 'What is Card-to-Bank?',
        answer:
          'Card-to-Bank is a compliant payment facility enabling users to pay verified expenses (such as house rent, tuition, vendor fees) using their credit card.',
        categoryId: 'card_to_bank',
        keywords: ['card to bank', 'credit card transfer', 'cc to bank'],
      },
      {
        question: 'How do I start a card-to-bank transaction?',
        answer:
          'Select "Card to Bank" or "Rent/Tuition Payment", enter beneficiary bank details or UPI ID, input the amount, select your credit card, and complete bank OTP.',
        categoryId: 'card_to_bank',
        keywords: ['how card to bank', 'transfer credit card', 'pay from cc'],
      },
      {
        question: 'My payment succeeded but payout is pending. Why?',
        answer:
          'Credit card debit and bank payout are two distinct steps. Once the card gateway approves payment, the settlement transfer to the recipient is dispatched.',
        categoryId: 'card_to_bank',
        keywords: ['payout pending', 'settlement pending', 'money not reached'],
      },
      {
        question: 'What should I do if payout is pending?',
        answer:
          '**Do NOT repeat the transaction.** Keep your transaction UTR reference and check status in History. Payouts complete within the displayed settlement window.',
        categoryId: 'card_to_bank',
        keywords: ['repeat transaction', 'duplicate payment', 'pending payout advice'],
      },
    ],
  },

  // 07. Tuition, Education & Training Fee
  {
    id: 'tuition',
    name: 'Tuition & Education',
    icon: '🎓',
    description: 'School, college, coaching, training fees',
    items: [
      {
        question: 'How do I pay tuition fees through Smart2Pay / HappyPay?',
        answer:
          'Open Tuition/Education Fee, enter the educational institution or tutor bank details, student registration details, review charges, and pay via card/UPI.',
        categoryId: 'tuition',
        keywords: ['pay tuition', 'school fee', 'college fee', 'tuition fees'],
      },
      {
        question: 'Where can I get a tuition payment receipt?',
        answer:
          'Go to Transaction History > Select the Tuition payment > Tap "Download Receipt" to save an official PDF tax invoice / payment slip.',
        categoryId: 'tuition',
        keywords: ['tuition receipt', 'fee slip', 'education receipt'],
      },
    ],
  },

  // 08. Rent, Vendor & Professional Fee Payments
  {
    id: 'rent_vendor',
    name: 'Rent & Vendor Pay',
    icon: '🏠',
    description: 'House rent, office rent, vendor invoices',
    items: [
      {
        question: 'How do I make a rent payment?',
        answer:
          'Open Rent Payment, enter landlord\'s bank account/UPI, property address, upload rent agreement (if required for limits > ₹50,000), and pay securely.',
        categoryId: 'rent_vendor',
        keywords: ['pay rent', 'house rent', 'landlord payment', 'office rent'],
      },
      {
        question: 'Can I pay a landlord directly?',
        answer:
          'Yes. Funds are directly settled to the landlord\'s verified bank account via IMPS/NEFT with automated digital rent receipts for HRA tax exemption.',
        categoryId: 'rent_vendor',
        keywords: ['pay landlord', 'landlord bank account', 'property owner'],
      },
    ],
  },

  // 09. Recharge & Utility Bill Payments (BBPS)
  {
    id: 'recharge_bills',
    name: 'Recharge & BBPS Bills',
    icon: '⚡',
    description: 'Mobile, DTH, FASTag, electricity, water, gas',
    items: [
      {
        question: 'Which recharges and bill payments are supported?',
        answer:
          'We support prepaid mobile, postpaid, DTH, FASTag, Electricity, Water, Piped Gas, Broadband, and Municipal taxes via the national Bharat Bill Payment System (BBPS).',
        categoryId: 'recharge_bills',
        keywords: ['available recharges', 'bbps', 'utility bills', 'bill payments'],
      },
      {
        question: 'My recharge failed but money was deducted. What should I do?',
        answer:
          'Biller gateways auto-refund failed deductions. The amount will be refunded to your wallet or original payment source within 24 to 48 hours.',
        categoryId: 'recharge_bills',
        keywords: ['recharge failed debited', 'money deducted recharge', 'failed recharge'],
      },
    ],
  },

  // 10. Augmont Digital Gold
  {
    id: 'gold',
    name: 'Augmont Digital Gold',
    icon: '🪙',
    description: '24K 99.9% digital gold, gold SIP, selling',
    items: [
      {
        question: 'How do I buy 24K digital gold?',
        answer:
          'Choose "Digital Gold", enter amount in rupees (starting as low as ₹10) or grams, check the live market price locked for 5 minutes, and pay via UPI or card.',
        categoryId: 'gold',
        keywords: ['gold', 'digital gold', 'augmont', 'buy gold', 'invest gold'],
      },
      {
        question: 'Is digital gold safe and insured?',
        answer:
          'Yes. All digital gold is 100% physical 24K 999 pure bullion stored securely in IDBI Trustee-monitored, insured vaults by Augmont.',
        categoryId: 'gold',
        keywords: ['gold safety', 'vault', 'custody', 'is gold safe'],
      },
    ],
  },

  // 11. Customer Support & WhatsApp Help
  {
    id: 'support',
    name: 'Help & Support',
    icon: '🆘',
    description: 'Support tickets, WhatsApp chat, fraud reporting',
    items: [
      {
        question: 'How do I contact Support directly?',
        answer:
          'You can chat with this AI assistant, tap the WhatsApp button to chat with our human executive at +91 8838607449, or email support@happypay.biz.',
        categoryId: 'support',
        keywords: ['contact support', 'customer care', 'email', 'phone', 'help', 'whatsapp support', 'human agent'],
      },
      {
        question: 'How do I report an unauthorized transaction?',
        answer:
          'Block your card/account immediately, change your MPIN, and notify Support right away with the transaction reference, amount, and timestamp.',
        categoryId: 'support',
        keywords: ['unauthorised', 'fraud', 'stolen', 'suspicious transaction'],
      },
    ],
  },
];

/**
 * Instant offline FAQ keyword & question matcher
 */
export function findBestMatch(query) {
  const clean = query.trim().toLowerCase();
  if (!clean) return null;

  // 1. Exact match
  for (const cat of FAQ_CATEGORIES) {
    for (const item of cat.items) {
      if (item.question.toLowerCase() === clean) return item;
    }
  }

  // 2. High overlap scoring
  let bestItem = null;
  let maxScore = 0;

  for (const cat of FAQ_CATEGORIES) {
    for (const item of cat.items) {
      let score = 0;
      const qLower = item.question.toLowerCase();
      if (clean.includes(qLower) || qLower.includes(clean)) {
        score += 6;
      }
      for (const kw of item.keywords) {
        if (clean.includes(kw.toLowerCase())) {
          score += 3;
        }
      }
      if (score > maxScore && score >= 3) {
        maxScore = score;
        bestItem = item;
      }
    }
  }

  return bestItem;
}

/**
 * Builds the comprehensive Smart2Pay B2B White Label System Prompt
 */
export function buildSmart2PaySystemPrompt() {
  const parts = [];

  parts.push(
    `You are the official AI Support & Solutions Assistant for **Smart2Pay B2B** — India's premier intelligent multi-bank payment infrastructure and turnkey white-label B2B fintech platform (powered by the HappyPay fintech architecture).`
  );

  parts.push(`
LEADERSHIP & DEVELOPER TEAM:
• Founder & Owner: ${LEADERSHIP_INFO.founder}
• Frontend Developers: ${LEADERSHIP_INFO.frontendDevs}
• Backend Infrastructure: ${LEADERSHIP_INFO.backendDev}
• Official Email: ${LEADERSHIP_INFO.supportEmail} / ${LEADERSHIP_INFO.supportEmailSecondary}
• Official Websites: ${LEADERSHIP_INFO.officialWebsites.join(', ')}
• Official WhatsApp Support: ${LEADERSHIP_INFO.whatsappSupport}

SMART2PAY B2B WHITE-LABEL VALUE PROPOSITION:
- Multi-Bank Intelligent Routing Switches (HDFC, Axis, ICICI, SBI, 50+ Scheduled Commercial Banks).
- T+0 Instant Direct IMPS/NEFT Merchant Settlements.
- Omnichannel Retail Soundbox QR & Merchant KYB Onboarding.
- Turnkey White-Label Payment Gateway for Resellers, Enterprises, and Fintech Partners.
- End-to-End BBPS Utility Services (Recharge, Electricity, FASTag, Water, Gas, Municipal Taxes).
- Compliant Credit Card-to-Bank Settlement Rails for Rent, Tuition, and Vendor Invoices.

STRICT BEHAVIOR & COMPLIANCE RULES:
1. Zero Hallucination: Never fabricate bank approval guarantees, speculative interest rates, or fake transaction statuses. Direct users to live in-app screens or WhatsApp support.
2. Direct & Crisp: Deliver the core answer in 1–3 short, punchy sentences first. Follow with clear bullet points (•) if steps are required.
3. Security Protocol: Smart2Pay / HappyPay NEVER asks for OTPs, MPINs, passwords, or CVV. Remind the user if fraud/security is mentioned.
4. Pending Payment Advisory: If user inquires about pending payments or payouts, tell them explicitly: "**Do NOT repeat the transaction** while it is processing to avoid double-charging."
5. Escalation: Whenever the user needs complex onboarding or human assistance, invite them to chat on WhatsApp at **${LEADERSHIP_INFO.whatsappSupport}**.
6. Scope: Focus strictly on Smart2Pay B2B & HappyPay fintech services, merchant setup, payouts, and account assistance.
`);

  parts.push(`MASTER KNOWLEDGE BASE:`);
  for (const cat of FAQ_CATEGORIES) {
    parts.push(`\n[CATEGORY: ${cat.name}]`);
    for (const item of cat.items) {
      parts.push(`Q: ${item.question}\nA: ${item.answer}`);
    }
  }

  return parts.join('\n');
}
