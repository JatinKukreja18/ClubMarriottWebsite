
$(document).ready(function(){
  window.addEventListener('do-search', function (e) {

    console.log(e.detail);
    let searchedString = e.detail;
    // e.detail has the search string to be mapped with backend
    // depending on the results the views will change
    if(searchedString == 'not found'){
      $('.search-results-section-active').removeClass('search-results-section-active');
      $('#not-found-container').addClass('search-results-section-active');
      $('#search-banner').addClass('is-hidden');
      scrollToResults();

    }else if(searchedString == 'abra'){
      $('.search-results-section-active').removeClass('search-results-section-active');
      $('#did-you-mean-container').addClass('search-results-section-active');
      $('#search-banner').addClass('is-hidden');
      scrollToResults();
    }
    else{
      $('#search-banner').removeClass('is-hidden');
      console.log('results found for city selected');
      $('.search-results-section-active').removeClass('search-results-section-active');
      $('#total-results').addClass('search-results-section-active');
      $('#city-offers').addClass('search-results-section-active');

      $('#total-results .hotels-listed .hotel-column').not(":first").remove();
      $('#result-title').html('Featured Hotels');
      $('#selected-city').html(e.detail.split(',')[0]);
      scrollToResults();
    }

  }, false);
})

function scrollToResults() {
  const pos = document.querySelector('.search-results-container').offsetTop;
  $('html, body').animate({
    scrollTop: pos
}, 800);

}
