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
    },

    buscarNotas: function(titulo) {
        return this.notas.filter((nota) => nota.titulo.includes(titulo));
    }
}

// filter -> retorna todos os que atenderem a condição solicitada 


gerenciadorDeNotas.adicionarNota('Estudar 4 aulas por dia!', 'Módulo 2 de JS!');
gerenciadorDeNotas.adicionarNota('Lembrar de tomar café antes das aulas!', 'Você sempre deixa esfriar!');
gerenciadorDeNotas.adicionarNota('Comprar novo teclado para estudar as aulas', 'Este está horrível');

console.log(gerenciadorDeNotas.buscarNotas('aulas'));



//console.log(gerenciadorDeNotas.notas)

