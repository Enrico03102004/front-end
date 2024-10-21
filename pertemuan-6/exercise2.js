// ubah/modifikasi ecercise 1 
// menggunakan 
// 1. IIFE 
// 2. callback function


//1. IIFE
(function(berat, tinggiCm) {
    // Mengkonversi tinggi dari cm ke meter
    const tinggiM = tinggiCm / 100;

    // Menghitung BMI
    const bmi = berat / (tinggiM * tinggiM);

    // Menentukan apakah BMI berada dalam rentang sehat (18.5 - 24.9)
    const sehat = (bmi >= 18.5 && bmi <= 24.9);

    console.log("BMI Anda adalah:", bmi.toFixed(2));
    console.log("Apakah BMI Anda dalam rentang sehat?", sehat);
})(70, 170);  // Parameter yang diberikan secara langsung


//2. Callback Function
function hitungBMI(berat, tinggiCm, callback) {
    // Mengkonversi tinggi dari cm ke meter
    const tinggiM = tinggiCm / 100;

    // Menghitung BMI
    const bmi = berat / (tinggiM * tinggiM);

    // Memanggil callback function dengan nilai BMI
    callback(bmi);
}

function cekBMI(bmi) {
    // Menentukan apakah BMI berada dalam rentang sehat (18.5 - 24.9)
    const sehat = (bmi >= 18.5 && bmi <= 24.9);

    console.log("BMI Anda adalah:", bmi.toFixed(2));
    console.log("Apakah BMI Anda dalam rentang sehat?", sehat);
}

// Contoh penggunaan fungsi dengan callback
hitungBMI(70, 170, cekBMI);
