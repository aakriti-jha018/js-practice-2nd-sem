//task 8
export class Car {
    constructor(brand, model) {
        this.brand = brand;
        this.model = model;
    }

    showCar() {
        console.log(`Car: ${this.brand} ${this.model}`);
    }
}