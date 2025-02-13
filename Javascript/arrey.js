const listaCompras = ["feijão", "arroz", "ovo"];

const receitadePao = ["farinha de trigo", "fermento biológico", "açucar", "leite", "ovo"];

console.log(listaCompras)

const numeros = [10, 80, 60, 80, 90];

const resultadoEmDobro = numeros.map((numero) => {
    return numero * 2;
})

console.log(resultadoEmDobro)

receitadePao.map((item) => {
    document.write(item+", ")
})
