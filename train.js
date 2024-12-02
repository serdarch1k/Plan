// console.log("Jack Ma maslahatlari");
// const list = [
//     "yahshi talaba boling",  // 0-20
//     "togri boshliq tanlang va koproq xato qiling",  // 20-30
//     "uzingiz uchun ishlashni boshlang",  // 30-40
//     "siz kuchli bolgan narsalarni qiling",  // 40-50
//     "yoshlarga investitsiya qiling",  // 50-60
//     "endi dam oling, foydasi yoq endi",  // 60
// ];


//------------ CALLBACK FUNCTIONS ---------------//


// function maslahatBering(a, callback) {
//     if (typeof a !== 'number') callback("insert a number", null);
//     else if (a <= 20) callback(null, list[0]);
//     else if (a > 20 && a <= 30) callback(null, list[1]);
//     else if (a > 30 && a <= 40) callback(null, list[2]);
//     else if (a > 40 && a <= 50) callback(null, list[3]);
//     else if (a > 50 && a <= 60) callback(null, list[4]);
//     else {
//         setTimeout(function () {
//             callback(null, list[5]);
//         }, 5000);

//         // callback(null, list[5]);
//     }
// };

// console.log("passed here 0");

// maslahatBering(65, (err, data) => {
//     if (err) console.log("ERROR:", err);
//     else {
//         console.log("javob:", data);
//     }
// });

// console.log("passed here 1");



//-------------- ASYNCRONIUS FUNCTIONS ----------------//


// async function maslahatBering(a) {
//     if (typeof a !== "number") throw new Error("insert a number");
//     else if (a <= 20) return list[0];
//     else if (a > 20 && a <= 30) return list[1];
//     else if (a > 30 && a <= 40) return list[2];
//     else if (a > 40 && a <= 50) return list[3];
//     else if (a > 50 && a <= 60) return list[4];
//     else {
//         return list[5];
//         // "async" function da (setTimeout va boshqa core module lar ishlamaydi)

//         // lekin "promise" function da ishlaydi

//         // return new Promise((resolve, reject) => {
//         //     setTimeout(function () {
//         //         resolve (list[5]);
//         //     }, 5000);
//         // });
//     }
// };



//-------------- CALL via then / catch ----------------//


// console.log("passed here 0");

// maslahatBering(25)
//     .then((data) => {
//         maslahatBering(35)
//             .then((data) => {
//                 maslahatBering(45)
//                     .then((data) => {
//                         console.log("javob:", data);
//                     })
//                     .catch((err) => {
//                         console.log("ERROR:", err);
//                     });
//                 console.log("javob:", data);
//             })
//             .catch((err) => {
//                 console.log("ERROR:", err);
//             });
//         console.log("javob:", data);
//     })
//     .catch((err) => {
//         console.log("ERROR:", err);
// });

// console.log("passed here 1");



//-------------- CALL via async / await ----------------//


// async function run() {
//     let javob = await maslahatBering(15);
//     console.log(javob);
//     javob = await maslahatBering(25);
//     console.log(javob);
//     javob = await maslahatBering(35);
//     console.log(javob);
// }

// run();



//-------------- CALLBACK FUNCTION da "setInterval" ni ishlatish ----------------//


// function maslahatBering(a, callback) {
//     if (typeof a !== 'number') callback("insert a number", null);
//     else if (a <= 20) callback(null, list[0]);
//     else if (a > 20 && a <= 30) callback(null, list[1]);
//     else if (a > 30 && a <= 40) callback(null, list[2]);
//     else if (a > 40 && a <= 50) callback(null, list[3]);
//     else if (a > 50 && a <= 60) callback(null, list[4]);
//     else {
//         setInterval(function () {
//             callback(null, list[5]);
//         }, 1000);

//         // callback(null, list[5]);
//     }
// };


// console.log("passed here 0");

// maslahatBering(65, (err, data) => {
//     if (err) console.log("ERROR:", err);
//     else {
//         console.log(data);
//     }
// });

// console.log("passed here 1");



//-------------- A - TASK ----------------//


// function countLetter(letter, word, callback) {
//     // Harflarni sanaydi
//     let count = 0;                  // Bu o'zgaruvchi so'z ichida necha marta harf uchraganligini hisoblash uchun ishlatiladi. Va boshlang'ich qiymati "0" qilib belgilanadi.
//     for (let anyWord of word) {     // (word) so'z ichidagi har bir harfni (elementni) anyWord deb nomlangan o'zgaruvchiga olish uchun ishlatiladi. Masalan: "engineer" so'zi uchun sikl quyidagi tartibda ishlaydi: e, n, g, i, n, e, e, r
//         if (anyWord === letter) {   // Agar joriy harf (anyWord) biz qidirayotgan harfga (letter) ga teng bo'lsa, hisoblagichni oshiradi. "===" --> qiymat va type ni solishtiradi
//             count++;                // Har safar qidirilayotgan harf topilganda (count) qiymatini 1 ga oshiradi.
//             // count = count + 1;
//         }
//     }

