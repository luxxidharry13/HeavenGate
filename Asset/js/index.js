// Navbar toggle functionality
const navbar = document.querySelector(".navbar");
const navtogglebtn = document.querySelector(".navtogglebtn");

navtogglebtn.addEventListener("click", () => {
  navbar.classList.toggle("showNav");
});

// Close navbar when clicking on a nav link (for mobile)
const navlinks = document.querySelectorAll(".navlink");
navlinks.forEach((link) => {
  link.addEventListener("click", () => {
    navbar.classList.remove("showNav");
  });
});

// Close navbar 
// document.addEventListener("click", (e) => {
//   if (!navbar.contains(e.target) && !navtogglebtn.contains(e.target)) {
//     navbar.classList.remove("showNav");
//   }
// });

// for the carousel
let currentReview = 0;
const reviews = document.querySelectorAll(".review-card");
const totalReviews = reviews.length;

function showReview(index) {
  reviews.forEach((review, i) => {
    review.classList.toggle("active", i === index);
  });
}

function showNext() {
  currentReview = (currentReview + 1) % totalReviews;
  showReview(currentReview);
}

function showPrevious() {
  currentReview = (currentReview - 1 + totalReviews) % totalReviews;
  showReview(currentReview);
}

// Auto-advance reviews every 5 seconds
setInterval(showNext, 5000);

// Handle window resize
window.addEventListener("resize", () => {
  if (window.innerWidth > 768) {
    navbar.classList.remove("showNav");
  }
});
