const headerModalDom = document.getElementById('header-modal-menu');
const modalMenuOpenBtnDom = document.getElementById('modal-menu-open-btn');
const modalMenuCloseBtnDom = document.getElementById('modal-menu-close-btn');
console.log('headerModalDom', headerModalDom);
console.log('modalMenuOpenBtnDom', modalMenuOpenBtnDom);
console.log('modalMenuCloseBtnDom', modalMenuCloseBtnDom);
modalMenuOpenBtnDom.addEventListener('click', () => {
  headerModalDom.classList.add('is-open');
});

modalMenuCloseBtnDom.addEventListener('click', () => {
  headerModalDom.classList.remove('is-open');
});
