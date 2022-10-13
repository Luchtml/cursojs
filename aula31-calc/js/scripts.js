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


const buttons = document.querySelectorAll ("#buttons-container button")
const opAnteriorText = document.querySelector('#anterior')
const opAtualText = document.querySelector('#atual')


//lógica da aplicação (calculadora)
class Calculator {
    constructor(opAnteriorText, opAtualText) {
        this.opAnteriorText = opAnteriorText
        this.opAtualText = opAtualText
        this.atuOperation = ''
    }

    //adicionar digito a calculadora tela
    addDigt(digit) {
        //check if atual operation tem um ponto
        if(digit === '.' && this.opAtualText.innerText.includes('.')) {
            return
        }

        this.atualOperation = digit
        this.updateScreen()
    }

    //processo todo da calculadora operações
    processOperation(operation) {

        //checar se o atual value está vazio
        if(this.opAtualText==='' && operation !== 'C') {
            //mudar a operação
            if(this.opAnteriorText.innerText !== '') {
                this.changeOperation(operation)

            }
            return
        }
     

        // pegar atual e anterior value
        let operationValue
        const anterior = +this.opAnteriorText.innerText.split(' ')[0]
        const atual = +this.opAtualText.innerText

        switch(operation) {
            case '+':
                operationValue = anterior + atual
                this.updateScreen(operationValue, operation, atual, anterior)
                break
            case '-':
                operationValue = anterior - atual
                this.updateScreen(operationValue, operation, atual, anterior)
                break
            case '/':
                operationValue = anterior / atual
                this.updateScreen(operationValue, operation, atual, anterior)
                break
            case '*':
                operationValue = anterior * atual
                this.updateScreen(operationValue, operation, atual, anterior)
                break
            case 'DEL':
                this.processDelOperator()
                break
            case 'CE':
                this.processClearatualOperation()
                break
            case 'C':
                this.processClearAll()
                break
            case '=':
                this.processIgual()
                break
            default:
                return
        }
    }

    //change values of calculator screen
    updateScreen(operationValue = null,
         operation = null, 
         atual = null,
         anterior = null) {


        
            if(operationValue === null) {
                this.opAtualText.innerText += this.atualOperation
            } else {
                //checar se o valor é 0, add atual value
                if(anterior===0) {
                    operationValue = atual
                }


                // Add atual value to anterior
                this.opAnteriorText.innerText = `${operationValue} ${operation}`
                this.opAtualText.innerText = ''
            }
    }

   //mudar operações matematicas 
   changeOperation(operation) {
    const mathOperation = ['+', '-', '/', '*']
    if(!mathOperation.includes(operation)) {
        return
    }

    this.opAnteriorText.innerText = 
        this.opAnteriorText.innertText.slice(0, -1) + operation

   }
   //deletar o ultimo digito
   processDelOperator() {
    this.opAtualText.innerText = 
        this.opAtualText.innerText.slice(0, -1)
   }

   //deletar operação atual

   processClearatualOperation() {
    this.opAtualText.innerText = ''
   }

   //limpar toda operação

   processClearAll() {
    this.opAtualText.innerText = ''
    this.opAnteriorText.innerText = ''
   }

   //igual

   processIgual() {
    const operation = opAnteriorText.innerText.split(' ')[1]

    this.processOperation(operation)
   }
}

const calc = new Calculator(opAnteriorText, opAtualText)

//evetos que vão ser utilizados para fazer funcionar
buttons.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        const value = e.target.innerText

        if(+value >= 0 || value === '.') {
            calc.addDigt(value)
        } else {
            calc.processOperation(value)
        }
    })
})