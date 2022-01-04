/* efeito botão*/
$('.navbar-nav a[href^="#"]').on('click', function (e) {
    e.preventDefault();
    let id = $(this).attr('href'),
    targetOffset = $(id).offset().top;

    $('html, body').animate({
        scrollTop: targetOffset - 100
    }, 500);
});

$("#fecha li").on("click",function () {
         $("body").removeClass("nav-open");
         $("body").removeClass("hidden_scroll_body");  
});

$(".nav-button").on("click", function(){ 
     $('body').toggleClass('nav-open');
     $('body').toggleClass('hidden_scroll_body');
     if(!$(this).hasClass("ativo")) {
          $(this).addClass("ativo");
     } else {
         $(this).removeClass("ativo");  
     }                 
});

/*Efeito de adicionar quando clicar Certification*/

let  anoAtualExibir = function(options_) {
    const defaults = {
        el : ".ano-Service-Footer2"
    };
    
    const options = $.extend({}, defaults, options_);

    let anoAtual = new Date();
    let ano = anoAtual.getFullYear();
    $(options.el).html(ano);
 }
    anoAtualExibir({
        el:".ano-Service-Footer"
    });
