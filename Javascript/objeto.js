const pessoa = {
    nome: "Vitor",
    idade: 24,
    interesses:["ciencia e tecnologia", "eletronicos"],
    conjuge: {
        nome: "Ana",
        idade: 24,
        interesses: ["maquiagem", "decoracao"]
    },
    getNome: function() {
        return this.nome;
    },
    getIdade: function() {
        return this.idade;
    },
    getNomeIdade: function() {
        return `Meu nome é: ${this.getNome()} e minha idade é: ${this.getIdade()}!`
    }
}

console.log(pessoa.getNomeIdade());

// this = este