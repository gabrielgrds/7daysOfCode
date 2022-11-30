function hello(){
    var nome = document.querySelector('#seuNome').value;
    var idade = document.querySelector('#suaIdade').value;
    var linguagem = document.querySelector('#suaLinguagem').value;

    createModal(nome, idade, linguagem);
}

var enviar = document.querySelector('#enviar');
enviar.addEventListener()