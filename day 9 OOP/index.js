//learning objects

let obj = { 
    a: 1, 
    b: 2, 
    c: 3 
};

class Animal {
    constructor(name) {
        this.name = name;
    }
    speak() {
        console.log(`I am ${this.name}`);
    }
}

class Dog extends Animal {
    constructor(name) {
        super(name);
    }
}