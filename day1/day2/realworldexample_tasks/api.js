//task 9
const fetchUsers = () => {

    return new Promise((resolve, reject) => {

        const success = Math.random() > 0.5;

        setTimeout(() => {

            if (success) {

                resolve([
                    { username: "Ankit" },
                    { username: "Aarav" }
                ]);

            } else {

                reject("Server is currently unavailable");

            }

        }, 1000);

    });

};

const loadUsers = async () => {

    try {

        const users = await fetchUsers();

        users.forEach((user) => {
            console.log(`Username: ${user.username}`);
        });

    } catch (error) {

        console.log(`Friendly Error: ${error}`);

    }

};

loadUsers();

