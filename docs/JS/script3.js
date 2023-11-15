document.addEventListener("DOMContentLoaded", function () {
    // Gera um número aleatório entre 1 e 1000
    var numeroAleatorio = parseInt(Math.random() * 1000) + 1;

    // Obtém referências para os elementos do DOM e inicializa as tentativas
    var form = document.querySelector("form");
    var inputNumero = document.getElementById("numero");
    var paragrafoComparacao = document.getElementById("comparacao");
    var paragrafoAnterior = document.getElementById("anterior");
    var paragrafoTentativa = document.getElementById("tentativa");
    var tentativas = 0;

    // Adiciona um ouvinte de eventos para o botão "Enviar"
    form.addEventListener("submit", function (event) {
        event.preventDefault(); // Impede o envio padrão do formulário

        // Obtém o número inserido pelo usuário
        var numeroInserido = parseInt(inputNumero.value);

        // Verifica se o número inserido é igual ao número aleatório
        if (numeroInserido === numeroAleatorio) {
            paragrafoComparacao.textContent = "Parabéns! Você acertou!";
        } else {
            // Atualiza os parágrafos com informações sobre a tentativa
            tentativas++;
            paragrafoTentativa.textContent = "Tentativa: " + tentativas;

            if (numeroInserido < numeroAleatorio) {
                paragrafoComparacao.textContent = "Tente um número maior.";
            } else {
                paragrafoComparacao.textContent = "Tente um número menor.";
            }

            // Adiciona o número inserido ao parágrafo "anterior"
            paragrafoAnterior.textContent = "Ultimo Numero: "+numeroInserido;
        }
    });
});