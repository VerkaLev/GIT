`use strict`

//1. 
// Дан массив объектов:

// const persons = [
//     {
//         name: 'One',
//         age: 1,
//     },
//     {
//         name: 'Two',
//         age: 2
//     },
//     {
//         name: 'Three',
//         age: 3
//     },
//     {
//         name: 'Four',
//         age: 4
//     }
// ]

// Каждому объекту из этого массива необходимо добавить метод .sayHello()
// который выводит сообщение вида "Hello! My name is {NAME}", где NAME - это поле name каждго объекта

const persons = [
        {
            name: 'One',
            age: 1
        },
        {
            name: 'Two',
            age: 2
        },
        {
            name: 'Three',
            age: 3
        },
        {
            name: 'Four',
            age: 4
        }
    ];


function sayHello () {
    console.log(`Hello! My name is ${this.name}`);
};

// НОВЫЙ МЕТОД
const callback = persons.forEach( function(item) {
    item.sayHello = sayHello;
    item.sayHello();
});


// СТАРЫЙ МЕТОД:
// for (let i = 0; i < persons.length; i++ ) {
//         persons[i].sayHello = sayHello;
//         persons[i].sayHello();
//     };



// 2. используя setTimeout и цикл, вызовите метод .sayHello() у каждого объекта с задержкой в 1 секунду 

// СТАРЫЙ МЕТОД:
// for (let i = 0; i < persons.length; i++) {
//     const timeDelay = persons[i].sayHello.bind(persons[i]);
//     setTimeout (
//         timeDelay,
//         1000 * i
//     )
// }


// НОВЫЙ МЕТОД:
persons.forEach(function(item) {
    const timeDelay = item.sayHello.bind(item);
    setTimeout (
        timeDelay,
        1000 * persons.indexOf(item)
    )
});



// 3. используя объект const creature = { name: 'Ctulhu', eyes: 8 }, заставьте creature воспользоваться
// методом .sayHello() любого объекта из массива, при этом не добавляя этот метод в creature

const creature = { 
    name: 'Ctulhu', 
    eyes: 8 
};

persons[1].sayHello.call(creature);





// 4. напишите функцию которая принимает коллбэк (метод .sayHello() любого объекта из массива)
// эта функция должна выводить сообщение вида "Ladies and Gentlemen, here is our person: "
// после чего должна запускать коллбэк (метод .sayHello() любого объекта из массива)
// пример:

// presentation(persons[0].sayHello) 
// =====>>>>>
// "Ladies and Gentlemen, here is our person: "
// "Hello! My name is One"

// presentation(persons[1].sayHello) 
// =====>>>>>
// "Ladies and Gentlemen, here is our person: "
// "Hello! My name is Two"


// СТАРЫЙ МЕТОД

// function presenation (cb) {
//     console.log(`Ladies and Gentlemen, here is our person:`);
//     cb();
// }
// for (let i = 0; i < persons.length; i++) {
//     presenation(persons[i].sayHello.bind(persons[i]))
// }


// НОВЫЙ МЕТОД:

function presenation (callback) {
    console.log(`Ladies and Gentlemen, here is our person:`);
    callback();
}

presenation(persons[3].sayHello.bind(persons[3]));