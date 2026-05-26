let ages = [50, 47, 67, 89];

console.log("value of index 0:", ages[0]);
console.log(`value of index 1: ${ages[1]}`);

let obj = {
    name: "ram",
    age: 56,
    marks: 45.89,
    is_active: false
};

// using bracket notation
console.log(`name=${obj["name"]}`);

// using dot notation
console.log(`marks:${obj.marks}`);