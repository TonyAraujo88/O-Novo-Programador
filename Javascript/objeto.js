const pessoa = {
    nome: "Vitor",
    idade: 23,
    interesses:["ciencia e tecnologia", "eletronicos"],
    conjuge: {
        nome: "Ana",
        idade: 24,
        interesses: ["maquiagem", "decoracao"]
    }
}

 const pessoas = [
    {
        nome: "Vitor",
        idade: 23,
        interesses:["ciencia e tecnologia", "eletronicos"],
        conjuge: {
            nome: "Ana",
            idade: 24,
            interesses: ["maquiagem", "decoracao"]
        } 
    },
    {
        nome: "Ana",
        idade: 25,
        interesses:["filosofia", "psicologia"],
        conjuge: {
            nome: "Vitor",
            idade: 24,
            interesses: ["ciencia e tecnologia", "eletronicos"]
        }
    },
    ['teste']
 ];

 //Não se esquecer de colocar a avírgula

console.log(pessoas.find((item) => {
    return item.nome === 'Ana';
}))

