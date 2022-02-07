if (window.matchMedia("(min-width: 1200px)").matches) { 

    $(function(){

        // 1200이상 팝업
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
  
        // 1200이상 동영상
        $('.video').hide();
        $('.elvi').click(function () {
                $('.video').fadeIn();
                $('.video iframe').attr("src","https://www.youtube.com/embed/l6pCyV7PnqI?autoplay=1&amp;mute=1");
            });
            $('.video').click(function () {
                $('.video').fadeOut(); 
            });
   

        $('.video1').hide();
        $('.sevi').click(function () {
                $('.video1').fadeIn();
                $('.video1 iframe').attr("src","https://www.youtube.com/embed/QFhaL4s10Iw?autoplay=1&amp;mute=1");
            });
            $('.video1').click(function () {
                $('.video1').fadeOut(); 
            });


            //다크소울 이미지슬라이드
        var i = 0;
        function slide() {
            i++;
            if (i > $('.dssli div:last').index()) {
                i = 0;
            }
            $('.dssli div').eq(i).fadeIn(1000);
            $('.dssli div').eq(i-1).fadeOut(500);
        }
        setInterval(slide, 4000);

 
        function fade() {
            $('.derasli img:nth-of-type(2)').fadeIn(3000, function () {
                $(this).fadeOut(3000);
            });
        }

        setInterval(fade, 3000);
    });

} else { 
    $(function(){
        $(".menu").click(function(){
            $(".a").slideToggle();
        });
    });
    
    $(window).resize(function(){
        if(window.innerWidth<=1199){
            $('.a').hide();
        }else{
            $('.a').show();
        }
    });
   


    $('.ds').hide();
        $('.blood').hide();
        $('.elden').hide();
        $('.seki').hide();
        $('.dera').hide();
    
        $('.baner3').click(function(){
            $('.ds').fadeIn();
        });
        $('.baner1').click(function(){
            $('.blood').fadeIn();
        });
        $('.more2').click(function(){
            $('.elden').fadeIn();
        });
        $('.baner4').click(function(){
            $('.seki').fadeIn();
        });
        $('.baner2').click(function(){
            $('.dera').fadeIn();
        });
        $('.cbtn').click(function(){
            $('.ds').fadeOut();
            $('.blood').fadeOut();
            $('.elden').fadeOut();
            $('.seki').fadeOut();
            $('.dera').fadeOut();
        });

        $('.video').hide();
        $('.elvi').click(function () {
                $('.video').fadeIn();
                $('.video iframe').attr("src","https://www.youtube.com/embed/l6pCyV7PnqI?autoplay=1&amp;mute=1");
            });
            $('.video').click(function () {
                $('.video').fadeOut(); 
            });
   

        $('.video1').hide();
        $('.sevi').click(function () {
                $('.video1').fadeIn();
                $('.video1 iframe').attr("src","https://www.youtube.com/embed/QFhaL4s10Iw?autoplay=1&amp;mute=1");
            });
            $('.video1').click(function () {
                $('.video1').fadeOut(); 
            });


            function prev(){
                $('.moregame .moregame2 div:last').prependTo('.moregame2');
                $('.moregame2').css({marginLeft:-1182}); 
                $('.moregame2').stop().animate({marginLeft:0},800);
                }
            
            
            
            function next() {
                $('.moregame2').stop().animate({ marginLeft: -1182 }, function () {
                    $('.moregame2 div:first').appendTo('.moregame2');
                    $('.moregame2').css({ marginLeft: 0 });
                });
            }
            
            
            function slide3() {
                $('.moregame2').stop().animate({ marginLeft: -1182 }, function () {
                    $('.moregame2 div:first').appendTo('.moregame2');
                    $('.moregame2').css({ marginLeft: 0 });
                });
                
            }
            setInterval(slide3, 3000);

            
            



}



