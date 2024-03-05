// Отримуємо посилання на DOM-елементи за їх ідентифікаторами
const headerModalDom = document.getElementById('head-1');
const modalMenuOpenBtnDom = document.getElementById('head-0');
const modalMenuCloseBtnDom = document.getElementById('head-2');
const modalMenuFirstBtnDom = document.getElementById('head-3');
const modalMenuSecondBtnDom = document.getElementById('head-4');
const modalMenuThirdBtnDom = document.getElementById('head-5');
const modalMenuFourthBtnDom = document.getElementById('head-6');
const headerContainerDom = document.querySelector('.header-container');
const startScrollDistance = 100;
const headerDom = document.querySelector('.header');

// Додаємо слухача подій для відкриття модального вікна при кліці на кнопці
modalMenuOpenBtnDom.addEventListener('click', () => {
  headerModalDom.classList.add('is-open');
});

// Додаємо слухача подій для закриття модального вікна при кліці на кнопці закриття
modalMenuCloseBtnDom.addEventListener('click', () => {
  headerModalDom.classList.remove('is-open');
});

// Додаємо слухачів подій для закриття модального вікна при кліці на інших кнопках
modalMenuFirstBtnDom.addEventListener('click', () => {
  headerModalDom.classList.remove('is-open');
});

modalMenuSecondBtnDom.addEventListener('click', () => {
  headerModalDom.classList.remove('is-open');
});

modalMenuThirdBtnDom.addEventListener('click', () => {
  headerModalDom.classList.remove('is-open');
});

modalMenuFourthBtnDom.addEventListener('click', () => {
  headerModalDom.classList.remove('is-open');
});

// Визначаємо змінну isResize та функцію для визначення зміни розміру вікна
let isResize;
function reportWindowSize() {
  if (window.innerWidth > 320 && window.innerWidth <= 375) {
    const curWidth = window.innerWidth;
    headerDom.style.left = `calc(50% - ${curWidth / 2 + 'px'});`;
    headerContainerDom.style.minWidth = `${curWidth}px`;
  }
  if (window.innerWidth > 375 && window.innerWidth <= 768) {
    headerDom.style.left = `calc(50% - ${375 / 2 + 'px'});`;
    headerContainerDom.style.minWidth = `375px`;
  }
  if (window.innerWidth > 768 && window.innerWidth <= 1280) {
    headerDom.style.left = `calc(50% - ${768 / 2 + 'px'});`;
    headerContainerDom.style.minWidth = `768px`;
  }
  if (window.innerWidth > 1280) {
    headerDom.style.left = `calc(50% - ${1280 / 2 + 'px'});`;
    headerContainerDom.style.minWidth = `1280px`;
  }
  // Перевіряємо, чи змінився розмір вікна
  if (isResize !== window.innerWidth > 1279) {
    isResize = window.innerWidth > 1279;
    // Закриваємо модальне вікно при зміні розміру вікна
    headerModalDom.classList.remove('is-open');
  }
}

// Додаємо слухача подій для зміни розміру вікна
window.onresize = reportWindowSize;

// Додаємо слухача подій для прокрутки сторінки
window.addEventListener('scroll', function () {
  const scrollDistance = window.scrollY;

  // Додаємо або видаляємо клас "scrolled" відповідно до прокрутки сторінки
  if (scrollDistance >= startScrollDistance) {
    headerContainerDom.classList.add('scrolled');
  } else {
    headerContainerDom.classList.remove('scrolled');
  }
});
