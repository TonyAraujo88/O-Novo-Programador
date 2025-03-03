const usuario = {
    nome: 'Maria',
    idade: 26,
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

const { nome, idade} = usuario;

