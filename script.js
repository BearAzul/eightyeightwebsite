// Button Humberger
const btnBurger = document.getElementById("burger");
const navlink = document.getElementById("menu-list");

btnBurger.addEventListener("click", () => {
  navlink.classList.toggle("active");
});

// Sembunyikan dan Munculkan Item produk
const show = document.getElementById("show");
const item = document.getElementById("hide");
const arrow = document.getElementById("arrow");
const text = document.getElementById("text");

show.addEventListener("click", () => {
  if (item.style.display == "block") {
    item.style.display = "none";
    text.innerHTML = "Tampilkan Lebih Banyak...";
    arrow.classList.remove("fa-caret-up");
    arrow.classList.add("fa-sort-down");
  } else {
    item.style.display = "block";
    text.innerHTML = "Tampilkan Lebih Sedikit...";
    arrow.classList.remove("fa-sort-down");
    arrow.classList.add("fa-caret-up");
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
