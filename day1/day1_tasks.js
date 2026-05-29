/* Task 1 – Variables and Template Literals */
let firstName = "Aakriti";
let lastName = "Jha";

console.log(`Hello ${firstName} ${lastName}`);


/* Task 2 – let and const Scope */
{
    let city = "Kathmandu";
    console.log(city);
}

{
    const country = "Nepal";
    console.log(country);
}


/* Task 3 – Arrow Function Simple */
let greet = (name) => `Hello, ${name}!`;

console.log(greet("Aakriti"));


/* Task 4 – Arrow Function with Multiple Parameters */
let multiply = (x, y) => x * y;

console.log(`Product is ${multiply(5, 6)}`);


/* Task 5 – Object Destructuring */
let student = {
    studentName: "Aanand",
    age: 20,
    place: "Pokhara"
};

let {studentName, place} = student;

console.log(studentName);
console.log(place);


/* Task 6 – Array Destructuring */
let marks = [80, 90, 70, 60];

let [m1, m2] = marks;

console.log(m1);
console.log(m2);


/* Task 7 – Default Parameters */
function sayHello(user = "Guest") {
    console.log(`Hello ${user}`);
}

sayHello("Aakriti");
sayHello();


/* Task 8 – Rest Operator */
function sumAll(...numbers) {
    let sum = 0;

    for (let num of numbers) {
        sum += num;
    }

    return sum;
}

console.log(sumAll(1, 2, 3, 4));


/* Task 9 – Spread Operator with Arrays */
let arr1 = [1, 2, 3];
let arr2 = [4, 5];

let mergedArray = [...arr1, ...arr2];

console.log(mergedArray);


/* Task 10 – Merge and Destructure Objects */
let obj1 = {
    a: 1,
    b: 2
};

let obj2 = {
    c: 3,
    d: 4
};

let mergedObj = {...obj1, ...obj2};

let {a, d} = mergedObj;

console.log(a);
console.log(d);