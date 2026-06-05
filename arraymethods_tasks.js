// Task 1

let nums = [1, 2, 3, 4, 5]

let doubledNums = nums.map(
    (value) => value * 2
)

console.log("Task 1:", doubledNums)


// Task 2:

let values = [1, 2, 3, 4, 5, 6]

let evenValues = values.filter(
    (item) => item % 2 === 0
)

console.log("Task 2:", evenValues)


// Task 3

let marks = [10, 20, 30, 40];

let totalMarks = marks.reduce(
    (sum, item) => sum + item,
    0
)

console.log("Task 3:", totalMarks)


// Task 4: 

let people = [
    { name: "Aakriti", age: 22 },
    { name: "Aanand", age: 23 },
    { name: "Twinkle", age: 2 }
]

let adultPerson = people.find(
    (user) => user.age > 18
)

console.log("Task 4:", adultPerson);


// Task 5: 

let fruits = ["apple", "banana", "orange"]

fruits.forEach(
    (fruit, index) => {
        console.log("Task 5:", index, fruit)
    }
)


// Task 6: 

let users = [
    { name: "Aakriti", age: 22 },
    { name: "Aanand", age: 23 },
    { name: "twinkle", age: 2 }
];

let userNames = users.map(
    (person) => person.name
)

console.log("Task 6:", userNames)


// Task 7: 

let goods = [
    { name: "Pen", price: 20 },
    { name: "Book", price: 150 },
    { name: "Pencil", price: 10 }
]

let cheapGoods = goods.filter(
    (product) => product.price < 100
)

console.log("Task 7:", cheapGoods)


// Task 8:

let scores = [25, 80, 45, 90, 60]

let highestScore = scores.reduce(
    (max, item) => item > max ? item : max
)

console.log("Task 8:", highestScore)


// Task 9: 

let members = [
    { name: "hari", age: 15 },
    { name: "kishan", age: 18 },
    { name: "chotan", age: 20 }
]

let adultNames = members
    .filter((person) => person.age >= 18)
    .map((person) => person.name.toUpperCase())

console.log("Task 9:", adultNames)


// Task 10:

let foods = ["Rice", "Dal", "Milk"]

let htmlList = "<ul>"

foods.forEach(
    (food) => {
        htmlList += `<li>${food}</li>`
    }
)

htmlList += "</ul>"

console.log("Task 10:", htmlList)
