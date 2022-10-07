$(function () {
    $('.btn_indicator').mouseover(function() {
        $('.img_principal').each(function () {
            $(this).removeClass('hov')
        })

        if(!$(this).hasClass('active')) {
            $(this).addClass('hov')
        }
    })

    $('.btn_indicator').mouseout(function() {
        $(this).removeClass('hov')
    })

    $('.btn_indicator').click(function() {
        $('.btn_indicator').each(function () {
            $(this).removeClass('active')
        })

        if(!$(this).hasClass('active')) {
            $(this).removeClass('hov')
            $(this).addClass('active')
        }
    })

    $('.owl-carousel').owlCarousel({
        margin:0,
        startPosition: 0,
        responsiveClass:true,
        nav: true,
        dots: true,
        loop: true,
        // items: 3,
        responsive:{
            0:{
                items:1,
                nav:true,
                dots: true,
                loop:true,
            },
            600:{
                items:2,
                nav:true,
                dots: true,
                loop:true,
            },
            1000:{
                items:3,
                nav:true,
                dots: true,
                loop:true,
            },
        }
    })
})