const pessoa = {
    nome: "Vitor",
    idade: 24,
    interesses:["ciencia e tecnologia", "eletronicos"],
    conjuge: {
        nome: "Ana",
        idade: 24,
        interesses: ["maquiagem", "decoracao"]
    }   
}

//const copiaPessoa = Object.assign({}, pessoa);
const copiaPessoa = { ...pessoa};

console.log(copiaPessoa)
