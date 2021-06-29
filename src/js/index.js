import '../scss/index.scss';

const dropdown = document.querySelector('.dropdown');


initComponents();


function initComponents() {
  dropdown.addEventListener('click', () => {
    dropdown.classList.toggle('dropdown-show');
  });
}