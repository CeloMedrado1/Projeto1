/* while (condição) {
    bloco
}
*While(enquanto) é usado como laço de repetição, 
enquanto a condição for verdadeira prossiga com o bloco. 

function comerPizza() {
    while (temFatia()) {
        comerFatia()
    } *Esse laço ira se repetir até que a condição termine.
}

do {
    bloco
} while (condição)
*Essa estrutura é feita quando primeiro executamos o programa e depois o teste lógico.
*/

var contador = 1
    while (contador <= 6) {
        console.log(contador)
        contador++
    }

var c2 = 1
do {
    console.log(`passo ${c2}`)
    c2++
} while(c2 <= 6)

