$(document).ready(function(){

  // $('.cm-left-sticky').addClass('affix-it');
  $('.cm-right-adjust').css('margin-left','auto')

  $(document).on('scroll',function(){
    if(document.scrollingElement.scrollTop > document.querySelector('.cm-footer').offsetTop - 460){
      $('.cm-left-sticky.affix-it').addClass('stop');
    }
    else{
      $('.cm-left-sticky.affix-it').removeClass('stop');
    }

    if(document.scrollingElement.scrollTop <= document.querySelector('.sticky-container').offsetTop - 100){
      $('.cm-left-sticky').removeClass('affix-it');
      // $('.cm-right-adjust').css('margin-left','auto')
    }else{
      $('.cm-left-sticky').addClass('affix-it');
    }
  })
})
