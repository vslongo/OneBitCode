console.log("Início do código")
const timeOutId = setTimeout(() => {
  console.log("Executando callback...")
}, 3000)

clearTimeout(timeOutId)

let seconds = 0

const intervalId = setInterval(() => {
  seconds++
  console.log(seconds)
  if (seconds >= 5) {
    clearInterval(intervalId)
  }
}, 1000)