let menubtn = document.getElementById("menu-btn");
let close = document.getElementById("close");
let menu = document.querySelector(".mobile-menu");
menubtn.addEventListener("click", (e) => {
  console.log(menu);
  menu.style.display = "block";
});
close.addEventListener("click", () => {
  menu.style.display = "none";
});
