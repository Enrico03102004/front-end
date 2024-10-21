//JavaScript Object & Conditional
// Deklarasi Object
// Object Literal
// let john = {
//     firstName : "jhon",
//     age : 30, 
//     isMarried : true,
//     grade : [80, 90, 100],
//     sayGreetings: function () {
//         console.log("Hello my name is " + this.firstName);

//     }
//     address: {
//         street: "Jl. Arnold momonutu airmadidi",

//     }
// };
// console.log(jhon);

// // Mengakses Properti dalam object
// // 1. Dot Notation
// console.log(jhon.firstName); //jhon
// console.log(jhon.age); // 30
// jhon.age = 31; //Ubah nilai
// console.log(jhon);
// jhon.job = "Teacher"; //Tambah properti baru
// console.log(jhon);
// // 2. Bracket Notation
// console.log(jhon["isMarried"]); //true
// jhon["Nationality"] = "Indonesia"; // tambah properti baru
// console.log(jhon);

// // Object Method
// jhon.sayGreetings();

// // Object Inside Object
// console.log(jhon.address.city);

// // Delete property dalam object
// delete jhon.grade;
// console.log(jhon);



//JavaScript Conditonal
// 1. if - else
// Jika Suhu hari ini lebih dari atau sama dengan 37,
// Tampilkan suhu hari panas
// Jika tidak tampilkan suhu hari ini dingin
// let temp = 38;
// if (temp >= 37){
//     console.log("Suhu hari ini panas");
// } else {
//     console.log("Suhu hari ini dingin");
// }

//2. if - else if - else
// Jika nilai 100 - 80 tampilkan grade A
// Jika nilai 70 -79 tampilkan grade B
// Jika nilai 50 - 69 tampilkan grade C
// Jika nilai di bawah 50 tampilkan grade D
// let grade = 100 
// if (grade >= 80 && grade <= 100){
//     console.log("Grade A");
// } else if (grade >= 70 && grade < 80) {
//     console.log("Grade B");
// } else if (grade >= 50 && grade < 70) {
//     console.log("Grade c");
// } else {
//     console.log("Grade D");
// }

// 3. Switch - case
// Jika angka 1 tampilan january
// Jika angka 2 tampilkan february
// Jika angka 3 tampilkan maret
// :
// Jika angka 12 tampilkan desember

// let number = 1;
// switch(number){
//     case 1:
//         console.log("january");
//         break;
//      case 2:
//         console.log("februari");
//         break;
//     case 3:
//         console.log("maret");
//         break;
//     default:
//         console.log("Not Found");
//         break;
// }