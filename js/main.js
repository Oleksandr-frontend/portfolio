$(document).ready(function () {
    $(".switch").click(function () {
        $(".switch").toggleClass("active")
        $("body").toggleClass("dark")
    })

    $('.portfolios-sliders').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false,
        responsive: [
            {
                breakpoint: 1150,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                  }
            },
            {
                breakpoint: 800,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                  }
            }
        ]
    });

    $('.blog-sliders').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false,
        dots: true,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
            {
                breakpoint: 1150,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                  }
            },
            {
                breakpoint: 800,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                  }
            }
        ]
    });

    $('.testimonials-sliders').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false,
        dots: true,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
            {
                breakpoint: 1150,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                  }
            },
            {
                breakpoint: 800,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                  }
            }
        ]
    });

    $(".left").click(function(){
        $('.portfolios-sliders').slick("slickPrev")
    })
    $(".right").click(function(){
        $('.portfolios-sliders').slick("slickNext")
    })

    $(".slider-btn").click(function(){
        $(".slider-btn").removeClass("active")
        $(this).addClass("active")
    })

    $(".experieces-list").on("click", ".experieces-item:not(.active)", function(){
        $(this).addClass("active")
            .siblings()
            .removeClass("active")
            .closest(".experieces-wrapper")
            .find(".experieces-content .experieces-tab")
            .removeClass("active")
            .eq($(this).index())
            .addClass("active")
    })

    // mobile menu

    $(".burger").click(function (e) { 
        e.preventDefault();
        $(".burger").toggleClass("active")
        $(".nav").toggleClass("active")
        $("body").toggleClass("active")
    });
});