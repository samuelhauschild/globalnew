(function ($, window) {

    "use strict";

    const Plugins = new plugins_();
    const fg = new fg_();

    // gerais  
    const App = {
        init: function () {
            Events.init();
            fg.input_focus_label();
            fg.textarea_focus_label();
            fg.counter();
            this.contentNumber();
        },
        switchTab: function(e, this_, id){
            switch (id) {
                case 1:
                  $("#form02").hide();
                  $("#form01").show();
                  //$(".resposta").show();
                break;
                case 2:
                  $("#form01").hide();
                  $("#form02").show();
                 // $(".respostacad").hide();
                break;
              }
        },
        contentMenuMobile: function(e, this_) {
              console.log(this_.closest("header"));
        },
        contentNumber: function() {
                $(".container_con")
                .html(`<div class="box_cont" id="box_cont01">
                <div class="info">
                    <div class="content_info">
                         <img src="http://globalsyscms.com.br/globalNew/img/Number/user2.svg" class="user">
                    </div>
                    <div class="content_info">
                        <span>Colaboradores</span>
                        <h2 class="title_cont">170+</h2>
                    </div>
                </div>
            </div>
            <div class="box_cont" id="box_cont03">
                <div class="info">
                    <div class="content_info">
                        <img src="../img/Number/partner2.svg" class="partner">
                    </div>
                     <div class="content_info">
                         <span>Clientes Atendidos</span>
                         <h2 class="title_cont">120+</h2>
                    </div>
                </div>
            </div>
            <div class="box_cont" id="box_cont02">
                <div class="info">
                    <div class="content_info">
                      <img src="../img/Number/mobile2.svg" class="appConstrucao">
                    </div>
                    <div class="content_info">
                      <span>Aplicativos Construídos</span>
                      <h2 class="title_cont">30+</h2>
                    </div>
                </div>
            </div>
            <div class="box_cont" id="box_cont04">
                <div class="info">
                    <div class="content_info">
                        <img src="../img/Number/graphic2.svg" class="graphic">
                    </div>
                    <div class="content_info">
                        <span>Projetos de Analytics</span>
                        <h2 class="title_cont">25+</h2>
                    </div>
                </div>
            </div>
            <div class="box_cont" id="box_cont05">
                <div class="info">
                <div class="content_info">
                    <img src="../img/Number/map2.svg" class="map">
                </div>  
                <div class="content_info">
                    <span>Estados Atendidos</span>
                    <h2 class="title_cont">13+</h2>
                </div>
                </div>
            </div>
            <div class="box_cont" id="box_cont06">
                <div class="info">
                    <div class="content_info">
                         <img src="../img/Number/manager2.svg" class="manager">
                    </div>
                    <div class="content_info">
                         <span>Bases Produtivas Gerenciadas</span>
                         <h2 class="title_cont">5+</h2>
                    </div>
                </div>
            </div>`)
        }, 
        openModal: function (e, this_) {
            // aqui vamos executar o plugin do modal
            e.preventDefault();
            Plugins.modal({
                title: "",
                width: "600px",
                body: 'Confirmar envio da mensagem?',
                modalStatic: true,
                class: "contactModal",
                footer: true,
                btnPrimary: "Enviar mensagem",
                init: function (opts) {
                  //  console.log(opts)
                },
                fnSubmit: function (opts) {
                    Events.sendData(opts)
                }
            })

        },
        removeCoverYoutube: function (this_) {
            $("#iframe-we").attr("src", "https://www.youtube.com/embed/W28-QzA5-14/?autoplay=1");
            $(e).find(".img-about").remove()

        },
        toggleContentBanner: function (e, this_) {
            try {

                e.preventDefault();

                const section = $(this_).closest("section");

                const elementTextUxDesign = section.find('.title_ux[data-type="ux-design"]');
                const elementTextDevelopment = section.find('.title_ux[data-type="development"]');

                const activeBanner = section.attr("data-active");

                switch (activeBanner) {
                    case "development":
                        
                        elementTextDevelopment.fadeOut(function(){
                            elementTextDevelopment.removeClass("active")
                            elementTextUxDesign.fadeIn()
                            elementTextUxDesign.addClass("active")
                        })
                       
                        section.attr("data-active", "ux-design");

                        break;
                    case "ux-design":

                        elementTextUxDesign.fadeOut(function(){
                            elementTextUxDesign.removeClass("active")
                            elementTextDevelopment.addClass("active")
                            elementTextDevelopment.fadeIn()
                        })
                        
                        section.attr("data-active", "development");;

                        break;
                }

                // let dataID = $(this).find(".tablinks").data("id");
                // switchShowHide(dataID);
                // $(".tab-inner").find(".tablinks").removeClass("active")
                // $(this).find(".tablinks").addClass("active");

              console.log(section)

            } catch (error) {
                console.log(error)
            }

        }
    }

    const Events = {
        init: function () {

            $(".open_modal_locale_js_ba0859ca").on("click", function (e) {
                const this_ = this;
                App.openModal(e, this_)
            });
            $(".remove_cover_locale_js_ba0248sa").on("click", function (e) {
                e.preventDefault();
                App.removeCoverYoutube(this)
            });
            $(".btn_develope_aplication").on("click", function (e) {
                const this_ = this;
                App.toggleContentBanner(e, this_)
            });
            $(".closemobile_").on("click",function(){
                const container_menu = $(this).closest(".container_menu")
                $(".container_menu").fadeOut();
          });
          $(".bars").on("click",function(){
            const container_menu = $(this).closest(".container_menu")
            $(".container_menu").fadeIn();
        });
            $(".tab-inner").on("click",function(e){
                let dataID = $(this).find(".tablinks").data("id");
                let selectedCard = document.getElementById('card'+dataID);
                let selectedItem = $(this);
                let cards = $('.card-container');
                App.switchTab(e,selectedItem,dataID);
                $(".tab-inner").find(".tablinks").removeClass("active")
                $(this).find(".tablinks").addClass("active");
                $('.card-container').removeClass("active");
                selectedCard.classList.toggle('active');
            });
        },
        sendData: function (opts) {

           const name = opts.elementRoot.find('input[name="name"]').val();
           const password = opts.elementRoot.find('input[name="password"]').val();

            const data = {
                name,
                password
            }
            //ajax

            setTimeout(() => {
               // opts.hide()
                opts.body("")
                opts.footer(false)
            }, 3000);
 
          //  console.log(opts);
        }
    }

    $(document).ready(function () {
        App.init();
    });

})(jQuery, window);
