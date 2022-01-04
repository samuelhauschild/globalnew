(function($,document,window) {
    $(document).ready(function () {

      const container_top = $("#top");
      const container_menu = $(".container_menu");
      const nav_toggle_mobile = $(".nav_toggle_mobile");
      const link = $(".nav-link");
        
      const event = {
            validationEmail: function(e) {
                let dados = {
                    "email": $("#email").val()
                }
                if (checkErrorEmail(dados)) {
                    console.log("Validou");
                }
            },
            scrollMenu: function(e){
                if ($(document).scrollTop() === 1) {
                    container_top.addClass("fixed");
                 } 
                
                if ($(document).scrollTop() === 0) {
                    container_top.removeClass("fixed");
                }
                else {
                    container_top.addClass("fixed");
                }
            },
          toggleMenu: function(e) {
                e.preventDefault();
                if (!$('#top').hasClass("ativo")) {
                    $('#top').addClass("ativo");
                    $(this).html("<span class='fa fa-times'></span>");
                    return;
        
                } else {
                    $('#top').removeClass("ativo");
                    $(this).html("<span class='fa fa-bars'></span>");
                }
          }
      };

        // Disparo de eventos
        $("#email").on("blur",event.validationEmail)
        $(document).on('scroll',event.scrollMenu)
        $(".btn_toggle").on("click", event.toggleMenu);
            

         // validar email
    function checkMail(mail) {
        let verif = false;
        let er = new RegExp(/^[A-Za-z0-9_\-\.]+@[A-Za-z0-9_\-\.]{2,}\.[A-Za-z0-9]{2,}(\.[A-Za-z0-9])?/);
        if (typeof (mail) == "string") {
            if (er.test(mail)) {
                verif = true;
            }
        } else if (typeof (mail) == "object") {
            if (er.test(mail.value)) {
                verif = true;
            }
        } else {

            verif = false;
        }

        return verif;
    }

    function checkErrorEmail(dados) {
            let error = false;
            if (checkMail(dados.email)) {
                $("#email").css("border", "1px solid #ced4da")
                error = true;
            } if (!checkMail(dados.email)) {
                $("#email").css("border", "1px solid #DE3E44")
                error = true;
            }
            return error;
        }

    });
})($,document,window);
