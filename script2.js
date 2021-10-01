let people1 = ['Samuel', 'Jack', 'Thomas','Henry','Leo','Connor','David','Ryan'];
let people2 = ['Connor','Stanley','Leo', 'Albert','Owen','Oliver','Ethan','Thomas'];


// 1. Пользователь вводит имя, если это имя есть в массиве people1, добавьте это имя в конец people2.

// let nombre = prompt(`Введите своё имя`)
// for (let i = 0; i < people1.length; i++) {
//     if (people1[i] === nombre) {
//         people2.push(nombre);
//     }
// }
// console.log(people2);




// 2. Пользователь вводит имя, если это имя есть в массиве people2, удалите это имя из массива.

// let nombre = prompt(`Введите своё имя`);
// for (let i = 0; i < people2.length; i++) {
//     if (people2[i] === nombre) {
//         people2.splice(i,1)
//     }
// }
// console.log(people2);




// 3. Создайте массив только из тех имен, которые совпадают в обоих массивах.

// let people = [];
// for (let i = 0; i < people1.length; i++) {
//     for (t = 0; t < people2.length; t++) {
//         if (people1[i] === people2[t]) {
//             people.push(people2[t])
//         }
//     }
// }
// console.log(people);



// 4. Объедините массивы people1 и people2 так, чтобы в получившемся массиве не было одинаковых имен.
// 5. Отсортируйте получившийся массив по алфавиту.

// for (let i = 0; i < people1.length; i++) {
//         for (let t = 0; t < people2.length; t++) {
//             if (people1[i] === people2[t]) {
//                people1.splice(i,1);
//                i--;
//                t--;
//             }
//         }
        
//     }
//  console.log(people1.concat(people2).sort());







// Дан массив ["John", "Peter", "David", "Lambert", "Eddie", "Janett", "Franz"];
// Вырезать из массива "David", "Lambert", "Eddie" и записать их в отдельный массив.

// let arr = ["John", "Peter", "David", "Lambert", "Eddie", "Janett", "Franz"];
// let arr2 = arr.splice(2,3);
// console.log(arr2);




// Дан массив ["John", "Peter", "David", "Lambert", "Eddie", "Janett", "Franz"];
// Переставить "Janett", "Franz" в начало массива.

// let arr = ["John", "Peter", "David", "Lambert", "Eddie", "Janett", "Franz"];
// let arr2 = arr.splice(5,2);
// console.log(arr2.concat(arr));




// Дан массив ["John", "Peter", "David", "Lambert", "Eddie", "Janett", "Franz"];
// Заменить "Eddie", "Janett" на "Oleg","Valerchik".

// let arr = ["John", "Peter", "David", "Lambert", "Eddie", "Janett", "Franz"];
// arr.splice(4,2, `Oleg`, `Valerchik`);
// console.log(arr);



// Дан массив ["John", "Peter", "David", "Lambert", "Eddie", "Janett", "Franz"];
// "Перевернуть" массив, заменить первые 4 элемента на Митрофанов ("Mitrofan").

// let arr = ["John", "Peter", "David", "Lambert", "Eddie", "Janett", "Franz"];
// arr.reverse();
// arr.fill(`Mitrofan`, 0, 4);
// console.log(arr);





// Даны два массива 
// ["John", "Peter", "David", "Lambert", "Eddie", "Janett", "Franz"]
// ["Nikodim","Evlampij","Aristarkh","Drogolub","Vitalij"].
// Взять из второго массива все имена начиная с "Aristarkh" (включительно)
// и добавить их в 1ый массив (не должно получится двумерного массива).

// let arr = ["John", "Peter", "David", "Lambert", "Eddie", "Janett", "Franz"];
// let arr2 = ["Nikodim","Evlampij","Aristarkh","Drogolub","Vitalij"];
// let nombre = arr2.splice(2,3);
// arr = arr.concat(nombre);
// console.log(arr);




// // Создайте массив из 10 чисел. Найдите и выведите на экран наименьший четный элемент массива.
let arr = [12, 15, 125, 18, 5, 4, 95, 8, 1, 3];
let naim = arr[0];
for (i = 0; i < 10; i++) {
    if (arr[i] < naim && arr[i] % 2 === 0) {
        naim = arr[i];
    }
}
console.log(naim);