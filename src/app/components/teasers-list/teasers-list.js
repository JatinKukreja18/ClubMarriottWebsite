// no js for this component yet
$(document).ready(function(){

$('.teaser-owl-carousel').owlCarousel({
  margin:30,
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
      579:{
        center: false,
        items:3,
        loop:false
      },
      1000:{
          center: false,
          items:3,
          loop:false
      }
  }
})
})
