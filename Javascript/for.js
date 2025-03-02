const lista_compras = [
        { nome: 'Feijão', marca: 'TioJoao'},
        { nome: 'Arroz', marca: 'KiArroz'}
];


for(let item of lista_compras) {
    console.log(item.nome)
}

lista_compras.map((item) => {
    console.log(item.nome)
})



