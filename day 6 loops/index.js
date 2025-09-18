//for loops
for (let i = 0; i < 8; i++) {
  console.log(i);
}

//for of loops
let arr = [10, 20, 30, 40, 50];
for (let num of arr) {
  console.log(num);
}

//for in loops
let obj = {
  name: "John",
  age: 30,
  city: "New York",
};
for (let key in obj) {
  console.log(key + ": " + obj[key]);
}

//do-while loops
let count = 0;
do {
  console.log(count);
  count++;
} while (count < 5);

//while loops
let n = 0;
while (n < 5) {
  console.log(n);
  n++;
}

//exercise 1
const myArray = [10, 20, 30, 40, 50];
let total = 0;

for (let num of myArray) {
  total += num;
}

console.log("Total sum:", total); // Output: Total sum: 150

// properties are values associated with a JavaScript object
// methods are functions that are stored as object properties
// example of creating an object

const person = {
    name: "Alice",
    age: 25,
    city: "Wonderland",
    getAge: function() { //this is a function method
        return this.age;
    },
    get allDetails() { //This is a getter method
        return `${this.name}, ${this.age}, ${this.city}`;
    }
};

console.log("Person details:", person.allDetails); // Output: Person details: Alice, 25, Wonderland
person.getAge(); // Output: 25




const car = {
    make: "Toyota",  //key: value
    model: "Camry",
    color: "Silver",
    engine: {
        cylinders: 8,
    },
    getCylinders: function() {
        return this.engine.cylinders;
    }
};
car.getCylinders(); // Output: 8

console.log("Number of cylinders:", car.getCylinders());    // Output: Number of cylinders: 8
console.log("Car make:", car.make);    // Output: Car make: Toyota
console.log("Car model:", car.model);  // Output: Car model: Camry
console.log("Car color:", car.color);  // Output: Car color: Silver

//how to access object properties
//.notation
console.log(car.make);
//bracket notation
console.log(car["model"]);

let prop = "make";
car[prop] = "Honda"; //change the value of the make property

for (let prop in car) {
    console.log(car[prop]);
}

class Employee {
    //public properties
    firstName;
    lastName;
    #salary; //private property
    constructor(firstName, lastName, salary) {
        this.#salary = salary
        this.firstName = firstName;
        this.lastName = lastName;
    }
    get fullname() {
    return `${this.firstName} ${this.lastName}`;
    }
}

const newEmployee = new Employee("Leo", "Saban", 105000); //"new" keyword creates an instance of the class

console.log("Employee Full Details:", newEmployee); // Output: Employee Full Details: Leo Saban


//object.keys()
const object1 = {first: 1, second: 2, third: 3};

Object.keys(object1)
// expected output: Array ["first", "second", "third"]
console.log(Object.keys(object1)); // Output: Array ["first", "second", "third"]

//object.values()
const object2 = {first: 'hello', second: 'world'};
Object.assign(object1, object2);
// expected output: Array ["hello", "world"]
console.log(Object.values(object2)); // Output: Array ["hello", "world"]

//you cannot have duplicate keys in an object
