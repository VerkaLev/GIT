let arr = [`John`, `David`, `Aristarkh`, `Mitrofan`, `Evlampij`, `Petya`, `Olga`];
let arrNum = [65, 34, 12, 46, 93, 28, 71, 36];
// 1. Найти в массиве Петю и поменять на Наташу.
// 2. Добавить каждому элементу массива Mrs. и вывести в консоль.
// 3. В массиве чисел найти наибольшее, вывести его в консоль.
// 4. Найти среднее арифметическое всех чисел массива.
// 5. Создать пустой массив, с помощью цикла наполнить массив единицами и нулями, начиная с единицы. Длина массива должна быть 8.
// 6. Создать пустой массив, заполнить массив нечетными числами. Длина массива должна быть 10.
// 7. Вывести на экран количество четных чисел массива arrNum.
// 8. Создать пустой массив, заполнить его элементами, где значение каждого элемента равно квадрату его номера (длина массива должна быть 8).



// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === `Petya`) {
//         arr[i] = `Natasha`;
//     }
// }
// console.log(arr);





// for (let i = 0; i < arr.length; i++) {
//     arr[i] = `Mrs.` + arr[i];
// }
// console.log(arr);





// let bigest = 0;
// for (let i = 0; i < arrNum.length; i++) {
//     if (arrNum[i] > bigest){
//         bigest = arrNum[i];
//     }     
// }
// console.log(bigest);





// let srednee = 0;
// for (let i = 0; i < arrNum.length; i++) {
//      srednee += arrNum[i];
// }
// console.log(srednee / arrNum.length);






// let arrPustoj = [];
// arrPustoj.length = 8;

// for (let i = 0; i < arrPustoj.length; i++) {
//     if (i % 2 === 0){
//         arrPustoj[i] = 1;
//     } else {
//         arrPustoj[i] = 0;
//     }
// }
// console.log(arrPustoj);





// let arrEmpty = [];
// arrEmpty.length = 10;
// let nechetnoe = 1;
// let raznica = 2;

// for (let i = 0; i < arrEmpty.length; i++) {
//     arrEmpty[i] = nechetnoe ;
//      nechetnoe += raznica;
// }
// console.log(arrEmpty);






// let kolichestvo = 0;

// for (i = 0; i < arrNum.length; i++) {
//     if (arrNum[i] % 2 === 0) {
//         kolichestvo++;
//     } else {
//         continue;
//     }
// }
// console.log(kolichestvo);



let arrEmpty = [];
arrEmpty.length = 8;

for (let i = 0; i < arrEmpty.length; i++) {
    arrEmpty[i] = i * i;
}
console.log(arrEmpty);
