// Multilingual Localization Dictionaries: English, Telugu (తెలుగు), Hindi (हिन्दी)
const TRANSLATIONS = {
  en: {
    // Brand
    brandName: "SmartCheckout",
    brandTagline: "Shop faster. Skip the queue.",
    storeName: "SmartSupermarket - Hitech City",
    
    // Welcome
    welcomeTitle: "Welcome to SmartCheckout",
    welcomeSubtitle: "Shop faster. Skip the queue.",
    startShopping: "Start Shopping",
    howItWorks: "Learn How It Works",
    howItWorksStep1: "1. Scan Barcodes on items as you put them in your basket",
    howItWorksStep2: "2. Verify your digital cart & enjoy automatic discounts",
    howItWorksStep3: "3. Pay seamlessly with UPI and walk through the smart exit gate",
    close: "Close",
    
    // Login / Guest
    loginTitle: "Fast Checkout Login",
    loginSubtitle: "Select how you'd like to shop today",
    continueMobile: "Continue with Mobile Number",
    continueGuest: "Continue as Guest",
    phoneNumberLabel: "Enter 10-digit Mobile Number",
    phoneNumberPlaceholder: "e.g. 98765 43210",
    sendOtp: "Send OTP & Enter Store",
    privacyNotice: "Your payment and personal information is protected with 256-bit bank encryption.",
    
    // Home
    searchPlaceholder: "Search Lay's, Milk, Oil, Coke...",
    categories: "Categories",
    catAll: "All Items",
    catSnacks: "Snacks",
    catBeverages: "Beverages",
    catGroceries: "Groceries",
    catPersonalCare: "Personal Care",
    catDairy: "Dairy",
    popularInStore: "Popular in Store Today",
    scanProductBtn: "Scan Product",
    cartLabel: "Cart",
    runningTotal: "Total:",
    quickAdd: "Quick Add",
    itemCount: "items",
    
    // Scanner
    scanPrompt: "Point your camera at the barcode",
    scannerHelper: "Align barcode inside the frame to scan automatically",
    simulateScanBtn: "Simulate Scan",
    flashOn: "Flash On",
    flashOff: "Flash Off",
    cancelScan: "Cancel",
    simulateErrorBtn: "Simulate Scan Error",
    productAddedSuccess: "Product Added Successfully ✓",
    addAnother: "Scan Another",
    viewCart: "View Cart",
    barcodeDetected: "Barcode Detected:",
    
    // Product Modal
    addToCart: "Add to Cart",
    quantity: "Quantity",
    unitPrice: "Price per item",
    vegTag: "100% Vegetarian",
    
    // Cart
    cartTitle: "Shopping Cart",
    emptyCartTitle: "Your cart is empty",
    emptyCartSub: "Scan products or pick items from the store to add them here.",
    subtotal: "Subtotal",
    taxGst: "GST (Taxes)",
    discountCoupon: "Self-Checkout Discount",
    totalAmount: "Total Amount",
    proceedToPayment: "Proceed to Payment",
    continueShopping: "Continue Shopping",
    removeItem: "Remove",
    clearCart: "Clear All",
    
    // Security Check
    securityTitle: "Secure Checkout",
    securitySubtitle: "Performing real-time security verification",
    secItem1: "Items & quantities verified in smart cart",
    secItem2: "Store inventory sync & total calculated",
    secItem3: "Secure 256-bit payment gateway connected",
    securityBadge: "Your checkout is protected by secure payment verification.",
    continueToPayment: "Continue to Payment",
    
    // Payment
    paymentTitle: "Choose Payment Method",
    payableAmount: "Amount to Pay",
    upiOption: "UPI (Google Pay, PhonePe, Paytm)",
    cardsOption: "Credit / Debit Card",
    walletOption: "Digital Wallets & NetBanking",
    enterUpiId: "Enter UPI ID",
    upiIdPlaceholder: "e.g. mobile@upi or username@okaxis",
    payWith: "Pay",
    popularUpiApps: "Or tap your favorite UPI App:",
    cardNumber: "Card Number",
    cardExpiry: "MM / YY",
    cardCvv: "CVV",
    cardHolder: "Cardholder Name",
    
    // Processing
    processingTitle: "Processing Payment...",
    processingSub: "Please do not close or refresh this screen",
    procStep1: "Connecting to NPCI UPI Gateway...",
    procStep2: "Requesting bank authorization...",
    procStep3: "Payment confirmed by bank!",
    
    // Success & Receipt
    paymentSuccessTitle: "Payment Successful ✓",
    paymentSuccessSub: "Thank you! Your transaction is complete.",
    transactionId: "Transaction ID",
    amountPaid: "Amount Paid",
    paymentTime: "Timestamp",
    viewReceipt: "View Digital Receipt",
    sendReceipt: "Send Receipt",
    sendReceiptSms: "Send to SMS",
    sendReceiptWa: "Send via WhatsApp",
    sendReceiptEmail: "Send to Email",
    receiptSentNotice: "Receipt sent successfully to your registered number!",
    digitalReceiptTitle: "SmartCheckout Tax Invoice",
    proceedToExit: "Proceed to Exit Gate",
    
    // Exit Gate
    exitTitle: "You're Ready to Go!",
    exitSubtitle: "Payment verified. Your shopping is complete.",
    exitGateVerified: "Exit Gate Verified ✓",
    scanPassPrompt: "Tap the QR Pass against the Smart Gate reader:",
    tapAtGateBtn: "Simulate Gate Tap & Open",
    gateStatusUnlocked: "SMART GATE UNLOCKED",
    gateStatusLocked: "GATE READY FOR SCAN",
    gateHelper: "Gate sensor will auto-close 10s after you exit.",
    finishShopping: "Finish Shopping",
    thankYouMessage: "Thank you for shopping with SmartCheckout!",
    
    // Autonomous Vision Mode
    autonomousModeTitle: "Vision & RFID Checkout-Free Store",
    autonomousSub: "Computer Vision + Smart Weight Sensors + RFID Integration",
    smartShelfTitle: "Interactive Supermarket Smart Shelf",
    smartCartTitle: "Live Smart Cart (Sensors Active)",
    shelfInstruction: "Tap an item to pick it from shelf into your smart cart:",
    shelfReturnInstruction: "Tap to put item back on shelf:",
    sensorEventLog: "Live Sensor Telemetry Feed:",
    aiDetected: "AI Vision Detected",
    weightConfirmed: "Weight Delta Match",
    rfidScanned: "RFID Chip Read",
    walkOutCheckout: "Walk Out & Auto-Charge",
    
    // Error Handling
    scanErrorTitle: "We couldn't recognize this product",
    scanErrorSub: "The barcode might be damaged, obscured, or missing from database.",
    scanAgain: "Scan Again",
    enterBarcodeManually: "Enter Barcode Manually",
    getAssistance: "Get Assistance",
    manualBarcodeInputTitle: "Enter Barcode Number",
    manualBarcodePrompt: "Type the 13-digit EAN code printed below the barcode:",
    submitBarcode: "Look Up Product",
    
    paymentErrorTitle: "Payment could not be completed",
    paymentErrorSub: "Your bank server timed out or declined the authorization request.",
    tryAgain: "Try Again",
    changePaymentMethod: "Change Payment Method",
    
    // Store Assistance
    needHelp: "Need Help?",
    callStaff: "Call Store Assistant",
    assistantRequestedTitle: "Store Assistant Requested ✓",
    assistantRequestedSub: "Assistant Rajesh K. (Aisle 3 Floor Captain) has been dispatched.",
    assistantEta: "Estimated arrival in your aisle: 2 mins",
    assistantDismiss: "Dismiss Notice",

    // Amazon Go Model
    amazonGoTab: "Amazon Go (Just Walk Out)",
    amazonGoEntryTitle: "Amazon Go In-Store Entry Pass",
    amazonGoEntrySub: "Scan this QR code at the entrance turnstile to link your session and enter the store.",
    scanAtTurnstileBtn: "⚡ Simulate Entry Turnstile Scan",
    turnstileUnlocked: "ENTRY TURNSTILE UNLOCKED ✓",
    turnstileExplainer: "How it works: Scanning links your digital wallet to overhead 4K computer vision cameras. Now put your phone in your pocket and grab any items naturally!",
    aiVisionModeTitle: "AI Computer Vision & Smart Shelf",
    aiVisionBadge: "Amazon Go Computer Vision Mode",
    aiVisionExplainer: "Ceiling cameras track 3D movements while smart shelves sense weight changes. Picking up an item adds it to your virtual cart automatically; putting it back removes it!",
    justWalkOutExitTitle: "Just Walk Out Exit Gate",
    justWalkOutExitSub: "No queues. No manual scanning. No cashier counters. Just walk out!",
    walkOutBtn: "Walk Out Through Smart Exit Gate →",
    exitSensorsVerified: "Ceiling sensors verified exit threshold. Auto-billed to UPI.",
    learnAmazonGoTitle: "How the Amazon Go Technology Works"
  },
  
  te: {
    // Brand
    brandName: "స్మార్ట్ చెక్అవుట్",
    brandTagline: "వేగంగా షాపింగ్ చేయండి. క్యూలను దాటవేయండి.",
    storeName: "స్మార్ట్ సూపర్ మార్కెట్ - హైటెక్ సిటీ",
    
    // Welcome
    welcomeTitle: "స్మార్ట్ చెక్అవుట్ కు స్వాగతం",
    welcomeSubtitle: "వేగంగా షాపింగ్ చేయండి. క్యూలను దాటవేయండి.",
    startShopping: "షాపింగ్ ప్రారంభించండి",
    howItWorks: "ఇది ఎలా పనిచేస్తుందో తెలుసుకోండి",
    howItWorksStep1: "1. వస్తువులను బుట్టలో వేసేటప్పుడు బార్‌కోడ్‌ను స్కాన్ చేయండి",
    howItWorksStep2: "2. డిజిటల్ కార్ట్‌ను సరిచూసుకోండి & ప్రత్యేక తగ్గింపులు పొందండి",
    howItWorksStep3: "3. UPI ద్వారా సులభంగా చెల్లించి, స్మార్ట్ గేట్ ద్వారా బయటకు వెళ్లండి",
    close: "మూసివేయి",
    
    // Login / Guest
    loginTitle: "త్వరిత చెక్అవుట్ లాగిన్",
    loginSubtitle: "మీరు ఎలా షాపింగ్ చేయాలనుకుంటున్నారో ఎంచుకోండి",
    continueMobile: "మొబైల్ నంబర్‌తో కొనసాగండి",
    continueGuest: "అతిథిగా కొనసాగండి (Guest)",
    phoneNumberLabel: "10 అంకెల మొబైల్ నంబర్",
    phoneNumberPlaceholder: "ఉదా. 98765 43210",
    sendOtp: "OTP పంపి స్టోర్‌లోకి ప్రవేశించండి",
    privacyNotice: "మీ చెల్లింపు మరియు వ్యక్తిగత వివరాలు 256-బిట్ బ్యాంక్ ఎన్‌క్రిప్షన్‌తో రక్షించబడ్డాయి.",
    
    // Home
    searchPlaceholder: "లేస్, పాలు, నూనె, కోక్ శోధించండి...",
    categories: "కేటగిరీలు",
    catAll: "అన్ని వస్తువులు",
    catSnacks: "స్నాక్స్",
    catBeverages: "పానీయాలు",
    catGroceries: "కిరాణా",
    catPersonalCare: "వ్యక్తిగత సంరక్షణ",
    catDairy: "డైరీ ఉత్పత్తులు",
    popularInStore: "ఈ రోజు స్టోర్‌లో ప్రముఖమైనవి",
    scanProductBtn: "వస్తువును స్కాన్ చేయండి",
    cartLabel: "కార్ట్",
    runningTotal: "మొత్తం:",
    quickAdd: "వెంటనే జోడించు",
    itemCount: "వస్తువులు",
    
    // Scanner
    scanPrompt: "బార్‌కోడ్ వైపు కెమెరాను చూపించండి",
    scannerHelper: "స్వయంచాలకంగా స్కాన్ చేయడానికి ఫ్రేమ్‌లో బార్‌కోడ్‌ను ఉంచండి",
    simulateScanBtn: "స్కాన్ అనుకరించండి (Simulate)",
    flashOn: "ఫ్లాష్ ఆన్",
    flashOff: "ఫ్లాష్ ఆఫ్",
    cancelScan: "రద్దు చేయి",
    simulateErrorBtn: "లోపం అనుకరించండి",
    productAddedSuccess: "వస్తువు విజయవంతంగా జోడించబడింది ✓",
    addAnother: "మరో వస్తువు స్కాన్ చేయండి",
    viewCart: "కార్ట్ చూడండి",
    barcodeDetected: "బార్‌కోడ్ గుర్తించబడింది:",
    
    // Product Modal
    addToCart: "కార్ట్‌కు జోడించు",
    quantity: "పరిమాణం",
    unitPrice: "ఒక్కో వస్తువు ధర",
    vegTag: "100% శాఖాహారం",
    
    // Cart
    cartTitle: "షాపింగ్ కార్ట్",
    emptyCartTitle: "మీ కార్ట్ ఖాళీగా ఉంది",
    emptyCartSub: "వస్తువులను జోడించడానికి బార్‌కోడ్ స్కాన్ చేయండి.",
    subtotal: "ఉపమొత్తం",
    taxGst: "జీఎస్టీ పన్నులు",
    discountCoupon: "సెల్ఫ్-చెక్అవుట్ తగ్గింపు",
    totalAmount: "చెల్లించాల్సిన మొత్తం",
    proceedToPayment: "చెల్లింపుకు వెళ్లండి",
    continueShopping: "మరింత షాపింగ్ చేయండి",
    removeItem: "తొలగించు",
    clearCart: "అన్నీ తొలగించు",
    
    // Security Check
    securityTitle: "సురక్షిత చెక్అవుట్",
    securitySubtitle: "నిజ-సమయ భద్రతా ధృవీకరణ జరుగుతోంది",
    secItem1: "స్మార్ట్ కార్ట్‌లోని వస్తువులు ధృవీకరించబడ్డాయి",
    secItem2: "స్టోర్ ఇన్వెంటరీ సమన్వయం చేయబడింది",
    secItem3: "సురక్షిత 256-బిట్ చెల్లింపు గేట్‌వే అనుసంధానించబడింది",
    securityBadge: "మీ చెక్అవుట్ సురక్షిత చెల్లింపు ధృవీకరణ ద్వారా రక్షించబడింది.",
    continueToPayment: "చెల్లింపుకు కొనసాగండి",
    
    // Payment
    paymentTitle: "చెల్లింపు విధానాన్ని ఎంచుకోండి",
    payableAmount: "చెల్లించాల్సిన మొత్తం",
    upiOption: "UPI (Google Pay, PhonePe, Paytm)",
    cardsOption: "క్రెడిట్ / డెబిట్ కార్డ్",
    walletOption: "డిజిటల్ వాలెట్లు & నెట్ బ్యాంకింగ్",
    enterUpiId: "UPI ID నమోదు చేయండి",
    upiIdPlaceholder: "ఉదా. mobile@upi",
    payWith: "చెల్లించండి",
    popularUpiApps: "లేదా ప్రముఖ UPI యాప్‌ను నొక్కండి:",
    cardNumber: "కార్డ్ నంబర్",
    cardExpiry: "నెల / సంవత్సరం",
    cardCvv: "CVV",
    cardHolder: "కార్డుదారుని పేరు",
    
    // Processing
    processingTitle: "చెల్లింపు ప్రాసెస్ అవుతోంది...",
    processingSub: "దయచేసి ఈ స్క్రీన్‌ను మూసివేయవద్దు లేదా రీఫ్రెష్ చేయవద్దు",
    procStep1: "NPCI UPI గేట్‌వేకు కనెక్ట్ అవుతోంది...",
    procStep2: "బ్యాంక్ అనుమతి అభ్యర్థిస్తోంది...",
    procStep3: "బ్యాంక్ ద్వారా చెల్లింపు ధృవీకరించబడింది!",
    
    // Success & Receipt
    paymentSuccessTitle: "చెల్లింపు విజయవంతమైంది ✓",
    paymentSuccessSub: "ధన్యవాదాలు! మీ లావాదేవీ పూర్తయింది.",
    transactionId: "లావాదేవీ ID",
    amountPaid: "చెల్లించిన మొత్తం",
    paymentTime: "సమయం",
    viewReceipt: "డిజిటల్ రసీదు చూడండి",
    sendReceipt: "రసీదు పంపండి",
    sendReceiptSms: "SMS ద్వారా పంపండి",
    sendReceiptWa: "WhatsApp ద్వారా పంపండి",
    sendReceiptEmail: "ఈమెయిల్ ద్వారా పంపండి",
    receiptSentNotice: "మీ మొబైల్ నంబర్‌కు రసీదు విజయవంతంగా పంపబడింది!",
    digitalReceiptTitle: "స్మార్ట్ చెక్అవుట్ పన్ను ఇన్వాయిస్",
    proceedToExit: "ఎగ్జిట్ గేట్ వద్దకు వెళ్లండి",
    
    // Exit Gate
    exitTitle: "మీరు బయలుదేరడానికి సిద్ధంగా ఉన్నారు!",
    exitSubtitle: "చెల్లింపు ధృవీకరించబడింది. మీ షాపింగ్ పూర్తయింది.",
    exitGateVerified: "ఎగ్జిట్ గేట్ ధృవీకరించబడింది ✓",
    scanPassPrompt: "స్మార్ట్ గేట్ స్కానర్ వద్ద ఈ QR పాస్‌ను చూపించండి:",
    tapAtGateBtn: "గేట్ వద్ద ట్యాప్ చేసి తెరవండి",
    gateStatusUnlocked: "స్మార్ట్ గేట్ తెరవబడింది",
    gateStatusLocked: "గేట్ స్కాన్ చేయడానికి సిద్ధంగా ఉంది",
    gateHelper: "మీరు బయటకు వెళ్ళిన 10 సెకన్ల తర్వాత గేట్ మూసివేయబడుతుంది.",
    finishShopping: "షాపింగ్ ముగించు",
    thankYouMessage: "స్మార్ట్ చెక్అవుట్‌తో షాపింగ్ చేసినందుకు ధన్యవాదాలు!",
    
    // Autonomous Vision Mode
    autonomousModeTitle: "కంప్యూటర్ విజన్ & RFID చెక్అవుట్-రహిత స్టోర్",
    autonomousSub: "కెమెరా గుర్తింపు + స్మార్ట్ బరువు సెన్సార్లు + RFID టెక్నాలజీ",
    smartShelfTitle: "ఇంటరాక్టివ్ సూపర్ మార్కెట్ స్మార్ట్ షెల్ఫ్",
    smartCartTitle: "లైవ్ స్మార్ట్ కార్ట్ (సెన్సార్లు యాక్టివ్)",
    shelfInstruction: "షెల్ఫ్ నుండి స్మార్ట్ కార్ట్‌లోకి తీసుకోవడానికి నొక్కండి:",
    shelfReturnInstruction: "తిరిగి షెల్ఫ్‌లో పెట్టడానికి నొక్కండి:",
    sensorEventLog: "లైవ్ సెన్సార్ సమాచారం:",
    aiDetected: "AI విజన్ గుర్తించింది",
    weightConfirmed: "బరువు సరిపోయింది",
    rfidScanned: "RFID చిప్ చదవబడింది",
    walkOutCheckout: "నేరుగా బయటకు నడవండి & ఆటో పేమెంట్",
    
    // Error Handling
    scanErrorTitle: "మేము ఈ ఉత్పత్తిని గుర్తించలేకపోయాము",
    scanErrorSub: "బార్‌కోడ్ పాడై ఉండవచ్చు లేదా డేటాబేస్‌లో లేకపోవచ్చు.",
    scanAgain: "మళ్లీ స్కాన్ చేయండి",
    enterBarcodeManually: "బార్‌కోడ్‌ను మాన్యువల్‌గా నమోదు చేయండి",
    getAssistance: "సహాయం పొందండి",
    manualBarcodeInputTitle: "బార్‌కోడ్ నంబర్ నమోదు చేయండి",
    manualBarcodePrompt: "బార్‌కోడ్ క్రింద ఉన్న 13 అంకెల కోడ్‌ను నమోదు చేయండి:",
    submitBarcode: "ఉత్పత్తిని శోధించండి",
    
    paymentErrorTitle: "చెల్లింపు పూర్తి కాలేదు",
    paymentErrorSub: "బ్యాంక్ సర్వర్ సమయం ముగిసింది లేదా అనుమతి నిరాకరించబడింది.",
    tryAgain: "మళ్లీ ప్రయత్నించండి",
    changePaymentMethod: "చెల్లింపు విధానాన్ని మార్చండి",
    
    // Store Assistance
    needHelp: "సహాయం కావాలా?",
    callStaff: "స్టోర్ అసిస్టెంట్‌ను పిలవండి",
    assistantRequestedTitle: "స్టోర్ అసిస్టెంట్ అభ్యర్థించబడింది ✓",
    assistantRequestedSub: "అసిస్టెంట్ రాజేష్ కె. (ఐల్ 3) మీ వద్దకు వస్తున్నారు.",
    assistantEta: "అంచనా సమయం: 2 నిమిషాలు",
    assistantDismiss: "సందేశం మూసివేయి",

    // Amazon Go Model
    amazonGoTab: "అమెజాన్ గో (జస్ట్ వాక్ అవుట్)",
    amazonGoEntryTitle: "అమెజాన్ గో ఎంట్రీ పాస్",
    amazonGoEntrySub: "స్టోర్‌లోకి ప్రవేశించడానికి గేట్ టర్న్‌స్టైల్ వద్ద ఈ QR కోడ్‌ను స్కాన్ చేయండి.",
    scanAtTurnstileBtn: "⚡ గేట్ టర్న్‌స్టైల్ స్కాన్ అనుకరించండి",
    turnstileUnlocked: "ఎంట్రీ గేట్ తెరవబడింది ✓",
    turnstileExplainer: "ఇది ఎలా పనిచేస్తుంది: స్కాన్ చేయడం ద్వారా మీ డిజిటల్ వాలెట్ పైకప్పు కెమెరాలకు అనుసంధానించబడుతుంది. ఇప్పుడు మీ ఫోన్‌ను జేబులో పెట్టుకుని సహజంగా షాపింగ్ చేయండి!",
    aiVisionModeTitle: "AI కంప్యూటర్ విజన్ & స్మార్ట్ షెల్ఫ్",
    aiVisionBadge: "అమెజాన్ గో కంప్యూటర్ విజన్ మోడ్",
    aiVisionExplainer: "పైకప్పు కెమెరాలు 3D కదలికలను ట్రాక్ చేస్తాయి, స్మార్ట్ షెల్ఫ్‌లు బరువు మార్పులను గుర్తిస్తాయి. వస్తువును తీసుకోగానే ఆటోమేటిక్‌గా కార్ట్‌కు జోడించబడుతుంది; తిరిగి పెడితే తొలగించబడుతుంది!",
    justWalkOutExitTitle: "జస్ట్ వాక్ అవుట్ ఎగ్జిట్ గేట్",
    justWalkOutExitSub: "క్యూలు లేవు, మాన్యువల్ స్కానింగ్ లేదు, క్యాషియర్ కౌంటర్లు లేవు. నేరుగా బయటకు నడవండి!",
    walkOutBtn: "స్మార్ట్ గేట్ ద్వారా బయటకు వెళ్లండి →",
    exitSensorsVerified: "సెన్సార్లు ఎగ్జిట్‌ను ధృవీకరించాయి. UPI ద్వారా ఆటో-డెబిట్ పూర్తయింది.",
    learnAmazonGoTitle: "అమెజాన్ గో టెక్నాలజీ ఎలా పనిచేస్తుంది"
  },
  
  hi: {
    // Brand
    brandName: "स्मार्ट चेकआउट",
    brandTagline: "तेज़ खरीदारी। कतार से छुटकारा।",
    storeName: "स्मार्ट सुपरमार्केट - हाईटेक सिटी",
    
    // Welcome
    welcomeTitle: "स्मार्ट चेकआउट में आपका स्वागत है",
    welcomeSubtitle: "तेज़ खरीदारी। कतार से छुटकारा।",
    startShopping: "खरीदारी शुरू करें",
    howItWorks: "यह कैसे काम करता है",
    howItWorksStep1: "1. टोकरी में सामान डालते समय बारकोड स्कैन करें",
    howItWorksStep2: "2. डिजिटल कार्ट की समीक्षा करें और छूट का आनंद लें",
    howItWorksStep3: "3. UPI से तुरंत भुगतान करें और स्मार्ट गेट से बाहर निकलें",
    close: "बंद करें",
    
    // Login / Guest
    loginTitle: "फास्ट चेकआउट लॉगिन",
    loginSubtitle: "चुनें कि आप आज कैसे खरीदारी करना चाहते हैं",
    continueMobile: "मोबाइल नंबर के साथ जारी रखें",
    continueGuest: "अतिथि (Guest) के रूप में जारी रखें",
    phoneNumberLabel: "10 अंकों का मोबाइल नंबर",
    phoneNumberPlaceholder: "उदा. 98765 43210",
    sendOtp: "OTP भेजें और स्टोर में प्रवेश करें",
    privacyNotice: "आपकी भुगतान और व्यक्तिगत जानकारी 256-बिट बैंक एन्क्रिप्शन द्वारा सुरक्षित है।",
    
    // Home
    searchPlaceholder: "लेज, दूध, तेल, कोक खोजें...",
    categories: "श्रेणियाँ",
    catAll: "सभी सामान",
    catSnacks: "स्नैक्स",
    catBeverages: "पेय पदार्थ",
    catGroceries: "किराना",
    catPersonalCare: "पर्सनल केयर",
    catDairy: "डेयरी उत्पाद",
    popularInStore: "आज स्टोर में लोकप्रिय",
    scanProductBtn: "उत्पाद स्कैन करें",
    cartLabel: "कार्ट",
    runningTotal: "कुल:",
    quickAdd: "तुरंत जोड़ें",
    itemCount: "सामान",
    
    // Scanner
    scanPrompt: "कैमरे को बारकोड की ओर करें",
    scannerHelper: "स्वचालित रूप से स्कैन करने के लिए बारकोड को फ्रेम में रखें",
    simulateScanBtn: "स्कैन का अनुकरण करें (Simulate)",
    flashOn: "फ्लैश ऑन",
    flashOff: "फ्लैश ऑफ",
    cancelScan: "रद्द करें",
    simulateErrorBtn: "स्कैन त्रुटि अनुकरण",
    productAddedSuccess: "उत्पाद सफलतापूर्वक जोड़ा गया ✓",
    addAnother: "एक और स्कैन करें",
    viewCart: "कार्ट देखें",
    barcodeDetected: "बारकोड मिला:",
    
    // Product Modal
    addToCart: "कार्ट में जोड़ें",
    quantity: "मात्रा",
    unitPrice: "प्रति इकाई मूल्य",
    vegTag: "100% शाकाहारी",
    
    // Cart
    cartTitle: "शॉपिंग कार्ट",
    emptyCartTitle: "आपकी कार्ट खाली है",
    emptyCartSub: "सामान जोड़ने के लिए बारकोड स्कैन करें या स्टोर से चुनें।",
    subtotal: "उप-योग",
    taxGst: "जीएसटी (कर)",
    discountCoupon: "सेल्फ-चेकआउट छूट",
    totalAmount: "कुल देय राशि",
    proceedToPayment: "भुगतान के लिए आगे बढ़ें",
    continueShopping: "खरीदारी जारी रखें",
    removeItem: "हटाएं",
    clearCart: "सभी हटाएं",
    
    // Security Check
    securityTitle: "सुरक्षित चेकआउट",
    securitySubtitle: "रीयल-टाइम सुरक्षा सत्यापन प्रगति पर है",
    secItem1: "स्मार्ट कार्ट में सामान और मात्रा सत्यापित की गई",
    secItem2: "स्टोर इन्वेंट्री सिंक और कुल गणना पूरी हुई",
    secItem3: "सुरक्षित 256-बिट पेमेंट गेटवे से जुड़ा",
    securityBadge: "आपका चेकआउट सुरक्षित भुगतान सत्यापन द्वारा संरक्षित है।",
    continueToPayment: "भुगतान के लिए जारी रखें",
    
    // Payment
    paymentTitle: "भुगतान विधि चुनें",
    payableAmount: "देय राशि",
    upiOption: "UPI (Google Pay, PhonePe, Paytm)",
    cardsOption: "क्रेडिट / डेबिट कार्ड",
    walletOption: "डिजिटल वॉलेट और नेट बैंकिंग",
    enterUpiId: "UPI ID दर्ज करें",
    upiIdPlaceholder: "उदा. mobile@upi या user@okaxis",
    payWith: "भुगतान करें",
    popularUpiApps: "या अपना पसंदीदा UPI ऐप चुनें:",
    cardNumber: "कार्ड नंबर",
    cardExpiry: "माह / वर्ष",
    cardCvv: "CVV",
    cardHolder: "कार्डधारक का नाम",
    
    // Processing
    processingTitle: "भुगतान संसाधित हो रहा है...",
    processingSub: "कृपया इस स्क्रीन को बंद या रीफ्रेश न करें",
    procStep1: "NPCI UPI गेटवे से जुड़ रहे हैं...",
    procStep2: "बैंक से अनुमति का अनुरोध किया जा रहा है...",
    procStep3: "बैंक द्वारा भुगतान की पुष्टि हुई!",
    
    // Success & Receipt
    paymentSuccessTitle: "भुगतान सफल रहा ✓",
    paymentSuccessSub: "धन्यवाद! आपका लेनदेन पूरा हो गया है।",
    transactionId: "लेनदेन ID",
    amountPaid: "भुगतान की गई राशि",
    paymentTime: "समय",
    viewReceipt: "डिजिटल रसीद देखें",
    sendReceipt: "रसीद भेजें",
    sendReceiptSms: "SMS द्वारा भेजें",
    sendReceiptWa: "WhatsApp द्वारा भेजें",
    sendReceiptEmail: "ईमेल द्वारा भेजें",
    receiptSentNotice: "रसीद आपके पंजीकृत मोबाइल पर सफलतापूर्वक भेजी गई!",
    digitalReceiptTitle: "स्मार्ट चेकआउट टैक्स इनवॉइस",
    proceedToExit: "एग्जिट गेट की ओर बढ़ें",
    
    // Exit Gate
    exitTitle: "आप जाने के लिए तैयार हैं!",
    exitSubtitle: "भुगतान सत्यापित। आपकी खरीदारी पूरी हुई।",
    exitGateVerified: "एग्जिट गेट सत्यापित ✓",
    scanPassPrompt: "स्मार्ट गेट रीडर पर यह QR पास दिखाएं:",
    tapAtGateBtn: "गेट पर टैप करें और खोलें",
    gateStatusUnlocked: "स्मार्ट गेट अनलॉक हो गया",
    gateStatusLocked: "गेट स्कैन के लिए तैयार",
    gateHelper: "आपके बाहर निकलने के 10 सेकंड बाद गेट स्वतः बंद हो जाएगा।",
    finishShopping: "खरीदारी पूरी करें",
    thankYouMessage: "स्मार्ट चेकआउट के साथ खरीदारी करने के लिए धन्यवाद!",
    
    // Autonomous Vision Mode
    autonomousModeTitle: "कंप्यूटर विज़न और RFID चेकआउट-मुक्त स्टोर",
    autonomousSub: "AI विज़न + स्मार्ट वजन सेंसर + RFID तकनीक",
    smartShelfTitle: "इंटरएक्टिव सुपरमार्केट स्मार्ट शेल्फ",
    smartCartTitle: "लाइव स्मार्ट कार्ट (सेंसर सक्रिय)",
    shelfInstruction: "शेल्फ से सामान स्मार्ट कार्ट में डालने के लिए टैप करें:",
    shelfReturnInstruction: "वापस शेल्फ पर रखने के लिए टैप करें:",
    sensorEventLog: "लाइव सेंसर डेटा:",
    aiDetected: "AI विज़न द्वारा पहचाना गया",
    weightConfirmed: "वजन सटीक रूप से मेल खाता है",
    rfidScanned: "RFID चिप पढ़ी गई",
    walkOutCheckout: "सीधे बाहर निकलें और स्वतः भुगतान",
    
    // Error Handling
    scanErrorTitle: "हम इस उत्पाद को पहचान नहीं सके",
    scanErrorSub: "बारकोड क्षतिग्रस्त हो सकता है या डेटाबेस में नहीं है।",
    scanAgain: "दोबारा स्कैन करें",
    enterBarcodeManually: "बारकोड मैन्युअल रूप से दर्ज करें",
    getAssistance: "सहायता प्राप्त करें",
    manualBarcodeInputTitle: "बारकोड नंबर दर्ज करें",
    manualBarcodePrompt: "बारकोड के नीचे छपे 13 अंकों का कोड दर्ज करें:",
    submitBarcode: "उत्पाद खोजें",
    
    paymentErrorTitle: "भुगतान पूरा नहीं हो सका",
    paymentErrorSub: "बैंक सर्वर का समय समाप्त हो गया या अनुरोध अस्वीकार कर दिया गया।",
    tryAgain: "पुनः प्रयास करें",
    changePaymentMethod: "भुगतान विधि बदलें",
    
    // Store Assistance
    needHelp: "मदद चाहिए?",
    callStaff: "स्टोर सहायक को बुलाएं",
    assistantRequestedTitle: "स्टोर सहायक का अनुरोध प्राप्त हुआ ✓",
    assistantRequestedSub: "सहायक राजेश के. (आइल 3) आपकी सहायता के लिए आ रहे हैं।",
    assistantEta: "अनुमानित आगमन: 2 मिनट",
    assistantDismiss: "सूचना बंद करें",

    // Amazon Go Model
    amazonGoTab: "अमेज़ॅन गो (जस्ट वॉक आउट)",
    amazonGoEntryTitle: "अमेज़ॅन गो स्टोर एंट्री पास",
    amazonGoEntrySub: "स्टोर में प्रवेश करने के लिए गेट टर्नस्टाइल पर यह QR कोड स्कैन करें।",
    scanAtTurnstileBtn: "⚡ गेट टर्नस्टाइल स्कैन अनुकरण करें",
    turnstileUnlocked: "एंट्री गेट अनलॉक हुआ ✓",
    turnstileExplainer: "यह कैसे काम करता है: स्कैन करने से आपका डिजिटल वॉलेट छत पर लगे 4K कैमरों से जुड़ जाता है। अब फोन जेब में रखें और बेझिझक सामान चुनें!",
    aiVisionModeTitle: "AI कंप्यूटर विज़न और स्मार्ट शेल्फ",
    aiVisionBadge: "अमेज़ॅन गो कंप्यूटर विज़न मोड",
    aiVisionExplainer: "छत पर लगे कैमरे 3D गतिविधियों को ट्रैक करते हैं, और स्मार्ट शेल्फ़ वजन में बदलाव महसूस करते हैं। सामान उठाते ही कार्ट में जुड़ जाता है; वापस रखने पर हट जाता है!",
    justWalkOutExitTitle: "जस्ट वॉक आउट एग्जिट गेट",
    justWalkOutExitSub: "कोई कतार नहीं, कोई मैन्युअल स्कैनिंग नहीं, कोई कैशियर नहीं। सीधे बाहर निकलें!",
    walkOutBtn: "स्मार्ट गेट से बाहर निकलें →",
    exitSensorsVerified: "सेंसरों ने निकास की पुष्टि की। UPI से स्वतः भुगतान पूरा हुआ।",
    learnAmazonGoTitle: "अमेज़ॅन गो तकनीक कैसे काम करती है"
  }
};

// Current active language (default: English)
let currentLanguage = 'en';

function setLanguage(lang) {
  if (TRANSLATIONS[lang]) {
    currentLanguage = lang;
    document.documentElement.lang = lang;
    updateAllTranslations();
    return true;
  }
  return false;
}

function t(key) {
  const dict = TRANSLATIONS[currentLanguage] || TRANSLATIONS.en;
  return dict[key] || TRANSLATIONS.en[key] || key;
}

function updateAllTranslations() {
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (key) {
      el.textContent = t(key);
    }
  });

  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    if (key) {
      el.setAttribute('placeholder', t(key));
    }
  });

  // Re-render active screen text where dynamic
  if (window.App && typeof window.App.onLanguageChange === 'function') {
    window.App.onLanguageChange();
  }
}
