
$(document).ready(function(){
    $('.cm-select .arrow-down').on('click',function(){
      this.parentElement.classList.toggle('active');
      this.parentElement.querySelector('.cm-select-options').classList.toggle('in');
    })
    $('.cm-select-option').on('click',function(){
      unselectAll();
      this.classList.add('active')
      this.classList.add('selected');
      this.parentElement.parentElement.querySelector('.cm-input').value = this.dataset.value;
      this.parentElement.classList.toggle('in');
      $('.cm-select.active').removeClass('active')
    })

    $('.cm-input').on('change',function(){
      if(!this.classList.contains('touched') && this.value.length > 0){
        this.classList.add('touched');
      }else if(this.value.length == 0 || this.value.length == null){
        this.classList.remove('touched');
      }
    })
})
function unselectAll(){
  $('.cm-select-option').removeClass('active');
}
