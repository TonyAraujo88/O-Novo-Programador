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

console.log(numero)
