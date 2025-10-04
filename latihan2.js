class Enemys {
    constructor(name) {
        this.name = name;
        this.speed = 2;
        this.attack = 5;
        this.health = 100;
        this.defend = 2;
    }

    attackEnemy() {
        return `Enemy attcak!, attack = ${this.attack}`
    }

    walk() {
        return `Enemy speed, speed = ${this.speed}`
    }

    dash() {
        return `Enemy dash, speed = 5`
    }

    getInformation(name) {
        return `${this.name} memiliki speed = ${this.speed}, attack = ${this.attack}, health = ${this.health},dan defend = ${this.defend}`
    }
}

const orge = new Enemys("Orge");


console.log(orge.attackEnemy());
console.log(orge.walk());
console.log(orge.dash());
console.log(orge.dash());
console.log(orge.getInformation());



