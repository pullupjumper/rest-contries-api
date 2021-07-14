function toggleHandler() {
  if (document.documentElement.hasAttribute('theme')) {
    document.documentElement.removeAttribute('theme');
    window.localStorage.setItem('theme', 'default');
  }
  else {
    document.documentElement.setAttribute('theme', 'dark');
    window.localStorage.setItem('theme', 'dark');
  }
}


export default function initToggleBtn() {
  const toggleBtn = document.querySelector('.toggle-btn');
  let storageData = window.localStorage.getItem('theme');

  if (storageData == null) {
    storageData = "default";
    window.localStorage.setItem('theme', 'default');
  }

  if (storageData === 'default' && document.documentElement.hasAttribute('theme')) {
    document.documentElement.removeAttribute('theme');
  }

  if (storageData === 'dark') {
    document.documentElement.setAttribute('theme', 'dark');
  }

  toggleBtn.addEventListener('click', toggleHandler);
}