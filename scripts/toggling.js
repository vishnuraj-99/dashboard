//----toggling transaction sec
const dropdown = document.querySelectorAll(".toggle-icon-wrapr");
//const descContainer = document.querySelector(".transaction-desc-container");
// const singleTransactioncontainer = document.querySelector(
//   ".single-transaction-box"
// );

dropdown.forEach((el) => {
  el.addEventListener("click", (e) => {
    const singleTransactioncontainer = e.currentTarget.closest(
      ".single-transaction-box"
    );
    const descContainer = singleTransactioncontainer.querySelector(
      ".transaction-desc-container"
    );
    const toggleIcon = singleTransactioncontainer.querySelector(".toggle-icon");

    descContainer.classList.toggle("show-section");

    if (descContainer.classList.contains("show-section")) {
      toggleIcon.src = "./images/trans-arrow-up.svg"; //chnging icon to up
    } else {
      toggleIcon.src = "./images/trans-arrow-dwn.svg";
    }
  });
});
//toggling side bar in window mode
const sidebarClose = document.querySelector(".si-close-wrapr");
const openSideBar = document.querySelector(".side-bar-minimized-icon-wrapr");

const sideBarContainer = document.querySelector(".side-bar-sec-container");

sidebarClose.addEventListener("click", () => {
  sideBarContainer.classList.add("hide-section-imp");
  openSideBar.classList.remove("hide-section");
});

openSideBar.addEventListener("click", () => {
  sideBarContainer.classList.remove("hide-section-imp");
  openSideBar.classList.add("hide-section");
});
// ------------------------------
// --------togling sidebars financial and mybusiness
function toggleDropdown(dropdownId) {
  var dropdown = document.querySelector(".nav-item-dropdown-wrpr");
  dropdown.style.display =
    dropdown.style.display === "block" ? "none" : "block";
}

window.onclick = function (event) {
  if (!event.target.matches(".nav-item-dropdown-wrpr img")) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    for (var i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.style.display === "block") {
        openDropdown.style.display = "none";
      }
    }
  }
};
