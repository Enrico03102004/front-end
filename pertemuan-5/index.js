// JavaScript Function
// cara 1. Function Declaration
// function greetings (){
//     console,log("hello world");

// }

// greetings1(); //Call / Execute Function

// // cara 2. Function Expression
// let greetings2 = function (){
//     console.log("hello world");
// };

// greetings2();

//Parameter & Argument (Input), Return (Output)
// Cara 1
// function greetings1(fullName){
//     return "hello " + fullName;
// }
// // Argument
// let output = greetings1("Enrico Rori");
// console.log(output);

//Cara 2.
// let greetings2 = function (fullName) {
//     return "Hello " + fullName;
// }
// let output2 = greetings2("Enrico Rori");
// console.log(output2);

// Function Hosting

// GLobal Scope & Local Scope

let x =10; // GLobal

function foo(){
    let y =20; //Local Function
    console.log(x); //10
    console.log(y); //20
    if(y > 10){
        let z = 30; // Local BLock
        console.log(x); //10
        console.log(z); //
        console.log(z); //30
    }
    
}

console.log(y); //20
console.log(x); //10
foo();
