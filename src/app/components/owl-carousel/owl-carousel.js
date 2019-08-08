$(document).ready(function(){
  $('.cm-owl-carousel').owlCarousel({
    center: true,
    items:2,
    loop:true,
    margin:30,
    nav:true,
    responsive:{
        600:{
            items:3
        },
        769:{
          items:3
        }
    }
});
});
