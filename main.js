let humbergMenu = document.querySelector('.burger');

const mobileMenu = document.querySelector('.burger > ul');
const logo = document.querySelector('.logo-placeholder');
const burger = document.querySelector('.burger');

humbergMenu.addEventListener('click', ()=>{
  mobileMenu.style.display ='flex';
  mobileMenu.style['flex-direction'] = 'column';
  mobileMenu.style['list-style'] = 'none';
  mobileMenu.style['gap'] = '12px';
  mobileMenu.style['font-weight'] = '600';
  mobileMenu.style['font-size'] = '32px';
  mobileMenu.style['line-height'] = '44px';

  logo.style['display'] = 'none';
  
  humbergMenu.style['position'] = 'fixed';
  humbergMenu.style['background'] = 'white';
  humbergMenu.style['padding-bottom'] = '100px';
  humbergMenu.style['width'] = '-webkit-fill-available';
  humbergMenu.style['height'] = '100%';

  burger.style['right'] = '0';
});
