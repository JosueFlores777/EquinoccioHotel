var swiper = new Swiper(".swiper-container", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  slidesPerView: 1,
  spaceBetween: 1,
  // init: false,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  breakpoints: {
    620: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    680: {
      slidesPerView: 2,
      spaceBetween: 40,
    },
    920: {
      slidesPerView: 3,
      spaceBetween: 40,
    },
    1240: {
      slidesPerView: 4,
      spaceBetween: 50,
    },
  },
});

document.addEventListener("DOMContentLoaded", function () {
  function redirectToRoomPage() {
    var roomNumber = this.dataset.roomNumber;
    var url = "./views/room.html";
    window.location.href = url;
  }

  var reservarButtons = document.querySelectorAll("[id^='reservarButtonRoom']");

  reservarButtons.forEach(function (button) {
    button.addEventListener("click", redirectToRoomPage);
  });
});

document
  .getElementById("resButtonRoomOut")
  .addEventListener("click", function () {
    var link = "https://equinocciohotel.client.innroad.com/";
    window.open(link, "_blank");
  });

document
  .getElementById("resvarButtonRoomOut")
  .addEventListener("click", function () {
    var link = "https://equinocciohotel.client.innroad.com/";
    window.open(link, "_blank");
  });
