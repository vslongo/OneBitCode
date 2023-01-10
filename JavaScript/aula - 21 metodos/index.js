let pessoa = {
    nome: "Vinicius",
    idade: 19,
    dizerOla() {
        console.log("ola, mundo! Meu nome eh " + this.nome)
    }
}

console.log(pessoa)

pessoa.dizerOla()