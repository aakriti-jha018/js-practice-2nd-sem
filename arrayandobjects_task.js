//task1
let colors = ["Red", "Blue", "Green", "Yellow", "Black"];

console.log(colors[2])

//task2
let book = {
    title: "Rich Dad Poor Dad",
    author: "Robert Kiyosaki",
    pages: 336,
    publishedYear: 1997
}

console.log(book)

//task3
let novel = {
    title: "Atomic Habits",
    author: "James Clear"
};

let newNovel = {
    ...novel,
    isRead: true
};

console.log(novel)
console.log(newNovel)

//task4
let students = [
    { name: "Ram", grade: "A" },
    { name: "Sita", grade: "B" },
    { name: "Hari", grade: "A+" }
];

console.log(students)

//task5
let company = {
    name: "Tech World",
    location: "Kathmandu",
    employees: ["Ram", "Sita", "Hari"]
}

console.log(company)

//task6
let numbers = [10, 20, 30];

let newNumbers = numbers.map(
    (value) => value + 5
)

console.log(numbers)
console.log(newNumbers)

//task7
let car = {
    brand: "Toyota",
    model: "Corolla"
}

let newCar = {
    ...car,
    color: "White"
};

console.log(car)
console.log(newCar)

//task8
let shoppingList = ["Milk", "Bread", "Eggs"];

let newShoppingList = [
    "Rice",
    ...shoppingList
];

console.log(shoppingList)
console.log(newShoppingList)

//task9
let profile = {
    name: "Aanand",
    address: {
        city: "Kathmandu",
        country: "Nepal"
    }
};

console.log(profile)

//task10
let products = [
    {
        name: "Laptop",
        price: 50000,
        stock: 5
    },
    {
        name: "Mouse",
        price: 1000,
        stock: 20
    }
];

let simpleProducts = products.map(
    (item) => (
        {
        name: item.name,
        price: item.price
    }
)
)

console.log(simpleProducts)
