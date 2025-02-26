//titulo de contedo


const gerenciadorDeNotas = {
    notas: [
        { id: 1, titulo: 'Levar o lixo', conteudo: 'A mulher já está brava!'}
    ],

    adicionarNota: function(idNovaNota, tituloNovaNota, conteudoNovaNota) {
        this.notas.push({ id: idNovaNota, titulo: tituloNovaNota, conteudo: conteudoNovaNota });
    },

    buscarNota: function(titulo) {
        return this.notas.find((nota) => nota.titulo.includes(titulo));
    },

    buscarNotas: function(titulo) {
        return this.notas.filter((nota) => nota.titulo.includes(titulo));
    },
    atualizarNota: function(id, tituloEditado, conteudoEditado ) {
        const posicao = this.notas.findIndex((nota) => nota.id === id);

        if(posicao < 0) {
            return 'Nota não encontrada!';
        }

        gerenciadorDeNotas.notas[posicao] = {id: id, titulo: tituloEditado, conteudo: conteudoEditado };

        return gerenciadorDeNotas.notas;
    },

    excluirNota: function(id) {
        const posicao = gerenciadorDeNotas.notas.findIndex((nota) => nota.id === id);
        if(posicao < 0) {
            return'Nota não encontrada!';
        }
        gerenciadorDeNotas.notas.splice(posicao, 1);

        return gerenciadorDeNotas.notas;
    }
}

// filter -> retorna todos os que atenderem a condição solicitada 


gerenciadorDeNotas.adicionarNota(2, 'Estudar 4 aulas por dia!', 'Módulo 2 de JS!');
gerenciadorDeNotas.adicionarNota(3, 'Lembrar de tomar café antes das aulas!', 'Você sempre deixa esfriar!');
gerenciadorDeNotas.adicionarNota(4, 'Comprar novo teclado para estudar as aulas', 'Este está horrível');

gerenciadorDeNotas.atualizarNota(2, 'nota editada', 'contedo editado');

console.log(gerenciadorDeNotas.excluirNota(1));

//console.log(gerenciadorDeNotas.notas)

