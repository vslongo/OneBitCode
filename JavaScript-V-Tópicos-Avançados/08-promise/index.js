function execute() {
    return new Promise((resolve, reject) => {
      console.log('Executando promise...');
        setTimeout(() => {
            console.log('Resolvendo promise...');
            resolve('OK');
        }, 2000);
    });
}

const promise = execute();
console.log('promise', promise);

setTimeout(() => {
    console.log('promise', promise);
}, 3000);