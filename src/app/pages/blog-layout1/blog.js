$(document).ready(function(){

  // $('.cm-left-sticky').addClass('affix-it');
  // $('.cm-right-adjust').css('margin-left','auto')
  if($('.cm-right-adjust').length){
    $(document).on('scroll',function(){
      var $el = $('.cm-layout1-left-sticky');  //record the elem so you don't crawl the DOM everytime
      var bottom = $el.offset().top + $el.outerHeight(true);
      console.log(document.scrollingElement.scrollTop);
      console.log(bottom);

      if(document.scrollingElement.scrollTop > bottom - 400){
        $('.cm-layout1-left-sticky').addClass('affix-it');
        // $('.cm-right-adjust').css('margin-left','auto')
      }else{
        // $('.cm-layout1-left-sticky').removeClass('affix-it');
      }

      // if(document.scrollingElement.scrollTop <= document.querySelector('.sticky-container').offsetTop - 100){
      //   $('.cm-left-sticky').removeClass('affix-it');
      //   // $('.cm-right-adjust').css('margin-left','auto')
      // }else{
      //   $('.cm-left-sticky').addClass('affix-it');
      // }
    })
  }
})
