//Person constructor

//Calculate age
// function Person(name, dob) {
//     this.name = name;
//     this.birthday = new Date(dob);
//     this.calculateAge = function () {
//         const diff = Date.now() - this.birthday.getTime();
//         const ageDate = new Date(diff);
//         return Math.abs(ageDate.getUTCFullYear() - 1970);
//     }
// }
// const brad = new Person('Brad', '9-10-1999');
// console.log(brad.calculateAge());

//Object.prototype
//Person.prototype

// function Person(firstName, lastName, dob) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.birthday = new Date(dob);
//     this.calculateAge = function () {
//         const diff = Date.now() - this.birthday.getTime();
//         const ageDate = new Date(diff);
//         return Math.abs(ageDate.getUTCFullYear() - 1970);
//     }
// }
//
// //Get full name
// Person.prototype.getFullName = function () {
//     return `${this.firstName} ${this.lastName}`
// }
//
// Person.prototype.getsMarried = function(newLastName) {
//    this.lastName = newLastName;
// }
//
// const john = new Person('JOGN','DOE', '8-12-90');
// const mary = new Person('Mary', 'Johnson', 'March 20 1978');
// console.log(mary);
// console.log(mary.getFullName());
// mary.getsMarried('Smith')
// console.log(mary.getFullName());


function Person(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;

}
//Greeting
// Person.prototype.greeting = function () {
//   return `Hello there ${this.firstName} ${this.lastName}`;
// }
//
// const person1 = new Person('John', 'Doe');
//
// //Customer constructor
// function Customer(firstName, lastName, phone, membership) {
//     Person.call(this, firstName, lastName);
//     this.phone = phone;
//     this.membersip = membership;
// }
//
// //Inherit the Person prototype methods
// Customer.prototype = Object.create(Person.prototype);
//
// //Make customer.prototype return Customer()
// Customer.prototype.constructor = Customer;
//
// //Customer greeting
// Customer.prototype.greeting = function () {
//     return `Hello there ${this.firstName} ${this.lastName} welcome to our company`;
// }
//



//Create customer
// const customer1 = new Customer('Tom', 'Smith', '55-88-77','Standard');
// console.log(customer1.greeting());


const personPrototypes = {
    greeting: function () {
        return `hello there ${this.firstName} ${this.lastName}`;
    }
}

const mary = Object.create(personPrototypes);
mary.firstName = 'Mary';
mary.lastName = 'Smith';

console.log(mary.greeting());


