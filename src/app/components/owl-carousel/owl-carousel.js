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
        275:{
            items:2,
            center: true,
            margin:14,
            nav:false,
            startPosition:1
        },
        768:{
          items:3
        }
    }
});
});
