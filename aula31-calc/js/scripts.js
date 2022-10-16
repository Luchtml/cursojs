let links = document.querySelectorAll("#menu, #hamb, ul, a, li");
let body = document.querySelector("body");

let onLinkMouseEnter = function () {
    body.classList.add("onNavHover");  
}

let onLinkMouseOut = function () {
    body.classList.remove("onNavHover");
}

let onLinkMouseEnterDelay = function () {
    window.setTimeout(onLinkMouseEnter, 1);    
}

for (let indice in links) {
    let link = links[indice];
    link.onmouseenter = onLinkMouseEnterDelay;
    link.onmouseout = onLinkMouseOut;
}


//calculadora


class Calculadora {
    constructor(opAnterior, opAtual) {
        this.opAnterior = opAnterior
        this.opAtual = opAtual
        this.oper
    }

//adicionar na tela metodos
    

}

const opAnterior = document.querySelector('#anterior')
const opAtual = document.querySelector('#atual')
const buttons = document.querySelectorAll('#buttons-container button')


const calc = new Calculadora()

buttons.forEach((btns) => {
    btns.addEventListener('click', (e) => {
        const value = e.target.innerText
        if (+value >= 0 || value === '.') {
            console.log('its number ' + value)
        } else {
            console.log('its op ' + value)
        }
    })
})