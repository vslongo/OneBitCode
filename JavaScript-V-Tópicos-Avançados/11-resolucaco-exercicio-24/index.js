function imc(weight, height) {
  return new Promise((resolve, reject) => {
    if(typeof weight !== 'number' || typeof height !== 'number'){
      reject('Peso e altura precisam ser números')
    }else{
      const imc = weight / (height * height)
      resolve(imc)
    }
  })
}


function showImc(weight, height) {
  imc(weight, height).then((result) => {
    console.log(`O resultado do IMC foi de ${result}.`)

    if(imc < 18.5){
      console.log('Abaixo do peso')
    }else if(imc >= 18.5 && imc <= 24.9){
      console.log('Peso normal')
    }else if(imc >= 25 && imc <= 29.9){
      console.log('Sobrepeso')
    }else if(imc >= 30 && imc <= 34.9){
      console.log('Obesidade grau 1')
    }else if(imc >= 35 && imc <= 39.9){
      console.log('Obesidade grau 2')
    }else{
      console.log('Obesidade grau 3')
    }
  }).catch((err) => {
    console.log(err)
  })

  console.log(`Calculando o IMC para peso ${weight} e altura ${height}...`)
}

showImc(140, 1.76)
showImc(48, 1.60)
showImc(71, "texto")
showImc(82, 1.72)
showImc(120, 1.80)
