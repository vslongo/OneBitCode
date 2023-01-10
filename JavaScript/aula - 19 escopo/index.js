// Apenas variáveis declaradas com var ficam
// disponíveis em um escopo mais externo
function avaliarNota(nota) {
    if (nota > 60) {
      var aprovado = true
      let situacao = "Aprovado"
    } else {
      var aprovado = false
      let situacao = "Reprovado"
    }
  
    console.log(nota)
    console.log(aprovado)
    console.log(situacao) // Gera erro
  }
  avaliarNota(83)
  avaliarNota(49)
  
  // Mas mesmo o var não consegue "sair" para fora do escopo da função
  function ola() {
    var texto = "Olá, mundo!"
  }
  console.log(texto) // Gera erro

  // Apenas variáveis declaradas com var são carregadas
// sempre no começo do código, acima de todo o resto

    console.log(nome)
    console.log(sobrenome)
    var nome = "Vinicius"
    let sobrenome = "Slongo"
    console.log(nome)
    console.log(sobrenome)