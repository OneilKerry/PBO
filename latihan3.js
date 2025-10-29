class Vehicle{
    move(){
        console.log("Kendaraan Bergerak")
    }
}

class Car extends Vehicle{
    move(){
        console.log("Mobil berjalan di jalan raya")
    }
}

class Boat extends Vehicle{
    move(){
        console.log("Kapal berlayar dilaut")
    }
}

const vehicle = new Car();
vehicle.move();