const vendasDoDia = [250, 800, 600, 200, 752, 2, 10, 30, 53, 71];

//const total = vendasDoDia.reduce(
//   (acumulador, valorVenda) => {
//       return acumulador + valorVenda
//   },
//0);











let total = 0;
vendasDoDia.map((valorVenda) => {
    
    total = total + valorVenda;
});
console.log(total)

