class Account {
    #password;
    #balance;

    constructor(user) {
        this.email = user.email;
        this.#password = user.password;
        this.#balance = 0
    }
    getBalance() {
        if(this.#authenticate) {
            return this.#balance;
        } else {
            return null;
        }
    }

    #authenticate(email, password) {
        return this.email === email && this.#password === password;

    }
}

const user = {
    email: "user@example.com",
    password: "password"
}

const myAccount = new Account(user);


console.log(myAccount);
console.log(myAccount.getBalance("user@example.com", "password"));
