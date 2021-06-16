$(document).ready(function(){
    $(".sidenav-accordion-cont .tab-content li").click(function(){
        $(this).addClass("gold");
        $(this).siblings().removeClass("gold");
        $(this).closest(".tab").siblings().children().find("li").removeClass("gold");
    });
});