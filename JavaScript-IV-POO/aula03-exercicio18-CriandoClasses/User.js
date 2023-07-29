class User {
    constructor(fullname, email, password) {
        this.fullname = fullname
        this.email = email
        this.password = password

    }

    login(email, password) {
        if (this.email === email && this.password === password) {
            console.log("O seu login foi bem sucedido")
        } else {
            console.log("Seu email ou senha estão incorretos")
        }
    }
}

const user1 = new User("Vinicius Slongo", "teste@gmail.com", "teste123")
user1.login("teste@gmail.com", "teste123")
console.log(user1)