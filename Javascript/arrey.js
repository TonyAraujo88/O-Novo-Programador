const vendasDoDia = [250, 800, 600, 200, 752, 2, 10, 30, 53, 71];

let total = 0;
vendasDoDia.map((valorVenda) => {
    console.log(total);
    total = total + valorVenda;
})

console.log(total)