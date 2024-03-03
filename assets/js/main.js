const sr = new ScrollReveal({
    origin: 'top', 
    distance: '160px',
    duration: 3000,
    delay: 100,
    scale: 0.5,
    reset: true
});
const sr2 = new ScrollReveal({
    origin: 'bottom', 
    distance: '160px',
    duration: 3000,
    delay: 100,
    scale: 0.5,
    reset: true
});


sr.reveal('#Gastronomia .contenedor-gatronomia .card', {
    interval: 300, 
  
});



sr2.reveal('#Gastronomia .contenedor-gatronomia .card', {
    interval: 300, 
  
});



const sr4 = new ScrollReveal({
    origin: 'top',
    distance: '160px',
    duration: 3000,
    delay: 400,
    scale: 0.5 
});

sr4.reveal('.card2', {
    origin: 'bottom-left', 
    interval: 200, 

});

sr4.reveal('.card3', {
    origin: 'bottom', 
    interval: 200, 
  
});

const sr5 = new ScrollReveal({
    origin: 'bottom',
    distance: '160px',
    duration: 3000,
    delay: 400,
    scale: 0.5 
});
sr5.reveal('.card2', {
    origin: 'bottom-left', 
    interval: 200, 

});

sr5.reveal('.card3', {
    origin: 'bottom', 
    interval: 200, 
  
});


const sr7 = ScrollReveal({
    duration: 2000, 
    delay: 300, 
    origin: 'bottom', 
    distance: '250px', 
});

sr7.reveal('.titlemain', {
    origin: 'bottom', 
    interval: 200,
});