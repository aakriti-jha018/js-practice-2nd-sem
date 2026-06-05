// 1. 
function repeat(taskFunction, totalRuns) {
    for (let counter = 0; counter < totalRuns; counter++) {
        taskFunction();
    }
}

repeat(() => console.log("Hello"), 3);


// 2. 
function operate(numberCollection, transformFunction) {
    return numberCollection.map(transformFunction);
}

let doubledValues = operate([1, 2, 3, 4], value => value * 2);
console.log("Operate:", doubledValues);


// 3.
function filterBy(itemList, checkFunction) {
    return itemList.filter(checkFunction);
}

let evenValues = filterBy([10, 15, 20, 25, 30], item => item % 2 === 0);
console.log("Filtered:", evenValues);


// 4.
function logger(processFunction) {
    return function () {
        console.log("Before");
        processFunction();
        console.log("After");
    };
}

let greetUser = logger(() => console.log("Welcome!"));
greetUser();


// 5. 
function createAdder(baseValue) {
    return function (extraValue) {
        return baseValue + extraValue;
    };
}

let addTen = createAdder(10);
console.log("Adder:", addTen(5));


// 6. 
function sortBy(objectArray, propertyName) {
    return [...objectArray].sort((firstItem, secondItem) =>
        firstItem[propertyName] > secondItem[propertyName] ? 1 : -1
    );
}

let employeeData = [
    { name: "Ram", age: 30 },
    { name: "Hari", age: 22 },
    { name: "Sita", age: 25 }
];

console.log("Sorted:", sortBy(employeeData, "age"));


// 7. 
function pipeline(...functionList) {
    return function (startingValue) {
        return functionList.reduce(
            (currentResult, currentFunction) =>
                currentFunction(currentResult),
            startingValue
        );
    };
}

let processNumbers = pipeline(
    num => num + 5,
    num => num * 2,
    num => num - 3
);

console.log("Pipeline:", processNumbers(10));


// 8. 
function withTax(ratePercent) {
    return function (productPrice) {
        return productPrice + productPrice * ratePercent;
    };
}

let addVat = withTax(0.13);
console.log("Price with Tax:", addVat(1000));


// 9. 
function debounce(eventFunction, waitTime) {
    let timeoutReference;

    return function () {
        clearTimeout(timeoutReference);

        timeoutReference = setTimeout(() => {
            eventFunction();
        }, waitTime);
    };
}

let showMessage = debounce(
    () => console.log("Executed after delay"),
    2000
);

showMessage();


// 10. 
function memoize(calculationFunction) {
    let resultCache = {};

    return function (inputNumber) {
        if (resultCache[inputNumber] !== undefined) {
            console.log("From Cache");
            return resultCache[inputNumber];
        }

        console.log("Calculated");
        let computedValue = calculationFunction(inputNumber);
        resultCache[inputNumber] = computedValue;

        return computedValue;
    };
}

let squareNumber = memoize(numberInput => numberInput * numberInput);

console.log(squareNumber(5));
console.log(squareNumber(5));