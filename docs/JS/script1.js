document.addEventListener("DOMContentLoaded", function () {
    var formulario = document.querySelector('form');
    var corpo = document.body;
    formulario.addEventListener("submit", function (event) {
        event.preventDefault();

        var inputNome = document.getElementById('nome').value;
        var inputSobrenome = document.getElementById('sobrenome').value;
        var inputIdade = document.getElementById('idade').value;
        var inputAltura = document.getElementById('altura').value;
        var inputGeneroOpcao = document.getElementsByName('genero');
        var inputGenero;
        var inputCheckbox = document.getElementsByName('hobbie');
        var inputHobbie = [];
        var paragrafo = document.getElementById('paragrafo');
        var resultado = document.getElementById('resultado');
        var videoGameImg = document.getElementById('videoGameImg');
        var filmesImg = document.getElementById('filmesImg');
        var seriesImg = document.getElementById('seriesImg');
        var livroImg = document.getElementById('livroImg');
        var desenhoImg = document.getElementById('desenhoImg');

        for (let i = 0; i < inputGeneroOpcao.length; i++) {
            if (inputGeneroOpcao[i].checked) {
                inputGenero = inputGeneroOpcao[i].value;
            }
        }

        for (let i = 0; i < inputCheckbox.length; i++) {
            if (inputCheckbox[i].checked) {
                inputHobbie.push(inputCheckbox[i].value);
            }
        }

        if (inputGenero === 'Masculino') {
            corpo.style.backgroundColor = 'green';
        } else if (inputGenero === 'Feminino') {
            corpo.style.backgroundColor = 'yellow';
        } else if (inputGenero === 'Nao informar') {
            corpo.style.backgroundColor = 'gray';
        }

        if (inputIdade === '1') {
            paragrafo.innerHTML = `Olá ${inputNome} ${inputSobrenome}, você possui ${inputIdade} ano e tem ${inputAltura} metros. Por ter escolhido a opção de gênero ${inputGenero}, a página foi alterada de cor de fundo, e seus hobbies são: ${inputHobbie.join(', ')}.`;
        } else {
            paragrafo.innerHTML = `Olá ${inputNome} ${inputSobrenome}, você possui ${inputIdade} anos e tem ${inputAltura} metros. Por ter escolhido a opção de gênero ${inputGenero}, a página foi alterada de cor de fundo, e seus hobbies são: ${inputHobbie.join(', ')}.`;
        }
        videoGameImg.style.display = 'none';
        filmesImg.style.display = 'none';
        seriesImg.style.display = 'none';
        livroImg.style.display = 'none';
        desenhoImg.style.display = 'none';
        if (inputHobbie.includes('Video game')) {
            videoGameImg.style.display = 'inline';
        }

        if (inputHobbie.includes('Filme')) {
            filmesImg.style.display = 'inline';
        }

        if (inputHobbie.includes('Serie')) {
            seriesImg.style.display = 'inline';
        }

        if (inputHobbie.includes('Livro')) {
            livroImg.style.display = 'inline';
        }

        if (inputHobbie.includes('Desenho')) {
            desenhoImg.style.display = 'inline';
        }

        resultado.style.display = 'inline';
    });
});
