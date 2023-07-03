/* let amigo = {nome:'José',sexo:'M',peso:85.4,engordar(p){}}

* Com isso a primeira casa tem o identificador 'nome'.
* A cariével não vai ser uma chave 0 ou uma chamada de índicie 0 como no array.
* Assim o Atributo sera 'nome' e o valor dentro será 'José'.
* No segundo temos a mesma coisa, o atributo 'sexo' com valor 'M'.
* Na terceira temos o atributo 'peso' com valor '85.4'.
* No terceiro elemento foi colocado uma função.
* Os objetos são variáveis que guardam valores, também podem guardar funcionalidades.

*/

var amigo = {nome: 'José', 
sexo: 'M', 
peso: 200, 
engordar(p=0){
   if (this.peso < 100) {
    console.log('Abaixo do Peso')
   } else {
    console.log('Acima do peso')
   }
}}

amigo.engordar()
console.log(typeof amigo) //amigo nesse caso é um objeto.
console.log(amigo)
console.log(amigo.nome)

