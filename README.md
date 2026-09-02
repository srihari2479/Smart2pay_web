# Smart2Pay — 3D React Fintech Web Platform

A production-grade, high-performance fintech landing page and platform web application for **Smart2Pay** (by **HappyPay**), built with **React**, **Three.js / React Three Fiber**, modern **skeuomorphic and neumorphic UI/UX**, and dedicated legal compliance portals.

---

## Key Features & Highlights

- **3D Interactive WebGL Experience**: Scroll-driven procedural 3D payment cards with gold EMV chips, multi-bank node routing topologies with live particle data streams, and 256-bit cryptographic vault shields powered by Three.js & React Three Fiber.
- **Modern Skeuomorphic & Neumorphic Fintech Design System**: Tactile ceramic light-grey canvas (`#EEF2F6` / `#F0F4F8`) with dual-shadow elevations, extruded cards, inner pressed states, and high WCAG AAA text contrast.
- **Multi-Bank Ecosystem & Live Ticker**: Animated real-time tickers highlighting 50+ scheduled commercial banks (Axis, Canara, SBI, HDFC, ICICI, etc.) and payment gateways (Razorpay, PayU, Cashfree).
- **Utility & BBPS Services Showcase**: Tabbed showcase for House Rent collection, College Education fees, Shop KYB QR soundboxes, Insurance premiums, Loans, and Travel booking rails using official provided brand assets and Lottie animations.
- **Interactive Fee & ROI Estimator**: Real-time slider calculating monthly volume, payment mix, and annual merchant cost savings vs. legacy gateways.
- **Live Settlement Ledger Console**: Real-time mock merchant dashboard with live webhook streams, transaction filters, and telemetry indicators.
- **Institutional Security Suite**: AES-256 vault simulator, biometric WebAuthn 2FA passkey demos, and PCI-DSS Level 1 compliance architecture.
- **Official Legal Portal**: Dedicated routes with side navigation for **Terms of Service** (`/terms`), **Privacy Policy** (`/privacy`), **Refund Policy** (`/refund`), and **Request to Delete Account** (`/delete-account`) matching HappyPay corporate requirements.
- **Full Responsiveness & Accessibility**: Tested for desktop (1920px+ & 1440px), laptops, tablets, and mobile (320px–767px) with `prefers-reduced-motion` compliance and GPU-conscious rendering.

---

## Corporate Entity & Contact

- **Registered Entity**: HAPPY PAY TECHNOLOGIES
- **Address**: Revenue Ward No 26, no 26-30-19, Yerukuvanipalem, Ramalayam Street, VISAKHAPATNAM, Paravada Industrial Area, Anakapalli, Andhra Pradesh, 531019
- **Phone**: +91 8886317755
- **Support Email**: Support@happypay.biz

---

## Getting Started

### 1. Install Dependencies
```bash
npm install
```

### 2. Run Development Server
```bash
npm run dev
```
The application will launch locally at `http://localhost:3000`.

### 3. Build for Production
```bash
npm run build
```
Optimized static production build generated in `/dist`.

### 4. Preview Production Build
```bash
npm run preview
```

---

## Project Structure

```text
smart2pay_web/
├── public/
│   ├── assets/
│   │   ├── logo/ (Smart2Pay brand logo)
│   │   ├── banklogos/ (60+ bank logos)
│   │   ├── cards/ (Gateway and credit card badges)
│   │   ├── cc_logos/ (Visa, Mastercard, RuPay, Amex, Diners)
│   │   ├── icons/ (Edufee, houserent, shop_kyb, loan, insurance)
│   │   └── animations/ (Lottie JSON animation files)
│   ├── favicon.png
│   └── favicon.ico
│
├── src/
│   ├── components/
│   │   ├── common/ (Button, Badge, Card, Modal, SectionHeader, LottiePlayer)
│   │   ├── navigation/ (Navbar, MobileMenu)
│   │   ├── three/ (ThreeCanvas, SmartCard3D, PaymentEcosystem3D, SecurityShield3D, BackgroundParticles3D)
│   │   ├── hero/ (HeroSection, QuickStatsTicker)
│   │   ├── sections/ (BankEcosystemTicker, PaymentFlowSection, FeatureMatrix, UtilityServicesShowcase, SecuritySection, FeeCalculatorSection, LiveAnalyticsSection, HowItWorksSection, CTASection)
│   │   ├── footer/ (Footer)
│   │   └── legal/ (LegalLayout)
│   │
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── Terms.jsx
│   │   ├── Privacy.jsx
│   │   ├── Refund.jsx
│   │   ├── DeleteAccount.jsx
│   │   └── NotFound.jsx
│   │
│   ├── hooks/ (useScrollProgress, useMouseTilt, usePrefersReducedMotion)
│   ├── styles/ (tokens.css, index.css, animations.css)
│   ├── App.jsx
│   └── main.jsx
│
├── index.html
├── package.json
├── vite.config.js
└── README.md
```
