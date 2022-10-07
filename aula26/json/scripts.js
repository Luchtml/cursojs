const objs = [
    {
    "nome": "Lucas",
    "idade": 26,
    "esta_trabalhando": true,
    "detalhes_profissao": {
        "profissao": "Programador",
        "empresa": "Empresa X"
    },
    "hobbies": ["Programar", "Jogar", "Séries"]
    },
    {
        "nome": "Thamires",
        "idade": 26,
        "esta_trabalhando": false,
        "detalhes_profissao": {
            "profissao": "null",
            "empresa": "null"
        },
        "hobbies": ["Jogar", "correr"],
    }
] 


//JSON
//converter para json

const jsonData = JSON.stringify(objs)

console.log(jsonData)

//converter JSON para objeto

const objData = JSON.parse(jsonData)

console.log(objData)
console.log(typeof objData)

objData.map((pessoa) => {
    console.log(pessoa.nome)
})