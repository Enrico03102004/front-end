// 1. Calculate age and retirement
export const calculateAge = (birthYear) => 2019 - birthYear;

export const yearUntilRetirement = ({ year, firstName }) => {
    let age = calculateAge(year);
    let retirement = 60 - age;

    return retirement > 0
        ? `${firstName} retires in ${retirement} years`
        : `${firstName} is already retired.`;
};

// 2. Add numbers
export const addNumber = (a, b, c, d, e, f, g) => {
    const numbers = [a, b, c, d, e, f, g];
    let sum = 0;
    numbers.forEach(num => sum += num); // or numbers.reduce((acc, num) => acc + num, 0);
    return sum;
};

// 3. Calculate area
const phi = 3.14;
export const calculateArea = ({ radius, power }) => phi * Math.pow(radius, power);

// 4. Make Ajax request
export const makeAjaxRequest = (url, method = 'GET') => {
    return `${url}, Method: ${method}`;
};
