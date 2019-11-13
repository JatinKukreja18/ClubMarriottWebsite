// no js for this component yet
$(document).ready(function(){
  var CCElements =  document.querySelectorAll('.cards-carousel');
  var slideCount = 0;
  for (let i = 0; i < CCElements.length; i++) {
    const element = CCElements[i];
    slideCount = parseInt(element.dataset.slides)

    initiate(element,slideCount)
  }

  })
function initiate(el,c){
  $(el).owlCarousel({
    margin:30,
    nav:true,
    items:2,
    dots:false,
    responsive:{
        0:{
            // center: true,
            loop:true,
            margin:30,
            items:2
        },
        768:{
          center: false,
          items:c,
          loop:false
        }
    }
  })
}
