let userMoney = prompt("How much money do you have in your account? ")
userMoney = parseFloat(userMoney)




    
do{
    option = prompt( "do you have " + userMoney + " dollar in your account" +
    "\n\n chose a option below:" +
    "\n1 - Deposit" +
    "\n2 - whitdraw" +
    "\n3 - exit")

    switch(option) {
        case "1":
        userMoney += parseFloat(prompt("how much money do you want to deposit?")) 
        break;
        case "2":
        userMoney -= parseFloat(prompt("how much money do you want to withdraw?"))
        break;
        case "3":
        alert("thanks for choose us")
    }
    


}while (option !==3)