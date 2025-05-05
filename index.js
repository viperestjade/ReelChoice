document.getElementById("surpriseBtn").addEventListener("click", function() {
  alert("Here's a surprise movie recommendation!");
});

document.getElementById("filtersBtn").addEventListener("click", function() {
  alert("Let's apply some filters to find your movie!");
});

document.querySelector('.menu-icon').addEventListener('click', function () {
  document.getElementById('sideMenu').classList.toggle('active');
});

function closeMenu() {
  document.getElementById('sideMenu').classList.remove('active');
}

