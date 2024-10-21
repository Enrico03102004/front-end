// Asynchronous JS

//Synchronous -> single thread -> blocking
// console.log("Proses 1");
// console.log("Proses 2");
// console.log("Proses 3");
// console.log("Proses 4");

// //Ansynchronous -> multi thread -> non-blocking
// //1. Parallel
// setTimeout(( )=>{
//     console.log("Proses 1");
// }, 3000);
// console.log("Proses 2");
// setTimeout(( )=>{
//     console.log("Proses 3");
// }, 5000);
// console.log("Proses 4");

//2. Concurent
// setTimeout(() => {
//     console.log("Proses 1");
//     setTimeout(() => {
//         console.log("Proses 2"); 
//         setTimeout(() => {
//             console.log("Proses 3"); 
//             setTimeout(() => {
//                 console.log("Proses 4"); 
//             console.log("Proses 4");
//          }, 3000);
//         }, 3000);
//     }, 3000);
// }, 3000);


//Promise

// const newPromise = new Promise((resolve, Reject) => {
//     if (condition) {
//         resolve("Berhasil");
//     } else {
//         Reject("Gagal");
//     }
// });

//Cara pakai promise
//1. then - catch
// newPromise.then((result) => result)
// newPromise.then((result2) => console.log(result2))
// newPromise.catch((eror) => console.log(eror));

//2. Async - Await
// harus di buat dalam fungsi
// const consumePromise = async () => {
//     try {
//     let result = await newPromise;
//     console.log(result);

//     } cacth (error) {
//         console.log(error);
//     }
// };
// consumePromise


//Pakai Promise yang sudah ada
//1. fetch
// fetch("https://jsonplaceholder.typicode.com/users")
// .then((response) => response.json())
// .then((json) => console.log(json());

// (async() => {
//     let response = await fetch("https://jsonplaceholder.typicode.com/users")
//     let json = await response.json();
//     json.forEach(({ name }) => console.log(name));
// })();

//2. Axios
axios.get("https://jsonplaceholder.typicode.com/users")
axios.then((result) => console.log(result.data))

(async () => {
    let result = await axios.get("https://jsonplaceholder.typicode.com/users")
    result.data.forEach(({ name }) => console.log(name));
})();