var swiper = new Swiper('.swiper-container', {
	navigation: {
	  nextEl: '.swiper-button-next',
	  prevEl: '.swiper-button-prev'
	},
	slidesPerView: 1,
	spaceBetween: 1,
	// init: false,
	pagination: {
	  el: '.swiper-pagination',
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
	} 
    });

	document.addEventListener("DOMContentLoaded", function () {

		var reservarButton1 = document.getElementById("reservarButtonRoom1");

		function redirectToPage1() {
		  var url1 = "./views/room.html";
		  window.location.href = url1;
		}
		reservarButton1.addEventListener("click", redirectToPage1);

		// Segunda redirección
		var reservarButton2 = document.getElementById("reservarButtonRoom2");

		function redirectToPage2() {
		  var url2 = "./views/room.html";
		  window.location.href = url2;
		}

		reservarButton2.addEventListener("click", redirectToPage2);

		var reservarButton3 = document.getElementById("reservarButtonRoom3");

		function redirectToPage3() {
		  var url3 = "./views/room.html";
		  window.location.href = url3;
		}

		reservarButton3.addEventListener("click", redirectToPage3);
	  });