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
    //A arrow function não acessa os escopos de fora.
    getNomeEIdade: function() {       
        return `Meu nome é: ${this.getNome()} e minha idade é: ${this.getIdade()}!`
    }
}

console.log(pessoa.getNomeEIdade());

// this = este

// function() {} = herda o escopo em que foi definida
// () => {} = não herda o escopo em que foi definida, ela tem seu prórpio escopo