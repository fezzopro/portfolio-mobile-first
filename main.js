const humbergMenu = document.querySelector('.burger-menu');
const mobilePopUpMenue = document.createElement('div');
mobilePopUpMenue.className = 'left-navigation hide mt-3-5';
const sections = document.getElementsByTagName('section');
const wrapper = document.querySelector('.wrapper');
const topToolbar = document.querySelector('.top-toolbar');

const mobileMenu = document.querySelector('.burger  ul');
const mobileMenulinks = document.querySelectorAll('.menu-link');
const logoPlaceHolder = document.querySelector('.logo-placeholder a');

mobilePopUpMenue.appendChild(mobileMenu);
wrapper.appendChild(mobilePopUpMenue);

humbergMenu.addEventListener('click', () => {

  logoPlaceHolder.classList.toggle('hide');
  mobilePopUpMenue.classList.toggle('hide');
  topToolbar.classList.toggle('menu-background');
  humbergMenu.classList.toggle('close-icon');
  sections[0].classList.toggle('left-navigation-backgound');

  for (let i = 1; i < sections.length; i++) {
    sections[i].classList.toggle('hide');
  }
});

for (const link of mobileMenulinks) {
  link.addEventListener('click', () => {
    mobilePopUpMenue.classList.toggle('hide');
    topToolbar.classList.toggle('menu-background');
    humbergMenu.classList.toggle('close-icon');
    sections[0].classList.toggle('left-navigation-backgound');
    logoPlaceHolder.classList.toggle('hide');
  });
}