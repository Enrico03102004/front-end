function hitungBMI(berat, tinggiCm) {
    // Mengkonversi tinggi dari cm ke meter
    const tinggiM = tinggiCm / 100;

    // Menghitung BMI
    const bmi = berat / (tinggiM * tinggiM);

    return bmi;
}

function bmiSehat(berat, tinggiCm) {
    const bmi = hitungBMI(berat, tinggiCm);
    
    // Menentukan apakah BMI berada dalam rentang sehat (18.5 - 24.9)
    if (bmi >= 18.5 && bmi <= 24.9) {
        return true;
    } else {
        return false;
    }
}

// Contoh penggunaan fungsi
const berat = 70;  // dalam kg
const tinggiCm = 170;  // dalam cm

const bmi = hitungBMI(berat, tinggiCm);
const sehat = bmiSehat(berat, tinggiCm);

console.log("BMI Anda adalah:", bmi.toFixed(2));
console.log("Apakah BMI Anda dalam rentang sehat?", sehat);

