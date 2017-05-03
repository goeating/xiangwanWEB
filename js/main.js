$(function () {
    $('#code').mousemove(function(e){
        var x = e.clientX - $(this).offset().left - $('#code-box').width();
        var y = e.clientY - $(this).offset().top;
        $('#code-box').show().css({'left':x-10+'px','top':y+10+'px'})
    }).mouseout(function(){
        $('#code-box').hide();
    });
    $(document).scroll(function(){
        if($(document).scrollTop() > 0){
            $('.nav-download').fadeOut();
        }
        if($(document).scrollTop() == 0){
            $('.nav-download').fadeIn();
        }
    });
});