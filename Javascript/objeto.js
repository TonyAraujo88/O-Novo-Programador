const pessoa = {
    nome: "Vitor",
    idade: 24,
    interesses:["ciencia e tecnologia", "eletronicos"],
    conjuge: {
        nome: "Ana",
        idade: 24,
        interesses: ["maquiagem", "decoracao"]
    },
    saudacao : function () {
        console.log('Olá, mundo!')
    }
}


pessoa.saudacao()
