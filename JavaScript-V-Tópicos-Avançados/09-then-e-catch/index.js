function execute() {
  return new Promise((resolve, reject) => {
    console.log('Executando promise...');
      setTimeout(() => {
        if (true) {
          reject('Erro');
        }else{
          console.log('Resolvendo promise...');
          resolve(42);
        }
      }, 2000);
  });
}



execute().then((result) => {
 console.log(`A promise foi resolvida com o valor: ${result}`)
}).catch((err) => {
  console.log(`A promise foi rejeitada com o erro: ${err}`)
}).finally(() => {
  console.log('A promise foi finalizada')
})

console.log('promise', promise);