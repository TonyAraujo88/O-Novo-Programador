const titulo = document.getElementById('titulo'); 
titulo.textContent = 'O Vitor é muito gente boa!';



const elementosVerdes = document.getElementsByClassName('texto--verde')
console.log(elementosVerdes)

for(let i = 0; i < elementosVerdes.length; i++) {
    elementosVerdes[i].style.color = 'blue';
}