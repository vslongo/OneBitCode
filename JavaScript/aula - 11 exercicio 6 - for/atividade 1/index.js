multiplicationValue = prompt("What number do you want do multiply? ")
let calc = ""


for (let i = 1; i <= 20; i++){
    calc += "-> " + multiplicationValue + " * " + i + " = " + (multiplicationValue * i) + "\n"

}

alert(calc)