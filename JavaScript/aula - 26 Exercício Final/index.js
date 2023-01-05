let vagas = []

function listarVagas() {
    const vagasEmTexto = vagas.reduce(function (textoFinal, vaga, indice) {
        // 1. nome, quantidade de candidatos
        textoFinal += indice + ". "
        textoFinal += vaga.nome
        textoFinal += " (" + vaga.candidatos.length + " candidatos)\n"

        return textoFinal
    }, "")
    alert(vagasEmTexto)
}

function criarVaga() {
    const nome = prompt("Informe um nome para a vaga: ")
    const descricao = prompt("Informe uma descrição para a vaga: ")
    const dataLimite = prompt("Informe uma data limite para vaga: ")

    const confirmacao = confirm("deseja criar essa vaga?\n" +
        "nome: " + nome + "\nDescrição: " + "\nData Limite: " + dataLimite)

    if (confirmacao) {
        const criarVaga = {
            nome,
            descricao,
            dataLimite,
            candidatos: []
        }
        vagas.push
        alert("vaga criada")
    }
}

function VisualizarVaga() {
    const indice = prompt("Informe o indice da vaga que deseja exibir: ")
    const vaga = vagas[indice]

    const candidatosEmTexto = vaga.candidatos.reduce(function (textoFinal, candidato) {
        return textoFinal + "\n - " + candidato
    }, "")

    alert("Vaga numero: " + indice +
        "\nNome: " + vaga.nome +
        "\nDescrição: " + vaga.descricao +
        "Data Limite: " + vaga.dataLimite +
        "Quantidade de candidatos: " + vaga.candidatos.length +
        "Candidatos inscritos: " + candidatosEmTexto)
}

function inscreverCandidato() {
    const candidato = prompt("Informe o nome do candidato: ")
    const indice = prompt("Informe o indice para qual o candidato quer se inscrever: ")
    const vaga = vagas[indice]

    const confirmacao = confirm(
        "Deseja inscrever o candidato " + candidato + "na vaga " + indice + "?\n" +
        "Nome: " + vaga.nome + "\nDescrição: " + vaga.descricao + "\nData limite: " + vaga.dataLimite
    )

    if (confirmacao) {
        vaga.candidato.push(candidato)
        alert("Inscrição realizada.")
    }
}

function ExcluirVaga() {
    const indice = prompt("Informe o índice da vaga que deseja excluir: ")
    const vaga = vagas[indice]

    const confirmacao = confirm(
        "Tem certeza que deseja excluir a vaga " + indice + "?\n" +
        "Nome: " + vaga.nome + "\nDescrição: " + vaga.descricao + "\nData limite: " + vaga.dataLimite
    )
    if (confirmacao) {
        vaga.candidato.splice(indice, 1)
        alert("Vaga Removida.")
    }
}

function exibirMenu() {
    const opcao = prompt(
        "Cadastro de Vagas de Emprego" +
        "\n\nEscolha uma das opções: " +
        "\n1. Listar vagas disponíveis" +
        "\n2. Criar uma vaga nova" +
        "\n3. Visualizar uma vaga" +
        "\n4. Inscrever um candidato" +
        "\n5. Excluir uma vaga" +
        "\n6. Sair"
    )

    return opcao
}

function executar() {
    let opcao = ""

    do {
        opcao = exibirMenu()

        switch (opcao) {
            case "1":
                listarVagas()
                break
            case "2":
                criarVaga()
                break
            case "3":
                VisualizarVaga()
                break
            case "4":
                inscreverCandidato()
                break
            case "5":
                ExcluirVaga()
                break
            case "6":
                alert("Saindo...")
                break
            default:
                alert("Opção Invalida.")
        }
    } while (opcao !== 6)
}

executar()