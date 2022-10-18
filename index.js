$(function () {
    document.addEventListener('click', (e) => {
        if(e.target.matches('.bars_menu') || e.target.matches('.bars_menu *')) {
            document.querySelector('.menu').classList.toggle('header_none')
        }
    })

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
        responsive:{
            0:{
                items:1,
                nav:true,
                dots: true,
                loop:true,
            },
            769:{
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

    $('.list_forms').click(function() {
        if(!$(this).hasClass('active_list')) {
            $('.list_forms').each(function () {
                $(this).removeClass('active_list')
            })

            $('.cl_form').each(function () {
                $(this).addClass('none')
            })

            $(this).addClass('active_list')
            console.log($(this)[0])
            $(`#${$(this).data('form')}`).removeClass('none')
        }
    })

    $('#capture').on('change', function () {
        if(document.getElementById('capture').files[0]) {
            $('.name_img').html(document.getElementById('capture').files[0].name)
        } else {
            $('.name_img').html('')
        }
    })

    $('#politic').change(function() {
        if($(this).prop('checked')) {
            $("#modal_politics").modal("show");
        }
    })
})