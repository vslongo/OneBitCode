const MedidaRecebida = prompt(
    "Digite o valor que quer converter em metros: "
)
const opcaoConversao = prompt(
    "Escolha a opcao de conversao: \n\n" +
    "1 - milimetros (mm)\n" +
    "2 - centimetros (cm)\n" + 
    "3 - decimetros (dm)\n" + 
    "4 - decametros (dam)\n" + 
    "5 - hectometros (hm)\n" + 
    "6 - quilometros (km)\n"  
)
parseFloat(MedidaRecebida)
var resultado = 0
switch(opcaoConversao){
    case '1':
    resultado = MedidaRecebida*1000
    alert("a sua medida foi convertida para milimetros e o resultado eh: "+resultado)
    break;
    case '2':
    resultado = MedidaRecebida*100
    alert("a sua medida foi convertida para centimetros e o resultado eh: "+resultado)
    break;
    case '3':
    resultado = MedidaRecebida*10
    alert("a sua medida foi convertida para decimetros e o resultado eh: "+resultado)
    break;
    case '4':
    resultado = MedidaRecebida/10
    alert("a sua medida foi convertida para decametros e o resultado eh: "+resultado)
    break;
    case '5':
    resultado = MedidaRecebida/100
    alert("a sua medida foi convertida para hectometros e o resultado eh: "+resultado)
    break;
    case '6':
    resultado = MedidaRecebida/1000
    alert("a sua medida foi convertida para kilometros e o resultado eh: "+resultado)
    break;
    default:
    alert("opcao invalida...")
}