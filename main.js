// const screenWidth = document.querySelector('body').style.width;

// Mobile Menu Start
const humbergMenu = document.querySelector('.burger-menu');
const mobilePopUpMenue = document.createElement('div');
mobilePopUpMenue.className = 'left-navigation hide mt-3-5';
const sections = document.querySelectorAll('section');
const wrapper = document.querySelector('.wrapper');
const topToolbar = document.querySelector('.top-toolbar');

const mobileMenu = document.querySelector('.burger > div > ul');
const mobileMenulinks = document.querySelectorAll('.menu-link');
const logoPlaceHolder = document.querySelector('.logo-placeholder a');

mobilePopUpMenue.appendChild(mobileMenu);
wrapper.appendChild(mobilePopUpMenue);
const createBlurBackground = () => {
  sections.forEach((section) => {
    section.classList.toggle('hide');
  });
  sections[0].classList.toggle('left-navigation-backgound');
  sections[0].classList.toggle('hide');
};

const toggleMenu = () => {
  logoPlaceHolder.classList.toggle('hide');
  mobilePopUpMenue.classList.toggle('hide');
  topToolbar.classList.toggle('menu-background');
  humbergMenu.classList.toggle('close-icon');
  createBlurBackground();
};

humbergMenu.addEventListener('click', toggleMenu);
mobileMenulinks.forEach((link) => {
  link.addEventListener('click', toggleMenu);
});
// Mobile Menu End

// Project object

const projectArray = [
  {
    title: 'Tonic',
    projectMeta: ['CANOPY', '<span class="circle"></span>', 'Back End Dev', '<span class="circle"></span>', '2015'],
    projectImage: {
      desktop: 'assets/images/Svg/project1.svg',
      smallDevice: 'assets/images/project1.png',
      model: 'assets/images/Svg/project1.svg',
    },
    projectDescription: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
    projectStacks: ['html', 'css', 'javascript'],
  },
  {
    title: 'Multi-Post Stories',
    projectMeta: ['FACEBOOK', '<span class="circle"></span>', 'Back End Dev', '<span class="circle"></span>', '2015'],
    projectImage: {
      desktop: 'assets/images/Svg/project2.svg',
      smallDevice: 'assets/images/project2.png',
      model: 'assets/images/Svg/project2.svg',
    },
    projectDescription: 'Experimental content creation feature that allows users to add to an existing story over the course of a day without spamming their friends.',
    projectStacks: ['html', 'Ruby on rails', 'css', 'javascript'],
  },
  {
    title: 'Facebook 360',
    projectMeta: ['FACEBOOK', '<span class="circle"></span>', 'Back End Dev', '<span class="circle"></span>', '2015'],
    projectImage: {
      desktop: 'assets/images/Svg/project3.svg',
      smallDevice: 'assets/images/project3.png',
      model: 'assets/images/Svg/project3.svg',
    },
    projectDescription: "Exploring the future of media in Facebook's first Virtual Reality app; a place to discover and enjoy 360 photos and videos on Gear VR.",
    projectStacks: ['html', 'Ruby on rails', 'css', 'javascript'],
  },
  {
    title: 'Uber Navigation',
    projectMeta: ['Uber', '<span class="circle"></span>', 'Lead Developer', '<span class="circle"></span>', '2015'],
    projectImage: {
      desktop: 'assets/images/Svg/project4.svg',
      smallDevice: 'assets/images/project4.png',
      model: 'assets/images/projects/project1-model.svg',
    },
    projectDescription: 'A smart assistant to make driving more safe, efficient, and fun by unlocking your most expensive computer: your car.',
    projectStacks: ['html', 'Ruby on rails', 'css', 'javascript'],
  },
];

// Project Details Model Start
const modelDiv = document.querySelector('.models');
const seeDetailsButtons = document.querySelectorAll('.see-project');
const closeModel = document.querySelector('.close-model');

const toggleModel = () => {
  modelDiv.classList.toggle('hide');
  topToolbar.classList.toggle('hide');
  createBlurBackground();
}

const createModel = () => {
  // codes to create model goes here
  const project = document.activeElement.id.split('-')[1];
  const modelProjectTitle = document.querySelector('.model-project-header h2');
  const modelProjectDescr = document.querySelector('.model-project-description');
  const modelProjectImage = document.querySelector('.model-image');
  modelProjectTitle.textContent = projectArray[project - 1].title;
  modelProjectDescr.textContent = projectArray[project - 1].projectDescription;
  modelProjectImage.src = projectArray[project - 1].projectImage.model;
  // Display Model
  toggleModel();
};

seeDetailsButtons.forEach((button) => {
  button.addEventListener('click', createModel);
});

closeModel.addEventListener('click', toggleModel);

// Project Details Model End