import '../scss/index.scss';

const dropdown = document.querySelector('.dropdown');
const toggleBtn = document.querySelector('.toggle-btn');


initComponents();


function initComponents() {
  toggleBtn.addEventListener('click', () => {
    if (document.documentElement.hasAttribute('theme')) {
      document.documentElement.removeAttribute('theme');
    }
    else {
      document.documentElement.setAttribute('theme', 'dark');
    }
  });

  dropdown.addEventListener('click', () => {
    dropdown.classList.toggle('dropdown-show');
  });
}