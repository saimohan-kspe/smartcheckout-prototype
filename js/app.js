// Main Application Controller for SmartCheckout Prototype
class AppController {
  constructor() {
    this.currentScreen = 'welcome';
    this.flashActive = false;
    this.demoInterval = null;
  }

  init() {
    this.bindEvents();
    this.renderCatalog();
    this.updateCartBadges();
    this.renderAutonomousShelf();
    this.renderAutonomousCart();
    this.navigateTo('welcome', false);
  }

  // Navigation Orchestrator
  navigateTo(screenId, pushHistory = true) {
    if (pushHistory && this.currentScreen && this.currentScreen !== screenId) {
      store.screenHistory.push(this.currentScreen);
    }
    
    // Hide all screens
    document.querySelectorAll('.app-screen').forEach(s => {
      s.classList.remove('active');
    });

    // Show target screen
    const target = document.getElementById(`screen-${screenId}`);
    if (target) {
      target.classList.add('active');
      this.currentScreen = screenId;
      store.currentScreen = screenId;
      
      // Scroll to top of app view
      const appBody = document.querySelector('.screen-container');
      if (appBody) appBody.scrollTop = 0;

      // Update screen-specific states
      this.onScreenEnter(screenId);
      this.updatePresenterStatus(screenId);
      sounds.playTap();
    }
  }

  goBack() {
    if (store.screenHistory.length > 0) {
      const prev = store.screenHistory.pop();
      this.navigateTo(prev, false);
    } else {
      this.navigateTo('home', false);
    }
  }

  onScreenEnter(screenId) {
    if (screenId === 'home') {
      this.renderCatalog();
      this.updateCartBadges();
    } else if (screenId === 'cart') {
      this.renderCartScreen();
    } else if (screenId === 'scan') {
      this.resetScannerView();
    } else if (screenId === 'security') {
      this.startSecurityAnimation();
    } else if (screenId === 'payment') {
      this.renderPaymentScreen();
    } else if (screenId === 'processing') {
      this.startProcessingSimulation();
    } else if (screenId === 'success') {
      this.renderSuccessScreen();
    } else if (screenId === 'receipt') {
      this.renderReceiptScreen();
    } else if (screenId === 'exit_gate') {
      this.renderExitGateScreen();
    } else if (screenId === 'autonomous') {
      this.renderAutonomousShelf();
      this.renderAutonomousCart();
    } else if (screenId === 'amazon_go_entry') {
      this.renderAmazonGoEntry();
    } else if (screenId === 'amazon_go_exit') {
      this.renderAmazonGoExit();
    }
  }

  // Render Product Catalog in Home Screen
  renderCatalog() {
    const grid = document.getElementById('product-grid');
    if (!grid) return;

    let items = PRODUCTS_DATA;
    if (store.selectedCategory !== 'all') {
      items = items.filter(p => p.category === store.selectedCategory);
    }

    if (store.searchQuery.trim()) {
      const q = store.searchQuery.toLowerCase();
      items = items.filter(p => 
        p.name.toLowerCase().includes(q) || 
        (p.nameTe && p.nameTe.toLowerCase().includes(q)) ||
        (p.nameHi && p.nameHi.toLowerCase().includes(q)) ||
        p.categoryName.toLowerCase().includes(q)
      );
    }

    if (items.length === 0) {
      grid.innerHTML = `
        <div class="empty-catalog-state">
          <div class="empty-icon">🔍</div>
          <p>No products found matching "<strong>${this.escapeHtml(store.searchQuery)}</strong>"</p>
          <button class="btn btn-secondary btn-sm" onclick="App.clearSearch()">Clear Search</button>
        </div>
      `;
      return;
    }

    grid.innerHTML = items.map(p => {
      const name = currentLanguage === 'te' ? (p.nameTe || p.name) : (currentLanguage === 'hi' ? (p.nameHi || p.name) : p.name);
      return `
        <div class="product-card" onclick="App.openProductModal('${p.id}')">
          <div class="product-card-top">
            <span class="veg-badge" title="Vegetarian">🟢</span>
            ${p.tags && p.tags[0] ? `<span class="product-tag">${p.tags[0]}</span>` : ''}
          </div>
          <div class="product-card-visual" style="background: ${p.color}15;">
            <div class="product-icon-holder" style="color: ${p.color};">
              ${this.getProductIconSvg(p.icon)}
            </div>
          </div>
          <div class="product-card-body">
            <h4 class="product-title">${name}</h4>
            <div class="product-meta">
              <span class="product-weight">${p.weight}</span>
              <span class="product-rating">★ ${p.rating}</span>
            </div>
            <div class="product-price-row">
              <div class="price-wrap">
                <span class="currency">₹</span>
                <span class="price-value">${p.price}</span>
                ${p.mrp > p.price ? `<span class="mrp-value">₹${p.mrp}</span>` : ''}
              </div>
              <button class="btn-quick-add" onclick="event.stopPropagation(); App.quickAddToCart('${p.id}')" title="Quick Add">
                +
              </button>
            </div>
          </div>
        </div>
      `;
    }).join('');
  }

