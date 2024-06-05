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

function handleSocialAppearance() {
  const scrollPosition = window.scrollY;
  const socialAppear = scrollPosition > 600 && scrollPosition < 1400;

  document.documentElement.setAttribute('social-appear', socialAppear);
}
function handleProjectAppearance() {
  const scrollPosition = window.scrollY;
  const projectAppear = scrollPosition > 1500 && scrollPosition < 2100;

  document.documentElement.setAttribute('project-appear', projectAppear);
}

window.addEventListener('scroll', handleSocialAppearance);
window.addEventListener('scroll', handleProjectAppearance);

handleSocialAppearance();
handleProjectAppearance();