document.addEventListener("DOMContentLoaded", () => {
  const toggleNav = () => {
    document.querySelector("nav").classList.toggle("display-block");
    document.querySelector("ul").classList.toggle("open");
    document.querySelector(".open-button").classList.toggle("display-none");
    document.querySelector(".close-button").classList.toggle("display-block");
    document.querySelector("header").classList.toggle("header");
  };

  document.querySelector(".open-button").addEventListener("click", toggleNav);

  document.querySelector(".close-button").addEventListener("click", toggleNav);

  document.querySelectorAll("li").forEach((liElement) => {
    liElement.addEventListener("click", toggleNav);
  });
});
