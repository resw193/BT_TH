"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Student = exports.Person = void 0;
// Câu 1
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    displayInfo() {
        console.log(`Name : ${this.name}, Age: ${this.age}`);
    }
}
exports.Person = Person;
// Câu 2
class Student extends Person {
    constructor(name, age, grade) {
        super(name, age);
        this.grade = grade;
    }
    displayAllInfo() {
        console.log(`Name : ${this.name}, Age: ${this.age}, Grade: ${this.grade}`);
    }
}
exports.Student = Student;
// Câu 3
// Câu 4
// Câu 5
// Câu 6
// Câu 7
// Câu 8
// Câu 9
// Câu 10
// Câu 11
// Câu 12
// Câu 13
// Câu 14
// Câu 15
// Câu 16
// Câu 17
// Câu 18
// Câu 19
// Câu 20
// Câu 21
// Câu 22
// Câu 23
// Câu 24
// Câu 25
// Câu 26
// Câu 27
// Câu 28
// Câu 29
// Câu 30
