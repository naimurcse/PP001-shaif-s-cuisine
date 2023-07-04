const navListElement = document.getElementById("nav-list");
const navBgOverlayElement = document.getElementById("nav-bgOverlay");

const navOpen = () => {
    navListElement.classList.add("show");
    navBgOverlayElement.classList.add("active");
    document.body.style = "visibility: visible; height: 100vh; width: 100wh;     overflow: hidden;";
};
const navClose = () => {
    navListElement.classList.remove("show");
    navBgOverlayElement.classList.remove("active");
    document.body.style = "visibility: visible; height: initial; width: 100wh;overflow-X: hidden;";
};

document.getElementById("nav-icon").addEventListener("click", navOpen);
document.getElementById("nav-close").addEventListener("click", navClose);
document.getElementById("nav-bgOverlay").addEventListener("click", navClose);
