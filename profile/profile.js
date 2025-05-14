document.querySelector('.menu-icon').addEventListener('click', function () {
  document.getElementById('sideMenu').classList.toggle('active');
});

function closeMenu() {
  document.getElementById('sideMenu').classList.remove('active');
}