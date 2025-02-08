const opcao = 30;

switch (opcao) {
    case 10:
        console.log("Feijão");
    break;
    case 20:
        console.log("Carne");
    break;
    case 30:
        console.log("Pizza");
    break;

    default:
        console.log("Produto não encontrado!");
}
if(opcao === 10) {
    console.log("Feijão");
} else if(opcao === 20){
    console.log("Carne");
}

    if(opcao === 10) {
        console.log("Feijão");
    } else if(opcao === 20) {
        console.log("Carne");
    } else if(opcao === 30) {
        console.log("Pizza");
    } else {
        console.log("Produto não encontrado!");
    }