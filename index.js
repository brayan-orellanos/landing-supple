$(function () {
    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
    var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl)
    })

    $('.btn_indicator').on('click', function () {
        $(this).tooltip('hide');
    });

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
            $(`#${$(this).data('form')}`).removeClass('none')
        }
    })

    capture('#capture', '#name_img')
    capture('#capture2', '#name_img2')

    $('.politic').change(function() {
        if($(this).prop('checked')) {
            $("#modal_politics").modal("show");
        }
    })

    cambio()
})

function cambio() {
    const $sections = document.querySelectorAll('.scroll[data-scroll-spy]')

    const callback = (entries) => {
        entries.forEach((entry) => {
            const id = entry.target.dataset.scrollSpy
            console.log(entries[entries.length - 1].isIntersecting)

            if(entry.isIntersecting) {
                document.querySelector(`a[data-scroll-spy][href="#${id}"]`).classList.add('menu_active')
            } 
             else {
                document.querySelector(`a[data-scroll-spy][href="#${id}"]`).classList.remove('menu_active')
                if(entries[0].isIntersecting) {
                    document.querySelector(`a[data-scroll-spy][href="#banner"]`).classList.add('menu_active')
                }
            }
        })
    }

    const options = {
        threshold: 0.57,
    }

    const observer = new IntersectionObserver(callback, options)

    $sections.forEach( el => observer.observe(el))
}

function capture(capture, name) {
    $(capture).on('change', function () {
        if(document.querySelector(capture).files[0]) {
            $(name).html(document.querySelector(capture).files[0].name)
        } else {
            $(name).html('')
        }
    })
}