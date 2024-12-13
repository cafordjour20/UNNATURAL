// Landing Page

const card = document.querySelector(".card-mobile");
const cardImageMobile = document.getElementById("card-img-mobile");
const cardImageDesktop = document.getElementById("card-img-desktop");
const shopButton = document.querySelector(".shop-button-mobile");
const colorOptions = document.querySelectorAll(".color");

let currentFrontUrl = "/media/unnatural/IMG_0457.PNG";
let currentBackUrl = "/media/unnatural/IMG_0456.PNG";

colorOptions.forEach((option) => {
  option.addEventListener("click", function () {
    currentFrontUrl = this.getAttribute("data-front");
    currentBackUrl = this.getAttribute("data-back");
    cardImageMobile.src = currentFrontUrl;

    const selectedColor = this.getAttribute("data-color");
    card.style.setProperty("--selected-color", selectedColor);
    shopButton.style.setProperty("--selected-color", selectedColor);
  });
});

cardImageMobile.addEventListener("mouseenter", function () {
  cardImageMobile.src = currentBackUrl;
});

cardImageMobile.addEventListener("mouseout", function () {
  cardImageMobile.src = currentFrontUrl;
});

colorOptions.forEach((option) => {
  option.addEventListener("click", function () {
    colorOptions.forEach((opt) => opt.classList.remove("selected-color"));
    this.classList.add("selected-color");
  });
});

// Unconventional Hoodie

function changeImage(src) {
  document.getElementById("main-image").src = src;
}

function selectColor(element, color) {
  document
    .querySelectorAll(".color")
    .forEach((el) => el.classList.remove("selected"));
  element.classList.add("selected");

  const hoodieImages = {
    black: "/media/unnatural/IMG_0457.PNG",
    purple: "/media/unnatural/IMG_0453.PNG",
    green: "/media/unnatural/IMG_0455.PNG",
  };

  const frontThumbnailImages = {
    black: "/media/unnatural/IMG_0457.PNG",
    purple: "/media/unnatural/IMG_0453.PNG",
    green: "/media/unnatural/IMG_0455.PNG",
  };
  const backThumbnailImages = {
    black: "/media/unnatural/IMG_0456.PNG",
    purple: "/media/unnatural/IMG_0452.PNG",
    green: "/media/unnatural/IMG_0454.PNG",
  };

  document.getElementById("main-image").src = hoodieImages[color];
  document.querySelector(".product-image-thumbnail-front").src =
    frontThumbnailImages[color];
  document.querySelector(".product-image-thumbnail-back").src =
    backThumbnailImages[color];
}

const loginModal = document.getElementById("login-modal");
const openModalBtn = document.getElementById("open-modal-btn"); // Replace with your actual trigger button
const closeModalBtn = loginModal.querySelector(".btn-close");

// Open Modal
openModalBtn.addEventListener("click", () => {
  loginModal.classList.add("show");
});

// Close Modal
closeModalBtn.addEventListener("click", () => {
  loginModal.classList.remove("show");
});

// Close Modal on Background Click
loginModal.addEventListener("click", (e) => {
  if (e.target === loginModal) {
    loginModal.classList.remove("show");
  }
});
