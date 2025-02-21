//titulo de contedo


const gerenciadorDeNotas = {
    notas: [
        { titulo: 'Levar o lixo', conteudo: 'A mulher já está brava!'}
    ],

    adicionarNota: function(tituloNovaNota, conteudoNovaNota) {
        this.notas.push({ titulo: tituloNovaNota, conteudo: conteudoNovaNota});
    },

    buscarNota: function(titulo) {
       return this.notas.find((nota) => nota.titulo.includes(titulo));
    }
}

gerenciadorDeNotas.adicionarNota('Estudar 4 aulas por dia!', 'Módulo 2 de JS!');
gerenciadorDeNotas.adicionarNota('Lembrar de tomar café antes da aula!', 'Você sempre deixa esfriar!');
gerenciadorDeNotas.adicionarNota('Comprar novo teclado', 'Este está horrível');

console.log(gerenciadorDeNotas.buscarNota('Estudar'));



//console.log(gerenciadorDeNotas.notas)