  getProductIconSvg(icon) {
    switch (icon) {
      case 'chips':
        return `<svg viewBox="0 0 24 24" width="48" height="48" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="4" y="3" width="16" height="18" rx="3"/><path d="M4 8h16M4 16h16"/><circle cx="12" cy="12" r="2"/></svg>`;
      case 'bottle':
        return `<svg viewBox="0 0 24 24" width="48" height="48" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M10 2h4v3h-4zM9 5h6l2 4v11a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2V9l2-4z"/><line x1="8" y1="12" x2="16" y2="12"/></svg>`;
      case 'milk':
        return `<svg viewBox="0 0 24 24" width="48" height="48" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M8 2h8v3l2 4v11a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V9l2-4V2z"/><path d="M12 11c-2 0-3 1-3 2v4c0 1 1 2 3 2s3-1 3-2v-4c0-1-1-2-3-2z"/></svg>`;
      case 'chocolate':
        return `<svg viewBox="0 0 24 24" width="48" height="48" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="4" y="4" width="16" height="16" rx="2"/><line x1="4" y1="9.3" x2="20" y2="9.3"/><line x1="4" y1="14.6" x2="20" y2="14.6"/><line x1="9.3" y1="4" x2="9.3" y2="20"/><line x1="14.6" y1="4" x2="14.6" y2="20"/></svg>`;
      case 'butter':
      case 'paneer':
        return `<svg viewBox="0 0 24 24" width="48" height="48" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M3 13l9-7 9 7v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-6z"/><line x1="3" y1="13" x2="21" y2="13"/></svg>`;
      case 'soap':
        return `<svg viewBox="0 0 24 24" width="48" height="48" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="3" y="6" width="18" height="12" rx="6"/><circle cx="8" cy="12" r="1.5"/><circle cx="16" cy="12" r="1.5"/></svg>`;
      default:
        return `<svg viewBox="0 0 24 24" width="48" height="48" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="3" y="3" width="18" height="18" rx="3"/><path d="M3 9h18M9 21V9"/></svg>`;
    }
  }

  // Quick Add
  quickAddToCart(productId) {
    const product = getProductById(productId);
    if (!product) return;
    store.addToCart(product, 1);
    sounds.playBeep();
    this.updateCartBadges();
    this.showToast(`+ Added ${product.name}`);
    sounds.speak(`Added ${product.name}`);
  }

  // Open Product Modal
  openProductModal(productId) {
    const product = getProductById(productId);
    if (!product) return;

    store.selectedProduct = product;
    store.modalQuantity = 1;

    const modal = document.getElementById('product-modal');
    const nameEl = document.getElementById('modal-product-name');
    const priceEl = document.getElementById('modal-product-price');
    const descEl = document.getElementById('modal-product-desc');
    const weightEl = document.getElementById('modal-product-weight');
    const qtyEl = document.getElementById('modal-qty-val');
    const iconHolder = document.getElementById('modal-icon-holder');

    const name = currentLanguage === 'te' ? (product.nameTe || product.name) : (currentLanguage === 'hi' ? (product.nameHi || product.name) : product.name);

    if (nameEl) nameEl.textContent = name;
    if (priceEl) priceEl.textContent = `₹${product.price}`;
    if (descEl) descEl.textContent = product.description;
    if (weightEl) weightEl.textContent = `${product.weight} • ${product.shelfLocation}`;
    if (qtyEl) qtyEl.textContent = store.modalQuantity;
    if (iconHolder) {
      iconHolder.style.color = product.color;
      iconHolder.innerHTML = this.getProductIconSvg(product.icon);
    }

    if (modal) modal.classList.add('open');
  }

  closeProductModal() {
    const modal = document.getElementById('product-modal');
    if (modal) modal.classList.remove('open');
  }

  updateModalQty(delta) {
    store.modalQuantity = Math.max(1, store.modalQuantity + delta);
    const qtyEl = document.getElementById('modal-qty-val');
    if (qtyEl) qtyEl.textContent = store.modalQuantity;

    if (store.selectedProduct) {
      const priceEl = document.getElementById('modal-product-price');
      if (priceEl) priceEl.textContent = `₹${store.selectedProduct.price * store.modalQuantity}`;
    }
  }

  confirmModalAddToCart() {
    if (store.selectedProduct) {
      store.addToCart(store.selectedProduct, store.modalQuantity);
      sounds.playBeep();
      this.closeProductModal();
      this.updateCartBadges();
      this.showToast(`+ Added ${store.modalQuantity}x ${store.selectedProduct.name}`);
    }
  }

