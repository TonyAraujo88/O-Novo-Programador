const titulo = document.querySelector('.titulo');

//titulo.setAttribute('class', 'titulo tema--amarelo');
titulo.classList.remove('tema--verde');
titulo.classList.add('tema--amarelo')

const novoParagafo = document.createElement('p');
novoParagafo.textContent = 'Lorem ipsum imaginario';
document.body.appendChild(novoParagafo)

document.querySelector('p').remove();

