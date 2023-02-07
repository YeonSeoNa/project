
var ww = $(window).width()
if (ww>992) {
    $('html').addClass('pc')
} else {
    $('html').addClass('mobile')
}

$('#header .hamburger').on('click', function(){
    $(this).next().stop().slideToggle()
})

$('#nav .depth1 > li').on('mouseover mouseout', function(){
    if ( $('html').hasClass('pc') ) {
        $(this).find('.depth2').stop().slideToggle()
    }
})

$('#nav .depth1 > li > a').on('click', function(){
    if ( $('html').hasClass('mobile') ) {
        if ( $(this).find('i').hasClass('fa-chevron-down') ) {
            $(this).next().stop().slideDown()
            $(this).find('i').removeClass('fa-chevron-down')
            .addClass('fa-chevron-up')
        } else {
            $(this).next().stop().slideUp()
            $(this).find('i').removeClass('fa-chevron-up')
            .addClass('fa-chevron-down')
        }
        return false
    }
})


