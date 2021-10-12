"use strict"

// 1.	Даны два массива: oboltusy = [‘Евлампий’,’Никодим’,’Акакий’,’Поликарп’]; и otlichniki = [‘Лукьян’,’Феофил’,’Афиноген’]; Оказалось, что Никодим начал учиться хорошо и поэтому его необходимо перевести в отличники. Напишите программу, которая находит под каким номером идет имя ‘Никодим’ в массиве. После чего программа должна вырезать имя из массива oboltusy и вставлять его в массив otlichniki.
// 2. Напишите функцию hyphenDestroyer(), которая преобразует строки вида «my-short-string» в «my short string». То есть, дефисы удаляются и вместо них появляются пробелы. 
// Например: 
// hyphenDestroyer ("background-color") === 'background сolor'; 
// hyphenDestroyer ("list-style-image") ==='list style image'; 
// hyphenDestroyer ("-webkit-transition") === 'webkit transition’;
// 3. Дана строка var str = ‘Мама мыла раму’; Написать функцию toWash(str, thing); Где str - это строка в которой надо поменять последнее слово, а thing - это, то самое слово которое надо вставить в конец строки. Функция должна возвращать строку. 
// Например:
// console.log( toWash(str, ’машину’) ); // ‘Мама мыла машину’ 
// console.log( toWash(str, ’рябину’) ); // ‘Мама мыла рябину’ 
// console.log( toWash(str, ‘картину’) ); // ‘Мама мыла картину’
// 4. Дан массив 
// arr = [4,-9,49,12, -2, -4, 5, -10, -22, 13, 14];

// a) Создайте на основе arr, новый массив где каждый элемент имеет противоположный знак в отличии от оригинального ([-4,9,-49,-12,2,4,-5, 10, 22, -13, -14]) 
// b) отфильтруйте массив так, чтобы в результате получился массив только положительных чисел
// c) с помощью reduce посчитайте сумму только четных чисел




// 1.
let oboltusy = [`Евлампий`,`Никодим`,`Акакий`,`Поликарп`];
let otlichniki = [`Лукьян`,`Феофил`,`Афиноген`];

oboltusy.forEach(
    (item, index) => {
    return item === `Никодим` ? otlichniki.unshift(oboltusy.splice(index, 1).join()) : item;
}
);
console.log(oboltusy);
console.log(otlichniki);



// 2.
function hyphenDestroyer(stroka) {
    return console.log(stroka.split("-").join(" ")); 
}
hyphenDestroyer(`list-style-image`);



// 3.
const str = `Мама мыла раму`;
const toWash = (str, thing) =>
    console.log(str.split("раму").join("") + `${thing}`); 
toWash(str,`кота`);



// 4.
const arr = [4,-9, 49, 12, -2, -4, 5, -10, -22, 13, 14];
const newArr = arr.map((item) => 
item > 0 ? -item : -item)
console.log(newArr);

const arrPositiveNum = arr.filter((item) =>
item > 0
)
console.log(arrPositiveNum);

const sum = arr.reduce((acc, item) => 
item >= 0 ? acc + item : acc, 
0
)
console.log(sum);


