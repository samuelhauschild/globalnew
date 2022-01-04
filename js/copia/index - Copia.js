// arquivo da classe geral do sistema
const classeGerais_ = function () {};

// arquivo Funcoes Gerais
classeGerais_.prototype.modal_ = function () {};

/* arquivo index js*/
(function (window) {

    /*--------- Gerneral setup --------------*/

    const classeGerais = new classeGerais_();
    const modal = new classeGerais.modal_();

    /*--------- Gerneral setup --------------*/


    const request = {

        cadastro: function (data) {

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
            this.createElement();
            this.addContent();
            this.addChild();
            this.getElement();
            this.addAtributo();
            this.titleBody();
            this.getValue();
            this.clearValue();
            this.validacaoCadastro();

        },
        clearValue: function () {

            this.off.forEach(function (offInput) {
                offInput.setAttribute("autocomplete", "off");
            })

        },
        getElement: function () {
            this.modalBody = document.querySelector(".modal-title");
            this.email = document.querySelector("#email");
            this.senha = document.querySelector("#senha");
            this.msgEmail = document.querySelector("#msgEmail");
            this.msgSenha = document.querySelector("#msgSenha");
            this.blurInput = document.querySelectorAll(".blurInput");
            this.off = document.querySelectorAll(".noAutoComplete");
        },
        createElement: function () {
            this.modalContent = document.querySelector(".modal-body");
            this.containerProduto = document.createElement("div");
        },
        addChild: function () {
            this.modalContent.appendChild(this.containerProduto);
        },
        addAtributo: function () {
            this.containerProduto.setAttribute("class", "container-produto");
        },
        addContent: function () {
            this.containerProduto.innerHTML = `<div class="container">
                <div class="row">
                    <div class="col-md-12">
                        <div class="bg-success text-center pt-2 pb-2 text-white d-none">Sucesso</div>
                        <form method="POST">
                           <div class="mt-3 mb-3">
                                <label class="form-label" for="nome">Email</label>
                                <input type="text" class="form-control blurInput noAutoComplete" placeholder="Informe Seu Email" name="email" id="email" />
                                <div id="msgEmail"></div> 
                            </div> 
                           <div class="mt-3 mb-3">
                                <label class="form-label" for="senha">Senha</label>
                                <input type="password" class="form-control blurInput noAutoComplete" name="senha" placeholder="Informe Sua Senha" id="senha" />
                               <div id="msgSenha"></div> 
                            </div> 
                        </form>
                    </div>
                         </div>
                    </div>
              </div>
         </div>`
        },
        titleBody: function () {
            this.modalBody.textContent = "Cadastro Sky Net";
        },
        getValue: function () {
            this.inputValue = {
                email: this.email.value,
                senha: this.senha.value
            };
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
        validacaoCadastro: function () {

            const this_ = this;

            this.blurInput.forEach(function (input) {
                input.addEventListener("blur", function () {
                    this_.inputBlurValidacao()
                });
            });
            this.blurInput.forEach(function (input) {
                input.addEventListener("blur", function () {
                    this_.inputBlurValidacao()
                });
            });
        },
        cadastrar: function (data) {
            //console.log("Entrou Requeste.",email,senha)
            request.cadastro(data);
        }
    };

    let load = function () {
        let btn_cadastrar = document.querySelector("#btn_cadastrar");

        btn_cadastrar.addEventListener("click", function (e) {
            e.preventDefault();

            let data = {
                "email": document.querySelector("#email").value,
                "senha": document.querySelector("#senha").value
            };

            if (App.validacaoCadastro(data)) {
                console.log("entrou senha ou email vazio")
                return;
            }
            App.cadastrar(data);
        });
        App.init();
    };

    window.onload = load;

})(window);
