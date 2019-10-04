
$(document).ready(function(){

  $('.search-button').on('click', function(e,el){

    const input = $(this).parent().parent().find('input').val();
    let event = new CustomEvent('do-search',{"detail": input});
    window.dispatchEvent(event);
  })
})
