//task 6
class Product {

    constructor(name, price) {
        this.name = name;
        this.price = price;
    }

    getInfo() {
        console.log(`${this.name} costs Rs.${this.price}`);
    }
}

class FoodProduct extends Product {

    constructor(name, price, expiryDate) {
        super(name, price);

        this.expiryDate = expiryDate;
    }

    showFoodInfo() {
        console.log(
            `${this.name} expires on ${this.expiryDate}`
        );
    }
}

const biscuit = new FoodProduct(
    "Oreo",
    120,
    "2026-12-31"
);

biscuit.getInfo();
biscuit.showFoodInfo();