  // Cart Management
  renderCartScreen() {
    const listEl = document.getElementById('cart-items-list');
    const subtotalEl = document.getElementById('cart-subtotal');
    const discountEl = document.getElementById('cart-discount');
    const taxEl = document.getElementById('cart-tax');
    const totalEl = document.getElementById('cart-total');
    const payBtnTotal = document.getElementById('pay-btn-total');
    const emptyState = document.getElementById('cart-empty-state');
    const contentWrap = document.getElementById('cart-content-wrap');

    if (!listEl) return;

    if (store.cart.length === 0) {
      if (emptyState) emptyState.style.display = 'flex';
      if (contentWrap) contentWrap.style.display = 'none';
      return;
    }

    if (emptyState) emptyState.style.display = 'none';
    if (contentWrap) contentWrap.style.display = 'block';

    listEl.innerHTML = store.cart.map(item => {
      const p = item.product;
      const name = currentLanguage === 'te' ? (p.nameTe || p.name) : (currentLanguage === 'hi' ? (p.nameHi || p.name) : p.name);
      return `
        <div class="cart-item-card">
          <div class="cart-item-icon" style="background: ${p.color}15; color: ${p.color};">
            ${this.getProductIconSvg(p.icon)}
          </div>
          <div class="cart-item-details">
            <h5 class="cart-item-title">${name}</h5>
            <div class="cart-item-unit">₹${p.price} / unit • ${p.weight}</div>
            <div class="cart-item-controls">
              <div class="quantity-stepper">
                <button class="step-btn" onclick="App.modifyCartQty('${p.id}', -1)">−</button>
                <span class="step-count">${item.quantity}</span>
                <button class="step-btn" onclick="App.modifyCartQty('${p.id}', 1)">+</button>
              </div>
              <div class="cart-item-total">
                ₹${p.price * item.quantity}
              </div>
            </div>
          </div>
          <button class="cart-remove-btn" onclick="App.removeCartItem('${p.id}')" title="Remove">
            ✕
          </button>
        </div>
      `;
    }).join('');

    const subtotal = store.getSubtotal();
    const discount = store.getDiscount();
    const tax = store.getGstTax();
    const finalTotal = store.getFinalTotal();

    if (subtotalEl) subtotalEl.textContent = `₹${subtotal}`;
    if (discountEl) discountEl.textContent = `- ₹${discount}`;
    if (taxEl) taxEl.textContent = `₹${tax}`;
    if (totalEl) totalEl.textContent = `₹${finalTotal}`;
    if (payBtnTotal) payBtnTotal.textContent = `₹${finalTotal}`;
  }

  modifyCartQty(productId, delta) {
    store.updateQuantity(productId, delta);
    sounds.playTap();
    this.renderCartScreen();
    this.updateCartBadges();
  }

  removeCartItem(productId) {
    store.removeFromCart(productId);
    sounds.playTap();
    this.renderCartScreen();
    this.updateCartBadges();
    this.showToast('Item removed from cart');
  }

  clearEntireCart() {
    store.clearCart();
    this.renderCartScreen();
    this.updateCartBadges();
    this.showToast('Cart cleared');
  }

  updateCartBadges() {
    const count = store.getCartCount();
    const total = store.getFinalTotal();

    document.querySelectorAll('.cart-badge-count').forEach(el => {
      el.textContent = count;
      el.style.display = count > 0 ? 'inline-flex' : 'none';
    });

    document.querySelectorAll('.live-running-total').forEach(el => {
      el.textContent = `₹${total}`;
    });
  }

  // Scanner Simulator
  resetScannerView() {
    const scanResult = document.getElementById('scan-success-sheet');
    if (scanResult) scanResult.classList.remove('open');
    this.flashActive = false;
    const flashEl = document.getElementById('camera-flash-overlay');
    if (flashEl) flashEl.classList.remove('active');
  }

  toggleCameraFlash() {
    this.flashActive = !this.flashActive;
    const flashEl = document.getElementById('camera-flash-overlay');
    const flashBtn = document.getElementById('btn-flash-toggle');
    if (flashEl) flashEl.classList.toggle('active', this.flashActive);
    if (flashBtn) {
      flashBtn.textContent = this.flashActive ? t('flashOff') : t('flashOn');
      flashBtn.classList.toggle('btn-active', this.flashActive);
    }
    sounds.playTap();
  }

