const pessoa = { nome: "Tony", senha: "123", qualificação: "ensino médio completo", idade:  36, religião: "cistão", nivel_de_acesso: "admin" };


document.write(pessoa.nome)
document.write(pessoa.qualificação)
document.write(pessoa.idade)
document.write(pessoa.religião)
document.write(pessoa.nivel_de_acesso)

pessoa.email = "contato@onovoprogramador.com";
pessoa.nome = "Ana";

delete pessoa.senha

console.log(pessoa)