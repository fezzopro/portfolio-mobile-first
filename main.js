document.addEventListener('DOMContentLoaded', () => {
  // Project object

  const projectArray = [
    {
      id: 1,
      title: 'Tonic',
      projectMeta: ['CANOPY', 'Back End Dev', '2015'],
      projectImage: {
        desktop: 'assets/images/Svg/project1.svg',
        smallDevice: 'assets/images/project1.png',
        modelImage: 'assets/images/Svg/project1.svg',
      },
      projectDescription: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
      projectStacks: ['html', 'css', 'javascript'],
      liveLink: 'https://fezzopro.github.io/portfolio-mobile-first/',
      sourceLink: 'https://github.com/fezzopro/portfolio-mobile-first',
    },
    {
      id: 2,
      title: 'Multi-Post Stories',
      projectMeta: ['FACEBOOK', 'Back End Dev', '2015'],
      projectImage: {
        desktop: 'assets/images/Svg/project2.svg',
        smallDevice: 'assets/images/project2.png',
        modelImage: 'assets/images/Svg/project2.svg',
      },
      projectDescription: 'Experimental content creation feature that allows users to add to an existing story over the course of a day without spamming their friends.',
      projectStacks: ['html', 'Ruby on rails', 'css', 'javascript'],
      liveLink: 'https://fezzopro.github.io/portfolio-mobile-first/',
      sourceLink: 'https://github.com/fezzopro/portfolio-mobile-first',
    },
    {
      id: 3,
      title: 'Facebook 360',
      projectMeta: ['FACEBOOK', 'Back End Dev', '2015'],
      projectImage: {
        desktop: 'assets/images/Svg/project3.svg',
        smallDevice: 'assets/images/project3.png',
        modelImage: 'assets/images/Svg/project3.svg',
      },
      projectDescription: "Exploring the future of media in Facebook's first Virtual Reality app; a place to discover and enjoy 360 photos and videos on Gear VR.",
      projectStacks: ['html', 'Ruby on rails', 'css', 'javascript'],
      liveLink: 'https://fezzopro.github.io/portfolio-mobile-first/',
      sourceLink: 'https://github.com/fezzopro/portfolio-mobile-first',
    },
    {
      id: 4,
      title: 'Uber Navigation',
      projectMeta: ['Uber', 'Lead Developer', '2015'],
      projectImage: {
        desktop: 'assets/images/Svg/project4.svg',
        smallDevice: 'assets/images/project4.png',
        modelImage: 'assets/images/Svg/project4.svg',
      },
      projectDescription: 'A smart assistant to make driving more safe, efficient, and fun by unlocking your most expensive computer: your car.',
      projectStacks: ['html', 'Ruby on rails', 'css', 'javascript'],
      liveLink: 'https://fezzopro.github.io/portfolio-mobile-first/',
      sourceLink: 'https://github.com/fezzopro/portfolio-mobile-first',
    },
  ];

  const localFormData = {
    names: '',
    email: '',
    message: ''
  };

  // Create Project Card

  const createProjectCard = (project) => {
    const card = document.createElement('div');
    card.className = 'card work-1';
    const cardImage = document.createElement('img');
    cardImage.className = 'card-image';
    cardImage.src = project.projectImage.desktop;
    card.appendChild(cardImage);
    const leftBlock = document.createElement('div');
    leftBlock.className = 'left-block details';
    const cardTitle = document.createElement('h2');
    cardTitle.className = 'project-title';
    cardTitle.textContent = project.title;
    leftBlock.appendChild(cardTitle);
    const cardProjectMetaUl = document.createElement('ul');
    cardProjectMetaUl.className = 'project-meta';
    const projectMetaLii = document.createElement('li');
    const projectMetaLiSpan = document.createElement('span');
    const projectMetaLiSpan1 = document.createElement('span');
    projectMetaLiSpan.className = 'circle';
    projectMetaLiSpan1.className = 'role cirlce';
    projectMetaLii.appendChild(projectMetaLiSpan);

    let counter = 1;
    project.projectMeta.forEach((dataItem) => {
      const projectMetaLi = document.createElement('li');
      if (counter === 1) {
        projectMetaLi.textContent = dataItem;
      } else if (counter % 2 === 0) {
        projectMetaLi.className = 'role';
        cardProjectMetaUl.appendChild(projectMetaLii);
        projectMetaLi.textContent = dataItem;
      } else {
        projectMetaLi.className = 'role';
        projectMetaLi.textContent = dataItem;
      }
      cardProjectMetaUl.appendChild(projectMetaLi);
      counter += 1;
    });

    leftBlock.appendChild(cardProjectMetaUl);
    const cardParagraph = document.createElement('p');
    cardParagraph.className = 'project-description';
    cardParagraph.textContent = project.projectDescription;
    leftBlock.appendChild(cardParagraph);
    const cardStackUl = document.createElement('ul');
    cardStackUl.className = 'stacks';
    project.projectStacks.forEach((stack) => {
      const projectStackLi = document.createElement('li');
      projectStackLi.textContent = stack;
      cardStackUl.appendChild(projectStackLi);
    });
    const cardButtonMoreDiv = document.createElement('div');
    cardButtonMoreDiv.className = 'more';
    const cardButtonMorespan = document.createElement('span');
    const cardButtonMore = document.createElement('button');
    cardButtonMore.className = 'btn-more see-project';
    cardButtonMore.id = `project-${project.id}`;
    cardButtonMore.textContent = 'See Project';
    cardButtonMorespan.appendChild(cardButtonMore);
    cardButtonMoreDiv.appendChild(cardButtonMorespan);
    leftBlock.appendChild(cardStackUl);
    leftBlock.appendChild(cardButtonMoreDiv);
    card.appendChild(leftBlock);
    return card;
  };
  const workSection = document.querySelector('.work');

  if (projectArray.length > 0) {
    projectArray.forEach((project) => {
      workSection.appendChild(createProjectCard(project));
    });
  }

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

  // Project Details Model Start
  const modelDiv = document.querySelector('.models');
  const seeDetailsButtons = document.querySelectorAll('.see-project');
  const closeModel = document.querySelector('.close-model');

  const toggleModel = () => {
    modelDiv.classList.toggle('hide');
    topToolbar.classList.toggle('hide');
    createBlurBackground();
  };

  const createModel = () => {
    // codes to create model goes here
    const project = document.activeElement.id.split('-')[1];
    const modelProjectTitle = document.querySelector('.model-project-header h2');
    const modelProjectDescr = document.querySelector('.model-project-description');
    const modelProjectImage = document.querySelector('.model-image');
    const modeButtons = document.querySelectorAll('.model-buttons a');
    modelProjectTitle.textContent = projectArray[project - 1].title;
    modelProjectDescr.textContent = projectArray[project - 1].projectDescription;
    modelProjectImage.src = projectArray[project - 1].projectImage.modelImage;
    modeButtons[0].href = projectArray[project - 1].liveLink;
    modeButtons[1].href = projectArray[project - 1].sourceLink;
    modeButtons[0].target = '_blank';
    modeButtons[1].target = '_blank';
    // Display Model
    toggleModel();
  };

  seeDetailsButtons.forEach((button) => {
    button.addEventListener('click', createModel);
  });

  closeModel.addEventListener('click', toggleModel);

  // Project Details Model End

  // Populate form with local data
  const form = document.querySelector('.form');
  const names = document.querySelector('input[name="names"]');
  const emailText = document.querySelector('input[name="email"]');
  const message = document.querySelector('.form textarea');

  const temporaryData = JSON.parse(localStorage.getItem('formData'));
  if (temporaryData) {
    names.value = (temporaryData.names.length > 0) ? temporaryData.names : '';
    emailText.value = (temporaryData.emailText.length > 0) ? temporaryData.emailText : '';
    message.value = (temporaryData.message.length > 0) ? temporaryData.message : '';
  }

  form.addEventListener('input', () => {
    const formData = {
      names: names.value,
      emailText: emailText.value,
      message: message.value
    };
    localStorage.setItem('formData', JSON.stringify(formData));
  });

  // Start validation to the form
  form.addEventListener('submit', (event) => {
    if (emailText.value !== emailText.value.toLowerCase()) {
      event.preventDefault();

      // Remove any previous error messages
      const previousErrorMessage = form.querySelector('.error-message');
      if (previousErrorMessage) {
        form.removeChild(previousErrorMessage);
      }

      const errorMessage = document.createElement('span');
      const formText = document.querySelector('.form textarea');
      errorMessage.textContent = 'Invalid Email. Email should be all lower case.';
      errorMessage.classList.add('error-message');
      formText.insertAdjacentElement('afterend', errorMessage);
    }
  });
  // End of validation form
});
