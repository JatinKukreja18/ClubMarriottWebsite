
$(document).ready(function(){
  window.addEventListener('do-search', function (e) {

    console.log(e.detail);
    let searchedString = e.detail;
    // e.detail has the search string to be mapped with backend
    // depending on the results the views will change
    if(searchedString == 'not found'){
      $('.search-results-section-active').removeClass('search-results-section-active');
      $('#not-found-container').addClass('search-results-section-active');
      scrollToResults();

    }else if(searchedString == 'abra'){
      $('.search-results-section-active').removeClass('search-results-section-active');
      $('#did-you-mean-container').addClass('search-results-section-active');
      scrollToResults();
    }
    else{
      console.log('unhandled scenario');
    }

  }, false);
})

function scrollToResults() {
  const pos = document.querySelector('.search-results-container').offsetTop;
  $('html, body').animate({
    scrollTop: pos
}, 800);

}
