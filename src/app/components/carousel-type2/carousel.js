
$(document).ready(function () {
  //   $('.carousel.carousel-type-two').carousel({
  //     interval: 5000,
  //     // pause:false
  //   })
  $('.owl-carousel.owl-exp').owlCarousel({
    margin: 10,
    loop: true,
    autoWidth: true,
    items: 2,
    dots: false,
    center: true,
    nav: true,
    smartSpeed: 1000
  })
  var hasScrolled = false;
  window.addEventListener('scroll', function () {
    if (!hasScrolled) {
      var allvideos = document.querySelectorAll('.owl-item video');
      for (i = 0; i < allvideos.length; i++) {
        allvideos[i].play()
        console.log('here');
      }
      hasScrolled = true;
    }
  })
})
