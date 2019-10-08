$(document).ready(function(){

  if(document.querySelector('#blog-layout-3')){
    $(document).on('scroll',function(){

      if(document.scrollingElement.scrollTop <= document.querySelector('#blog-layout-3').offsetTop){
        $('.blog-fixed-navigation').removeClass('show');
        // $('.cm-right-adjust').css('margin-left','auto')
      }else{
        $('.blog-fixed-navigation').addClass('show');
      }
    })


  // event to adjust fixed navigation with header
  var lastScrollTop = 0;
  $(window).scroll(function(event){
    var st = $(this).scrollTop();
    if (st > lastScrollTop && st > document.querySelector('#blog-layout-3').offsetTop ){
        document.querySelector('.blog-fixed-navigation').classList.add('slide-up');
    } else {
      document.querySelector('.blog-fixed-navigation').classList.remove('slide-up');
    }
    lastScrollTop = st;
  });
  }
})
