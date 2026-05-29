// ======================================
// Task 1: Try using undefined function
// ======================================

try {
    unknownFunction();
} catch (error) {
    console.log(`Error: ${error.message}`);
}





// ======================================
// Task 2: Divide number by zero
// ======================================

try {
    const number = 50;
    const result = number / 0;

    console.log(`Result is ${result}`);
} catch (error) {
    console.log(error);
}






// ======================================
// Task 3: Use custom error message
// ======================================

try {
    const age = 15;

    if (age < 18) {
        throw new Error("You are not eligible to vote");
    }

} catch (error) {
    console.log(`Custom Error: ${error.message}`);
}






// ======================================
// Task 4: Throw error manually
// ======================================

try {
    const password = "123";

    if (password.length < 6) {
        throw new Error("Password is too short");
    }

} catch (error) {
    console.log(`${error.message}`);
}





// ======================================
// Task 5: Create function with try/catch
// ======================================

const divideNumbers = (a, b) => {
    try {
        if (b === 0) {
            throw new Error("Cannot divide by zero");
        }

        console.log(`Division Result: ${a / b}`);

    } catch (error) {
        console.log(`Error: ${error.message}`);
    }
};

divideNumbers(20, 0);






// ======================================
// Task 6: Multiple catch messages
// ======================================

try {
    const marks = -10;

    if (marks < 0) {
        throw new Error("Marks cannot be negative");
    }

    if (marks > 100) {
        throw new Error("Marks cannot exceed 100");
    }

} catch (error) {

    if (error.message === "Marks cannot be negative") {
        console.log(`Negative Error: ${error.message}`);
    }

    else if (error.message === "Marks cannot exceed 100") {
        console.log(`Limit Error: ${error.message}`);
    }

}






// ======================================
// Task 7: Use finally
// ======================================

try {
    const username = "Ankit";

    console.log(`Welcome ${username}`);

} catch (error) {
    console.log(error.message);

} finally {
    console.log("Program execution completed");
}






// ======================================
// Task 8: JSON.parse with invalid JSON
// ======================================

try {
    const invalidData = '{"name":"Riya", age:20}';

    JSON.parse(invalidData);

} catch (error) {
    console.log(`JSON Error: ${error.message}`);
}




// ======================================
// Task 9: Catch error and log name
// ======================================

try {
    const student = null;

    console.log(student.name);

} catch (error) {
    console.log(`Error Name: ${error.name}`);
    console.log(`Message: ${error.message}`);
}






// ======================================
// Task 10: try/catch in async function
// ======================================

const fetchProduct = async () => {

    try {

        const productPromise = new Promise((resolve, reject) => {
            reject("Product not found");
        });

        const result = await productPromise;

        console.log(result);

    } catch (error) {

        console.log(`Async Error: ${error}`);

    }

};

fetchProduct();

