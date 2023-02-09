
var ww = $(window).width()
if (ww>1024) {
    $('html').addClass('pc')
} else {
    $('html').addClass('mobile')
}


// 개발자도구창의 토글디바이스툴바 사용하지 않았을때 
// 테스트 상황(윈도우 넓이 조절)에서 생기는 오류를 해결하기 위한 코드
var deviceSize = 1024
function scrollOX(status){
    $('html').css({
        overflowY:status
    })
    return $('html').width()
}

// 토글디바이스 툴바가 꺼있으면 스크롤바가 생성되므로
// 스크롤바 넓이 17px을 deviceSize에서 빼야함
var scX = scrollOX('hidden')
var scO = scrollOX('scroll')
var scD = scX - scO
// 토글디바이스툴바가 켜져 있으면 아래 scX와 scO는 같은 값이 되므로
// 아래 if문을 들어가지 않아서 deviceSize는 원래 값임
if (scD>0) {
    deviceSize = deviceSize - scD
}


function init(){
    let ww = $(window).on('resize',function(){
        let ww = $(this).width()
        if(ww>deviceSize) {
            $('html').addClass('pc').removeClass('mobile')
        } else {
            $('html').addClass('mobile').removeClass('pc')
        }
    })
}
init()

$(window).on('resize',function(){
    init()
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
        return false
    }
})


