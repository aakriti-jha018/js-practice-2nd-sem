// 1. Create class Vehicle
class Vehicle {

    // 2. Add constructor
    constructor(name, speed) {
        this.name = name;
        this.speed = speed;
    }

    // 3. Add method drive()
    drive() {
        console.log(`${this.name} is driving at ${this.speed} km/h`);
    }
}

// Creating object of Vehicle
const v1 = new Vehicle("Car", 120);
v1.drive();


// 4. Extend class Bike
class Bike extends Vehicle {

    constructor(name, speed, type) {
        super(name, speed);
        this.type = type;
    }

    // 5. Override drive()
    drive() {
        console.log(`${this.name} bike is riding at ${this.speed} km/h`);
    }
}

const b1 = new Bike("Yamaha", 100, "Sports");
b1.drive();


// 6. Create class Student
class Student {

    constructor(name, marks) {

        // 7. Add marks property
        this.name = name;
        this.marks = marks;
    }

    showDetails() {
        console.log(`Name: ${this.name}`);
        console.log(`Marks: ${this.marks}`);
    }
}

const s1 = new Student("Ankit", 85);
s1.showDetails();


// 8. Inherit class Programmer
class Programmer extends Student {

    constructor(name, marks, language) {
        super(name, marks);
        this.language = language;
    }

    // 9. Call parent method using super()
    showDetails() {
        super.showDetails();
        console.log(`Language: ${this.language}`);
    }
}

const p1 = new Programmer("Rahul", 92, "JavaScript");
p1.showDetails();


// 10. Create multiple child classes
class Car extends Vehicle {
    drive() {
        console.log(`${this.name} car is moving fast`);
    }
}

class Truck extends Vehicle {
    drive() {
        console.log(`${this.name} truck is carrying goods`);
    }
}

const c1 = new Car("BMW", 180);
const t1 = new Truck("Tata", 80);

c1.drive();
t1.drive();