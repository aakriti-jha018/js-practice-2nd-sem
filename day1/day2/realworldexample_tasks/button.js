//task 2
const dashboard = {
    title: "Admin Panel",

    showTitle() {
        console.log(`Dashboard: ${this.title}`);
    }
};

// Losing context
const lostFunction = dashboard.showTitle;

lostFunction();


// Fix using bind()
const fixedFunction = dashboard.showTitle.bind(dashboard);

fixedFunction();