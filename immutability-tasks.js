// 1. Updating age from 25 to 26 immutably
let profileData = {
    username: "Ankit",
    age: 25
};

let updatedProfile = {
    ...profileData,
    age: 26
};

console.log("Updated Age:", updatedProfile);


// 2. Adding a new hobby immutably
let personInfo = {
    fullName: "Rita",
    hobbies: ["Reading", "Dancing"]
};

let newPersonInfo = {
    ...personInfo,
    hobbies: [...personInfo.hobbies, "Painting"]
};

console.log("Added Hobby:", newPersonInfo);


// 3. Removing the last element from an array immutably
let scoreList = [10, 20, 30, 40];

let shortenedScores = scoreList.slice(0, -1);

console.log("After Removing Last:", shortenedScores);


// 4. Replacing the second element in an array immutably
let fruitBasket = ["Apple", "Banana", "Mango"];

let updatedBasket = [
    fruitBasket[0],
    "Orange",
    fruitBasket[2]
];

console.log("Replaced Element:", updatedBasket);


// 5. Changing nested property address.city immutably
let employeeRecord = {
    empName: "Sita",
    address: {
        city: "Kathmandu",
        country: "Nepal"
    }
};

let modifiedEmployee = {
    ...employeeRecord,
    address: {
        ...employeeRecord.address,
        city: "Pokhara"
    }
};

console.log("Updated City:", modifiedEmployee);


// 6. Adding a new key-value pair immutably
let courseData = {
    title: "JavaScript"
};

let expandedCourse = {
    ...courseData,
    duration: "3 Months"
};

console.log("Added Property:", expandedCourse);


// 7. Removing deletedAt property immutably
let fileRecord = {
    fileName: "report.pdf",
    size: "2MB",
    deletedAt: "2025-06-01"
};

let { deletedAt, ...activeFile } = fileRecord;

console.log("Removed Property:", activeFile);


// 8. Merging two arrays immutably
let firstNumbers = [1, 2, 3];
let secondNumbers = [4, 5, 6];

let mergedNumbers = [...firstNumbers, ...secondNumbers];

console.log("Merged Arrays:", mergedNumbers);


// 9. Merging two objects immutably
let personalInfo = {
    firstName: "Ram"
};

let contactInfo = {
    phone: "9800000000"
};

let completeInfo = {
    ...personalInfo,
    ...contactInfo
};

console.log("Merged Objects:", completeInfo);


// 10. Updating object in array by id immutably
let studentRecords = [
    { id: 1, name: "Hari", grade: "A" },
    { id: 2, name: "Gita", grade: "B" },
    { id: 3, name: "Ramesh", grade: "C" }
];

let updatedStudents = studentRecords.map(studentItem =>
    studentItem.id === 2
        ? { ...studentItem, grade: "A+" }
        : studentItem
);

console.log("Updated Student List:", updatedStudents);