  // Simulate scanning a specific item or cycling
  simulateBarcodeScan(forcedProductId = null) {
    const product = forcedProductId 
      ? getProductById(forcedProductId) 
      : PRODUCTS_DATA[Math.floor(Math.random() * PRODUCTS_DATA.length)];

    if (!product) return;

    // Laser visual feedback
    const laser = document.querySelector('.scanner-laser-line');
    if (laser) {
      laser.style.background = '#10B981';
      laser.style.boxShadow = '0 0 15px #10B981';
      setTimeout(() => {
        if (laser) {
          laser.style.background = '';
          laser.style.boxShadow = '';
        }
      }, 500);
    }

    sounds.playBeep();
    sounds.speak(`Scanned ${product.name}. Twenty rupees.`);

    // Add to cart automatically
    store.addToCart(product, 1);
    this.updateCartBadges();

    // Populate and open scan success sheet
    const sheet = document.getElementById('scan-success-sheet');
    const nameEl = document.getElementById('scanned-product-name');
    const priceEl = document.getElementById('scanned-product-price');
    const barcodeEl = document.getElementById('scanned-barcode-value');
    const iconEl = document.getElementById('scanned-icon-holder');

    const name = currentLanguage === 'te' ? (product.nameTe || product.name) : (currentLanguage === 'hi' ? (product.nameHi || product.name) : product.name);

    if (nameEl) nameEl.textContent = name;
    if (priceEl) priceEl.textContent = `₹${product.price}`;
    if (barcodeEl) barcodeEl.textContent = product.barcode;
    if (iconEl) {
      iconEl.style.color = product.color;
      iconEl.innerHTML = this.getProductIconSvg(product.icon);
    }

    if (sheet) sheet.classList.add('open');
  }

  triggerScanError() {
    sounds.playError();
    this.navigateTo('scan_error');
  }

  // Security Check Animation
  startSecurityAnimation() {
    const steps = [
      document.getElementById('sec-step-1'),
      document.getElementById('sec-step-2'),
      document.getElementById('sec-step-3')
    ];
    const proceedBtn = document.getElementById('sec-proceed-btn');
    if (proceedBtn) proceedBtn.disabled = true;

    steps.forEach(s => s && s.classList.remove('checked'));

    setTimeout(() => {
      if (steps[0]) steps[0].classList.add('checked');
      sounds.playTap();
    }, 400);

    setTimeout(() => {
      if (steps[1]) steps[1].classList.add('checked');
      sounds.playTap();
    }, 900);

    setTimeout(() => {
      if (steps[2]) steps[2].classList.add('checked');
      sounds.playSuccess();
      if (proceedBtn) {
        proceedBtn.disabled = false;
        proceedBtn.classList.add('pulse');
      }
    }, 1400);
  }

  // Payment Screen
  renderPaymentScreen() {
    const amount = store.getFinalTotal();
    store.payment.amountPaid = amount;

    const amountEls = document.querySelectorAll('.payment-final-amount');
    amountEls.forEach(el => el.textContent = `₹${amount}`);

    this.selectPaymentTab(store.payment.method || 'upi');
  }

  selectPaymentTab(tabName) {
    store.payment.method = tabName;

    document.querySelectorAll('.pay-method-tab').forEach(btn => {
      btn.classList.toggle('active', btn.getAttribute('data-tab') === tabName);
    });

    document.querySelectorAll('.payment-subview').forEach(view => {
      view.classList.toggle('active', view.getAttribute('data-view') === tabName);
    });

    sounds.playTap();
  }

  selectUpiApp(appName) {
    store.payment.upiApp = appName;
    document.querySelectorAll('.upi-app-card').forEach(card => {
      card.classList.toggle('active', card.getAttribute('data-app') === appName);
    });
    sounds.playTap();
  }

  executePayment() {
    sounds.playTap();
    this.navigateTo('processing');
  }

  // Processing Animation
  startProcessingSimulation() {
    const stepEls = [
      document.getElementById('proc-status-1'),
      document.getElementById('proc-status-2'),
      document.getElementById('proc-status-3')
    ];

    if (stepEls[0]) stepEls[0].textContent = t('procStep1');

    setTimeout(() => {
      if (stepEls[0]) stepEls[0].textContent = t('procStep2');
    }, 1000);

    setTimeout(() => {
      if (stepEls[0]) stepEls[0].textContent = t('procStep3');
      store.payment.txId = 'SCX2026' + Math.floor(100000 + Math.random() * 900000);
      store.payment.timestamp = new Date().toLocaleString('en-IN');
      sounds.playSuccess();
      sounds.speak(`Payment successful. Amount paid ₹${store.payment.amountPaid}`);
      this.navigateTo('success');
    }, 2200);
  }

  // Payment Success Screen
  renderSuccessScreen() {
    const txEl = document.getElementById('success-tx-id');
    const amtEl = document.getElementById('success-amount');
    const timeEl = document.getElementById('success-timestamp');

    if (txEl) txEl.textContent = store.payment.txId;
    if (amtEl) amtEl.textContent = `₹${store.payment.amountPaid}`;
    if (timeEl) timeEl.textContent = store.payment.timestamp || new Date().toLocaleString('en-IN');
  }

