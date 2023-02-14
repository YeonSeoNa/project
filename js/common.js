
var deviceSize = 1024
function scrollOX(status){
    $('html').css({
        overflowY:status
    })
    return $('html').width()
}

var scX = scrollOX('hidden')
var scO = scrollOX('scroll')
var scD = scX - scO

if (scD>0) {
    deviceSize = deviceSize - scD
}
var ww = $(window).width()
if (ww>deviceSize ) {
    $('html').addClass('pc')
} else {
    $('html').addClass('mobile')
}


$(window).on('resize', function(){
    let ww = $(window).width()
    if (ww>deviceSize && !$('html').hasClass('pc') ) {
        $('html').addClass('pc').removeClass('mobile')
        location.reload()
    } else if (ww<=deviceSize && !$('html').hasClass('mobile')) {
        $('html').addClass('mobile').removeClass('pc')
        location.reload()
    }
})






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
        $(this).parent().siblings().find('.depth2').slideUp()
        $(this).parent().siblings().find('i')
        .removeClass('fa-chevron-up')
        .addClass('fa-chevron-down')
        
        return false
    }
})





