/* array: A variável composta é o array, uma variável q agrupa mais de um valor.(vetor)
    E esse vetor é composto de elementos(é um par que agrupa o espaço da memória
    o valor colocado dentro dele e o índicie).
    Então basicamente o array é uma variável que tem vários elementos. */

let num = [2, 5, 3, 8, 6]
/*num[3] = 4 //Aqui adicionamos um valor em um índicie que não existia.
num.push(7) //Aqui adicionamos um valor sem se preocupoar com o último íncie.
num.length //Aqui podemos saber o conmprimento do vetor.
num.sort() //Aqui ele pega todos os elementos e coloca em ordem crescente.*/
num.push(7)
num.sort()
console.log(num)
console.log(`O vetor tem ${num.length} posições`)
console.log(`O primeiro valor é ${num[0]}`)


/*for(var pos = 0; pos < num.length; pos++){
    console.log(`A posição de ${pos} tem o valor ${num[pos]}`)
} 

for(var pos in num) { /para cada posição dentro da variável composta 
    console.log(num[pos])
}
*/
//num.indexOf(7) Aqui ele retorna o íncie, pois ele procura o valor.
/*for(let pos in num) { //pos é position
    console.log(num[pos])
}
console.log(num.indexOf(7)) //vai me retornar o índicie do valor 7. */

var pos = num.indexOf(2)
if (pos == -1) {
    console.log('O valor não foi encontrado')
} else {
    console.log(`O valor está em ${pos}`)
}

