const toggleButton = document.getElementsByClassName("toggle-button")[0];
const navbarLinks = document.getElementsByClassName("nav-links")[0];
const navbarButtons = document.querySelectorAll(".nav-button");

toggleButton.addEventListener("click", () => {
  navbarLinks.classList.toggle("active");
});

for (let i=0; i < navbarButtons.length; i++) {
    navbarButtons[i].addEventListener("click", () => {
        navbarLinks.classList.toggle("active");
    })
}