  // Digital Receipt
  renderReceiptScreen() {
    const listEl = document.getElementById('receipt-items-table');
    const txEl = document.getElementById('receipt-tx-id');
    const dateEl = document.getElementById('receipt-date');
    const methodEl = document.getElementById('receipt-pay-method');
    const subtotalEl = document.getElementById('receipt-subtotal');
    const discountEl = document.getElementById('receipt-discount');
    const taxEl = document.getElementById('receipt-tax');
    const grandTotalEl = document.getElementById('receipt-grand-total');

    if (txEl) txEl.textContent = store.payment.txId;
    if (dateEl) dateEl.textContent = store.payment.timestamp || new Date().toLocaleString('en-IN');
    if (methodEl) methodEl.textContent = store.payment.method.toUpperCase();

    if (listEl) {
      listEl.innerHTML = store.cart.map(item => `
        <div class="receipt-row">
          <div class="receipt-col-desc">
            <strong>${item.product.name}</strong>
            <small>${item.quantity} × ₹${item.product.price}</small>
          </div>
          <div class="receipt-col-amt">
            ₹${item.product.price * item.quantity}
          </div>
        </div>
      `).join('');
    }

    const subtotal = store.getSubtotal();
    const discount = store.getDiscount();
    const tax = store.getGstTax();
    const grandTotal = store.getFinalTotal();

    if (subtotalEl) subtotalEl.textContent = `₹${subtotal}`;
    if (discountEl) discountEl.textContent = `- ₹${discount}`;
    if (taxEl) taxEl.textContent = `₹${tax}`;
    if (grandTotalEl) grandTotalEl.textContent = `₹${grandTotal}`;
  }

  sendReceiptSimulation(channel) {
    sounds.playSuccess();
    let msg = `Digital receipt sent via ${channel.toUpperCase()}!`;
    this.showToast(msg);
  }

  // Exit Gate Screen
  renderExitGateScreen() {
    const statusPill = document.getElementById('exit-gate-status-pill');
    const gateCard = document.getElementById('exit-gate-card');
    const unlockBtn = document.getElementById('tap-gate-btn');

    if (statusPill) {
      statusPill.textContent = t('gateStatusLocked');
      statusPill.className = 'gate-pill locked';
    }
    if (gateCard) gateCard.classList.remove('unlocked');
    if (unlockBtn) unlockBtn.disabled = false;
  }

  simulateGateTap() {
    const statusPill = document.getElementById('exit-gate-status-pill');
    const gateCard = document.getElementById('exit-gate-card');
    const unlockBtn = document.getElementById('tap-gate-btn');

    sounds.playGateUnlock();
    sounds.speak("Exit gate verified. Have a wonderful day!");

    if (statusPill) {
      statusPill.textContent = t('gateStatusUnlocked');
      statusPill.className = 'gate-pill unlocked';
    }
    if (gateCard) gateCard.classList.add('unlocked');
    if (unlockBtn) unlockBtn.disabled = true;

    this.showToast('Gate Unlocked ✓ Walk through safely');
  }

  finishShoppingFlow() {
    sounds.playSuccess();
    alert(t('thankYouMessage'));
    store.clearCart();
    this.updateCartBadges();
    this.navigateTo('welcome');
  }

  // Autonomous Store Simulator
  renderAutonomousShelf() {
    const grid = document.getElementById('autonomous-shelf-grid');
    if (!grid) return;

    grid.innerHTML = store.autonomousStore.shelf.map(item => `
      <div class="shelf-product-chip ${item.count === 0 ? 'out-of-stock' : ''}" onclick="App.onPickShelfItem('${item.product.id}')">
        <div class="shelf-chip-icon" style="color: ${item.product.color};">
          ${this.getProductIconSvg(item.product.icon)}
        </div>
        <div class="shelf-chip-info">
          <strong>${item.product.name}</strong>
          <span>₹${item.product.price} • ${item.product.weight}</span>
        </div>
        <span class="shelf-stock-pill">${item.count} on shelf</span>
      </div>
    `).join('');
  }

  renderAutonomousCart() {
    const cartList = document.getElementById('autonomous-cart-list');
    const totalEl = document.getElementById('autonomous-cart-total');
    const logsEl = document.getElementById('autonomous-telemetry-logs');

    if (cartList) {
      if (store.autonomousStore.smartCart.length === 0) {
        cartList.innerHTML = `<p class="empty-hint">Cart is currently empty. Tap items on the shelf above to place them in the smart cart.</p>`;
      } else {
        cartList.innerHTML = store.autonomousStore.smartCart.map(item => `
          <div class="autonomous-cart-item">
            <div>
              <strong>${item.product.name}</strong>
              <small>${item.quantity} × ₹${item.product.price} (${item.product.weightGrams * item.quantity}g)</small>
            </div>
            <button class="btn btn-xs btn-outline-danger" onclick="App.onReturnShelfItem('${item.product.id}')" title="Return to shelf">
              Return ✕
            </button>
          </div>
        `).join('');
      }
    }

    if (totalEl) {
      totalEl.textContent = `₹${store.getAutonomousTotal()}`;
    }

    if (logsEl) {
      logsEl.innerHTML = store.autonomousStore.logs.slice(0, 7).map(log => `
        <div class="telemetry-line">
          <span class="telemetry-time">${log.time}</span>
          <span class="telemetry-badge ${log.type.toLowerCase()}">${log.type}</span>
          <span class="telemetry-text">${log.text}</span>
        </div>
      `).join('');
    }
  }

