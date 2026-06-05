// 1. Multiply two numbers
function multiply(valueOne, valueTwo) {
    return valueOne * valueTwo;
}
console.log("Multiply:", multiply(4, 5));

// 2. Get full name
function getFullName(givenName, familyName) {
    return givenName + " " + familyName;
}
console.log("Full Name:", getFullName("Dipak", "Shrestha"));

// 3. Checking if number is even
function isEven(checkNum) {
    return checkNum % 2 === 0;
}
console.log("Is Even:", isEven(8));

// 4. Capitalizing first letter
function capitalize(textData) {
    return textData.charAt(0).toUpperCase() + textData.slice(1);
}
console.log("Capitalized:", capitalize("hello"));

// 5. Calculating area of a circle
function calculateArea(circleRadius) {
    return 3.14 * circleRadius * circleRadius;
}
console.log("Area of Circle:", calculateArea(7));

// 6. Get initials
function getInitials(personFirst, personLast) {
    return personFirst.charAt(0).toUpperCase() + "." +
           personLast.charAt(0).toUpperCase() + ".";
}
console.log("Initials:", getInitials("Dipak", "Shrestha"));

// 7. Fahrenheit to Celsius
function fahrenheitToCelsius(tempF) {
    return (tempF - 32) * 5 / 9;
}
console.log("Celsius:", fahrenheitToCelsius(98.6));

// 8. Reversing a string
function reverseString(wordText) {
    return wordText.split("").reverse().join("");
}
console.log("Reversed String:", reverseString("JavaScript"));

// 9. Finding maximum number in an array
function findMax(numberList) {
    return Math.max(...numberList);
}
console.log("Maximum Number:", findMax([12, 45, 7, 89, 23]));

// 10. Formatting date as DD/MM/YYYY
function formatDate(yearValue, monthValue, dayValue) {
    return `${String(dayValue).padStart(2, "0")}/${String(monthValue).padStart(2, "0")}/${yearValue}`;
}
console.log("Formatted Date:", formatDate(2025, 6, 5));