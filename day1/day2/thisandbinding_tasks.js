
// Task 1: Object with method using this

const studentInfo = {
    studentName: "Aanand",
    faculty: "Civil Engineering",

    showDetails() {
        console.log(`Name: ${this.studentName}`);
        console.log(`Faculty: ${this.faculty}`);
    }
};

studentInfo.showDetails();




// Task 2: Call method from another variable


const employee = {
    empName: "Riya",

    display() {
        console.log(`Employee: ${this.empName}`);
    }
};

const anotherVariable = employee.display;

anotherVariable();






// ===============================
// Task 3: Fix using bind()
// ===============================

const fixedFunction = employee.display.bind(employee);

fixedFunction();






// ===============================
// Task 4: Two objects using same method with bind()
// ===============================

function introduce() {
    console.log(`Hello, I am ${this.personName} and I live in ${this.city}`);
}

const person1 = {
    personName: "Sujal",
    city: "Kathmandu"
};

const person2 = {
    personName: "Nabin",
    city: "Pokhara"
};

const intro1 = introduce.bind(person1);
const intro2 = introduce.bind(person2);

intro1();
intro2();






// ===============================
// Task 5: this inside click handler (browser)
// ===============================



document.getElementById("btn").addEventListener("click", function () {
    console.log(this);
    console.log(`${this.innerText} button was clicked`);
});





// ===============================
// Task 6: Strict mode and this
// ===============================

"use strict";

function checkThis() {
    console.log(this);
}

checkThis();





// ===============================
// Task 7: Normal function vs Arrow function
// ===============================

const gamer = {
    gameName: "Free Fire",

    normalFunction: function () {
        console.log(`Normal Function: ${this.gameName}`);
    },

    arrowFunction: () => {
        console.log(`Arrow Function: ${this.gameName}`);
    }
};

gamer.normalFunction();
gamer.arrowFunction();






// ===============================
// Task 8: Nested object and this
// ===============================

const college = {
    collegeName: "ABC College",

    department: {
        deptName: "IT",

        showDepartment() {
            console.log(`Department: ${this.deptName}`);
        }
    }
};

college.department.showDepartment();






// ===============================
// Task 9: Borrow method using call()
// ===============================

const user1 = {
    username: "Aarav"
};

function welcome(country) {
    console.log(`Welcome ${this.username} from ${country}`);
}

welcome.call(user1, "Nepal");






// ===============================
// Task 10: Borrow method using apply()
// ===============================

const player = {
    playerName: "Messi"
};

function playerInfo(game, jersey) {
    console.log(`${this.playerName} plays ${game} and wears jersey no ${jersey}`);
}

playerInfo.apply(player, ["Football", 10]);

