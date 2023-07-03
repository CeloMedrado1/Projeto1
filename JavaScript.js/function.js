/* Exemplo dito de função: Sua mãe fez uma CHAMADA para você comprar coisas, 
para isso ela passou PARÂMETROS(ex: dinheiro), então você executou a ação,
e isso deu um retorno.

Funções - São ações executadas assim que são chamadas ou em decorrência de um evento.
Funções - Podem receber parámetors e retornar um resultado.

Function ação(param) {
    return res
}
ação(5)

function parimp(n){
    if (n%2 == 0) {
        return 'par'
    } else {
        return 'ímpar'
    }
}

let res = parimp(11) --> chamada

*/

function parimp(n){
    if (n%2 == 0) {
        return 'par'
    } else {r
        return 'ímpar'
    }
}

let res = parimp(10)
console.log(res)

function soma(n1=0, n2=0) { //ação soma n1 + n2/ demos valores
    return n1 + n2 //retorne o valor de n1 + n2
}
console.log(soma(2, 4))

var v = function(x) { //passamos para a variável um parámetro.
   return x * 2
}
console.log(v(5))

function fatorial(n) {
    let fat = 1
    for(let c = n; c > 1; c--) {
        fat *= c
    }
    return fat
}

console.log(fatorial(5))
