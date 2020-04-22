$(document).ready(function(){
  $('.cm-owl-carousel').owlCarousel({
    center: false,
    items:3,
    loop:false,
    // autoWidth: true,
    smartSpeed: 1000,
    margin:27,
    nav:true,
    responsive:{
        600:{
            items:1
        },
        769:{
          items:3
        }
    }
});
});
