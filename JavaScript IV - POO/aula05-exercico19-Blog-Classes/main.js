const Author = require("./Author.js")

const author1 = new Author("Vinicius")
const post = author1.writePost("Titulo do Post", "Texto do Post")
const pos2 = author1.writePost("Titulo do Post", "Texto do Post")

post.addComment("Mathias", "Belo Post amigo")
post.addComment("Manasses", "Muito interessante!")

console.log(author1)
// console.log(post)