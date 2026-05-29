class Car{
    //constructor : initial setup for class
    constructor(brand,color,noofwheel,price,name){
        this.brand=brand;
        this.color=color;
        this.noofwheel=noofwheel;
        this.price=price;
        this.name=name;

    }
    //method
    start(){
        console.log(`${this.name} has started`)
    }
    horn(){
        console.log(`The car ,${this.name} sounds peep peep . its price is ${this.price} and has${this.color} color`)
    }

}
//craeting instance or object
let fordObj=new Car("FORD","RED",4,60000,"FORD T5")
console.log("ford car brand:",fordObj.brand)
fordObj.start();
fordObj.horn();
let bydObj=new Car("BYD",500000,"RED"," BYD Z9")
bydObj.start();
console.log("BYD Car name",bydObj.name)

bydObj.horn();
