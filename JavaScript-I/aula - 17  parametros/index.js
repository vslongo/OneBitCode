function dobro(x) {
  alert("O dobro de " + x + " eh " + (x * 2))
}

// dobro(5)

function dizerOla(nome = "mundo") {
  alert("ola, " + nome + "!")
}

// dizerOla("Vinicius")
// dizerOla()

function soma(a, b) {
  alert("O resultado da soma eh: " + (a + b))
}

// soma(7, 6)

// Ao usar vários parâmetros, é recomendado deixar aqueles com valor padrão por último
function criarUsuario(nome, email, senha, tipo = "leitor") {
  const usuario = {
    nome,
    email,
    senha,
    tipo
  }
  console.log(usuario)
}

function novoUsuario(nome, tipo = "leitor", email, senha) {
  const usuario = {
    nome,
    email,
    senha,
    tipo
  }
  console.log(usuario)
}

criarUsuario("Isaac", "isaac@email.com", "1234")
novoUsuario("Isaac", "isaac@email.com", "1234")

// Ao criarmos uma função com muitos parâmetros,
// uma boa prática é substituí-los por um objeto
function parametrosDoJeitoErrado(nome, telefone, endereco, aniversario, email, senha) {
  // ...
}

function parametrosDoJeitoCerto(usuario) {
  // ...
}
// Além de facilitar na chamada da função, a ordem dos parâmetros se torna irrelevante
parametrosDoJeitoErrado("nome", "telefone", "endereco", "aniversario", "email", "senha")
const dadosDoUsuario = {
  nome: "",
  telefone: "",
  email: "",
  senha: "",
  aniversario: "",
  endereco: ""
}
parametrosDoJeitoCerto(dadosDoUsuario)