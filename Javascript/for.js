const lista_compras = [
        "Feijão",
        "Arroz",
        "Macarrão",
        "Farinha"
];

lista_compras[2] = "Batata";
console.log(lista_compras)

const estudante = {
    nome: 'Tony',
    curso: 'HTML'
};

    let encontrouCurso = false;
    
    for(let chave in estudante) {
        if(estudante[chave] === 'HTML') {
            encontrouCurso = true;
            break;
        }
    }

    console.log(encontrouCurso);

for ( let chave in lista_compras) {
    if(lista_compras[chave] === 'Feijão') {
        console.log('Encontrei');
        break;        
    } else {
        console.log('Não encontrei')
    }
}

lista_compras.map((item) => {

})

for (let q = 0; q < lista_compras.length; q++) {
    
} 


