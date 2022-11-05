
const btn = document.querySelector('.btn');
let theme = 'light';
const currentTheme = localStorage.getItem('theme');

if (currentTheme == 'dark') document.body.classList.add('dark-theme');

const darkMode = () => {
  console.log([...document.getElementsByClassName('light-theme')])
  document.body.classList.toggle('dark-theme');
  if (document.body.classList.contains('dark-theme')) {
    theme = 'dark';
    localStorage.setItem('theme', theme);
    console.log('ok')
  }
}

btn.addEventListener('click', darkMode);

