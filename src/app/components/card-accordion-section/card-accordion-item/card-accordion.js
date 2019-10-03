$(document).ready(function(){
  $('.cm-card-accordion-link').on('click',function(){
    console.log(this.parentElement.parentElement.classList.toggle('is-opened'))
  })
})

