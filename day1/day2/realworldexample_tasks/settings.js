//task 7
const fetchSettings = () => {

    return new Promise((resolve) => {

        setTimeout(() => {

            resolve({
                theme: "Dark",
                language: "English"
            });

        }, 2000);

    });

};

fetchSettings()
    .then((settings) => {

        console.log(`Theme: ${settings.theme}`);
        console.log(`Language: ${settings.language}`);

    });


