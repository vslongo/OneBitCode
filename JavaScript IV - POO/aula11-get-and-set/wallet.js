class wallet {
    #amount
    #username

    constructor() {
        this.#amount = 100.99 * 100 // 10099
    }

    get amount() {
        return this.#amount / 100
    }

    set username(newUsername) {
        if (typeof newUsername === 'string') {

            this.#username = newUsername

        } else {
            return 'username must be of type string'
        }

    }

    get username() {
        return this.#username

    }

}

const MyWallet = new wallet()
console.log(MyWallet.amount)
MyWallet.username = "Vinicius"
console.log(MyWallet.username)
MyWallet.username += ` Slongo`
console.log(MyWallet.username)