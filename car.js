class Car {
    constructor(brand, color, speed) {
        this.brand = brand;
        this.color = color;
        this.speed = speed;
    }

    accelerate() {
        return `brand barang adalah ${this.brand}, dengan warna ${this.color} memiliki kecepatan ${this.speed}`;
    }
}

const car1 = new Car("toyota", "hijo", "120km/jam");

console.log(car1.accelerate());