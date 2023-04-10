let humbergMenu = document.querySelector('.burger');

const mobileMenu = document.querySelector('.burger > ul');
const logo = document.querySelector('.logo-placeholder');
const burger = document.querySelector('.burger');
const text = document.querySelectorAll('.menu-icon');


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
  for (let i = 0; i < text.length; i++) {
    text[i].style.color = 'white';
    text[i].addEventListener('click',function() {
      humbergMenu.style.display= 'none';
      console.log('link clicked');
          });
  }
  burger.style['right'] = '0';

  humbergMenu.style.background = '#6070FF' ;
  text.style['color'] = 'white';
  humbergMenu.style.opacity = '90%';
  humbergMenu.style.blend = 'Multiply';
 
});

