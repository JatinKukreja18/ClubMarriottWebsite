
$(document).ready(function(){
  $('.cm-header-hamburger-link').on('click',function(){
    document.querySelector('.cm-header-hamburger-link').classList.toggle('cm-header-hamburger-link-opened');
    document.querySelector('.cm-header-hamburger').classList.toggle('cm-header-hamburger-opened');
  })
  var lastScrollTop = 0;
  $(window).scroll(function(event){
    var st = $(this).scrollTop();
    if (st > lastScrollTop && st > 150){
        document.querySelector('.cm-header').classList.add('cm-hidden');
    } else {
      document.querySelector('.cm-header').classList.remove('cm-hidden');
    }
    lastScrollTop = st;
  });
})
