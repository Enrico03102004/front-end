// IIFE & CALLBACK function
// 1. IIFE (immediatly invoked function expression)
// a. No params, args & return value 
// (function () {
//     //kode
// console.log('Hello World');
// })();
// // b. with params, args & return value 
// let output = (function (fullname) {
//     return "Hello " + fullname;
// })('Enrico Rori');
// console.log(output);


// 2. Callback Function
// a. Mo Params, args & return value
// function sayHello(callback) {
//     Callback();
// }

// sayHello(function () {
//     console.log('Hello World'); //Callback function
// });


// // B. with params, args, return & value
// function sayHello(callback) {
//     Callback("Enrico Rori");
//     console.log(result);
//     return result;
// }

// let output = sayHello(function (fullname) {
//     return " Hello " + fullname;
// });
// console.log(output);
