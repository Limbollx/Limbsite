let currentTheme = JSON.parse(localStorage.getItem("theme"));
setTheme();


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
  document.documentElement.scrollTop = 900;
}
function project() {
  document.documentElement.scrollTop = 1900;
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
    start: 699,
    end: 1600,
    img: './images/social.png',
    e_img: './images/e_social.png'
  },
  {
    name: 'project',
    start: 1599,
    end: 3000,
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

window.addEventListener('scroll', switchNavImages);
switchNavImages();

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