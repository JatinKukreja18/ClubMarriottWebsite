$(document).ready(function(){
  var children = document.querySelector("#general-list").children;
  var children2 = document.querySelector("#membership-list").children;

  for (let i = 0; i < children.length; i++) {
    const element = children[i];
    element.children[0].innerHTML = i + 1 + '.';
    element.id= "general-list-item-" + (i + 1);
  }
  for (let i = 0; i < children2.length; i++) {
    const element = children2[i];
    element.children[0].innerHTML = i + 1 + '.';
    element.id= "membership-list-item-" + (i + 1);
  }

  $('.cm-accordion-link').on('click',function(){
    $('.cm-accordion-item:not(#' + this.parentElement.id + ')').removeClass('active');
    var heightOfContent = $(this).parent().find('.cm-accordion-content p').height();

    if(this.parentElement.classList.contains('active')){
      $(this).parent().find('.cm-accordion-content').css('height','0px')
    }else{
      $(this).parent().find('.cm-accordion-content').css('height',heightOfContent)
    }
    $(this).parent().toggleClass('active');
  })
})

