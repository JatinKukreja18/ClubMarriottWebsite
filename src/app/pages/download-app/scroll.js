$(document).ready(function(){

  if(window.location.pathname == '/download-app'){
    $(document).on('scroll',function(){

      // handelling section 1
      const ssheight = document.querySelector('.sticky-sections').offsetHeight
      const sstop = document.querySelector('.sticky-sections').offsetTop
      if($(document).scrollTop() >= sstop){
        $('.sticky-section').addClass('fixed');
        $('.sticky-sections').removeClass('align-bottom');
      }else{
        $('.sticky-section').removeClass('fixed');
      }
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

      // handelling section 2
      const ss2height = document.querySelector('.sticky-sections-part-2').offsetHeight
      const ss2top = document.querySelector('.sticky-sections-part-2').offsetTop
      const difference2 = ((ss2height /3)*2)/3

      if($(document).scrollTop() >= ss2top){
        $('.sticky-section-part-2').addClass('fixed');
        $('.sticky-sections-part-2').removeClass('align-bottom');
      }else{
        $('.sticky-section-part-2').removeClass('fixed');
      }
      if($(document).scrollTop()- ss2top >= difference2){
        $('.sticky-section-part-2').addClass('section-3');

      }else{
        $('.sticky-section-part-2').removeClass('section-3');
      }
      // if($(document).scrollTop()- ss2top >= difference2*2){
      //   $('.sticky-section-part-2').addClass('section-3');
      // }else{
      //   $('.sticky-section-part-2').removeClass('section-3');
      // }
      // reset fixed
      if($(document).scrollTop()- ss2top >= (ss2height /3)*2 ){
        $('.sticky-section-part-2').removeClass('fixed');
        $('.sticky-sections-part-2').addClass('align-bottom');
      }

      if($(document).scrollTop() >= document.querySelector('#personal-section-1').offsetTop){
        $('#personal-section-2 .image-banner img').addClass('shift');
      }
    })
  }
})
