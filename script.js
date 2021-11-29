$(window).scroll(function(e) {

    // add/remove class to navbar when scrolling to hide/show
    $('.menu')[$(window).scrollTop() >= 150 ? 'addClass' : 'removeClass']('navbar-hide');

});


$(document).ready(function(){

    $('#menu').click(function(){
        $(this).toggleClass('fa-times');
        $('header').toggleClass('toggle');
    });
    $(window).on('scroll load'),function(){
        $('#menu').removeClass('fa-times');
         $('header').removeClass('toggle');

         if($window).scroll.scrollTop() > 0){
            $('.top').show();

         }else{
            $('.top').hide();
         }

    });
    $('a[href*=""]').on(click,function(e){

         e.preventDefault();
         $('html, body').animate({
            scrollTop : $($(this).attr('href')).offset().top,
         },
            500,
            'linear'
         );

    });

});