  onPickShelfItem(productId) {
    const product = store.pickItemFromShelf(productId);
    if (product) {
      sounds.playBeep();
      this.renderAutonomousShelf();
      this.renderAutonomousCart();
      this.showToast(`Auto-detected: ${product.name}`);
    }
  }

  onReturnShelfItem(productId) {
    const product = store.returnItemToShelf(productId);
    if (product) {
      sounds.playTap();
      this.renderAutonomousShelf();
      this.renderAutonomousCart();
      this.showToast(`Returned: ${product.name}`);
    }
  }

  checkoutAutonomousStore() {
    if (store.autonomousStore.smartCart.length === 0) {
      alert("Please place at least one product in the smart cart first.");
      return;
    }
    // Copy autonomous cart to main cart for payment
    store.cart = store.autonomousStore.smartCart.map(item => ({
      product: item.product,
      quantity: item.quantity
    }));
    this.updateCartBadges();
    sounds.playSuccess();
    this.navigateTo('security');
  }

  // ==========================================
  // Amazon Go "Just Walk Out" Specific Handlers
  // ==========================================

  renderAmazonGoEntry() {
    const badge = document.getElementById('turnstile-gate-badge');
    const laser = document.getElementById('turnstile-laser-beam');
    const btn = document.getElementById('btn-entry-turnstile');
    if (badge) {
      badge.textContent = t('gateStatusLocked') || 'TURNSTILE READY FOR SCAN';
      badge.className = 'turnstile-status-badge ready';
    }
    if (laser) laser.classList.remove('scanning');
    if (btn) btn.disabled = false;
  }

  simulateEntryTurnstileScan() {
    const badge = document.getElementById('turnstile-gate-badge');
    const laser = document.getElementById('turnstile-laser-beam');
    const btn = document.getElementById('btn-entry-turnstile');

    if (btn) btn.disabled = true;
    if (laser) laser.classList.add('scanning');

    sounds.playBeep();

    setTimeout(() => {
      sounds.playGateUnlock();
      sounds.speak("Turnstile unlocked. Welcome to Amazon Go store. You can now put your phone in your pocket and shop naturally.");
      store.simulateAmazonGoEntry();

      if (badge) {
        badge.textContent = t('turnstileUnlocked') || 'TURNSTILE UNLOCKED — ENTER STORE ✓';
        badge.className = 'turnstile-status-badge unlocked';
      }

      this.showToast('Turnstile Unlocked ✓ Proceed Inside');

      setTimeout(() => {
        this.navigateTo('autonomous');
      }, 1400);
    }, 900);
  }

  switchScannerMode(mode) {
    document.querySelectorAll('.scanner-mode-tab').forEach(tab => {
      tab.classList.toggle('active', tab.getAttribute('data-mode') === mode);
    });

    const aiView = document.getElementById('view-ai-vision');
    const barcodeView = document.getElementById('view-barcode');

    if (mode === 'ai_vision') {
      if (aiView) aiView.style.display = 'block';
      if (barcodeView) barcodeView.style.display = 'none';
      sounds.playTap();
      this.updateAiVisionDisplay();
    } else {
      if (aiView) aiView.style.display = 'none';
      if (barcodeView) barcodeView.style.display = 'block';
      sounds.playTap();
    }
  }

  cycleAiTrackedProduct() {
    const items = [
      getProductById('lays_classic'),
      getProductById('coca_cola_500'),
      getProductById('amul_butter'),
      getProductById('tata_salt'),
      getProductById('cadbury_dairy_milk')
    ];

    const currentId = store.amazonGo.activeTrackedItem ? store.amazonGo.activeTrackedItem.id : '';
    const currentIndex = items.findIndex(p => p.id === currentId);
    const nextIndex = (currentIndex + 1) % items.length;
    store.amazonGo.activeTrackedItem = items[nextIndex];

    sounds.playTap();
    this.updateAiVisionDisplay();
    this.showToast(`AI Camera focused on: ${store.amazonGo.activeTrackedItem.name}`);
  }

