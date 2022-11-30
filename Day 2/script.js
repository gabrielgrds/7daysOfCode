let nome = prompt ("Qual seu nome ?");
let idade = prompt ("Quantos anos você tem ?");
let linguagem = prompt ("Qual linguagem de programação você está estudando ?");

let msg = `Olá ${nome}, você tem ${idade} anos e já está aprendendo ${linguagem}!`;
alert(msg);

let gostando = `Você está gostando de estudar ${linguagem}? Digite 1 para sim e 2 para não.`;
alert(gostando);

let simouNao = prompt ("Está gostando? 1 ou 2");

if (simouNao == 1) {
    alert ("Muito bom! Continue estudando e você terá muito sucesso.")
}
else {
    alert ("Ahh que pena... Já tentou aprender outras linguagens?")
}