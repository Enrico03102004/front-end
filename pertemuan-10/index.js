// 1.
// let people = ["Greg", "Mary", "Devon", "James"];

// for (let i = 0; i < people.length; i++) {
//   console.log(people[i]);
// }

// 2.
// let people = ["Greg", "Mary", "Devon", "James"];

// people.forEach(function(person) {
//   console.log(person);
// });

// 3.
// let people = ["Greg", "Mary", "Devon", "James"];
// people.shift(); 
// console.log(people);

// 4.
// let people = ["Greg", "Mary", "Devon", "James"];

// people.pop();
// console.log(people); 

// 5.
// let people = ["Greg", "Mary", "Devon", "James"];

// people.unshift("Matty");

// console.log(people);

// 6. 
// let people = ["Greg", "Mary", "Devon", "James"];

// people.push("YourName");

// console.log(people); 

// 7.
// let people = ["Greg", "Mary", "Devon", "James"];

// for (let i = 0; i < people.length; i++) {
//   console.log(people[i]);
//   if (people[i] === "Mary") {
//     break;
//   }
// }

// 8.
// let people = ["Greg", "Mary", "Devon", "James"];

// let newPeople = people.slice(0, 1).concat(people.slice(2));

// console.log(newPeople);

// 9.
// let people = ["Greg", "Mary", "Devon", "Your Name"];

// people.splice(0, 1, "Matt");

// people.splice(2, 1, "Elizabeth", "Your Name");

// people.splice(3, 1, "Artie");

// console.log(people);

// 10.
// let people = ["Greg", "Mary", "Devon", "James"];

// let withBobConcat = people.concat("Bob");
// console.log("Using concat():", withBobConcat);

// Object
// 1.
// let programming = {
//     languages: ["JavaScript", "Python", "Ruby"],
//     isChallenging: true,
//     isRewarding: true,
//     difficulty: 8,
//     jokes: "http://stackoverflow.com/questions/234075/what-is-your-best-programmer-joke"
// };

// programming.languages.push("Go");

// console.log(programming.languages);

// 2.
// let programming = {
//     languages: ["JavaScript", "Python", "Ruby"],
//     isChallenging: true,
//     isRewarding: true,
//     difficulty: 8,
//     jokes: "http://stackoverflow.com/questions/234075/what-is-your-best-programmer-joke"
// };

// programming['difficulty'] = 7;

// console.log(programming.difficulty);

// 3. 
// let programming = {
//     languages: ["JavaScript", "Python", "Ruby"],
//     isChallenging: true,
//     isRewarding: true,
//     difficulty: 8,
//     jokes: "http://stackoverflow.com/questions/234075/what-is-your-best-programmer-joke"
// };

// delete programming.jokes;

// console.log(programming);

// 4. 
// let programming = {
//     languages: ["JavaScript", "Python", "Ruby"],
//     isChallenging: true,
//     isRewarding: true,
//     difficulty: 8,
//     jokes: "http://stackoverflow.com/questions/234075/what-is-your-best-programmer-joke"
// };

// programming.isFun = true;

// console.log(programming);

// 5. 
let programming = {
    languages: ["JavaScript", "Python", "Ruby"]
};

let updatedLanguages = programming.languages.map((language, index) => `${index} - ${language}`);

console.log(updatedLanguages);
















