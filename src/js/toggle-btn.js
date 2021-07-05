export default function initToggleBtn() {
  const toggleBtn = document.querySelector('.toggle-btn');

  toggleBtn.addEventListener('click', () => {
    if (document.documentElement.hasAttribute('theme')) {
      document.documentElement.removeAttribute('theme');
    }
    else {
      document.documentElement.setAttribute('theme', 'dark');
    }
  });

}