  updateAiVisionDisplay() {
    const p = store.amazonGo.activeTrackedItem || getProductById('lays_classic');
    const nameEl = document.getElementById('ai-target-name');
    const weightEl = document.getElementById('ai-target-weight');
    const confEl = document.getElementById('ai-target-conf');
    const priceEl = document.getElementById('ai-target-price');
    const iconHolder = document.getElementById('ai-target-icon');

    const name = currentLanguage === 'te' ? (p.nameTe || p.name) : (currentLanguage === 'hi' ? (p.nameHi || p.name) : p.name);

    if (nameEl) nameEl.textContent = name;
    if (weightEl) weightEl.textContent = `-${p.weightGrams}g on Shelf`;
    if (confEl) confEl.textContent = `${(98.8 + Math.random() * 0.9).toFixed(1)}% Confidence`;
    if (priceEl) priceEl.textContent = `₹${p.price}`;
    if (iconHolder) {
      iconHolder.style.color = p.color;
      iconHolder.innerHTML = this.getProductIconSvg(p.icon);
    }
  }

  simulateAiVisionPick() {
    const p = store.amazonGo.activeTrackedItem || getProductById('lays_classic');
    const box = document.getElementById('ai-bounding-box-visual');
    if (box) {
      box.style.transform = 'scale(1.08)';
      box.style.borderColor = '#34d399';
      box.style.boxShadow = '0 0 30px #10b981';
      setTimeout(() => {
        if (box) {
          box.style.transform = 'scale(1)';
          box.style.borderColor = '';
          box.style.boxShadow = '';
        }
      }, 400);
    }

    // Pick item into autonomous cart and sync main cart
    this.onPickShelfItem(p.id);
    store.addToCart(p, 1);
    this.updateCartBadges();

    sounds.playSuccess();
    sounds.speak(`Hand grab detected: ${p.name}. Added to virtual bill.`);
    this.showToast(`AI Detected Grab: ${p.name} (+₹${p.price})`);
  }

  simulateAiVisionReturn() {
    const p = store.amazonGo.activeTrackedItem || getProductById('lays_classic');
    this.onReturnShelfItem(p.id);
    store.updateQuantity(p.id, -1);
    this.updateCartBadges();

    sounds.playTap();
    sounds.speak(`Item returned to shelf: ${p.name}. Removed from bill.`);
    this.showToast(`Returned to shelf: ${p.name} (-₹${p.price})`);
  }

  renderAmazonGoExit() {
    const total = store.getAutonomousTotal() || store.getFinalTotal();
    const count = store.autonomousStore.smartCart.reduce((sum, i) => sum + i.quantity, 0);

    const totalEl = document.getElementById('walkout-total-amount');
    const itemsEl = document.getElementById('walkout-items-count');

    if (totalEl) totalEl.textContent = `₹${total}`;
    if (itemsEl) itemsEl.textContent = `${count} items`;
  }

  executeJustWalkOut() {
    const total = store.getAutonomousTotal() || store.getFinalTotal();
    store.payment.amountPaid = total > 0 ? total : 20;
    store.payment.txId = 'GO2026' + Math.floor(100000 + Math.random() * 900000);
    store.payment.timestamp = new Date().toLocaleString('en-IN');
    store.payment.method = 'UPI Auto-Debit';

    sounds.playGateUnlock();
    setTimeout(() => {
      sounds.playSuccess();
      sounds.speak(`Exit sensors verified. Payment of ₹${store.payment.amountPaid} debited. Thank you for visiting Amazon Go!`);
      this.navigateTo('success');
    }, 600);
  }

  openAmazonGoConceptModal() {
    const modal = document.getElementById('amazon-go-concept-modal');
    if (modal) modal.classList.add('open');
    sounds.playTap();
  }

  closeAmazonGoConceptModal() {
    const modal = document.getElementById('amazon-go-concept-modal');
    if (modal) modal.classList.remove('open');
  }

  // Store Assistant Request
  requestAssistant() {
    store.requestAssistant();
    sounds.playBeep();
    this.updateAssistantBadge();
    const modal = document.getElementById('assistant-modal');
    if (modal) modal.classList.add('open');
  }

  closeAssistantModal() {
    const modal = document.getElementById('assistant-modal');
    if (modal) modal.classList.remove('open');
  }

  updateAssistantBadge() {
    const badge = document.getElementById('active-assistant-banner');
    const timerText = document.getElementById('assistant-countdown');
    if (store.assistant.requested) {
      if (badge) badge.style.display = 'flex';
      if (timerText) {
        const mins = Math.floor(store.assistant.etaSeconds / 60);
        const secs = store.assistant.etaSeconds % 60;
        timerText.textContent = `${mins}:${secs < 10 ? '0' : ''}${secs}`;
      }
    } else {
      if (badge) badge.style.display = 'none';
    }
  }

