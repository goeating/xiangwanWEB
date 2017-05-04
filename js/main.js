$(function () {
    $(document).scroll(function(){
        if($(document).scrollTop() > 0){
            $('.nav-download').fadeOut();
        }
        if($(document).scrollTop() == 0){
            $('.nav-download').fadeIn();
        }
    });
});