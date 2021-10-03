// 1.Написать функцию, которая находит сумму чисел от 100 до 200 кратных переданному функции числу

// function createSum (n) {

//     let sum = 0;
  
//     for (let i = 100; i < 200; i++) {
//       if (i % n === 0) {
//           sum += i};
//     }

//     return sum;
// }
// console.log( createSum(50) );








// 2. Написать функцию, которая принимает массив и степень. Функция возвращает массив, в котором каждое число массива возведено в указанную степень.

// arrIshod = [1,5,6,4];

// function newArray (arr, stepen) {
//     let arrRes = [];
//     for (let i = 0; i < arr.length; i++) {
//         arrRes.push(arr[i] ** stepen);
//     }
//     return arrRes;
// }

// console.log( newArray(arrIshod, 3));












// 3. Дан массив [1,1,1,4,4,5,1,6,6,74,74,74,3]. Написать функцию, которая вернет массив только из тех чисел, которые повторялись в исходном. Массив, который возвращает функция [1,4,6,74].

// let arrIshod = [1,1,1,4,4,5,1,6,6,74,74,74,3];
// function createdNewArr (arr) {
//     arr.sort();
//     let arrRes = [];
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] === arr[i + 1] && !arrRes.includes(arr[i])) {
//             arrRes.push(arr[i]);
//         }
//     }
//     return arrRes;
// }

// console.log(createdNewArr(arrIshod));



// 4. Написать функцию, которая принимает случайный двумерный массив (разной длины) из 8 элементов. Функция возвращает тот массив сумма элементов которого наибольшая.

first = [1,2,3,4];
second = [2,3,4,5];

function reternBiggestArr ([arr1, arr2]) {
    let counterArr1 = 0;
    let counterArr2 = 0;
    for (let i = 0; i < arr1.length; i++) {
        counterArr1 += arr1[i];
    }
    for (let t = 0; t < arr2.length; t++) {
        counterArr2 += arr2[t];
    }
    let answer = counterArr1 > counterArr2 ? arr1 : arr2;

    return answer;
}

console.log( reternBiggestArr([first, second]) );