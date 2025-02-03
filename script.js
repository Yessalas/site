/**
 * Ano automatico
 * @author Yesenia Salas
 */

// fundo
const main = document.querySelector('main')
const backgrounds = ['url(img/background1.jpg)','url(img/background2.jpg)','url(img/background.jpg)']

let indice = 0

function slider(){
    indice ++
    if (indice >= backgrounds.length) {
        indice = 0
    }
    //troca da imagem de background no CSS
main.style.backgroundImage = backgrounds[indice]
main.style.transition = 'background-image 1s ease-in-out'
}

setInterval(slider, 3000)



// inserindo o ano na tag <spam>
let ano = document.getElementById('copyrightYear')
// a linha abaixo obtem o ano atual
let anoAtual = new Date().getFullYear()
// a linha abaixo atribui o ano a tag <spam>
ano.innerHTML = anoAtual