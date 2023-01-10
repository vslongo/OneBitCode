let firstName = ""
let lastName = ""
let studyArea = ""
let bornData = ""
const hoje = new Date()




firstName = prompt("escreva seu primeiro nome: ")
lastName= prompt("escreva seu sobrenome: ")
studyArea = prompt("escreva sua area de estudo ")
bornData = prompt("escreva sua data de nascimento: ")



alert (
    "boa, cadastro completo" +
    "\nnome completo: " + firstName + " " + lastName + 
    "\ncampo de estudo: " + studyArea +
    "\nIdade: " + (hoje.getFullYear() - parseInt(bornData))
)




