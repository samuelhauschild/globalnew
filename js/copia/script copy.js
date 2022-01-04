(function($,window) {
    
    "use strict";
    
    const Plugins = new plugins_();

    const Requests = {
        /**
		 * @description .
		 * @param options_ {object}
		 * @return void
		 */
		delete: function(options_) {
			try {

				const this__ = this;
                
				const defaults = {
					response: function() {}
				};
				
				const options = $.extend({}, defaults, options_);

				$.ajax({
                    success: function(res){
                        options.response(res)
                    }
                });

			} catch(err) {
				console.log(err)
			}
		},
       
	}
    
    const App = {
        init: function(){
            Events.init()
        },
        openModal: function(){
            // aqui vamos executar o plugin do modal
           
            Plugins.modal()
            
        }
    }
    
    const Events = {
        init: function(){

            $(".open_modal_locale_js_ba0859ca").on("click",function(){
                App.openModal()
            });

            // $(".excluir").on("click",function(){
            //     Events.delete();
                
            // })
        },
        delete: function(){
            
            // request para deletar / excluir
            
            // Requests.delete({
            //     response: function(res){
            //         if(res){
            //             $("span").text(res.name)
            //         }
            //     }
            // })
        }
    }
    
    $(document).ready(function(){
        App.init();
    });

})(jQuery,window);