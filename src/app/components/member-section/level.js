$(document).ready(function(){
  $('.level-selection-list-item').on('click',function(){
      $('.level-selection-list-item.active').removeClass('active');
      $(this).addClass('active')
      console.log($(this).data().price * 1.18);
      var gst = .18;
      gstValue = $(this).data().price + ($(this).data().price * .18)
      $('#price-value').html($(this).data().price);
      $('#price-after-gst').html(gstValue)
      $('#selected-level').html($(this).data().value)
      $('#selected-level-description').html($(this).data().description)
  })
})
