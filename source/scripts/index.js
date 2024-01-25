const headerToggle = document.querySelector(".main-header__toggle")
const headerNav = document.querySelector(".main-nav")

const openNav = () => {
  headerToggle.classList.toggle("main-header__toggle--open")
  headerNav.classList.toggle("main-nav--open")
}

headerToggle.addEventListener("click", openNav);
