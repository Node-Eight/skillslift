const mainNav = document.querySelector(".mainNav");
const closeMenu = document.querySelector(".closeMenu");
const openMenu = document.querySelector(".openMenu");
const menu_items = document.querySelectorAll("nav .mainNav li a");

openMenu.addEventListener("click", show);
closeMenu.addEventListener("click", close);

// close menu
menu_items.forEach((item) => {
  item.addEventListener("click", function () {
    close();
  });
});

function show() {
  mainNav.style.display = "flex";
  mainNav.style.top = "0";
}
function close() {
  mainNav.style.top = "-120%";
}

// For Tab Control

var tabButtons = document.querySelectorAll(".tabs .tablink");
var tabContents = document.querySelectorAll(".tabContent");

function showContent(contentIndex) {
  tabButtons.forEach(function (node) {
    node.classList.remove("active-btn");
  });

  tabButtons[contentIndex].classList.add("active-btn");

  tabContents.forEach(function (node) {
    node.style.display = "none";
  });

  tabContents[contentIndex].style.display = "block";
}

showContent(0);

// Animated Text
var type = new Typed(".animatedTxt", {
  strings: ["Data Science", "Product Design", "Web Development", "Digital Marketing", "Graphic Design"],
  typeSpeed: 150,
  backSpeed: 150,
  loop:true,
})