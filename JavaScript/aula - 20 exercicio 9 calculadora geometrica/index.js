executar()

function triangulo() {
    const base = parseFloat(prompt("qual o tamanho da base do triangulo?"))
    const altura = parseFloat(prompt("qual a alturado triangulo?"))
    return (base * (altura / 2))
}

function retangulo() {
    const base = parseFloat(prompt("qual o tamanho da base do retangulo?"))
    const altura = parseFloat(prompt("qual a alturado do retangulo?"))
    return (base * altura)
}

function quadrado() {
    const lado = parseFloat(prompt("qual o tamanho do lado do quadrado?"))
    return (lado * lado)
}

function trapezio() {
    const baseMaior = parseFloat(prompt("qual o tamanho da base maior do trapezio?"))
    const baseMenor = parseFloat(prompt("qual o tamanho da base menor do retangulo?"))
    const altura = parseFloat(prompt("qual a alturado do trapezio?"))
    return ((baseMaior + baseMenor) * altura / 2)
}

function circulo() {
    const raio = parseFloat(prompt("qual o tamanho do raio do circulo?"))
    return (3.14 * (raio * raio))
}



function exibirMenu() {
    return prompt(
        "Bem-vindo a Calculadora geometrica! \n" +
        "\n\nEscolha um opcao para calcular: " +
        "\n1. area do triangulo" +
        "\n2. area do retangulo" +
        "\n3. area do quadrado" +
        "\n4. area do trapezio" +
        "\n5. area do circulo" +
        "\n6. Sair"
    )

}

function executar() {
    let opcao = ""
    do {
        opcao = exibirMenu()
        let resultado
        switch (opcao) {
            case "1":
                resultado = triangulo()
                break
            case "2":
                resultado = retangulo()
                break
            case "3":
                resultado = quadrado()
                break
            case "4":
                resultado = trapezio()
                break
            case "5":
                resultado = circulo()
                break
            case "6":
                alert("Encerrando")
            default:
                alert("opcao invalida...")
                break
        }
        if (resultado) {
            alert("Resultado: " + resultado)
        }


    } while (opcao !== 6)
}