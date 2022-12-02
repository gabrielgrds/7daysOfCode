function start () {
    var name = document.getElementById("name").value;
    var age = document.getElementById("age").value;
    var linguagem = document.getElementById("linguagem").value;

    alert(
        "Olá, " +
        name + 
        ". Você tem " +
        age +
        " anos de idade e já está aprendendo " +
        linguagem +
        "!"
    );

    var resposta = prompt(
        name +
        ", você gosta de estudar " +
        linguagem +
        "? Responda 1 para SIM e 2 para Não."
    );

    if (resposta == "1") {
        alert("Que bom! Continue estudando e você terá muito sucesso.");
    }
    else if (resposta == "2") {
        alert("Poxa, que pena. Você já tentou estudar outras linguages ?");
    }
    else {
        alert("Você precisa responder 1 ou 2.");
    }
}

//fazer o else final voltar para a pergunta se está gostando, do jeito que está, ele volta para o início das perguntas caso respoda errado.