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
  localStorage.setItem("theme", JSON.stringify(currentTheme));
  setTheme();
}

dropped = false;

function dropping() {
  if (dropped === true) {
    currentTheme = false;
  } else {
    currentTheme = true;
  }
}
function home() {
    document.documentElement.scrollTop = 0;
}
function social() {
  document.documentElement.scrollTop = 700;
}
function project() {
  document.documentElement.scrollTop = 1700;
}

function handleAppearances() {
  const scrollPosition = window.scrollY;

  const socialAppear = scrollPosition > 600 && scrollPosition < 1400;
  const projectAppear = scrollPosition > 1500 && scrollPosition < 2100;

  document.documentElement.setAttribute('social-appear', socialAppear);
  document.documentElement.setAttribute('project-appear', projectAppear);
}

window.addEventListener('scroll', handleAppearances);

handleAppearances();
var logofall = 0

function bounce() {
  const img = document.getElementById('bouncing');
  img.classList.add('bounce');
  if (logofall != 10) {
    img.addEventListener('animationend', () => {
      img.classList.remove('bounce');
      var logofall = (logofall + 1)
    }, { once: true });
  }
  else {
    document.documentElement.setAttribute('logo-fall', true);
  }
}