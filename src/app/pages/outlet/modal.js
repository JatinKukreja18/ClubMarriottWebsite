$(document).ready(function(){

  $('.cm-modal-link').on('click',function(){
      console.log(this.dataset.target);
      window.location.hash = this.dataset.target;
      // location.replace(window.location.pathname + this.dataset.target)
  })
  $('.cm-modal-close').on('click',function(){
    // window.location.hash ='';
    location.replace(window.location.pathname)

  })
})


