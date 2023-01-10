const resultado = prompt("Escolha um resultado: ")
const resultadoNumerico = parseFloat(resultado)


switch(resultadoNumerico) {
    case "1":
        alert("o resultado e 'a'")
        break
    case "2":
        alert("o resultado e 'b'")
        break
    case "3":
        alert("o resultado e 'c'")
        break
    default:
        alert("finalizando...")
        
}