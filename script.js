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