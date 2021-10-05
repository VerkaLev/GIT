// 1. Напишите функцию isEmptyObj(), которая проверяет пуст объект или нет. Если объект пуст, функция вернет true, если в объекте есть хотя бы одно поле, функция вернет false.
let myObject = {};
function isEmptyObj(someObject) {
    let otvet;
    for (let key in someObject) {
    return console.log(false); 
    };
    return console.log(true);
};

isEmptyObj(myObject);


// 2. Создайте объект pupyrki (пупырки). Внутри объекта должны быть поля blue: 120, red: 250, orange: 23, purple: 231. Напишите программу, которая выведет на экран сумму всех пупырок (при подсчете, данные обязательно брать из объекта).

let pupyrki = {
    blue: 120,
    red: 250,
    orange: 23,
    purple: 231
}
let summa = 0;
for (let key in pupyrki) {
    summa += pupyrki[key];
}
console.log(summa);



// 3. Создайте объект shtuchki. Добавьте в объект поля shtuchka1: 200, shtuchka2: 521, shtuchka3: 113, shtuchka4: 314, shtuchka5: 871. Напишите программу, которая выведет на экран наибольшую штучку (программа должна быть универсальна и выводить наибольшую штучку даже если поменяются значения).



// 4. Дан объект:
// student { math: 5, biology: 3, language: 2, isOboltus: ‘yes’ }.
// Напишите программу, которая умножит все ЧИСЛОВЫЕ (и только числовые) значения на 2 и перезапишет каждое свойство объекта (числового типа).