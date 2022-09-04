// 1 a
// Buat code dari tugas Computer Science dibawah ini
// Deteksi Palindrom
// - Diberikan sebuah teks, periksa apakah kata tersebut adalah
// palindrom atau tidak. Misalnya teks “Malam”, output =
// palindrom.
// Reverse Words

let splitTeks;

const cekPalindrom = (teks) =>{
    // type of
    //  digunakan untuk melakukan cek type data 
    // console.log(typeof teks);
    if (typeof teks !== "string") {
        console.log("error! mohon untuk masukkan huruf");
        return;
    }

    splitTeks = teks.split("");

    // console.log(Math.floor(splitTeks.length / 2));

    if (splitTeks.length <= 1) {
        console.log("mohon untuk menginput huruf lebih dari satu");
    } else {
        for (let i = 0; i < Math.floor(splitTeks.length /2); i++) {
            if(splitTeks[i] !== splitTeks[splitTeks.length - (i+1)]) {
                console.log("no palindrom");
                return
            }
        }
        console.log("palindrom");
    } 

}

cekPalindrom("tarak");


// 1 b
// - Diberikan sebuah kalimat, ubah urutan kata-kata di dalam
// kalimat menjadi terbalik. Misalnya kalimat “Saya belajar
// Javascript”, output “Javascript belajar Saya”

let splitParagraph, position, result=[];
const reverseWords = (paragraph) => {
    splitParagraph =  paragraph.split(" ");
    position = paragraph.search(" ");
    console.log(splitParagraph)

    if (position > 0) {
        for (let i = 0; i < splitParagraph.length; i++) {
            result.push(splitParagraph[splitParagraph.length-(i+1)]);
        }

        console.log(...result)
        return
        
    } else {
        console.log("paragraph tidak bisa dipisahkan");
        return
    }
    
}

reverseWords("Saya belajar javascript");