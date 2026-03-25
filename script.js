// ── State ──
let cartTotal = 0;
const SHIPPING_THRESHOLD = 100;

// ── DOM References ──
const promoBar = document.getElementById('promo-bar');
const closeBtn = document.getElementById('close-btn');
const promoMessage = document.getElementById('promo-message');
const headerTotal = document.getElementById('header-total');
const clearCartBtn = document.getElementById('clear-cart');

// ── Promo Bar: restore closed state ──
if (localStorage.getItem('promoClosed') === 'true') {
  promoBar.classList.add('hidden');
}

// ── Handlers ──
function handleAddToCart(e) {
  const price = parseInt(e.target.getAttribute('data-price'));
  cartTotal += price;
  updateUI();
}

function handleClearCart() {
  cartTotal = 0;
  updateUI();
}

function handleCloseBar() {
  promoBar.classList.add('hidden');
  localStorage.setItem('promoClosed', 'true');
}

// ── UI Update ──
function updatePromoBar() {
  const remaining = SHIPPING_THRESHOLD - cartTotal;
  if (cartTotal >= SHIPPING_THRESHOLD) {
    promoMessage.textContent = "Congratulations! You've unlocked Free Shipping!";
  } else {
    promoMessage.textContent = `You are $${remaining} away from Free Shipping!`;
  }
}

function updateCartSummary() {
  headerTotal.textContent = '$' + cartTotal;
}

function updateUI() {
  updatePromoBar();
  updateCartSummary();
}

// ── Event Listeners ──
document.querySelectorAll('.add-to-cart')
  .forEach(btn => btn.addEventListener('click', handleAddToCart));

clearCartBtn.addEventListener('click', handleClearCart);
closeBtn.addEventListener('click', handleCloseBar);
