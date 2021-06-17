

$(document).ready(function(){
    $(".sidebar-menu li").click(function(){
        $(this).addClass("gold");
        $(this).siblings().removeClass("gold");
    });
    $("#sign1").click(function(){
        $(".hideformobileinitially").removeClass("hideformobileinitially");
        $("#sign-list").show();
        $("#sign-list").siblings().hide();
    });
});
$(function() {
    // attach click event handlers to the sidenav links with the class page-link2 of accordion
    $(".sidebar-menu li").on("click", function() {
        var ref = $(this).data("page");
        var text = $(this).text();
        $(ref).removeClass('hide-mob');
        $(ref).parent().removeClass('hideformobileinitially');
        // $(ref).find('.cm-accordion-content').css('height','auto');
        $(ref).siblings().addClass('hide-mob');
        $(ref).siblings(".header-mob-only").removeClass('hide-mob');
        $(".header-mob-only p").text(text);
        $(".sidebar-mobile").hide();
        // $(ref).siblings().find('.cm-accordion-content').css('height','0px');
        // $('html,body').animate({
        //     scrollTop: $(ref).offset().top
        // }, 500); 
    
    });
    $(".backToSidebarMob").click(function(){
        $(".sidebar-mobile").show();
        // $(".sidebar-menu li").removeClass("gold");
        $(".questions-list").addClass('hide-mob');
        $(".header-mob-only").addClass('hide-mob');
        $(".hideformobileinitially").addClass('hide-mob');
    })
});