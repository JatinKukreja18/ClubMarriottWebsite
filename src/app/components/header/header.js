
$(document).ready(function(){
  $('.cm-header-hamburger-link').on('click',function(){
    document.querySelector('.cm-header-hamburger-link').classList.toggle('cm-header-hamburger-link-opened');
    document.querySelector('.cm-header-hamburger').classList.toggle('cm-header-hamburger-opened');
  })
  console.log(this);
})
