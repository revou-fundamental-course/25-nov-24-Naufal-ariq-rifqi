function hitungBMI() {
    const jenisKelamin = document.getElementById('jenisKelamin').value;
    const beratBadan = parseFloat(document.getElementById('beratBadan').value);
    const tinggiBadan = parseFloat(document.getElementById('tinggiBadan').value);

    const tinggiMeter = tinggiBadan / 100;

    const bmi = beratBadan / (tinggiMeter * tinggiMeter);

    const hasilDiv = document.getElementById('hasil');
    hasilDiv.innerHTML = `BMI Anda: ${bmi.toFixed(2)}<br>`;

    if (bmi < 18.5) {
        hasilDiv.innerHTML += "Anda termasuk kategori kurus.";
    } else if (bmi >= 18.5 && bmi <= 24.9) {
        hasilDiv.innerHTML += "Anda memiliki berat badan ideal.";
    } else if (bmi >= 25 && bmi <= 29.9) {
        hasilDiv.innerHTML += "Anda termasuk kategori kelebihan berat badan.<br>Cara terbaik untuk menurunkan berat badan adalah mengatur klalor makanan yang dikonsumsi dan berolahraga.<br> Jika BMI Anda berada dalam kategori ini maka anda dianjurkan untuk menurunkan berat badan hingga batas normal.";
    } else if (tinggiBadan ==0 || beratBadan ==0 || bmi ==0){
        hasilDiv.innerHTML += "Tidak bisa memasukan angka 0";
    } else {
    hasilDiv.innerHTML += "Anda termasuk kategori obesitas.<br>Cara terbaik untuk menurunkan berat badan adalah mengatur klalor makanan yang dikonsumsi dan berolahraga.<br> Jika BMI Anda berada dalam kategori ini maka anda dianjurkan untuk menurunkan berat badan hingga batas normal.";
    }
}