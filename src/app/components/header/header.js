
$(document).ready(function(){
  $('.cm-header-hamburger-link').on('click',function(){
    document.querySelector('.cm-header-hamburger-link').classList.toggle('cm-header-hamburger-link-opened');
    document.querySelector('.cm-header-hamburger').classList.toggle('cm-header-hamburger-opened');
    if(document.querySelector('.cm-header-hamburger').classList.contains('cm-header-hamburger-opened')){
      document.scrollingElement.style.overflowY = 'hidden';
    }else{
      document.scrollingElement.style.overflowY = 'auto';
    }
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

  // open drawer become a member
  $('.cm-member-drawer-link').on('click',function(){
    document.querySelector('.cm-member-drawer').classList.toggle('cm-member-drawer-opened');
    document.querySelector('.cm-member-drawer-overlay').classList.toggle('cm-member-drawer-overlay-opened');
    document.querySelector('.cm-header-hamburger-link').classList.remove('cm-header-hamburger-link-opened');
    document.querySelector('.cm-header-hamburger').classList.remove('cm-header-hamburger-opened');
    if(document.querySelector('.cm-member-drawer').classList.contains('cm-member-drawer-opened')){
      document.scrollingElement.style.overflowY = 'hidden';
    }else{
      document.scrollingElement.style.overflowY = 'auto';
    }
  })
})
