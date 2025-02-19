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

 const pessoas = [
    {
        nome: "Vitor",
        idade: 24,
        religiao: 'católico',
        interesses:["ciencia e tecnologia", "eletronicos"],
        conjuge: {
            nome: "Ana",
            idade: 24,
            interesses: ["maquiagem", "decoracao"]
        } 
    },
    {
        nome: "Carlos",
        idade: 24,
        religiao: 'católico',
        interesses:["ciencia e tecnologia", "eletronicos"],
        conjuge: {
            nome: "Luiza",
            idade: 25,
            interesses: ["maquiagem", "decoracao"]
        } 
    },
    {
        nome: "Ana",
        idade: 25,
        religiao: 'católico',
        interesses:["filosofia", "psicologia"],
        conjuge: {
            nome: "Vitor",
            idade: 24,
            interesses: ["ciencia e tecnologia", "eletronicos"]
        }
    },
    
 ];

 //Não se esquecer de colocar a avírgula

// find -> vai retornar o primeiro item do arrey que satisfaça a condição.
//console.log(pessoas.find((item) => item.nome === 'Vitor'));

//filter -> vai criar um arrey e retornar todos os itens que satisfaçam a condição da função
//console.log(pessoas.filter((item) =>  item.idade === 24));

//map -> vai mapear o arrey, pegar item a item, criar um arrey e retornar de acordo com uma função

const resultado = pessoas.map((item, index) => {
    const nomeAnterior = item.nome;
   
    item.nome = nomeAnterior.toUpperCase();
    
    return item;
})

console.log(resultado)


