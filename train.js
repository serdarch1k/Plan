console.log("Jack Ma maslahatlari");
const list = [
    "yahshi talaba boling",  // 0-20
    "togri boshliq tanlang va koproq xato qiling",  // 20-30
    "uzingiz uchun ishlashni boshlang",  // 30-40
    "siz kuchli bolgan narsalarni qiling",  // 40-50
    "yoshlarga investitsiya qiling",  // 50-60
    "endi dam oling, foydasi yoq endi",  // 60
];


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


function maslahatBering(a, callback) {
    if (typeof a !== 'number') callback("insert a number", null);
    else if (a <= 20) callback(null, list[0]);
    else if (a > 20 && a <= 30) callback(null, list[1]);
    else if (a > 30 && a <= 40) callback(null, list[2]);
    else if (a > 40 && a <= 50) callback(null, list[3]);
    else if (a > 50 && a <= 60) callback(null, list[4]);
    else {
        setInterval(function () {
            callback(null, list[5]);
        }, 10);

        // callback(null, list[5]);
    }
};


console.log("passed here 0");

maslahatBering(65, (err, data) => {
    if (err) console.log("ERROR:", err);
    else {
        console.log(data);
    }
});

console.log("passed here 1");