`use strict`

class Human {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    sayHi () {
        console.log(`Hi! My name is ${this.name}`)
    }
};


class Programmer extends Human {
    constructor (technologies, ... rest) {
        super(...rest);
        this.technologies = technologies;
    }
    startCoding() {
        console.log(`${this.name} is coding ${this.technologies}`);
    }
}


// const oneProgrammer = new Programmer([`HTML`, `CSS`, `JS`], `David`, 23);
// oneProgrammer.startCoding();

class Sportsman extends Human {
    constructor (medals, ...rest) {
        super(...rest);
        this.medals = medals;
    }
    madalsHave() {
        console.log(`${this.name} have ${this.madals} medals`);
    }
}

class FootballPlayer extends Sportsman {
    constructor(team, ...rest) {
        super(...rest);
        this.team = team;
    }

    run(speed) {
        console.log(`${this.name} is running ${speed} kmph`);
    }
}

// const oneFootballPlayer = new FootballPlayer(`Real Madrid`, 15, `John`, 23);
// oneFootballPlayer.run(23);
// console.log(oneFootballPlayer);

class HockeyPlayer extends Sportsman {
    constructor(weight, ...rest) {
        super(...rest);
        this.weight = weight;
    }
    pushOpponent(nameOpponent) {
        console.log(`${this.name} pushed ${nameOpponent} and used ${this.weight}`);
    }
}



arr = [];
for(let i = 0; i < 1000; i++) {
    arr.push(String(i));
};
const arrNew = arr.filter(elem => elem.includes(`3`));
console.log(arrNew);