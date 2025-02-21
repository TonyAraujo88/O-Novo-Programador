//titulo de contedo


const gerenciadorDeNotas = {
    notas: [
        { titulo: 'levar o lixo', conteudo: 'A mulher já está brava!'}
    ],

    adicionarNota: function(tituloNovaNota, conteudoNovaNota) {
        this.notas.push ({titlo: tituloNovaNota, conteudo: conteudoNovaNota});
    }
}

gerenciadorDeNotas.adicionarNota('Estudar 4 aulas por dia', 'Modulo 2 de JS!');

console.log(gerenciadorDeNotas.notas)