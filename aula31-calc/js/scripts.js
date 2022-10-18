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
        this.opAnteriorText = opAnteriorText
        this.opAtualText = opAtualText
        this.opAtual = ''
    }

//adicionar na tela metodos
    addDigit(digit) {

        if (digit === '.' && opAtualText.innerText.includes('.')) {
            return
        }
        this.opAtual = digit
        this.attTela()
    }


// adicionar na tela metodos de op
    addOp(operation) {
        let opValue
        let anterior = +this.opAnteriorText.innerText.split(' ')[0]
        let atual =  +this.opAtualText.innerText

        switch (operation) {
            case '+':
                opValue = anterior / atual
                this.attTela(opValue, operation, atual, anterior)
            break
            case '-':
                opValue = anterior / atual
                this.attTela(opValue, operation, atual, anterior)
            break
            case '*':
                opValue = anterior / atual
                this.attTela(opValue, operation, atual, anterior)
            break
            case '/':
                opValue = anterior / atual
                this.attTela(opValue, operation, atual, anterior)
            break

            default:
                return
        }


    }


//atualizar tela   
    attTela(opValue= null, operation = null, atual=null, anterior=null) {
        if(opValue===null){
            this.opAtualText.innerText += this.opAtual
        } else {
            if (anterior === 0) {
                opValue = atual
            }
            this.opAnteriorText.innerText = `${opValue} ${operation}`
            this.opAtualText.innerText = ''
        }
        
    }

}

const opAnteriorText = document.querySelector('#anterior')
const opAtualText = document.querySelector('#atual')
const buttons = document.querySelectorAll('#buttons-container button')


const calc = new Calculadora(opAnteriorText, opAtualText)

buttons.forEach((btns) => {
    btns.addEventListener('click', (e) => {
        const value = e.target.innerText
        if (+value >= 0 || value === '.') {
            calc.addDigit(value)
        } else {
            calc.addOp(value)
        }
    })
})