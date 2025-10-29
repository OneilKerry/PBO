class Animal {
    constructor(nama, type) {
        this.nama = nama;
        this.type = type;
    }

    makeSound() {
        return `nama hewan adalah ${this.nama}, dengan type ${this.type} sound moo`;
    }
}

const animal = new Animal("Sapi", "Mamalia");

console.log(animal.makeSound());