  // 1-Click College Presentation Demo Mode
  runPresentationDemo() {
    if (this.demoInterval) {
      clearInterval(this.demoInterval);
      this.demoInterval = null;
      this.showToast('Demo Mode Stopped');
      return;
    }

    this.showToast('Starting 1-Click Demo Mode Walkthrough...');
    store.clearCart();
    this.updateCartBadges();

    const sequence = [
      { screen: 'welcome', delay: 1500, action: () => {} },
      { screen: 'home', delay: 1800, action: () => {
        store.selectedCategory = 'snacks';
        this.renderCatalog();
      }},
      { screen: 'scan', delay: 1600, action: () => {
        this.simulateBarcodeScan('lays_classic');
      }},
      { screen: 'home', delay: 1200, action: () => {
        this.quickAddToCart('coca_cola_500');
      }},
      { screen: 'cart', delay: 2000, action: () => {} },
      { screen: 'security', delay: 2200, action: () => {} },
      { screen: 'payment', delay: 2000, action: () => {
        this.selectUpiApp('gpay');
      }},
      { screen: 'processing', delay: 2400, action: () => {} },
      { screen: 'success', delay: 2000, action: () => {} },
      { screen: 'exit_gate', delay: 2500, action: () => {
        this.simulateGateTap();
      }}
    ];

    let idx = 0;
    const runNextStep = () => {
      if (idx >= sequence.length) {
        this.showToast('✓ Demo Walkthrough Complete!');
        return;
      }
      const step = sequence[idx];
      this.navigateTo(step.screen);
      step.action();
      idx++;
      setTimeout(runNextStep, step.delay);
    };

    runNextStep();
  }

  // Design Thinking Drawer
  openDesignThinkingModal() {
    const modal = document.getElementById('design-thinking-modal');
    if (modal) modal.classList.add('open');
    sounds.playTap();
  }

  closeDesignThinkingModal() {
    const modal = document.getElementById('design-thinking-modal');
    if (modal) modal.classList.remove('open');
  }

  // Accessibility Toggles
  toggleHighContrast() {
    document.body.classList.toggle('high-contrast-mode');
    const isHC = document.body.classList.contains('high-contrast-mode');
    this.showToast(isHC ? 'High Contrast Mode: ON' : 'High Contrast Mode: OFF');
    sounds.playTap();
  }

  setFontSize(size) {
    document.body.classList.remove('font-normal', 'font-large', 'font-xl');
    document.body.classList.add(`font-${size}`);
    this.showToast(`Font Size: ${size.toUpperCase()}`);
    sounds.playTap();
  }

  toggleVoiceAssistance() {
    sounds.speechEnabled = !sounds.speechEnabled;
    this.showToast(sounds.speechEnabled ? 'Voice Guidance: ON' : 'Voice Guidance: OFF');
    if (sounds.speechEnabled) {
      sounds.speak("Voice guidance enabled. SmartCheckout will assist you.");
    }
  }

  // Helper Toast
  showToast(message) {
    const toast = document.getElementById('app-toast');
    if (toast) {
      toast.textContent = message;
      toast.classList.add('show');
      setTimeout(() => toast.classList.remove('show'), 2400);
    }
  }

  clearSearch() {
    store.searchQuery = '';
    const searchInput = document.getElementById('search-input');
    if (searchInput) searchInput.value = '';
    this.renderCatalog();
  }

  escapeHtml(str) {
    return str.replace(/[&<>"']/g, m => ({
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      '"': '&quot;',
      "'": '&#39;'
    })[m]);
  }

  updatePresenterStatus(screenId) {
    const statusEl = document.getElementById('presenter-current-screen-name');
    if (statusEl) {
      statusEl.textContent = screenId.toUpperCase().replace('_', ' ');
    }
  }

  onLanguageChange() {
    this.renderCatalog();
    this.renderCartScreen();
  }

  bindEvents() {
    // Search input
    const searchInput = document.getElementById('search-input');
    if (searchInput) {
      searchInput.addEventListener('input', (e) => {
        store.searchQuery = e.target.value;
        this.renderCatalog();
      });
    }

    // Category pills
    document.querySelectorAll('.cat-pill').forEach(pill => {
      pill.addEventListener('click', (e) => {
        document.querySelectorAll('.cat-pill').forEach(p => p.classList.remove('active'));
        e.currentTarget.classList.add('active');
        store.selectedCategory = e.currentTarget.getAttribute('data-cat');
        this.renderCatalog();
        sounds.playTap();
      });
    });

    // Language selector
    document.querySelectorAll('.lang-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        document.querySelectorAll('.lang-btn').forEach(b => b.classList.remove('active'));
        e.currentTarget.classList.add('active');
        const lang = e.currentTarget.getAttribute('data-lang');
        setLanguage(lang);
        sounds.playTap();
      });
    });
  }
}

// Global instance
window.App = new AppController();
document.addEventListener('DOMContentLoaded', () => {
  window.App.init();
});
