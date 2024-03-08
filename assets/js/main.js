const sr = new ScrollReveal({
  origin: "top",
  distance: "160px",
  duration: 3000,
  delay: 100,
  scale: 0.5,
  reset: true,
});
const sr2 = new ScrollReveal({
  origin: "bottom",
  distance: "10px",
  duration: 3000,
  delay: 100,
  scale: 0.5,
  reset: true,
});

sr.reveal("#Gastronomia .contenedor-gatronomia .card", {
  interval: 300,
});

sr2.reveal("#Gastronomia .contenedor-gatronomia .card", {
  interval: 300,
});

const sr4 = new ScrollReveal({
  origin: "top",
  distance: "160px",
  duration: 3000,
  delay: 0,
  scale: 1 - 1,
});

sr4.reveal(".card2", {
  origin: "bottom-left",
  interval: 200,
});

sr4.reveal(".grid-card-animation", {
  origin: "left",
});

sr4.reveal(".grid-card-animation2", {
  origin: "left",
});

sr4.reveal(".grid-card-animation3", {
  origin: "top",
});
sr4.reveal(".grid-card-animation4", {
  origin: "bottom",
});

sr4.reveal(".card3", {
  origin: "bottom",
  interval: 200,
});

const sr5 = new ScrollReveal({
  origin: "bottom",
  distance: "160px",
  duration: 3000,
  delay: 400,
  scale: 0.5,
});
sr5.reveal(".card2", {
  origin: "bottom-left",
  interval: 200,
});

sr5.reveal(".card3", {
  origin: "bottom",
  interval: 200,
});

const sr7 = ScrollReveal({
  duration: 2000,
  delay: 300,
  origin: "top",
  distance: "180px",
});

sr7.reveal(".titlemain", {
  origin: "top",
  interval: 200,
});

/* Vista de cuartos*/

/* Animacion*/

$(document).ready(function () {
  function performAnimation() {
    var x = window.innerWidth / 2;
    var y = window.innerHeight;

    $(".page1").css("z-index", 1);

    anime({
      targets: $(".page1"),
      duration: 5000,
      update: function (anim) {
        $(".page1").css(
          "clip-path",
          "circle(" + anim.progress * 2 + "% at " + x + "px " + y + "px)"
        );
      },
    });
  }

  performAnimation();
});
