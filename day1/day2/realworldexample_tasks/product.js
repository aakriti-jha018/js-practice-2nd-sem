//task 5
class Product {

    constructor(name, price) {
        this.name = name;
        this.price = price;
    }

    getInfo() {
        console.log(`Product: ${this.name} costs Rs.${this.price}`);
    }
}

const laptop = new Product("Dell Inspiron", 75000);

laptop.getInfo();

