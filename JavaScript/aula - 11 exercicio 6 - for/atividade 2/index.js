const word = prompt("What is the word? ")
let invertWord = ""



for(let i = word.length - 1; i >= 0; i--){
    invertWord += word[i]
}


if(word === invertWord) {
    alert(word + " is a palindromo")
}else{
    alert(
        "is not a palindromo" +
        "\nnormal word: " + word +
        "\ninverted word: " + invertWord
    )
}