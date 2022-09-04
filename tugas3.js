const divideAndSort = (num) => {
    // step1
    // declare variabel
    let splitNum2=[], arrNumber=[], sNum, splitNum;
    
    // step 2
    // cek type num
    if (typeof num !== "number") {
        console.log(`input error/tidak valid`);
        return;
    }

    // step 3
    // konversi num to string;
    sNum = num.toString();
    
    // cek panjang digit dari sNum
    if (sNum.split("").length > 16 ) {
        console.log("panjang maksimal digit yang dimasukkan adalah 16");
        return;
    } 

    // step 4
    // pisahkan num berdasarkan 0 dan berikan masing-masing pemisahannya menjadi array
    splitNum = sNum.split("0");
    console.log(splitNum);

    // step
    // memecahkan kembali setiap bagian oleh angka 0 menjadi array kembali melalui perulangan
    for (let i = 0; i < splitNum.length; i++) {
        if (splitNum[i] === '') {
            continue;
        } else {
            splitNum2.push(splitNum[i].split(''));
        }
    }

    //lewati ini untuk debugging, hasilnya akan array multidimensi
    // console.log(splitNum2);


    for (let j = 0; j < splitNum2.length; j++) {
        // melakukan perbandingan antara nilai sebelum dan sesudahnya untuk melakukan sorting secara terurut dari terkecil sampai terbesar
        splitNum2[j].sort(function(a,b){return a - b})

        // cek panjang tiap index dari array multi dimensi
        // console.log(splitNum2[j].length)

        // perulangan di dalam perulangan
        // mengecek panjang dari tiap index, lalu setiap isi di dalam index tersebut di push ke variabel arrNumber
        // kecuali undefined
        for (let k = 0; k <= splitNum2[j].length; k++) {
            if (splitNum2[j][k] === undefined) {
                continue;
            } else {
                arrNumber.push(splitNum2[j][k]);
            }
        }
    }
    // hasil setelah melakukan proses di atas
    // console.log(arrNumber);
    // melakukan penggabungan tiap array
    console.log(arrNumber.join(""));

}

divideAndSort(4321087530987657);

// let num = 1234567891234567891n;
// console.log(typeof num);

// if (splitNum[0] === ''){
//     console.log("kosong");
// } else {
//     console.log("berisi");
// }

