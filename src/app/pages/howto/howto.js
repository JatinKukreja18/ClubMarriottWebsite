// $(document).ready(function(){
//   if(document.querySelector("#general-list2")){
//     var children = document.querySelector("#general-list2").children;
//     var children2 = document.querySelector("#membership-list2").children;


//   for (let i = 0; i < children.length; i++) {
//     const element = children[i];
//     element.children[0].innerHTML = i + 1 + '.';
//     element.id= "general-list-item-" + (i + 1);
//   }
//   for (let i = 0; i < children2.length; i++) {
//     const element = children2[i];
//     element.children[0].innerHTML = i + 1 + '.';
//     element.id= "membership-list-item-" + (i + 1);
//   }
//   }
//   $('.cm-accordion-link2').on('click',function(){
//     $('.cm-accordion-item:not(#' + this.parentElement.id + ')').removeClass('active');
//     var heightOfContent = document.querySelector('#'+this.parentElement.id).querySelector('.cm-accordion-content p').clientHeight + 'px';
//     console.log(heightOfContent)
//     if(this.parentElement.classList.contains('active')){
//       $(this).parent().find('.cm-accordion-content').css('height','0px')
//     }else{
//       $('.cm-accordion-content').css('height','0px');
//       $(this).parent().find('.cm-accordion-content').css('height',heightOfContent)
//     }
//     $(this).parent().toggleClass('active');
//   })
// })
$(document).ready(function(){
    if(document.querySelector("#sign-list")){
      var children = document.querySelector("#sign-list").children;
      var children2 = document.querySelector("#membership-list").children;
  
  
    for (let i = 0; i < children.length; i++) {
      const element = children[i];
      element.children[0].innerHTML = i + 1 + '.';
      element.id= "sign-list-item-" + (i + 1);
    }
    for (let i = 0; i < children2.length; i++) {
      const element = children2[i];
      element.children[0].innerHTML = i + 1 + '.';
      element.id= "membership-list-item-" + (i + 1);
    }
    }
    $('.cm-accordion-link2').on('click',function(){
      $('.cm-accordion-item:not(#' + this.parentElement.id + ')').removeClass('active');
      var heightOfContent = document.querySelector('#'+this.parentElement.id).querySelector('.cm-accordion-content p').clientHeight + 'px';
      console.log(heightOfContent)
      if(this.parentElement.classList.contains('active')){
        $(this).parent().find('.cm-accordion-content').css('height','0px')
      }else{
        $('.cm-accordion-content').css('height','0px');
        $(this).parent().find('.cm-accordion-content').css('height','auto');
        $('html,body').animate({
          scrollTop: $(this).closest(".cm-accordion-item").offset().top
      }, 500); 
      }
      $(this).parent().toggleClass('active');
    })
  })
  


$(function() {
    // attach click event handlers to the sidenav links with the class page-link2 of accordion
    $("li.page-link2").on("click", function() {
        var ref = $(this).data("page");
        $(ref).toggleClass('active');
        $(ref).find('.cm-accordion-content').css('height','auto');
        $(ref).siblings().removeClass('active');
        $(ref).siblings().find('.cm-accordion-content').css('height','0px');
        $('html,body').animate({
            scrollTop: $(ref).offset().top
        }, 500); 
    
    });
});
$(function() {
     // attach click event handlers to the accordion with the class sidenav links
$(".cm-plus.cm-accordion-link").on("click", function() {
    var ref = $(this).parent().data("page");
    $(ref).toggleClass('gold');
    $(ref).siblings().removeClass('gold');
});
});
// $(window).scroll(function(e){ 
//     var $el = $('.fixedElement'); 
//     var isPositionFixed = ($el.css('position') == 'fixed');
//     if ($(this).scrollTop() > 600 && !isPositionFixed){ 
//       $el.css({'position': 'fixed', 'top': '0px'}); 
//     }
//     if ($(this).scrollTop() < 600 && isPositionFixed){
//       $el.css({'position': 'static', 'top': '0px'}); 
//     } 
//   });