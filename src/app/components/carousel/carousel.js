
$(document).ready(function(){

  for(var i = 0 ; i < $('.cm-carousel .carousel').length; i++){
    $('.cm-carousel .carousel')[i].id = 'cm-carousel' + i;
    console.log($('.cm-carousel .carousel')[i].id);
    $('#'+ $('.cm-carousel .carousel')[i].id + ' .carousel-item')[0].classList.add('active')

    if($('#'+ $('.cm-carousel .carousel')[i].id + ' .carousel-item').length == 1){
      $('#'+ $('.cm-carousel .carousel')[i].id + ' .carousel-control-prev')[0].classList.add('is-hidden')
      $('#'+ $('.cm-carousel .carousel')[i].id + ' .carousel-control-next')[0].classList.add('is-hidden')
      $('#'+ $('.cm-carousel .carousel')[i].id + ' .carousel-indicators')[0].classList.add('is-hidden')

    }else{
      generateDots('#'+ $('.cm-carousel .carousel')[i].id);
    }

  }
})

function generateDots(id) {
  console.log($(id + " .carousel-item").length);
  for (let i = 0; i < $(id + " .carousel-item").length; i++) {
    if(i == 0 ){
      $(id + ' .carousel-indicators').append('<li data-target="' + id + '" data-slide-to="'+ i + '" class="round active"></li>')
    }else{
      $(id + ' .carousel-indicators').append('<li data-target="' + id + '" data-slide-to="'+ i + '" class="round"></li>')
    }
  }
  // carousel-indicators
}
