class Kapal {
    constructor(nama, jenis, panjang, lebar) {
        this.nama = nama;
        this.jenis = jenis;
        this.panjang = panjang;
        this.lebar = lebar;
    }

    infoKapal() {
        return `Kapal ${this.nama} merupakan jenis ${this.jenis} yang berukuran ${this.panjang} X ${this.lebar} m.`;
    }
}

class KapalPenumpang extends Kapal {
    constructor(nama, jenis, panjang, lebar, kapasitasPenumpang) {
        super(nama, jenis, panjang, lebar);
        this.kapasitasPenumpang = kapasitasPenumpang;
    }

    infoKapal() {
        return `${super.infoKapal()} Kapal ini memiliki kapasitas ${this.kapasitasPenumpang} orang.`;
    }
}

class TiketKapal extends Kapal {
    constructor(nama, jenis, panjang, lebar, hargaTiket) {
        super(nama, jenis, panjang, lebar);
        this.hargaTiket = hargaTiket;
        this.tiketTerjual = 0;
    }

    jualTiket(jumlah) {
        this.tiketTerjual += jumlah;
        return `${jumlah} tiket terjual untuk kapal ${this.nama}.`;
    }

    infoTiket() {
        return `Harga tiket untuk kapal ${this.nama} adalah Rp${this.hargaTiket}.`;
    }

    totalPendapatan() {
        return this.tiketTerjual * this.hargaTiket;
    }
}

class KapalKargo extends Kapal {
    constructor(nama, jenis, panjang, lebar, kapasitasMuatan) {
        super(nama, jenis, panjang, lebar);
        this.kapasitasMuatan = kapasitasMuatan;
        this.muatanSaatIni = 0;
    }

    tambahMuatan(berat) {
        if (this.muatanSaatIni + berat <= this.kapasitasMuatan) {
            this.muatanSaatIni += berat;
            return `Muatan seberat ${berat} ton berhasil ditambahkan.`;
        } else {
            return `Kapasitas tidak cukup. Sisa kapasitas: ${this.kapasitasMuatan - this.muatanSaatIni} ton.`;
        }
    }

    kurangiMuatan(berat) {
        if (this.muatanSaatIni - berat >= 0) {
            this.muatanSaatIni -= berat;
            return `Muatan seberat ${berat} ton berhasil diturunkan.`;
        } else {
            return `Tidak dapat mengurangi muatan melebihi muatan yang ada.`;
        }
    }

    infoMuatan() {
        return `Kapal ${this.nama} memiliki muatan ${this.muatanSaatIni} ton dari kapasitas total ${this.kapasitasMuatan} ton.`;
    }
}

// Contoh penggunaan
const kapalFerry = new KapalPenumpang("Titanic", "Ferry", 200, 100, 600);
console.log(kapalFerry.infoKapal());

const tiketKapalPesiar = new TiketKapal("Pesiar Mewah", "Pesiar", 300, 50, 1000000);
console.log(tiketKapalPesiar.infoTiket());
console.log(tiketKapalPesiar.jualTiket(50));
console.log(`Total pendapatan: Rp${tiketKapalPesiar.totalPendapatan()}`);

const kapalBarang = new KapalKargo("Barang Jaya", "Kargo", 250, 80, 10000);
console.log(kapalBarang.tambahMuatan(5000));
console.log(kapalBarang.infoMuatan());
console.log(kapalBarang.kurangiMuatan(2000));
console.log(kapalBarang.infoMuatan());