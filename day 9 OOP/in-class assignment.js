//person, employee, role, hire date, pay rate

class Person {
    constructor(firstName, lastName, age, role) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.role = role;
    }
}

class Employee extends Person {
    constructor(firstName, lastName, age, role, hireDate, payRate) {
        super(firstName, lastName, age, role);
        this.hireDate = hireDate;
        this.payRate = payRate;
    }
}

let emp1 = new Employee("John", "Doe", 30, "Developer", "2022-01-15", 35);
console.log(emp1); {
        this.username = username;
        this.email = email;
    }


