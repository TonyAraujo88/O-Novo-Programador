const titulo = document.getElementById('titulo'); 
titulo.textContent = 'O Vitor é muito gente boa!';



const elementosVerdes = document.getElementsByClassName('texto--verde');
//console.log(elementosVerdes)

const div = document.getElementById('espaco');

div.style.height  = '100px';
div.style.width = '100px';
div.style.background = 'red';

for(let i = 0; i < elementosVerdes.length; i++) {
    elementosVerdes[i].style.color = 'blue';
    elementosVerdes[i].style.fontSize = '50';
}

const titulos = document.getElementsByTagName('h1');
console.log(titulos)