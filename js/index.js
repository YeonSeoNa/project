$('.slide_group').slick({
    autoplay:true,       
    autoplaySpeed:3000,
    dots:true,         
    arrows:true,       
    prevArrow:'<button class="slick-prev slick-arrow"><i class="fa-solid fa-angle-left"></i></button>',
    nextArrow:'<button class="slick-next slick-arrow"><i class="fa-solid fa-angle-right"></i></button>',
})





let article2Near = $('.article2').offset().top - $(window).height()/2
let article3Near = $('.article3').offset().top - $(window).height()/2

$(window).on('scroll', function(){
    let sct = $(this).scrollTop()
    
    if (sct>=article2Near) {
        $('.article2').addClass('on')
    } else {
        $('.article2').removeClass('on')
    }

    if (sct>=article3Near) {
        $('.article3').addClass('on')
    } else {
        $('.article3').removeClass('on')
    }

})
