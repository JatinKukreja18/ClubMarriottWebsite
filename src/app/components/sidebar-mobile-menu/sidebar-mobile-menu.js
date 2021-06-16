$(document).ready(function(){
    $(".sidebar-menu li").click(function(){
        $(this).addClass("gold");
        $(this).siblings().removeClass("gold");
    })
})