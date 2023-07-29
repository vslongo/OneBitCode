const Address = require("./Adress");
const Person = require("./Person");

const addr = new Address("João Fávero", 35, "Aeroporto", "Videira", "Santa Catarina")
const vinicius = new Person("Vinicius SLongo", addr)

console.log(vinicius)
console.log(vinicius.address.fullAddress())