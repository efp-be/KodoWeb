// menu burger
const burger = document.querySelector(".burger");
const menu = document.querySelector(".nav-links");

// ouvre ou ferme le menu quand on clique sur le burger
burger.addEventListener("click", function () {
  menu.classList.toggle("open");
});

// ferme le menu quand on clique sur un lien
const liens = document.querySelectorAll(".nav-links a");

liens.forEach(function (lien) {
  lien.addEventListener("click", function () {
    menu.classList.remove("open");
  });
});