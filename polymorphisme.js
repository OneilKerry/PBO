class Animal{
    speak() {
        console.log("Animal makes a sound")
    }
}

class Dog extends Animal{
    speak() {
        console.log("Dog Sound guk guk")
    }
}

class Cat extends Animal{
    speak() {
        console.log("Cat Sound meow meow")
    }
}

const dog = new Dog();
dog.speak();