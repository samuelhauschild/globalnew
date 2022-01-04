(function ($, window) {

    "use strict";

    const fg = new fg_();

    const App = {
        init: function (options) {
            try {

                App.renderContent(options); // que cria o conteudo do modal no body

                options.elementRoot = $("#"+options.id); // o elemento do modal

                App.initReturnOptions(options) // retorna as options

                Events.init(options)

            } catch (error) {
                console.log(error)
            }
        },
        renderContent: function (options) {
            try {

                if ($("body").find("#" + options.id).hasClass("modal")) { // verifica se existe o mesmo modal
                    return
                }

                $("body").append(AppHTML.contentModal(options)) // add no body o html/conteudo do modal

                $("#"+options.id).modal("show"); // executa o modal do bootstrap

            } catch (error) {
                console.log(error)
            }
        },
        initReturnOptions: function (options_) {
            try {

                const defaults = {
                    init: function () { }, // função callback
                    fnSubmit: function () { } // função callback
                };
    
                const options = $.extend({}, defaults, options_);
                
                const options_return = App.returnOptions(options)

                options.init(options_return)
                
                options.elementRoot.find(".modal-footer .btn-primary").on("click",function(){
                    options.fnSubmit(options_return)
                })

            } catch (error) {
                console.log(error)
            }
        },
        returnOptions: function (options) {
            try {

               return {
                    elementRoot: options.elementRoot,
                    id: options.id,
                    hide: function(){
                        App.hideModal(options)
                    },
                    body: function (html) { 
                        App.body(html,options);
                     },
                     footer: function (content) { 
                        App.footer(options)
                     }
                }

            } catch (error) {
                console.log(error)
            }
        },
        hideModal: function (options) {
            try {
                
                options.elementRoot.modal("hide");

            } catch (error) {
                console.log(error)
            }
        },
        body: function (html,options) {
            try {
                options.elementRoot.find(".modal-body").html(html);
            } catch (error) {
                console.log(error)
            }
        },
        footer: function(options) {
            try {
                options.elementRoot.find(".modal-footer").hide().removeClass("d-flex");
                
            } catch (error) {
                console.log(error)
            }
        },
        reset: function (options) {
            try {
                
                options.elementRoot.remove()

            } catch (error) {
                console.log(error)
            }
        }
    }

    const AppHTML = {
        contentModal: function (options) {
            
            const dataBackDropStatic = options.modalStatic ? 'data-backdrop="static"' : '';
            const footerStyle = options.footer ? '' : 'display:none;';

            return `
                <div class="modal fade ${options.class}" id="${options.id}"  tabindex="-1" ${dataBackDropStatic} role="dialog" aria-labelledby="" aria-hidden="true">
                <div class="modal-dialog" role="document" style="max-width:${options.width}; height:${options.height}">
                    <div class="modal-content">
                    <div class="modal-header" style="border-bottom:0!important;">
                        <h5 class="modal-title" id="">${options.title}</h5>
                        <button type="button" class="close close-modal" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <h2>${options.body}</h2>  
                    </div>
                    <div class="modal-footer d-flex" style="${footerStyle}">
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">${options.btnSecondary}</button>
                        <button type="button" class="btn btn-primary">${options.btnPrimary}</button>
                    </div>
                    </div>
                </div>
                </div>
            `
        }
    }

    const Events = {
        init: function(options){

            options.elementRoot.on("hidden.bs.modal",function(){
                App.reset(options)
            });
        }
    }

    plugins_.prototype.modal = function (options_) {

        try {

            const defaults = {
                title: "Modal Título",
                width: "707px",
                height: "278px",
                id: fg.hash_id(60),
                body: "", // html
                btnPrimary: "Ok",
                btnSecondary: "Cancelar",
                modalStatic: false,
                footer: true,
                init: function () { }, // função callback
                fnSubmit: function () { } // função callback
            };

            const options = $.extend({}, defaults, options_);

            App.init(options);

        } catch (error) {
            console.log(error)
        }

    }

})(jQuery, window);