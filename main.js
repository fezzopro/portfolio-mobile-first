const humbergMenu = document.querySelector('.burger-menu');
const mobilePopUpMenue = document.createElement('div');
mobilePopUpMenue.className = 'left-navigation hide mt-3-5';
const sections = document.querySelectorAll('section');
const wrapper = document.querySelector('.wrapper');
const topToolbar = document.querySelector('.top-toolbar');

const mobileMenu = document.querySelector('.burger  ul');
const mobileMenulinks = document.querySelectorAll('.menu-link');
const logoPlaceHolder = document.querySelector('.logo-placeholder a');

mobilePopUpMenue.appendChild(mobileMenu);
wrapper.appendChild(mobilePopUpMenue);

const toggleMenu = () => {
  logoPlaceHolder.classList.toggle('hide');
  mobilePopUpMenue.classList.toggle('hide');
  topToolbar.classList.toggle('menu-background');
  humbergMenu.classList.toggle('close-icon');
  sections.forEach(section => {
    section.classList.toggle('hide');
  });
  sections[0].classList.toggle('left-navigation-backgound');
  sections[0].classList.toggle('hide');
};

humbergMenu.addEventListener('click', toggleMenu);
mobileMenulinks.forEach(link => {
  link.addEventListener('click', toggleMenu);
});