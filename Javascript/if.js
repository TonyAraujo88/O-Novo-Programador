const email = "contatoonovoprogramador.com"; 
const senha = "senha123";


// 1 sinal de = (igual) é atribuição, definindo algo.
// 2 sinais de = (igual) é comparação.
// 3 sinais de = (igual) é comparação de tipagem.

//no if && = E
//no if || = OU
//no if > = MAIOR
//no if < = MENOR

if (email == "contatoonovoprogramador.com" || senha == "senha123") {
    //Fazer login do ususário
    console.log("Sim o e-mail e a senha estão corretos");
}

const prato = "vazio";

if (prato == "vazio") {
    console.log("Retirar prato!")
}

if (prato !="cheio") {
    console.log("Retirar prato!");
}

const numero1 = 50;
const numero2 = 50;

if (numero1 == numero2) {
    console.log("Os numeros são iguais!");
    console.log(numero1 + numero2);
}

const score_serasa = 600;


if (score_serasa >= 600 && score_serasa <= 800) {
    console.log("Aprovado o financiamento Parabéns!");
}

if (numero1 < numero2) {
    console.log("O segundo número é maior");
}