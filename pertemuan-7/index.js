// Array in JavaScript
// Deklarasi Array
// Cara 1. Array Literal
// let numbers =  [1, 2, 3, 4, 5];
// console.log(numbers);
// // Cara 2. Kata kunci new
// let numbers2 = new Array(6, 7, 8, 9 , 10);
// console.log(numbers2);
// Tipe data apasaja yang bisa disimpan dalam array
// let numbers = [1, 2, 3, 4, 5,];
// let students = ["john", "jane", "bob "];
// let john = ["jhon", 30, true, [80, 90, 100]];
// console.log(jhon);

// // Array leght
// console.log(numbers.lenght); //5
// console.log(students.lenght); //4
// console.log(jhon.lenght); //3

// cara mengakses element/data tertentu dalam array
// melalui index array. index selalu dimulai dari 0
// console.log(numbers[2]); //3
// console.logs(students[1]); //jane
// console.log(jhon[2]); //true
// console.log(jhon[3][1]); //90

// // Mengakses element/data terakhir dalam array
// let numbers1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// console.log(numbers2[numbers2.leght - 1]); 
// numbers2.countries.findIndex(function(item) {
//     return item === "zimbabwe";
// });
// console.log(index);
// console.log(countries[204]);

// Array Method
// let array = [1, 2, 3, "Hello", false, true];
// console.log(array);

// // 1. toString()
// console.log(array.toString());
// //2. jhon()
// console.log(array.join());
// console.log(array.join(""));
// console.log(array.join("-"));
// console.log(array.join("#"));
// //3. pop()
// array.pop();
// console.log(array);
// //4.push()
// array.push("Selamat Pagi");
// console.log(array);
// //5.Sift()
// array.sift("Selamat Pagi");
// console.log(array);
// //6.unsift()
// array.unsift("Selamat Pagi");
// console.log(array);
// //7.Splice
// array.splice(2, 1); //hapus
// console.log(array);
// array.splice(1, 1, 1); //ganti
// console.log(array);
// array.splice(2, 0, 2, 3); //tambah
// console.log(array);

//8. concat()
let buah = ["pisang", "apel", "jeruk"];
let sayur = ["tomat", "bayam", "sayur"];
let biji = ["kedelai", "kacang tanah", "kacang polong"];

let makanan = buah.concat(sayur, biji);
console.log(makanan);

//9. slice()
let sayuran = makanan.slice(3, 6);
console.log(sayuran);
let bijian = makanan.slice(6);
console.log(bijian);

