//task 8
const fetchUsers = () => {

    return new Promise((resolve) => {

        setTimeout(() => {

            resolve([
                { name: "Riya" },
                { name: "Sujal" },
                { name: "Nabin" }
            ]);

        }, 1000);

    });

};

const showUsers = async () => {

    const users = await fetchUsers();

    users.forEach((user) => {
        console.log(`User: ${user.name}`);
    });

};

showUsers();

