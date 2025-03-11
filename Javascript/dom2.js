//querrySelector - Busca o primeiro elemento pela classe, id ou tag. Retorna um elemento apenas.
//querrySeletorAll - Busca todos os elementos pela classe, id ou tag. retorna todos.

const elemento = document.getElementById('container');
console.log(elemento)

const mesmoElemento = document.querySelectorAll('#container');
console.log(mesmoElemento)

const paragrafo = document.querySelector('p'); 
paragrafo.textContent = 'meu novo paragrafo!';
