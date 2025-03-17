//keydown - Dispado quando uma tecla é precionada
//keyup - Disparado quando uma tecla é solta
// keypress - Disarado quando uma tecla é pressionada

document.addEventListener('keydown', (evento) => {
   if(evento.key === 'Enter') {
        enviarMensagem();
   }
});

function enviarMensagem() {
    alert('Mensagem enviada com sucesso!')
}