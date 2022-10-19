class Produto {
    constructor() {
        this.id = 1
        this.arrayProdutos = []
        this.editId = null
    }

    salvar() {
        
        let produto = this.lerDados()

        if(this.validaCampos(produto)) {
            if (this.editId == null) {
                this.adicionar(produto)   
            } else {
                this.atualizar(this.editId)
            }

        }

        this.listaTabela()
        this.cancelar()
    }

    listaTabela() {
        let tbody = document.querySelector('#tbody')
        tbody.innerText = ''

        for (let i = 0; i < this.arrayProdutos.length; i++) {
            let tr = tbody.insertRow()
            let td_id = tr.insertCell()
            let td_produto = tr.insertCell()
            let td_valor = tr.insertCell()
            let td_acoes = tr.insertCell()
            td_acoes.classList.add('action')

            td_id.innerText = this.arrayProdutos[i].id
            td_produto.innerText = this.arrayProdutos[i].nomeProduto
            td_valor.innerText = this.arrayProdutos[i].preco

            let imgEdit =  document.createElement('img')
            imgEdit.src = 'imagens/edit.svg'
            imgEdit.setAttribute('onclick','produto.prepararEdicao('+ JSON.stringify(this.arrayProdutos[i]) +')')
            imgEdit.classList.add('btn1')
            td_acoes.appendChild(imgEdit)

            let imgDelet = document.createElement('img')
            imgDelet.src = 'imagens/delete.svg'
            imgDelet.setAttribute('onclick','produto.deletar('+ this.arrayProdutos[i].id +')')
            imgDelet.classList.add('btn2')
            td_acoes.appendChild(imgDelet)
        }
    }

    adicionar(produto) {
        this.arrayProdutos.push(produto)
        this.id++
    }

    atualizar(id) {
        alert(id)
    }

    prepararEdicao(dados) {

        this.editId = dados.id
        document.querySelector('#produto').value = dados.produto
        document.querySelector('#preco').value = dados.preco

        document.querySelector('#btnSalv').innerText = 'ATUALIZAR'
    }

    lerDados() {
        let produto = {}
        produto.id = this.id
        produto.nomeProduto = document.querySelector("#produto").value
        produto.preco = document.querySelector("#preco").value
        return produto
    }

    validaCampos(produto) {
        let msg = ''

        if(produto.nomeProduto == '') { 
            msg += 'Informe o nome do produto \n'
        }

        if (produto.preco =='') {
            msg += 'Informe o preco do produto\n'
        }

        if (msg != '') {
            alert(msg)
            return false
        }

        return true
    }

    cancelar() {
        document.querySelector('#produto').value = ''
        document.querySelector('#preco').value = ''

    }

    deletar(id) {
        if(confirm('Deseja realmente deletar o produto do ID ' + id)) {
                let tbody = document.querySelector('#tbody')


        for(let i = 0; i < this.arrayProdutos.length; i++) {
            if(this.arrayProdutos[i].id === id) {
                this.arrayProdutos.splice(i, 1)
                tbody.deleteRow(i)
            }
        }    
        }

    }
}

let produto = new Produto ()