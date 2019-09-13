
$(document).ready(function(){

  console.log($('.cm-carousel .carousel')[0].id);
  for(var i = 0 ; i < $('.cm-carousel .carousel').length; i++){
    $('.cm-carousel .carousel')[i].id
    console.log($('.cm-carousel .carousel')[i].id);
    $('#'+ $('.cm-carousel .carousel')[i].id + ' .carousel-item')[0].classList.add('active')

    if($('#'+ $('.cm-carousel .carousel')[i].id + ' .carousel-item').length == 1){
      $('#'+ $('.cm-carousel .carousel')[i].id + ' .carousel-control-prev')[0].classList.add('is-hidden')
      $('#'+ $('.cm-carousel .carousel')[i].id + ' .carousel-control-next')[0].classList.add('is-hidden')
      $('#'+ $('.cm-carousel .carousel')[i].id + ' .carousel-indicators')[0].classList.add('is-hidden')
    }

  }
})
