const menu = document.querySelector(".menu-icon");

menu.addEventListener("click", () => {
  menu.classList.toggle("active");

  menu.querySelectorAll(".no-animation").forEach((el) => {
    el.classList.remove("no-animation");
  });
});
