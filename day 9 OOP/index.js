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

class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
}

//data modeling: user class
class User {
    constructor(username, email)
}

//person, employee, role, hire date, pay rate
