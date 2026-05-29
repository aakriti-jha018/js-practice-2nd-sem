//task 4
export const formatCurrency = (amount) => {
    return `Rs.${amount}`;
};

export const generateRandomId = () => {
    return Math.floor(Math.random() * 10000);
};

export const getTodayDate = () => {
    return new Date().toDateString();
};