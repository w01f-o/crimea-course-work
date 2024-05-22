const burgerMenu = document.querySelector(".burger");

document.body.addEventListener("click", (e) => {
  if (e.target.matches(".burger__button")) {
    burgerMenu.classList.toggle("burger_open");
  }

  if (
    !e.target.matches(".burger__button") &&
    !e.target.matches(".burger__menu")
  ) {
    burgerMenu.classList.remove("burger_open");
  }
});

document.querySelectorAll(".places__link").forEach((link) => {
  if (link.href === window.location.href) {
    link.classList.add("places__link_active");
  }
});
