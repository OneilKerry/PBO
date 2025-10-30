class Karyawan {
    constructor(nama, baseGaji) {
        this.nama = nama;
        this.baseGaji = baseGaji;
    }
    hitungGaji() {
    }
}

class KaryawanTetap extends Karyawan {
    hitungGaji() {
        let totalGaji = this.baseGaji * 0.10;
        let totalBonusGaji = this.baseGaji + totalGaji;
        console.log(`${this.nama} (Karyawan Tetap, gaji tetap Rp ${this.baseGaji}) dengan bonus didapatkan Rp ${this.baseGaji} x 10% = Rp ${totalGaji},dan Total Pendapatan Rp ${totalBonusGaji}`);
        return totalGaji;
    }
}

class KaryawanKontrak extends Karyawan {
    hitungGaji() {
        let totalGaji = this.baseGaji * 0.05;
        let totalBonusGaji = this.baseGaji + totalGaji;
        console.log(`${this.nama} (Karyawan Kontrak, gaji kontrak Rp ${this.baseGaji}) dengan bonus didapatkan Rp ${this.baseGaji} x 5% = Rp ${totalGaji},dan Total Pendapatan Rp ${totalBonusGaji}`);
        return totalGaji;
    }
}

let karyawan1 = new KaryawanTetap("Budi", 8000000);
let karyawan2 = new KaryawanKontrak("Sita", 6000000);


let totalBonusSemua = karyawan1.hitungGaji() + karyawan2.hitungGaji();
console.log(`Total bonus semua karyawan: ${totalBonusSemua}`);