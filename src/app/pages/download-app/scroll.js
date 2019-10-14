$(document).ready(function(){

  $(document).on('scroll',function(){
    const ssheight = document.querySelector('.sticky-sections').offsetHeight
    const sstop = document.querySelector('.sticky-sections').offsetTop
    if($(document).scrollTop() >= sstop){
      $('.sticky-section').addClass('fixed');
      $('.sticky-sections').removeClass('align-bottom');
    }else{
      $('.sticky-section').removeClass('fixed');
    }
    console.log($(document).scrollTop()- sstop);
    console.log(ssheight /4);
    let difference = ((ssheight /4)*3)/4
    if($(document).scrollTop() - sstop >= difference){
      $('.sticky-section').addClass('section-2');
      $('#sticky-image-2').addClass('visible');
    }
    else{
      $('.sticky-section').removeClass('section-2');
      $('#sticky-image-2').removeClass('visible');
    }
    if($(document).scrollTop()- sstop >= difference*2){
      $('.sticky-section').addClass('section-3');
      $('#sticky-image-3').addClass('visible');

    }else{
      $('.sticky-section').removeClass('section-3');
      $('#sticky-image-3').removeClass('visible');
    }
    if($(document).scrollTop()- sstop >= difference*3){
      $('.sticky-section').addClass('section-4');
      $('#sticky-image-4').addClass('visible');

    }else{
      $('.sticky-section').removeClass('section-4');
      $('#sticky-image-4').removeClass('visible');
    }
    if($(document).scrollTop()- sstop >= (ssheight /4)*3 ){
      $('.sticky-section').removeClass('fixed');
      $('.sticky-sections').addClass('align-bottom');
    }
  })
})
