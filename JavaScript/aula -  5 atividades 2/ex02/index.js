// jogador 1 //
const nomePrimeiroJogador = prompt("Qual o seu nome Jogador 1? ")
const poderAtaqueJogador = prompt("Qual o seu poder de ataque "+nomePrimeiroJogador+"?")

// jogador 2 //
const nomeSegundoJogador = prompt("Qual o seu nome Jogador 2? ")
let pontoDeVida = prompt("Quantos pontos de vida voce possui jogador "+nomeSegundoJogador+"?")
const poderDeDefesa = prompt("Qual o seu poder de defesa "+nomeSegundoJogador+"?")
const escudo = prompt("esta usando escudo jogador?")


let danoCausado = 0

if(poderAtaqueJogador > poderDeDefesa && escudo === "nao"){
    danoCausado = poderAtaqueJogador - poderDeDefesa
}else if(poderAtaqueJogador > poderDeDefesa && escudo === "sim"){
    danoCausado = (poderAtaqueJogador - poderDeDefesa) / 2
}
pontoDeVida -= danoCausado

alert(nomePrimeiroJogador + " causou " +danoCausado+ " pontos de dano em " +nomeSegundoJogador)
alert(
    nomePrimeiroJogador+ "\nPoder de ataque: " +poderAtaqueJogador+ "\n\n" +
    nomeSegundoJogador + "\nPontos de vida: " +pontoDeVida+
    "\nPoder de defesa: "+ poderDeDefesa+ "\nPossui escudo: " +escudo
)
