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
    constructor(opAnteriorText, opAtualText) {
        this.opAnteriorText = opAnterior
        this.opAtualText = opAtual
        this.oper = ''
    }

//adicionar na tela metodos
    addDigit(digit) {
        if(digit === '.' && this.opAtualText.innerText.includes('.')) {
            return
        }
        this.opAtual = digit
        this.atualizarTela()
    }


// adicionar na tela metodos de op

    operatProcess (operation) {

        if(this.opAtualText.innerText.includes(operation)){
            return
        }

        this.opAtualText.innerText += operation
    }



//atualizar tela

    atualizarTela(){
        this.opAtualText.innerText += this.opAtual;
    }

}

const opAnterior = document.querySelector('#anterior')
const opAtual = document.querySelector('#atual')
const buttons = document.querySelectorAll('#buttons-container button')


const calc = new Calculadora()

buttons.forEach((btns) => {
    btns.addEventListener('click', (e) => {
        const value = e.target.innerText
        if (+value >= 0 || value === '.') {
            calc.addDigit(value)
        } else {
            calc.operatProcess(value)
        }
    })
})