// 1.	Создать класс Programmer, инстанс которого обладает полями name, stack (массив строк, типа [«Python», «PHP», «Java»]), и методом code (который перебирает массив stack и выводит сообщения вида «Oleg is coding on Python», «Oleg is coding on PHP», «Oleg is coding on Java»). Метод code должен храниться в прототипе класса.
// 2.	Переопределить метод toString у инстансов Programmer, чтобы они выводили сообщение вида «Hello my name is Oleg»
// 3.   Создать массив из 10 случайных инстансов Programmer, и отфильтровать его с помощью метода filter так, чтобы в результирующий массив попали только те Programmer, у которыx длина массива stack больше 4.


// 1,2
class Programmer {
    constructor(name, stack) {
        this.name = name;
        this.stack = stack;
    }
    code() {
        this.stack.forEach(item =>
            console.log(`${this.name} is coding on ${item}`)
        )
    }

    toString() {
        console.log(`Hello, my name is ${this.name}`)
    }
}


const ProgrammerIs = new Programmer(`Oleg`, [`Python`, `PHP`, `Java`]);
ProgrammerIs.code();
ProgrammerIs.toString();


// 3

const P1 = new Programmer(`Masha`, [1, 2, 4, 55]);
const P2 = new Programmer(`Peter`, [`Rust`, `TypeScript`, `Kotlin`, `Go`, `Julia`]);
const P3 = new Programmer(`Natasha`, [`JS`, `C#`]);
const P4 = new Programmer(`Sasha`, [`Dart`]);
const P5 = new Programmer(`Nina`, [`PHP`, `C++`, `Swift`]);
const P6 = new Programmer(`Nastya`, [`one`, `two`, `three`, `four`, `five`, `six`]);
const P7 = new Programmer(`Lilya`, [1, 3, 87, 54, 13, 12, 0]);
const P8 = new Programmer(`Maks`, [2, 5, 6]);
const P9 = new Programmer(`Vitalya`, [`a`, `b`, `c`, `d`, `f`]);

const arrRandomInst = [P1, P2, P3, P4, P5, P6, P7, P8, P9];
console.log(P2.stack.length);
const arrLength4 = arrRandomInst.filter(objects => objects.stack.length > 4);
console.log(arrLength4);



// Задачка на уроке:
// Написать программу, которая выясняет, может ли существовать треугольник.
// Сумма двух любых сторон больше, чем третья сторона.
class Line {
    constructor(point1, point2) {
        this.point1 = point1;
        this.point2 = point2;
        this.lineX = point1.x - point2.x;
        this.lineY = point1.y - point2.y;
    };
    getLength () {
        this.lineX < 0 ? -this.lineX : this.lineX;
        this.lineY < 0 ? -this.lineY: this.lineY;
        let lengthLine = (Math.sqrt(this.lineX**2 + this.lineY**2)).toFixed(2);
        console.log(lengthLine)
    }
    canTriangleExist(length1, length2, length3) {
        length1 + length2 > length3 & length2 + length3 > length1 & length1 + length3 > length2 ? console.log(`Triangle exist`) : console.log(`Triangle cannot exist`);
    }
};
    
// l


let pointOne = {
    x: 4,
    y: 7
};

let pointTwo = {
    x: 8,
    y: 2
};

let pointThree = {
    x: 1,
    y: 3
};

let pointFour = {
    x: 3,
    y: 6
};

let pointFive = {
    x: 2,
    y: 4
};

let pointSix = {
    x: 8,
    y: 2
};

const line1 = new Line (pointOne, pointTwo);
line1.getLength();
lengthLine1 = line1.getLength.bind(line1); // 6.4 - то, что выводится в console.log

const line2 = new Line(pointThree, pointFour);
line2.getLength();
lengthLine2 = line2.getLength.bind(line2); // 3.61 - то, что выводится в console.log

const line3 = new Line(pointFive, pointSix); // 6.32 - то, что выводится в console.log
line3.getLength();
lengthLine3 = line3.getLength.bind(line3);


line3.canTriangleExist( lengthLine1, lengthLine2, lengthLine3);