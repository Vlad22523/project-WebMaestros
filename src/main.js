const headerModalDom = document.getElementById('header-modal-menu');
const modalMenuOpenBtnDom = document.getElementById('modal-menu-open-btn');
const modalMenuCloseBtnDom = document.getElementById('modal-menu-close-btn');
const modalMenuFirstBtnDom = document.getElementById('modal-menu-first-btn');
const modalMenuSecondBtnDom = document.getElementById('modal-menu-second-btn');
const modalMenuThirdBtnDom = document.getElementById('modal-menu-third-btn');
const modalMenufourthBtnDom = document.getElementById('modal-menu-fourth-btn');

modalMenuOpenBtnDom.addEventListener('click', () => {
  headerModalDom.classList.add('is-open');
});
modalMenuCloseBtnDom.addEventListener('click', () => {
  headerModalDom.classList.remove('is-open');
});

modalMenuFirstBtnDom.addEventListener('click', () => {
  headerModalDom.classList.remove('is-open');
});
modalMenuSecondBtnDom.addEventListener('click', () => {
  headerModalDom.classList.remove('is-open');
});
modalMenuThirdBtnDom.addEventListener('click', () => {
  headerModalDom.classList.remove('is-open');
});
modalMenufourthBtnDom.addEventListener('click', () => {
  headerModalDom.classList.remove('is-open');
});

let isRezise;
function reportWindowSize() {
  if (isRezise !== window.innerWidth > 1279) {
    console.log(isRezise);
    isRezise = window.innerWidth > 1279;
    headerModalDom.classList.remove('is-open');
  }
}

window.onresize = reportWindowSize;
