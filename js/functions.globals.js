const fg_ = function(){
    this.hash_id = function (caracter = false, ModeType = false) {

        caracter = caracter && parseInt(caracter) > 0 && parseInt(caracter) <= 1000 ? parseInt(caracter) : 21;
        caracter = caracter - 21;
  
        if (caracter <= 1) {
          caracter = 5
        };
  
        let randomnumber_;
  
        let alpha = "";
  
        if (ModeType == "uppercase") {
          randomnumber_ = 35;
          alpha = new Array('A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'Y', 'X', 'Z', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0');
        } else {
          randomnumber_ = 61;
          alpha = new Array('A', 'a', 'B', 'b', 'C', 'c', 'D', 'd', 'E', 'e', 'F', 'f', 'G', 'g', 'H', 'h', 'I', 'i', 'J', 'j', 'K', 'k', 'L', 'l', 'M', 'm', 'N', 'n', 'O', 'o', 'P', 'p', 'Q', 'q', 'R', 'r', 'S', 's', 'T', 't', 'U', 'u', 'V', 'v', 'W', 'w', 'Y', 'y', 'X', 'x', 'Z', 'z', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0');
        }
  
        let randomstr = '';
  
        for (let i = 0; i < caracter; i++) {
          let randomnumber = Math.floor(Math.random() * randomnumber_);
          randomstr += alpha[randomnumber];
        }
  
        return "cC" + randomstr
  
      },
      this.switchShowHide = function (id) {
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
      this.input_focus_label = function () { 
        const input = $(".contact input");
        $.each(input,function(i,e){
            $(e).on("focus",function(e){
                if(!$(this).val()){
                    $(this).addClass("input_focus_Label_js_ba4124sa")
                 }
           })
           $(e).on("blur",function(){
            if(!$(this).val()){
              $(this).removeClass("input_focus_Label_js_ba4124sa") 
            }
           })
        })
    },
    this.textarea_focus_label = function () { 
      const textarea = $(".contact textarea");
      $.each(textarea,function(i,e){
        $(e).on("focus",function(e){
            if(!$(this).val()){
                $(this).addClass("textarea_focus_Label_js_ba2513ta")
             }
       })
       $(e).on("blur",function(){
        if(!$(this).val()){
          $(this).removeClass("textarea_focus_Label_js_ba2513ta") 
        }
       })
    })  
    } 
    this.counter = function () {
      $('.counter').counterUp({
      delay: 10,
      time: 1000
    });
  }
}