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
        320:{
            items:2,
            center: true
        },
        769:{
          items:3
        }
    }
});
});
