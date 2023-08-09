function step02() {
    console.log('step02')
}

console.log('step01')
step02()
console.log('step03')


console.log('step04')
setTimeout(() => {
    console.log('step05')
}, 2000)
console.log('step06')