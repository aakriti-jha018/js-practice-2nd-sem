
// Task 1: Create promise that resolves


const loginPromise = new Promise((resolve, reject) => {
    resolve("Login successful");
});

loginPromise.then((message) => {
    console.log(`${message}`);
});







// Task 2: Create promise that rejects


const paymentPromise = new Promise((resolve, reject) => {
    reject("Payment failed");
});

paymentPromise.catch((error) => {
    console.log(`${error}`);
});







// Task 3: Use .then()


const studentPromise = new Promise((resolve) => {
    resolve({
        name: "Aanand",
        faculty: "civil"
    });
});

studentPromise.then((student) => {
    console.log(`${student.name} studies ${student.faculty}`);
});





// Task 4: Use .catch()


const examPromise = new Promise((resolve, reject) => {
    reject("Exam form not submitted");
});

examPromise
    .then((data) => {
        console.log(data);
    })
    .catch((error) => {
        console.log(`Error: ${error}`);
    });







// Task 5: Convert to async/await


const moviePromise = new Promise((resolve) => {
    resolve("Movie downloaded");
});

const watchMovie = async () => {
    const result = await moviePromise;

    console.log(`${result}`);
};

watchMovie();






// Task 6: Wait 2 seconds using setTimeout promise


const delayPromise = new Promise((resolve) => {
    setTimeout(() => {
        resolve("2 seconds completed");
    }, 2000);
});

delayPromise.then((message) => {
    console.log(`${message}`);
});







// Task 7: Function that returns promise


const fetchUser = () => {
    return new Promise((resolve) => {
        resolve({
            username: "Aakriti",
            city: "Pokhara"
        });
    });
};

fetchUser().then((user) => {
    console.log(`${user.username} lives in ${user.city}`);
});







// Task 8: Chain promises


const orderFood = new Promise((resolve) => {
    resolve("Pizza ordered");
});

orderFood
    .then((message) => {
        console.log(`${message}`);

        return "Pizza is being prepared";
    })
    .then((nextMessage) => {
        console.log(`${nextMessage}`);

        return "Pizza delivered";
    })
    .then((finalMessage) => {
        console.log(`${finalMessage}`);
    });





// Task 9: Use await inside async function


const laptopPromise = new Promise((resolve) => {
    resolve({
        brand: "Dell",
        price: 70000
    });
});

const showLaptop = async () => {
    const laptop = await laptopPromise;

    console.log(`${laptop.brand} laptop costs Rs.${laptop.price}`);
};

showLaptop();






// Task 10: Use multiple awaits


const getTeacher = () => {
    return new Promise((resolve) => {
        resolve("Mr. Sharma");
    });
};

const getSubject = () => {
    return new Promise((resolve) => {
        resolve("JavaScript");
    });
};

const getRoom = () => {
    return new Promise((resolve) => {
        resolve("Lab 3");
    });
};

const showClassInfo = async () => {
    const teacher = await getTeacher();
    const subject = await getSubject();
    const room = await getRoom();

    console.log(`${teacher} teaches ${subject} in ${room}`);
};

showClassInfo();
