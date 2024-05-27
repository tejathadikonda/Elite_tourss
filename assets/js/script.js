'use strict';

/**
 * navbar toggle
 */

const navToggleBtn = document.querySelector("[data-nav-toggle-btn]");
const header = document.querySelector("[data-header]");

navToggleBtn.addEventListener("click", function () {
  this.classList.toggle("active");
  header.classList.toggle("active");
});


/**
 * show go top btn when scroll window to 500px
 */

const goTopBtn = document.querySelector("[data-go-top]");

window.addEventListener("scroll", function () {
  window.scrollY >= 500 ? goTopBtn.classList.add("active")
    : goTopBtn.classList.remove("active");
});


/**
 * Redirect to WhatsApp URL on button clicks
 */

const redirectToWhatsApp = (event) => {
  event.preventDefault(); // Prevent the default button behavior
  window.open("https://api.whatsapp.com/send?phone=917095664110&text=Hello..sir%20", "_blank");
};

// Select all buttons with the class "btn"
const buttons = document.querySelectorAll(".btn");

// Add event listeners to all buttons
buttons.forEach(button => {
  button.addEventListener("click", redirectToWhatsApp);
});

const buttons1 = document.querySelectorAll('.button-27');

buttons1.forEach(button => {
  button.addEventListener('click', function() {
    window.open('https://forms.gle/Rse9KeajrMkenvjE9', '_blank');
  });
});

const bookingButton = document.querySelector('.main-button');

bookingButton.addEventListener('click', function() {
  window.open('https://forms.gle/Rse9KeajrMkenvjE9', '_blank');
});

