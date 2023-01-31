$(document).ready(function(){
    //Toggle mobile navigation
    $('.mb_menu').click(function(){
        $('.nav_menu').toggleClass('active')
    });

    $(window).resize(function resize(){
        if ($(window).width() < 768) {
            $('.icon_bg > i').removeClass('fa-xl');
            $('.icon_bg > i').addClass('fa-lg');
        }
    });

    //Scroll button
    $('#slide_right').click(function() {
        event.preventDefault();
        $('#gallery').animate({
            scrollLeft: "+=295px"
        }, "slow");
    });

    $('#slide_left').click(function() {
        event.preventDefault();
        $('#gallery').animate({
            scrollLeft: "-=295px"
        }, "slow");
        
    });

    //Set rooms as default display in gallery
    $('.gallery_item').not('.rooms').hide('5000');
    $('.gallery_item').filter('.rooms').show('5000');

    //Filter gallery
    $('.select_btn').click(function(){
        const value = $(this).attr('data-filter');
        $('.gallery_item').not('.'+value).fadeOut().hide('1000');
        $('.gallery_item').filter('.'+value).show('1000',function(){
            $('#gallery').scrollLeft(0)});
        
    });
        
    //Add active class to select buttons
    $('.select_btn').click(function(){
        $(this).addClass('active').siblings().removeClass('active');
        $(this).children('.bar').addClass('active_bar');
        $(this).siblings().children('.bar').removeClass('active_bar');
    });  
});


