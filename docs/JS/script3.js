document.addEventListener("DOMContentLoaded", function () {
    var numeroAleatorio = parseInt(Math.random() * 1000) + 1;
    var form = document.querySelector("form");
    var inputNumero = document.getElementById("numero");
    var paragrafoComparacao = document.getElementById("comparacao");
    var paragrafoAnterior = document.getElementById("anterior");
    var paragrafoTentativa = document.getElementById("tentativa");
    var tentativas = 0;
    form.addEventListener("submit", function (event) {
        event.preventDefault();
        var numeroInserido = parseInt(inputNumero.value);
        if (numeroInserido === numeroAleatorio) {
            paragrafoComparacao.textContent = "Parabéns! Você acertou!";
        } else {
            tentativas++;
            paragrafoTentativa.textContent = "Tentativa: " + tentativas;
            if (numeroInserido < numeroAleatorio) {
                paragrafoComparacao.textContent = "Tente um número maior.";
            } else {
                paragrafoComparacao.textContent = "Tente um número menor.";
            }
            paragrafoAnterior.textContent = "Ultimo Numero: "+numeroInserido;
        }
        document.getElementById('numero').value='';
    });
});