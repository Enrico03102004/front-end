
//1.Destructuring (Array & Object)
//Array Destructuring
// const numbers = [1, 2, 3];
// const [a, b, c] = numbers;
// console.log(a, b, c); 

// //Object Destructuring
// const person = { name: "Alice", age: 25 };
// const { name, age } = person;
// console.log(name, age);

// 2.Destructuring with Partial Item Selection
// Array Destructuring (Partial)
// const numbers = [1, 2, 3, 4, 5];
// const [first, , third] = numbers; 
// console.log(first, third); 

// //Object Destructuring (Partial)
// const person = { name: "Alice", age: 25, city: "New York" };
// const { name, city } = person;
// console.log(name, city); 

// //3.Destructuring with Default Values
// //Array Destructuring with Default
// const numbers = [1, 2];
// const [a = 10, b = 20, c = 30] = numbers;
// console.log(a, b, c);

// //Object Destructuring with Default
// const person = { name: "Alice" };
// const { name, age = 30 } = person;
// console.log(name, age); 

// //4.Destructuring with the Rest Operator
// //Array Destructuring with Rest
// const numbers = [1, 2, 3, 4];
// const [first, ...rest] = numbers;
// console.log(first, rest);

// //Object Destructuring with Rest
// const person = { name: "Alice", age: 25, city: "New York" };
// const { name, ...otherDetails } = person;
// console.log(name, otherDetails); 

// ////Refactoring Latihan menggunakan Destructuring
// //yearUntilRetirement
// const yearUntilRetirement = ({ year, firstName, ...otherDetails }) => {
//     let age = calculateAge(year);
//     let retirement = 60 - age;

//     retirement > 0
//         ? console.log(`${firstName} retires in ${retirement} years`, otherDetails)
//         : console.log(`${firstName} is already retired.`, otherDetails);
// };
// yearUntilRetirement({ year: 1987, firstName: 'John', job: 'Engineer' });

// //addNumber
// const addNumber = (...numbers) => {
//     let sum = 0;
//     numbers.forEach(num => sum += num);
//     return sum;
// };
// console.log(addNumber(1, 2, 3, 4, 5, 6, 7));

// //3.calculateArea
// const calculateArea = ({ radius, power = 2 }) => phi * Math.pow(radius, power);

// //4.makeAjaxRequest
// const makeAjaxRequest = (url, { method = 'GET' } = {}) => {
//     console.log(url, method);
// };
// makeAjaxRequest('www.google.com');



