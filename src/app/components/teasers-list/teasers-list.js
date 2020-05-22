// no js for this component yet
$(document).ready(function(){

$('.teaser-owl-carousel').owlCarousel({
  margin:30,
  nav:true,
  items:1,
  dots:true,
  responsive:{
      0:{
          // center: true,
          loop:true,
          margin:0,
          items:1
      },
      576:{
        center: false,
        items:2,
        loop:false
      },
      768:{
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
