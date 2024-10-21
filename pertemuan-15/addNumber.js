export const addNumber = (a, b, c, d, e, f, g) => {
    const numbers = [a, b, c, d, e, f, g];
    return numbers.reduce((acc, num) => acc + num, 0);
};
