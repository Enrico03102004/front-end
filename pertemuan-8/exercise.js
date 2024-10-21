const person = {
    firstName: "John",
    weight: 70, 
    height: 1.75, 
    BMI: null,
    
    calculateBMI: function() {
        const bmi = this.weight / (this.height * this.height);
        this.BMI = bmi.toFixed(2); 

        let category;
        if (bmi < 16.0) {
            category = "Severely Underweight";
        } else if (bmi >= 16.0 && bmi <= 18.4) {
            category = "Underweight";
        } else if (bmi >= 18.5 && bmi <= 24.9) {
            category = "Normal";
        } else if (bmi >= 25.0 && bmi <= 29.9) {
            category = "Overweight";
        } else if (bmi >= 30.0 && bmi <= 34.9) {
            category = "Moderately Obese";
        } else if (bmi >= 35.0 && bmi <= 39.9) {
            category = "Severely Obese";
        } else if (bmi >= 40.0) {
            category = "Morbidly Obese";
        }

        console.log(`Nama: ${this.firstName}`);
        console.log(`Berat: ${this.weight} kg`);
        console.log(`Tinggi: ${this.height} m`);
        console.log(`BMI: ${this.BMI}`);
        console.log(`Kategori: ${category}`);
    }
};

person.calculateBMI();
