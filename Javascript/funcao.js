function garcom(prato, mesa) {
    return `${prato} entregue na mesa ${mesa}`;
}

//const retornoGarcom = garcom("carbonara", "10");

//console.log(retornoGarcom);

// A função só é executada quando eu a chamo
//O return para a execução da função

const email_correto = "contato@onovoprogramador.com";
const senha_correta = "senhadificil123";

function login(email, senha) {
    //Verificar se e-mail e senha estão corretos!

    if (email === email_correto && senha === senha_correta) {
      return "Login efetuado com sucesso!";
    } 
      return "E-mail e/ou senha inválidos";
    
}
 
const resultadoLogin = login("contato@onovoprogramador.com", "senhadificil123");

console.log(resultadoLogin);