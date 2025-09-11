const navbar = document.querySelector('.navbar');
const mobileNavbar = document.querySelector('.navbar__mobile');
const burgerButton = document.querySelector('.burguer');
const themeToggleButton = document.querySelector('.theme-toggle');

// Menu mobile toggle
if (burgerButton) {
  burgerButton.addEventListener('click', function () {
    mobileNavbar.classList.toggle('active');
  });
}

// Fechar menu mobile ao clicar em um link
const mobileLinks = document.querySelectorAll('.mobile__links a');
mobileLinks.forEach(function (link) {
  link.addEventListener('click', function () {
    mobileNavbar.classList.remove('active');
  });
});

// Navbar sombra ao rolar
window.addEventListener('scroll', function () {
  if (this.window.pageYOffset > 0) return navbar.classList.add('active');
  return navbar.classList.remove('active');
});

// Tema: carregar preferência
const storedTheme = localStorage.getItem('theme');
const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
if (storedTheme === 'dark' || (!storedTheme && prefersDark)) {
  document.documentElement.setAttribute('data-theme', 'dark');
}

// Atualiza ícone e acessibilidade do botão conforme tema atual
function updateThemeToggleButton() {
  const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
  if (!themeToggleButton) return;
  themeToggleButton.textContent = isDark ? '☀️' : '🌙';
  themeToggleButton.setAttribute('aria-label', isDark ? 'Alternar para tema claro' : 'Alternar para tema escuro');
  themeToggleButton.setAttribute('title', isDark ? 'Alternar para tema claro' : 'Alternar para tema escuro');
}

updateThemeToggleButton();

// Alternar tema com persistência
if (themeToggleButton) {
  themeToggleButton.addEventListener('click', function () {
    const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
    if (isDark) {
      document.documentElement.removeAttribute('data-theme');
      localStorage.setItem('theme', 'light');
    } else {
      document.documentElement.setAttribute('data-theme', 'dark');
      localStorage.setItem('theme', 'dark');
    }
    updateThemeToggleButton();
  });
}

// Ano dinâmico rodapé
const yearSpan = document.getElementById('current-year');
if (yearSpan) {
  yearSpan.textContent = new Date().getFullYear();
}
