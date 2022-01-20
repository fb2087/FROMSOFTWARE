$(function(){
    $('.ds').hide();
    $('.blood').hide();
    $('.elden').hide();
    $('.seki').hide();
    $('.dera').hide();

    $('.mainimg:nth-of-type(1)').click(function(){
        $('.ds').fadeIn();
    });
    $('.mainimg:nth-of-type(2)').click(function(){
        $('.blood').fadeIn();
    });
    $('.mainimg:nth-of-type(3)').click(function(){
        $('.elden').fadeIn();
    });
    $('.mainimg:nth-of-type(4)').click(function(){
        $('.seki').fadeIn();
    });
    $('.mainimg:nth-of-type(5)').click(function(){
        $('.dera').fadeIn();
    });
    $('.cbtn').click(function(){
        $('.ds').fadeOut();
        $('.blood').fadeOut();
        $('.elden').fadeOut();
        $('.seki').fadeOut();
        $('.dera').fadeOut();
    });
});

$(function(){
    $('.video').hide();
    $('.elvi').click(function () {
            $('.video').fadeIn();
            $('.video iframe').attr("src","https://www.youtube.com/embed/l6pCyV7PnqI?autoplay=1&amp;mute=1");
        });
        $('.video').click(function () {
            $('.video').fadeOut(); 
        });
});
$(function(){
    $('.video1').hide();
    $('.sevi').click(function () {
            $('.video1').fadeIn();
            $('.video1 iframe').attr("src","https://www.youtube.com/embed/QFhaL4s10Iw?autoplay=1&amp;mute=1");
        });
        $('.video1').click(function () {
            $('.video1').fadeOut(); 
        });
});