let num = [4, 3, 2, 1]

num.push(5) //adiciona um elemento 
num.sort() //põe em ordem
console.log(num)
//console.log(`Nosso vetor é o ${num}`)
console.log(`O vetor tem ${num.length} posições.`) // identifica a quatidade de elementos
console.log(`O primeiro valor do vetor é ${num[0]}`) // identifica o primeiro elemento, que é "0"
let pos = num.indexOf(8)
if (pos == -1) {
    console.log(`O valor não foi encontrado!`)
} else {
    console.log(`O valor 4 está na posição ${pos}`)
}