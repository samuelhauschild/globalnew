// arquivo da classe geral do sistema
const classeGerais_ = function () {};

// arquivo Funcoes Gerais nesse caso função modal
classeGerais_.prototype.modal_ = function () {};

/* arquivo index js*/
(function (window) {

    /*--------- Gerneral setup --------------*/

    const classeGerais = new classeGerais_();
    const modal = new classeGerais.modal_();

    /*--------- Gerneral setup --------------*/

    const request = {

        Email: function (data) {

            let dados = JSON.stringify(data);
            console.log("Entrou = ", dados);
            const request = new XMLHttpRequest();
            request.open('POST', './cadastro.php', true);
            request.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
            //request.setRequestHeader('Accept', 'application/json');

            //console.log(request);
            request.onload = function () {
                if (this.status >= 200 && this.status < 400) {
                    let resp = JSON.parse(this.response);
                    console.log(resp)
                } else {
                    console.log("Erro");
                }
            };

            request.onerror = function () {
                console.log("Erro");
            };

            request.send(dados);
        }
    }

    const App = {

        init: function () {
            this.getElement();
        },
        getElement: function () {
            this.modalBody = document.querySelector(".modal-title");
        },
        inputBlurValidacao: function () {
            let erro = false;
            if (this.email.value) {
                this.msgEmail.classList.add("hide");
                this.msgEmail.classList.remove("show");
                erro = true;
            }
            if (!this.email.value) {
                this.msgEmail.textContent = "Campo de Email Vazio";
                this.msgEmail.classList.add("show");
                this.msgEmail.classList.remove("hide");
                erro = true;
            }
            if (this.senha.value) {
                this.msgSenha.classList.add("hide");
                this.msgSenha.classList.remove("show");
                erro = true;
            }
            if (!this.senha.value) {
                this.msgSenha.textContent = "Campo de Senha Vazio";
                this.msgSenha.classList.add("show");
                this.msgSenha.classList.remove("hide");
                erro = true;
            }
            return erro;
        },
    };

    let load = () => {
        App.init();
    };

    window.onload = load;

})(window);


/* $(document).ready(function () {
$(".owl-carousel").owlCarousel({
        items:1,
        autoplay: true,
        autoplayTimeout:10000,
        loop:true,
        responsive: {
            573: {
                items: 1,
                slideBy:1
            },
            768: {
                items: 2,
                slideBy:2
            },
            1024: {
                items: 5,
                slideBy:5
            }
        }
    });
}); */