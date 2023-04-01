let menu = document.getElementById("menu-item");

let bar = document.getElementById("bars");

bar.addEventListener("click", () => {
  if (menu.style.opacity == "0") {
    menu.style.opacity = "1";
    menu.style.height = "100vh";
  } else {
    menu.style.opacity = "0";
    menu.style.height = "0vh";
  }
});
