const valorDolar = 5.3135;
const valorEuro = 5.77;

const loteTransferenciasEmDolar = [100000, 20000, 5000, 60000, 77000, 550, 700000, 50000, 4, 300, 4000];

const loteTransferenciasConvertidasEmReal = loteTransferenciasEmDolar.map((valor) => {
    return valor * valorDolar;
})

console.log(loteTransferenciasConvertidasEmReal)