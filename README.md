# SmartCheckout Prototype

A high-fidelity interactive prototype for a **Self-Checkout / Checkout-Free Store System**, built for a Design Thinking college project.

## 🚀 Live Demo
Hosted on Netlify — see the deployment badge above.

## 📱 Features
- **Amazon Go Mode** — AI Computer Vision scanning, Just Walk Out exit gate, turnstile entry
- **Self-Checkout Mode** — Barcode scanning, cart management, digital payment
- **Payment Methods** — UPI, Credit/Debit Cards, Digital Wallets
- **Multilingual** — English, Telugu, Hindi
- **Fully Interactive** — 15+ screens with realistic transitions and animations

## 🛒 User Flow
Welcome → Login/Guest → Store Entry → Scan Products → Cart → Payment → Exit Gate

## 📁 Project Structure
```
├── index.html          # All screens (single page app)
├── netlify.toml        # Netlify deployment config
├── css/
│   ├── style.css       # Core layout & CSS variables
│   ├── components.css  # All UI components
│   ├── presentation.css # Presenter bar & DT modal
│   └── amazon_go.css   # Amazon Go specific styles
└── js/
    ├── products.js     # Indian product catalog
    ├── i18n.js         # EN/Telugu/Hindi translations
    ├── audio.js        # Web Audio API sounds
    ├── store.js        # Cart state management
    └── app.js          # All screen controllers
```

## 🎓 Design Thinking Project
Solves key pain points: Long queues, Waiting time, Scanning errors, Payment uncertainty.

**Design Pillars:** Speed · Simplicity · Security · Reliability
