let currentTheme = JSON.parse(localStorage.getItem("theme"));
if (currentTheme === 'dark') {
  setTheme();
}

function setTheme() {
  document.documentElement.setAttribute('data-theme', currentTheme);
}

function changeTheme() {
  if (currentTheme === 'dark') {
    currentTheme = 'light';
  } else {
    currentTheme = 'dark';
  }
  logofall = 0
  document.documentElement.setAttribute('logo-fall', false);
  localStorage.setItem("theme", JSON.stringify(currentTheme));
  setTheme();
}

function home() {
    document.documentElement.scrollTop = 0;
}
function social() {
  document.documentElement.scrollTop = 800;
}
function project() {
  document.documentElement.scrollTop = 1700;
}

function handleAppearances() {
  const scrollPosition = window.scrollY;

  const socialsight = scrollPosition > 600 && scrollPosition < 1400;
  const projectsight = scrollPosition > 1500 && scrollPosition < 2100;

  document.documentElement.setAttribute('social-sight', socialsight);
  document.documentElement.setAttribute('project-sight', projectsight);

  switchNavImages();
}

const sections = [
  {
    name: 'home',
    start: -1,
    end: 600,
    img: './images/home.png',
    e_img: './images/e_home.png'
  },
  {
    name: 'social',
    start: 599,
    end: 1400,
    img: './images/social.png',
    e_img: './images/e_social.png'
  },
  {
    name: 'project',
    start: 1399,
    end: 2600,
    img: './images/project.png',
    e_img: './images/e_project.png'
  }
];

function switchNavImages() {
  const scrollPosition = window.scrollY;

  sections.forEach(section => {
    const navIcon = document.querySelector(`.navico[src="${section.img}"]`) || document.querySelector(`.navico[src="${section.e_img}"]`);
    if (navIcon) {
      if (scrollPosition > section.start && scrollPosition < section.end) {
        navIcon.src = section.img;
      } else {
        navIcon.src = section.e_img;
      }
    }
  });
}

window.addEventListener('scroll', handleAppearances);
handleAppearances();

var logofall = 0

function bounce() {
  const img = document.getElementById('bouncing');
  img.classList.add('bounce');
  if (logofall < 10) {
    img.addEventListener('animationend', () => {
      img.classList.remove('bounce');
      logofall = (logofall + 1)
    }, { once: true });
  }
  else {
    document.documentElement.setAttribute('logo-fall', true);
  }
}