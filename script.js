// Dynamic Promo Bar & Cart Simulation - Logic

const promoBar = document.getElementById('promo-bar');
const closeBtn = document.getElementById('close-btn');

// Bonus: restore closed state
if (localStorage.getItem('promoClosed') === 'true') {
  promoBar.classList.add('hidden');
}

closeBtn.addEventListener('click', function () {
  promoBar.classList.add('hidden');
  localStorage.setItem('promoClosed', 'true');
});
