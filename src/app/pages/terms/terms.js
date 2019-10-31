$(document).ready(function(){

  $('.section-link-item').on('click',function(){
    document.querySelector(this.dataset.href).scrollIntoView({block:'center',behavior:'smooth'});
    // document.scrollingElement.scrollTop = document.querySelector(this.dataset.href).offsetTop;
  })

  if(document.querySelector('#terms-conditions')){
    $(document).on('scroll',function(){

      if(document.scrollingElement.scrollTop <= document.querySelector('#terms-conditions').offsetTop){
        $('.section-links').removeClass('is-fixed');
        // $('.cm-right-adjust').css('margin-left','auto')
      }else{
        $('.section-links').addClass('is-fixed');
          if(document.scrollingElement.scrollTop > document.querySelector('#terms-conditions').offsetHeight + document.querySelector('#terms-conditions').offsetTop - 344){
            $('.section-links').addClass('is-bottom');
          }else{
            $('.section-links').removeClass('is-bottom');
          }
      }
    })
  }
})

