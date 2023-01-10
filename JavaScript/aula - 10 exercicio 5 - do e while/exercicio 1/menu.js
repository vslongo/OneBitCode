let option = ""

do{

    option = prompt(
        "Welcome to my code\n" +
        "\nChose a option:" +
        "\n1. Option 1 " +
        "\n2. Option 2" +
        "\n3. Option 3" +
        "\n4. Option 4" +
        "\n5. Close"
    )

    switch (option) {
        case "1":
            alert("You chose the option 1")
            break;
        case "2":
            alert("You chose the option 2")
            break;
        case "3":
            alert("You chose the option 3")
            break;
        case "4":
            alert("You chose the option 4")
            break;
        case "5":
            alert("the program is being closed")
            break;
    }



} while (option !== "5")
