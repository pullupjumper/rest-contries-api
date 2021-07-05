import '../scss/index.scss';
import initToggleBtn from './toggle-btn';

const dropdown = document.querySelector('.dropdown');


initComponents();


function initComponents() {
  initToggleBtn();

  dropdown.addEventListener('click', () => {
    dropdown.classList.toggle('dropdown-show');
  });
}