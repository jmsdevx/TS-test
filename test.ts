// function logger(nerd: string) {
//   return "sup " + nerd;
// }

// let nerd = "jerry";

// document.body.innerHTML = logger(nerd);

// interface Person {
//   firstName: string;
//   lastName: string;
// }

// function greeter(person: Person) {
//   return "Hello, " + person.firstName + " " + person.lastName;
// }

// let user = { firstName: "Jane", lastName: "User" };

// document.body.innerHTML = greeter(user);

// interface Person {
//   firstName: string;
//   lastName: string;
// }

// function interfacer(person: Person) {
//   return "Hello, " + person.firstName + " " + person.lastName;
// }

// let user = { firstName: "bob", lastName: "dylan" };

// document.body.innerHTML = interfacer(user);


class Student {
    fullName: string;
    constructor(public firstName: string, public middleInitial: string, public lastName: string) {
        this.fullName = firstName + " " + middleInitial + " " + lastName;
    }
}

interface Person {
    firstName: string;
    lastName: string;
}


