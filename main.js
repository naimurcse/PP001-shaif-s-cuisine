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

// aos animation
AOS.init({
   // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
   offset: 200, // offset (in px) from the original trigger point
   delay: 100, // values from 0 to 3000, with step 50ms
   duration: 400, // values from 0 to 3000, with step 50ms
   easing: "ease", // default easing for AOS animations
   once: false, // whether animation should happen only once - while scrolling down
   mirror: false, // whether elements should animate out while scrolling past them
   anchorPlacement: "top-bottom", // defines which position of the element regarding to window should trigger the animation
});
