
$(document).ready(function(){

  $('.search-button').on('click', function(e,el){
    const input = this.parentElement.parentElement.firstElementChild.firstElementChild.value
    let event = new CustomEvent('do-search',{"detail": input});
    window.dispatchEvent(event);
  })
})
