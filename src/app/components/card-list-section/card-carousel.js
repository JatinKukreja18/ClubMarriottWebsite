// no js for this component yet
$(document).ready(function(){

  $('.cards-carousel').owlCarousel({
    margin:0,
    nav:true,
    items:1,
    dots:false,
    responsive:{
        0:{
            // center: true,
            loop:true,
            margin:0,
            items:1
        },
        768:{
          center: false,
          items:4,
          loop:false
        },
        1000:{
            center: false,
            items:4,
            loop:false
        }
    }
  })
  })
