$(document).ready(function(){
  $('.cm-owl-carousel').owlCarousel({
    center: false,
    items:3,
    loop:false,
    // autoWidth: true,
    margin:10,
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
