// 2

// Buat flowchart dan code untuk soal di bawah ini

/**
 * Demy membeli amkanan menggunakan aplikasi Pijarfood
 * 
 * dimana terdapat 2 buah kode promo:
 * * Promo "PIJARFOOD5" dengan ketentuan pemesanan minimal 50rb akan mendapat diskon 50% dengan maksimal potongan sebesar 50 rb
 * * Promo "DITRAKTIRPIJAR" dengan ketentuan pemesanan minimal 25rb akan mendapatkan diskon 60% dengan maksimal potongan sebesar 30rb
 * jika tidak menggunakan kode promo 'false'
 */

const PijarFood = (harga, voucher, jarak, pajak) => {
    let potongan, ongkosKirim = 0, biayaPajak = 0;
    if (
        typeof harga !== "number" &&
        typeof voucher !== "string" &&
        typeof jarak !== "number" &&
        typeof pajak !== "boolean"
    ) {
        console.log("input tidak valid");
        return
    };
    if (voucher != null) {
        if (voucher === "PIJARFOOD5" && harga >= 50000) {
            potongan = harga * (50 / 100);
            if (potongan > 50000) {
                potongan = 50000;
            }
        } else if (voucher === "DITRAKTIRPIJAR" && harga >= 25000) {
            potongan = harga * (60 / 100)
            if (potongan > 30000) {
                potongan = 30000
            }
        } else {
            // jika voucher salah
            potongan = false;
        }
    } else {
        // jika kode promo null 
        potongan = false;
    }

    // console.log(`Harga :${harga}\nPotongan :${potongan}`);

    if (jarak >= 2) {
        ongkosKirim += 5000;
        for (let index = 2; index < jarak; index++) {
            ongkosKirim += 3000;
        }
    } else if (jarak >= 0 && jarak <= 1) {
        ongkosKirim;
    }

    // lewati ini, hanya untuk debugging
    // console.log(ongkosKirim);

    // pajak
    if (pajak === true) {
        biayaPajak = harga * (5 / 100);
    } else if (pajak === false) {
        biayaPajak;
    } 

    // lewati ini, untuk debugging
    // console.log(biayaPajak)


    let total = (harga - potongan) + ongkosKirim + biayaPajak;
    // total keseluruhan
    console.log(`Harga : ${harga}\nPotongan :${potongan}\nBiayaAntar :${ongkosKirim}\nPajak: ${biayaPajak}\nsubTotal :${total}`)
}

PijarFood(75000, 'PIJARFOOD5', 5, true);