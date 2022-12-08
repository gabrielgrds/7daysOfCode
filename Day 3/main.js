let linguagem = prompt ("Você gostaria de seguir para backend(1) ou frotnend(2)?");

while (linguagem == "1") {
    let back = prompt ("Sendo assim, você gostaria de apreder C#(1) ou Java(2) ?");
    if (back == 1) {
        alert ("Legal, C# é realmente divertido!");  
        linguagem = 3;
    }
    else if (back == 2){
        alert ("Legal, Java é realmente divertido!");
        linguagem = 3;
    }
    else {
        alert ("Tenta respoder com o número 1 ou 2");
    }
}

while (linguagem == "2") {
    let front = prompt ("Sendo assim, você gostaria de aprender React (1) ou Vue(2) ?");
    if (front == 1) {
        alert ("Legal, React é mesmo muito legal!")
        linguagem == 4;
    }
    else if (front == 2) {
        alert ("Legal, Vue é mesmo muito divertido!");
        linguagem == 4;
    }
    else {
        alert ("Tente responder com o número 1 ou 2");
    }
}

if (linguagem !== "3" || linguagem !== "4") {
    alert ("Tente responder com o número 1 ou 2");
    console.log (linguagem);
}

else {
    alert ("teste");
}


//let tecnologia = prompt ("Tem alguma tecnologia que você gostaria de se especializar? 1 para sim e 2 para não.");







//colocar isso em uma página html e css
//aprender a retornar a pergunta quando responderem errado