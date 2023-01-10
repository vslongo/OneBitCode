class Product {
    constructor(name, description, price) {
        this.name = name
        this.description = description
        this.price = price
        this.inStock = 0
    }
    addOnStock(quantity) {
        this.inStock += quantity
    }
    CalculateDiscount(percent) {
        let normalPrice = this.price
        let discountPrice = (this.price - ((this.price / 100) * percent))
        console.log(`o valor do produto normal é de ${normalPrice}, ja com o desconto de ${percent}% é de: ${discountPrice} reais`)
    }

}

const product1 = new Product("Boneco do Homem Aranha", "Homem Aranha realista, que solta teias", 1000)
product1.addOnStock(50)
product1.CalculateDiscount(10)
console.log(product1)