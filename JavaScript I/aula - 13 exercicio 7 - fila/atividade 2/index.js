const baralho = []
let opcao = ""


do{
    opcao = prompt(
        "Cartas no baralho: " + baralho.length +
        "\n1. Adicionar uma carta\n2. PUxar uma carta\n3. Sair"
    )

    switch (opcao){
        case "1":
            const novaCarta = prompt("Qual e anova carta?")
            baralho.push(novaCarta)
            break;
        case "2":
            const cartaPuxada = baralho.pop()
            if(!cartaPuxada){
                alert("Nao ha nenhuma carta no baralho")
            }else{
                alert("voce puxou um(a) " + cartaPuxada)
            }
            break;
    }
}while(opcao !== 3)

