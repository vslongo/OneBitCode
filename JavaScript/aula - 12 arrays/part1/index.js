const arr = ["Frodo", "Sam", "Merry", "Pippin", "Gandalf", "Aragorn", "Legolas", "Gimli"]
console.log(arr)

//adicionar elemntos
// push

let tamanho = arr.push("Boromir")
console.log(arr)
console.log(tamanho)
//unshift
//adiciona elementos nokinicio do array
 tamanho = arr.unshift("Boromir")
console.log(arr)

console.log(tamanho)

//remover elementos
//pop

let ultimoElemento  = arr.pop()
console.log(arr)
console.log(ultimoElemento)

//shift

ultimoElemento = arr.shift()
console.log(arr)
console.log(ultimoElemento)


//pesquisar por um elemento
//includes
const inclui = arr.includes("Gandalf")
console.log(inclui)

//indeOf
const indice = arr.indexOf("Gandalf")
console.log(indice)

// cortar e Concatenar
//slice
const hobbits = arr.slice(0,4)
const outros = arr.slice(-4)
console.log(arr)
console.log(hobbits)
console.log(outros)

