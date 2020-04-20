function toggleSection(el){
  document.querySelector('.levels-list-item-link.active').classList.remove('active')
  el.classList.add('active')
}
// if onclick is added in html, then below code is not required.
$(document).ready(function(){
  $('.levels-list-item-link').on('click',function(){
    document.querySelector('.levels-list-item-link.active').classList.remove('active')
    $(this).addClass('active')
  })
})
