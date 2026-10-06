// Central State Management for SmartCheckout Prototype
class Store {
  constructor() {
    this.cart = [
      // Preload 1 Lay's chips to give instant realistic state, but easily removable
      { product: getProductById('lays_classic'), quantity: 1 }
    ];
    this.currentScreen = 'welcome';
    this.screenHistory = [];
    this.selectedCategory = 'all';
    this.searchQuery = '';
    
    this.selectedProduct = null;
    this.modalQuantity = 1;
    
    this.user = {
      isLoggedIn: false,
      mode: 'guest',
      phone: ''
    };

    this.payment = {
      method: 'upi',
      upiApp: 'gpay',
      customUpiId: '',
      cardNumber: '',
      cardExpiry: '',
      cardCvv: '',
      cardHolder: '',
      walletName: 'paytm',
      txId: 'SCX2026' + Math.floor(1000 + Math.random() * 9000),
      amountPaid: 0,
      timestamp: null
    };

    this.autonomousStore = {
      shelf: [
        { product: getProductById('lays_classic'), count: 5 },
        { product: getProductById('coca_cola_500'), count: 4 },
        { product: getProductById('amul_butter'), count: 6 },
        { product: getProductById('tata_salt'), count: 8 },
        { product: getProductById('cadbury_dairy_milk'), count: 5 },
        { product: getProductById('dettol_original_soap'), count: 7 }
      ],
      smartCart: [],
      logs: [
        { time: '13:50:12', type: 'SYS', text: 'Overhead Computer Vision calibrated (120 FPS, 4K RGB-D)' },
        { time: '13:50:12', type: 'SYS', text: 'Smart Cart strain-gauge load cells tared to 0.00 kg' },
        { time: '13:50:13', type: 'SYS', text: 'UHF RFID shelf antennas active in Aisle 1 - 4' }
      ]
    };

    this.assistant = {
      requested: false,
      name: 'Rajesh Kumar',
      aisle: 'Aisle 3 (Floor Captain)',
      etaSeconds: 120,
      intervalId: null
    };

    this.demoMode = {
      running: false,
      stepIndex: 0,
      timeoutId: null
    };

    // Amazon Go "Just Walk Out" Specific State
    this.amazonGo = {
      entryScanned: false,
      entryTime: null,
      activeTrackedItem: getProductById('lays_classic'),
      sensorLogs: [
        { time: '14:38:01', source: 'Overhead 4K RGB-D', text: 'Customer #402 entered Aisle 1 (Skeleton tracking active)' },
        { time: '14:38:02', source: 'Smart Shelf A2', text: 'Load cell baseline calibrated (0.00g tare)' },
        { time: '14:38:03', source: 'Sensor Fusion', text: 'Identity token bound to Customer #402' }
      ]
    };
  }

  // Amazon Go Actions
  simulateAmazonGoEntry() {
    this.amazonGo.entryScanned = true;
    this.amazonGo.entryTime = new Date().toLocaleTimeString('en-IN');
    this.amazonGo.sensorLogs.unshift({
      time: new Date().toTimeString().slice(0, 8),
      source: 'Entrance Gate',
      text: 'Entry Turnstile #02 Scanned & Unlocked. Customer session started.'
    });
  }

  // Cart operations
  addToCart(product, quantity = 1) {
    if (!product) return;
    const existing = this.cart.find(item => item.product.id === product.id);
    if (existing) {
      existing.quantity += quantity;
    } else {
      this.cart.push({ product, quantity });
    }
    this.saveState();
  }

  updateQuantity(productId, delta) {
    const item = this.cart.find(i => i.product.id === productId);
    if (item) {
      item.quantity += delta;
      if (item.quantity <= 0) {
        this.removeFromCart(productId);
      }
    }
    this.saveState();
  }

  removeFromCart(productId) {
    this.cart = this.cart.filter(i => i.product.id !== productId);
    this.saveState();
  }

  clearCart() {
    this.cart = [];
    this.saveState();
  }

  getCartCount() {
    return this.cart.reduce((sum, item) => sum + item.quantity, 0);
  }

  getSubtotal() {
    return this.cart.reduce((sum, item) => sum + (item.product.price * item.quantity), 0);
  }

  getDiscount() {
    const subtotal = this.getSubtotal();
    // ₹10 instant SmartCheckout self-scan incentive for orders >= ₹50
    return subtotal >= 50 ? 10 : 0;
  }

  getGstTax() {
    const subtotal = this.getSubtotal();
    // 5% standard GST
    return Math.round(subtotal * 0.05);
  }

  getFinalTotal() {
    const subtotal = this.getSubtotal();
    if (subtotal === 0) return 0;
    const discount = this.getDiscount();
    const gst = this.getGstTax();
    return Math.max(0, subtotal - discount + gst);
  }

  // Autonomous Store actions
  pickItemFromShelf(productId) {
    const shelfItem = this.autonomousStore.shelf.find(s => s.product.id === productId);
    if (!shelfItem || shelfItem.count <= 0) return null;

    shelfItem.count--;
    const product = shelfItem.product;

    const existingInCart = this.autonomousStore.smartCart.find(i => i.product.id === productId);
    if (existingInCart) {
      existingInCart.quantity++;
    } else {
      this.autonomousStore.smartCart.push({ product, quantity: 1 });
    }

    const now = new Date().toTimeString().slice(0, 8);
    const confidence = (98.5 + Math.random() * 1.3).toFixed(1);
    this.autonomousStore.logs.unshift({
      time: now,
      type: 'DETECTION',
      text: `Vision & Weight Match: ${product.name} (+${product.weightGrams}g, ${confidence}% conf)`
    });

    return product;
  }

  returnItemToShelf(productId) {
    const cartItem = this.autonomousStore.smartCart.find(i => i.product.id === productId);
    if (!cartItem) return null;

    cartItem.quantity--;
    if (cartItem.quantity <= 0) {
      this.autonomousStore.smartCart = this.autonomousStore.smartCart.filter(i => i.product.id !== productId);
    }

    const shelfItem = this.autonomousStore.shelf.find(s => s.product.id === productId);
    if (shelfItem) {
      shelfItem.count++;
    }

    const now = new Date().toTimeString().slice(0, 8);
    this.autonomousStore.logs.unshift({
      time: now,
      type: 'RETURN',
      text: `Item Returned: ${shelfItem.product.name} (-${shelfItem.product.weightGrams}g tared)`
    });

    return shelfItem.product;
  }

  getAutonomousTotal() {
    return this.autonomousStore.smartCart.reduce((sum, item) => sum + (item.product.price * item.quantity), 0);
  }

  // Request assistant
  requestAssistant() {
    this.assistant.requested = true;
    this.assistant.etaSeconds = 120;
    if (this.assistant.intervalId) clearInterval(this.assistant.intervalId);

    this.assistant.intervalId = setInterval(() => {
      if (this.assistant.etaSeconds > 0) {
        this.assistant.etaSeconds -= 1;
        if (window.App) window.App.updateAssistantBadge();
      } else {
        clearInterval(this.assistant.intervalId);
      }
    }, 1000);
  }

  dismissAssistant() {
    this.assistant.requested = false;
    if (this.assistant.intervalId) clearInterval(this.assistant.intervalId);
  }

  saveState() {
    // Session state
    try {
      sessionStorage.setItem('smartcheckout_cart', JSON.stringify(this.cart));
    } catch (e) {}
  }
}

const store = new Store();
