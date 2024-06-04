/* в этот файл добавляет скрипты*/
const navMain = document.querySelector('.nav');
const navToggle = document.querySelector('.nav__toggle');

navMain.classList.remove('nav--nojs');

navToggle.addEventListener('click', () => {
  if (navMain.classList.contains('nav--closed')) {
    navMain.classList.remove('nav--closed');
    navMain.classList.add('nav--open');
  } else {
    navMain.classList.add('nav--closed');
    navMain.classList.remove('nav--open');
  }
});
