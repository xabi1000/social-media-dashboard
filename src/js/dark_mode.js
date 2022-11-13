const body = document.querySelector('body');
const cards = [...document.querySelectorAll('.card')];
const slider = document.querySelector('.slider');
const nameModeText = document.querySelector('.btn-text');


slider.addEventListener('click', () => {
  console.log(nameModeText.textContent)
  cards.forEach(card => card.classList.toggle('ligth-mode-card'));
  body.classList.toggle('ligth-mode-body');

  if (body.matches('.ligth-mode-body')) {
    nameModeText.textContent = 'Light Mode'
  } else {
    nameModeText.textContent = 'Dark Mode'
  }
});