//     callback(count);                // Callback bu yerda hisoblangan natija (count)ni (callback parametri) orqali (asinxron) usulda qaytarish uchun ishlatiladi.
// }

// countLetter("e", "engineer", (result) => {  // Ushbu anonim funksiya result parametrini qabul qiladi (callback orqali kelgan qiymat)
//     console.log(`Harf "e", soni: ${result} ta`);
// });


//----- Kod qanday ishlayapdi? -----//

// 1) "countLetter" funksiyasi chaqirilib va unga "e" harfi va "engineer" so'zi argument sifatida pass qilinyapti.
// 2) Funksiyada "engineer" so'zining har bir harfini "iteratsiya" qilyapti.
// 3) Har safar "e" harfi topilganda, count oshirilyapti.
// 4) Iteratsiya yakunida, umumiy natija "callback" orqali qaytarilyapti. (3 ta)
// 5) "Callback" funksiyasi "result" qiymatini olib, uni konsolga chiqaryapti.



//-------------- Qoldiqli Bo'lish ----------------//


// function qoldiqBolish(a, b, callback) {
//     if (b === 0) {
//         callback("Mahraj nolga teng bolmasin!", null);
//     } else {
//         const c = a % b;
//         callback(null, c);
//     }
// }

// qoldiqBolish(10, 3, (err, data) => {
//     if (err) {
//         console.log("ERROR:", err);
//     } else {
//         console.log("data:", data);
//         console.log("ANY LOGIC...");
//     }
// });



//-------------- B - TASK ----------------//

// async function countDigits(inputString) {
//     if (typeof inputString !== 'string') throw new Error("Input must be a string");

//     else {
//         let count = 0;
//         for (let num of inputString) {
//             if (num >= '0' && num <= '9') {
//                 count++;
//             }
//         }
//         return count;
//     }
// };

// async function run() {
//     let result = await countDigits("ad2a54y79we38t0sfgb9");
//     console.log("Result:", result);
// }
// run();



//-------------- C - TASK ----------------//

// class Shop {
//     constructor(non, lagmon, cola) {
//         this.products = {
//             non: non,
//             lagmon: lagmon,
//             cola: cola,
//         };
//     }

//     qoldiq() {
//         const now = new Date();
//         const time = now.toTimeString().split(" ")[0];
//         const { non, lagmon, cola } = this.products;
//         console.log(`Hozir ${time}da ${non} ta non, ${lagmon} ta lagmon va ${cola} ta cola mavjud!`);
//     }

//     sotish(product, amount) {
//         if (this.products[product] === undefined) {
//             console.log(`Xato: ${product} mahsuloti mavjud emas!`);
//             return;
//         }
//         if (this.products[product] < amount) {
//             console.log(`Xato: ${product} mahsulotidan yetarlicha yo'q! Hozirda ${this.products[product]} ta bor.`);
//             return;
//         }
//         this.products[product] -= amount;
//         const now = new Date();
//         const time = now.toTimeString().split(" ")[0];
//         console.log(`Hozir ${time}da ${amount} ta ${product} sotildi!`);
//     }

//     qabul(product, amount) {
//         if (this.products[product] === undefined) {
//             this.products[product] = 0;             // Yangi mahsulotni qo'shish uchun.
//         }
//         this.products[product] += amount;
//         const now = new Date();
//         const time = now.toTimeString().split(" ")[0];
//         console.log(`Hozir ${time}da ${amount} ta ${product} qabul qilindi!`);
//     }
// }

// const shop = new Shop(4, 5, 2);

// shop.qoldiq();           // 4 ta non, 5 ta lagmon va 2 ta cola mavjud!
// shop.sotish("non", 3);   // 3 ta non sotildi!
// shop.qabul("cola", 4);  // 4 ta cola qabul qilindi!
// shop.qoldiq();          // 1 ta non, 5 ta lagmon va 6 ta cola mavjud!



//-------------- D - TASK ----------------//

// function checkContent(string1, string2) {
//     const a = string1.toUpperCase().split('').sort().join('');
//     const b = string2.toUpperCase().split('').sort().join('');
//     return a === b;
// }

// console.log(checkContent("mitgroup", "gmtiprou"));



//-------------- E - TASK ----------------//

// function getReverse(a) {
//     const ans = a.split('').reverse().join('');
//     return(ans);
// }

// const result = getReverse("Hello");
// console.log("Hello =>", result);

// function hasDoubler(a) {
//     for (let char of a) {
//         if (a.split(char).length - 1 > 2) {
//             return true;
//         }
//     }
//     return false;
// }

// const result = hasDoubler("Hello");
// console.log(result); // false yoki true



//-------------- F - TASK ----------------//

function findDoublers(a) {
    for (let letter of a) {
        if (a.split(letter).length - 1 > 1) {
            return true;
        }
    }
    return false;
}

const result = findDoublers("Hello");
console.log(result);