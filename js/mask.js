// mascara
$(document).ready(function () {
/*     $("#cpf").mask("000.000.000-00");
    $("#cnpj").mask("00.000.000/0000-00");
    $("#cep").mask("00.000-000");
    $("#rg").mask("999.999.999-w", {
        translation: {
            'w': {
                pattern: /[X0-9]/
            }
        },
        reverse: true
    }); */

    let opcao = {
        translation: {
            'A': {
                pattern: /[A-Z]/
            },
            'a': {
                pattern: /[a-zA-Z]/
            },
            's': {
                pattern: /[a-zA-Z0-9]/
            },
            'L': {
                pattern: /[a-z]/
            },
            "M": {
                pattern: /[\w@\-.+]/,
                recursive: true
            }
        }
    }

    $("#tel").mask("(00) 0000-00009").blur(function (event) {
        if ($(this).val().length == 15) {
            $("#tel").mask("(00) 00000-0000");
        } else {
            $("#tel").mask("(00) 0000-00000");
        }
    });

});
