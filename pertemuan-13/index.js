//Rest Parameter & Spread Operator
// 1. Rest Parameter

//tanpa Rest Parameter
// const func1 = (param1, param2, param3, param4, param5) => {
//         console.log (param1, param2, param3, param4, param5);
// };

// func1("A", "B", "C", "D", "E");

// //dengan rest parameter
// const func2 = (...params) => {
//     console.log(paramas);
// };

// func1("A", "B", "C", "D", "E");

// //rest parameter harus berada di terakhir dalam parameter
// const func3 = (params1, params2, ...params) => {
//     console.log(paramas1, paramas2);
//     console.log(paramas);
//     console.log(paramas[1]);
// };

//Mini Exercise 
const penjumlahan = (a, b, c, d, e) => {
    let arr = [a, b, c, d, e];
    let hasil = 0;
    arr.forEach((item) => (hasil += item));
    return hasil;
};
console.log(penjumlahan(1, 2, 3, 4, 5));

// 2. Spread Operator
let numbers = [1, 2, 3, 4, 5];
console.log(numbers);
console.log(...numbers);

//Array
//1. Duplicat Array
let number2 = numbers;
nummbers.push(6);
console.log(numbers2);

//2. menggabungkan Array
let array1 = [1, 2, 3];
let array2 = [4, 5, 6];
let array3 = [7, 8, 9];

let numbers3 = array1.concat(array2, array3);
let numbers4 = [...array1,...array2,...array3];

//Object
//1. Duplikasi Object
const jhon = {
    fullName: "Jhon Doe",
    age : 30
};

const jhon2  = { ...jhon, address: "Manado" };

//2. Menggabungkan Object
let obj1 = { a: 1, b: 2};
let obj2 = { c: 3, d: 4};

let cobinedObj = { ...obj1, ...obj2};
