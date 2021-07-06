
$(document).ready(function(){
    if(document.querySelector("#sign-list")){
      var children = document.querySelector("#sign-list").children;
      var children2 = document.querySelector("#manage-list").children;
      var children3 = document.querySelector("#online-list").children;
      var children4 = document.querySelector("#personal-list").children;
      var children5 = document.querySelector("#member-list").children;
  
    for (let i = 0; i < children.length; i++) {
      const element = children[i];
      element.children[0].innerHTML = i + 1 + '.';
      element.id= "sign-list-item-" + (i + 1);
    }
    for (let i = 0; i < children2.length; i++) {
      const element = children2[i];
      element.children[0].innerHTML = i + 1 + '.';
      element.id= "manage-list-item-" + (i + 1);
    }
    for (let i = 0; i < children3.length; i++) {
        const element = children3[i];
        element.children[0].innerHTML = i + 1 + '.';
        element.id= "online-list-item-" + (i + 1);
      }
      for (let i = 0; i < children4.length; i++) {
        const element = children4[i];
        element.children[0].innerHTML = i + 1 + '.';
        element.id= "personal-list-item-" + (i + 1);
      }
      for (let i = 0; i < children5.length; i++) {
        const element = children5[i];
        element.children[0].innerHTML = i + 1 + '.';
        element.id= "member-list-item-" + (i + 1);
      }
    }
    // choose which section to show first on desktop
    $('.questions-list').hide()
    if(window.innerWidth > 768){
      $('#sign-list').show();
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
      $(".cm-accordion-item.active").css('height','auto');
      $(".cm-accordion-item.active .cm-accordion-content").css('height','auto');
      var ref = $(this).parent().data("page");
      $(ref).toggleClass('gold');
      $(ref).siblings().removeClass('gold');
      $(ref).closest('.tab').find(':radio').prop('checked', true);
    });


    // $('.page-link2').on('click',function(e){
    //   // document.querySelector(this.dataset.href).scrollIntoView({block:'center',behavior:'smooth'});
    //   document.scrollingElement.style.scrollBehavior = 'smooth';
    //   document.scrollingElement.scrollTop =  document.querySelector('#howTo').offsetTop + document.querySelector(this.dataset.href).offsetTop;
    //   e.stopPropogation();
    // })
  
    if(document.querySelector('#howTo')){
      $(document).on('scroll',function(){
  
        if(document.scrollingElement.scrollTop <= document.querySelector('#howTo').offsetTop){
          $('cm-accordion-sidebar').removeClass('is-fixed');
          // $('.cm-right-adjust').css('margin-left','auto')
        }else{
          $('cm-accordion-sidebar').addClass('is-fixed');
            if(document.scrollingElement.scrollTop  > document.querySelector('#howTo').offsetHeight + document.querySelector('#howTo').offsetTop - document.querySelector('cm-accordion-sidebar').offsetHeight - 200){
              $('cm-accordion-sidebar').addClass('is-bottom');
            }else{
              $('cm-accordion-sidebar').removeClass('is-bottom');
            }
        }
  
        // Manage active classes
        var allSections = document.querySelectorAll('.cm-accordion-item');
  
        for (let i = 0; i < allSections.length; i++) {
          const element = allSections[i];
          if(document.scrollingElement.scrollTop > document.querySelector('#' + element.id).offsetTop +  document.querySelector('#howTo').offsetTop - window.innerHeight/2){
            resetAllLinks();
            // document.querySelector('#' + element.id).classList.add('active');
            // document.querySelector("a[data-href='#" + element.id  + "']").classList.add('active');
            // document.querySelector('#' + element.id).siblings().classList.remove('active');
          }
        }
  
      })
    }
  })
  function resetAllLinks(){
    var allLinks = document.querySelectorAll('.page-link2');
    for (let i = 0; i < allLinks.length; i++) {
      const element = allLinks[i];
      element.classList.remove('active');
    }
  }


$(function() {
    // attach click event handlers to the sidenav links with the class page-link2 of accordion
    $("li.page-link2").on("click", function() {
        var ref = $(this).data("page");
        var refitem = $(this).data("item");
        $('.questions-list').hide();
        $(ref).show();
        $('.cm-accordion-item').removeClass('active');
        $(refitem).toggleClass('active');
        $(refitem).css('height','auto');
        $(".cm-accordion-item.active").css('height','auto');
        $(".cm-accordion-item.active .cm-accordion-content").css('height','auto');
        $(refitem).siblings().removeClass('active');
        $(refitem).siblings().find('.cm-accordion-content').css('height','0px');
        $('html,body').animate({
            scrollTop: $(refitem).offset().top
        }, 500); 
    
    });
});
// $(function() {
//      // attach click event handlers to the accordion with the class sidenav links
// $(".cm-plus.cm-accordion-link").on("click", function() {
    
// });
// });
