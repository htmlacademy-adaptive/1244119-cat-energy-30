const headerToggle = document.querySelector(".main-header__toggle")
const headerNav = document.querySelector(".main-nav")
const mapContainer = document.querySelector(".map__iframe-container")

const openNav = () => {
  headerToggle.classList.toggle("main-header__toggle--open")
  headerNav.classList.toggle("main-nav--open")
}

headerToggle.addEventListener("click", openNav);

mapContainer.classList.remove("map__iframe-container--no-js")
