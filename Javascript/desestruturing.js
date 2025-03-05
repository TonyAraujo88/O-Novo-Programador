const usuario = {
    nome: 'Maria',
    idade: 25,
    cidade: 'São Paulo',
    email: 'maria@gmail.com',
    redes: {
        instagram: '@maria',
        twittwe: '@maria_dev'
    }
};

// Forma antiga

const nomeUsuario = usuario.nome;
const idadeUsuario = usuario.idade;

// Com desesttruturing

const { nome, idade } = usuario;

//console.log(nome)

// proximo exemplo

const pedido = {
    numero: 12345,
    cliente: 'Maria',
    prato: 'Bolo',
    endereco: 'Rua das flores',
    valor: 50.00
}

const { numero, prato } = pedido;

//console.log(numero)


let ranking = [ 'João', 'Maria', 'Pedro'];

[ranking[0], ranking[1],] = [ranking[1], ranking[0]];

let manha = ['Carlos', 'Fabio']
let tarde = 'Ana';
let noite = 'Felipe';

[manha[0], manha[1], tarde, noite] = [tarde, [''], noite, [manha[0], manha[1]]]

console.log(manha, tarde, noite)

let posicaoy = 10;
let posicaox = 20;

[posicaoy, posicaox] = [posicaox, posicaoy];

console.log(posicaoy, posicaox)

let config = {
    tema: 'claro',
    fonte: 'pequena'
};

[config.tema, config.fonte] = ['escuro', 'médio'];

console.log(config);

let jogadores = ['Neymar', 'Messi', 'Cristiano'];
let pontuacao = [90, 95, 88];

//1. Troque 