const navbar = document.querySelector('nav');
const hamburger = document.querySelector('.md\\:hidden');
const languageDropdown = document.getElementById('language-dropdown');
const languageOptions = document.getElementById('language-options');

hamburger.addEventListener('click', () => {
  navbar.classList.toggle('md:flex');
});

languageDropdown.addEventListener('click', () => {
  languageOptions.classList.toggle('hidden');
});