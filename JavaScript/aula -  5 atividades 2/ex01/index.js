var nomeVeiculo1 = prompt("Digite o nome do primeiro carro: ")
var velocidadeVeiculo1 = prompt("Digite a velocidade do primeiro carro: ")
var nomeVeiculo2 = prompt("Digite o nome do segundo carro: ")
var velocidadeVeiculo2 = prompt("Digite a velocidade do segundo carro: ")



if(parseInt(velocidadeVeiculo1) > parseInt(velocidadeVeiculo2)){
    alert("o carro mais rapido e o: "+nomeVeiculo1)
}else {
    alert("o carro mais rapido e o: "+nomeVeiculo2)
}