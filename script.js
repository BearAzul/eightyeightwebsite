// Deklarasi untuk Button Hamburger dan Menu-List
const btnBurger = document.getElementById("burger");
const navlink = document.getElementById("menu-list");

// Deklarasi untuk Icon Humburger dan X 
const burgerIcon = btnBurger.querySelector(".fa-bars");
const closeIcon = btnBurger.querySelector(".fa-xmark");

btnBurger.addEventListener("click", () => {
  navlink.classList.toggle("active");

  // Toggle the visibility of the burger and close icons
  burgerIcon.classList.toggle("hidden");
  closeIcon.classList.toggle("hidden");
});

// Event Window Scroll, hilangkan Menu-List dan Ubah menjadi icon Burger
window.addEventListener("scroll", () => {
  // Hilangkan menu-list and munculkan icon burger, Jika menu-list aktif
  if (navlink.classList.contains("active")) {
    navlink.classList.remove("active");

    burgerIcon.classList.remove("hidden");
    closeIcon.classList.add("hidden");
  }
});

// Event Window Click, hilangkan Menu-List dan Ubah menjadi icon Burger
window.addEventListener("click", (e) => {
  if (e.target != burgerIcon) {
    if (navlink.classList.contains("active")) {
      navlink.classList.remove("active");

      burgerIcon.classList.remove("hidden");
      closeIcon.classList.add("hidden");
    }
  }
});

// Sembunyikan dan Munculkan Card produk lebih banyak
const show = document.getElementById("show");
const item = document.getElementById("hide");
const arrow = document.getElementById("arrow");
const text = document.getElementById("text");

show.addEventListener("click", () => {
  item.classList.toggle("active");
  if (item.classList.contains("active")) {
    text.innerHTML = "Tampilkan Lebih Sedikit...";
    arrow.classList.remove("fa-caret-down");
    arrow.classList.add("fa-sort-up");
  } else {
    text.innerHTML = "Tampilkan Lebih Banyak...";
    arrow.classList.remove("fa-sort-up");
    arrow.classList.add("fa-caret-down");
  }
});

// Button to Top
const scrollBtn = document.querySelector(".to-home");

document.addEventListener("scroll", () => {
  if (document.documentElement.scrollTop <= 120) {
    scrollBtn.style.display = "none";
  } else {
    scrollBtn.style.display = "block";
  }
});

// Animastion Page
AOS.init(); // AOS Library

AOS.init({
  once: true,
});

// Swiper Library, animation slide
const swiperSlide = new Swiper(".js-testimoni-slider", {
  grabCursor: false,
  spaceBetween: 30,
  loop: true,
  pagination: {
    el: ".js-testimoni-page",
    clickable: true,
  },
  breakpoints: {
    762: {
      slidesPerView: 2,
    },
  },
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
});

// Swiper Library, animation card
var swiperCard = new Swiper(".content", {
  effect: "cards",
  grabCursor: false,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
});

// Filter Card Produk
function filterObjects(color, button) {
  const cards = document.querySelectorAll(".card");
  const buttons = document.querySelectorAll(".btn-filter");

  buttons.forEach((btn) => {
    btn.classList.remove("active");
    item.classList.add("active");
    arrow.classList.add("fa-sort-up");
    arrow.classList.remove("fa-caret-down");
    text.innerHTML = "Tampilkan Lebih Sedikit...";
  });

  button.classList.add("active");

  cards.forEach((card) => {
    const cardColor = card.querySelector("h4").textContent.toLowerCase();

    if (color === "all" || cardColor.includes(color.toLowerCase())) {
      card.style.display = "grid";
    } else {
      card.style.display = "none";
    }
  });
}
