$(document).ready(function(){
  $('.blog-category').on('click',function(){
    $('.blog-category').removeClass('blog-category-active');
    $(this).addClass('blog-category-active');
  })
})
