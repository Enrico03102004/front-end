// String leterals, Arrow Function & Default Parameter

//1. String Leterals
// let fullName = "jhon Doe";
// let age = 33;
// let addres = "Manado";

// //Hallo n
// let kalimat =
//  "Hallo nama saya " + 
//  fullName +
//   "Umur saya " 
//   + age + 
//   " Tahun dan saya tinggal di"
//   + address;

//   console.log(kalimat);

//   let kalimat2 = "Hallo nama saya s{fullName}, "Umur saya " 
//   console.log(kalimat2);

  //2. Arrow Function

//   function sayGreetings1(fullName) {
//     return 'Hallo nama saya s{fullName}';
//   };
//   console.log(sayGreetings1("jhon Doe"));

  //Arrow Function pada IIFE
//   let output1 = (())

//3. Default Parameters 
const sayGreetings3 = (fullName ) => {
    if (!fullName) {
        fullName = "Jhon Doe";
    }
    if (!age) {
        age = 30;
    }
    if (!address) {
        address = "Manado";
    }
    console.log
}