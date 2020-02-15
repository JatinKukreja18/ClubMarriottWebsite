$(document).ready(function(){

  $('.section-link-item').on('click',function(){
    // document.querySelector(this.dataset.href).scrollIntoView({block:'center',behavior:'smooth'});
    document.scrollingElement.style.scrollBehavior = 'smooth';
    document.scrollingElement.scrollTop =  document.querySelector('#terms-conditions').offsetTop + document.querySelector(this.dataset.href).offsetTop;
  })

  if(document.querySelector('#terms-conditions')){
    $(document).on('scroll',function(){

      if(document.scrollingElement.scrollTop <= document.querySelector('#terms-conditions').offsetTop){
        $('.section-links').removeClass('is-fixed');
        // $('.cm-right-adjust').css('margin-left','auto')
      }else{
        $('.section-links').addClass('is-fixed');
          if(document.scrollingElement.scrollTop + window.innerHeight > document.querySelector('#terms-conditions').offsetHeight + document.querySelector('#terms-conditions').offsetTop - 100){
            $('.section-links').addClass('is-bottom');
          }else{
            $('.section-links').removeClass('is-bottom');
          }
      }

      // Manage active classes
      var allSections = document.querySelectorAll('.terms-section-heading');

      for (let i = 0; i < allSections.length; i++) {
        const element = allSections[i];
        if(document.scrollingElement.scrollTop > document.querySelector('#' + element.id).offsetTop +  document.querySelector('#terms-conditions').offsetTop - 100){
          resetAllLinks();
          document.querySelector("a[data-href='#" + element.id  + "']").classList.add('active');
        }
      }

    })
  }
})

function resetAllLinks(){
  var allLinks = document.querySelectorAll('.section-link-item');
  for (let i = 0; i < allLinks.length; i++) {
    const element = allLinks[i];
    element.classList.remove('active');
  }
}
