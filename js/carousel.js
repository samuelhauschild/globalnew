(function ($, window) {
    const carousel_partner  = $("#carousel_partner");
    const carousel_portfolio  = $("#carousel_portfolio");
    const carousel_company = $("#slidercompany");
   const carousel_service = $("#carousel_service");
    // Resize 
    function onresize() {
        sliderPartner();
        sliderPortfolio();
        sliderCompany();
    }
        onresize();
        $(window).resize(function () {
            onresize();
        });
     
    function sliderPartner() {
    
        if ($(window).width() >= 992) {
            if (carousel_partner.hasClass('slick-initialized')) {
                carousel_partner.slick("unslick");
            }
         }   
         else if ($(window).width() >= 501 && $(window).width() <= 991) {
            if (carousel_partner.hasClass('slick-initialized')) {
                carousel_partner.slick("unslick");
            }
    
/*             carousel_partner.slick({
                dots: true,
                infinite: true,
                useTransform: true,
                centerMode: false,
                autoplay: false,
                autoplaySpeed: 10000,
                slidesToShow: 2,
                slidesToScroll:2
            }) */
        }
         else if ($(window).width() <= 500) {
            
            if (carousel_partner.hasClass('slick-initialized')) {
                carousel_partner.slick("unslick");
            }
/*             carousel_partner.slick({
                dots: true,
                infinite: true,
                useTransform: true,
                centerMode: false,
                autoplay: true,
                autoplaySpeed: 10000,
                slidesToShow: 1,
                slidesToScroll:1
            }) */
        }  
    }
    
    function sliderPortfolio() {
        if ($(window).width() >= 992) {
            if (carousel_portfolio.hasClass('slick-initialized')) {
                carousel_portfolio.slick("unslick");
            }
            carousel_portfolio.slick({
                dots: false,
                infinite: true,
                useTransform: true,
                centerMode: false,
                nextArrow: '<div class="setleft"><button type="button" class="slick-next"></button></div>',
                prevArrow: '<div class="setRight"><button type="button" class="slick-prev"></button></div>',
                autoplay: false,
                autoplaySpeed: 10000,
                slidesToShow: 1,
                slidesToScroll:1
            })
        }
        else if ($(window).width() >= 501 && $(window).width() <= 991) {
            if (carousel_portfolio.hasClass('slick-initialized')) {
                carousel_portfolio.slick("unslick");
            }
    
            carousel_portfolio.slick({
                dots: false,
                infinite: true,
                useTransform: true,
                nextArrow: $(".portfolio .btn_portfolio .next").html(`<div class="btn_next_slider_portfolio">
                <div class="btnNextImg"></div></div>`),
                prevArrow: $(".portfolio .btn_portfolio .prev").html(`<div class="btn_prev_slider_portfolio">
                <div class="btnPrevImg"></div></div>`),
                centerMode: false,
                autoplay: false,
                autoplaySpeed: 10000,
                slidesToShow: 1,
                slidesToScroll:1
            })
        }
         else if ($(window).width() <= 500) {
            
            if (carousel_portfolio.hasClass('slick-initialized')) {
                carousel_portfolio.slick("unslick");
            }
            carousel_portfolio.slick({
                dots: false,
                infinite: true,
                useTransform: true,
                centerMode: false,
                autoplay: true,
                nextArrow: $(".portfolio .btn_portfolio .next").html(`<div class="btn_next_slider_portfolio">
                <div class="btnNextImg"></div></div>`),
                prevArrow: $(".portfolio .btn_portfolio .prev").html(`<div class="btn_prev_slider_portfolio">
                <div class="btnPrevImg"></div></div>`),
                autoplaySpeed: 10000,
                slidesToShow: 1,
                slidesToScroll:1
            })
        }     
    }

       function sliderCompany() {
        if ($(window).width() >= 992) {
            
            if (carousel_company.hasClass('slick-initialized')) {
                carousel_company.slick("unslick");
            }
        carousel_company.slick({
            dots: false,
            arrows: true,
            infinite: true,
            useTransform: true,
            centerMode: true,
            nextArrow: $(".contact .btn_portfolio .next").html(`<div class="btn_next_slider_portfolio">
            <div class="btnNextImg"></div></div>`),
            prevArrow: $(".contact .btn_portfolio .prev").html(`<div class="btn_prev_slider_portfolio">
            <div class="btnPrevImg"></div></div>`),
            autoplay: false,
            autoplaySpeed: 10000,
            slidesToShow: 1,
            slidesToScroll:1,
            variableWidth: true,
        })
      }
      else if ($(window).width() < 992) {
        if (carousel_company.hasClass('slick-initialized')) {
            carousel_company.slick("unslick");
        }
    carousel_company.slick({
        dots: false,
        arrows: true,
        infinite: true,
        useTransform: true,
        centerMode: true,
        nextArrow: $(".contact .btn_portfolio .next").html(`<div class="btn_next_slider_portfolio">
        <div class="btnNextImg"></div></div>`),
        prevArrow: $(".contact .btn_portfolio .prev").html(`<div class="btn_prev_slider_portfolio">
        <div class="btnPrevImg"></div></div>`),
        autoplay: false,
        autoplaySpeed: 10000,
        slidesToShow: 1,
        slidesToScroll:1,
        variableWidth: true,
    })
  }  
}

function sliderService(){
        carousel_service.slick({
            dots: false,
            arrows: true,
            infinite: true,
            useTransform: true,
            centerMode: false,
            autoplay: false,
            slidesToShow: 1,
            slidesToScroll:1,
            variableWidth: true
        })
   }
   sliderService();
})($,window)
