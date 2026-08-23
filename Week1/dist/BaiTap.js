"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.School = exports.Robot = exports.MovableCar = exports.ProtectedCat = exports.ProtectedDog = exports.Teacher = exports.Order = exports.ShapeStatic = exports.AirConditioner = exports.Fan = exports.CardPayment = exports.CashPayment = exports.Stack = exports.Repository = exports.Bike = exports.VehicleCar = exports.CatPolymorphism = exports.DogPolymorphism = exports.AnimalPolymorphism = exports.MathUtil = exports.Logger = exports.Box = exports.Library = exports.Developer = exports.Manager = exports.Employee = exports.Circle = exports.Square = exports.Fish = exports.Bird = exports.Cat = exports.Dog = exports.AnimalBase = exports.Account = exports.DogAnimal = exports.Product = exports.User = exports.Book = exports.BankAccount = exports.Rectangle = exports.Car = exports.Student = exports.Person = void 0;
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
class Car {
    constructor(brand, model, year) {
        this.brand = brand;
        this.model = model;
        this.year = year;
    }
    displayInfo() {
        console.log(`Name : ${this.brand}, Model: ${this.model}, Year: ${this.year}`);
    }
}
exports.Car = Car;
// Câu 4
class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }
    area() {
        return this.width * this.height;
    }
    perimeter() {
        return 2 * (this.width + this.height);
    }
}
exports.Rectangle = Rectangle;
// Câu 5
class BankAccount {
    constructor(balance = 0) {
        this.balance = balance;
    }
    deposit(amount) {
        if (amount <= 0) {
            console.log("Deposit amount must be greater than 0");
            return;
        }
        this.balance += amount;
        console.log(`Deposited: ${amount}`);
        console.log(`Balance: ${this.balance}`);
    }
    withdraw(amount) {
        if (amount <= 0) {
            console.log("Withdraw amount must be greater than 0");
            return;
        }
        if (amount > this.balance) {
            console.log("Insufficient balance");
            return;
        }
        this.balance -= amount;
        console.log(`Withdrawn: ${amount}`);
        console.log(`Balance: ${this.balance}`);
    }
}
exports.BankAccount = BankAccount;
// Câu 6
class Book {
    constructor(title, author, year) {
        this.title = title;
        this.author = author;
        this.year = year;
    }
}
exports.Book = Book;
// Câu 7
class User {
    constructor(name) {
        this.name = name;
    }
    getName() {
        return this.name;
    }
    setName(name) {
        this.name = name;
    }
}
exports.User = User;
// Câu 8
class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
}
exports.Product = Product;
class DogAnimal {
    constructor(name) {
        this.name = name;
    }
    sound() {
        console.log(`${this.name}: Woof!`);
    }
}
exports.DogAnimal = DogAnimal;
// Câu 10
class Account {
    constructor(username, password, accountId) {
        this.username = username;
        this.password = password;
        this.accountId = accountId;
    }
    checkPassword(password) {
        return this.password === password;
    }
}
exports.Account = Account;
// Câu 11
class AnimalBase {
    constructor(name) {
        this.name = name;
    }
}
exports.AnimalBase = AnimalBase;
class Dog extends AnimalBase {
    bark() {
        console.log(`${this.name} says: Woof!`);
    }
}
exports.Dog = Dog;
class Cat extends AnimalBase {
    meow() {
        console.log(`${this.name} says: Meow!`);
    }
}
exports.Cat = Cat;
class Bird {
    fly() {
        console.log("Bird is flying.");
    }
}
exports.Bird = Bird;
class Fish {
    swim() {
        console.log("Fish is swimming.");
    }
}
exports.Fish = Fish;
// Câu 13
class Shape {
}
class Square extends Shape {
    constructor(side) {
        super();
        this.side = side;
    }
    area() {
        return this.side * this.side;
    }
}
exports.Square = Square;
class Circle extends Shape {
    constructor(radius) {
        super();
        this.radius = radius;
    }
    area() {
        return Math.PI * this.radius * this.radius;
    }
}
exports.Circle = Circle;
// Câu 14
class Employee {
    constructor(name, salary) {
        this.name = name;
        this.salary = salary;
    }
    work() {
        console.log(`${this.name} is working.`);
    }
}
exports.Employee = Employee;
class Manager extends Employee {
    manageTeam() {
        console.log(`${this.name} is managing the team.`);
    }
}
exports.Manager = Manager;
class Developer extends Employee {
    writeCode() {
        console.log(`${this.name} is writing code.`);
    }
}
exports.Developer = Developer;
// Câu 15
class Library {
    constructor() {
        this.books = [];
        this.users = [];
    }
    addBook(book) {
        this.books.push(book);
    }
    addUser(user) {
        this.users.push(user);
    }
    showBooks() {
        console.log("Books:");
        this.books.forEach(book => {
            console.log(book);
        });
    }
    showUsers() {
        console.log("Users:");
        this.users.forEach(user => {
            console.log(user.getName());
        });
    }
}
exports.Library = Library;
// Câu 16
class Box {
    constructor(value) {
        this.value = value;
    }
    getValue() {
        return this.value;
    }
    setValue(value) {
        this.value = value;
    }
}
exports.Box = Box;
// Câu 17
class Logger {
    constructor() { }
    static getInstance() {
        if (!Logger.instance) {
            Logger.instance = new Logger();
        }
        return Logger.instance;
    }
    log(message) {
        console.log(`[LOG]: ${message}`);
    }
}
exports.Logger = Logger;
// Câu 18
class MathUtil {
    static add(a, b) {
        return a + b;
    }
    static subtract(a, b) {
        return a - b;
    }
    static multiply(a, b) {
        return a * b;
    }
    static divide(a, b) {
        if (b === 0) {
            throw new Error("Cannot divide by zero.");
        }
        return a / b;
    }
}
exports.MathUtil = MathUtil;
// Câu 19
class AnimalPolymorphism {
    makeSound() {
        console.log("Animal makes a sound.");
    }
}
exports.AnimalPolymorphism = AnimalPolymorphism;
class DogPolymorphism extends AnimalPolymorphism {
    makeSound() {
        console.log("Dog says: Woof!");
    }
}
exports.DogPolymorphism = DogPolymorphism;
class CatPolymorphism extends AnimalPolymorphism {
    makeSound() {
        console.log("Cat says: Meow!");
    }
}
exports.CatPolymorphism = CatPolymorphism;
class VehicleCar {
    start() {
        console.log("Car started.");
    }
    stop() {
        console.log("Car stopped.");
    }
}
exports.VehicleCar = VehicleCar;
class Bike {
    start() {
        console.log("Bike started.");
    }
    stop() {
        console.log("Bike stopped.");
    }
}
exports.Bike = Bike;
// Câu 21
class Repository {
    constructor() {
        this.items = [];
    }
    add(item) {
        this.items.push(item);
    }
    getAll() {
        return this.items;
    }
}
exports.Repository = Repository;
// Câu 22
class Stack {
    constructor() {
        this.items = [];
    }
    push(item) {
        this.items.push(item);
    }
    pop() {
        return this.items.pop();
    }
    peek() {
        return this.items[this.items.length - 1];
    }
    isEmpty() {
        return this.items.length === 0;
    }
}
exports.Stack = Stack;
class CashPayment {
    pay(amount) {
        console.log(`Paid ${amount} using cash.`);
    }
}
exports.CashPayment = CashPayment;
class CardPayment {
    pay(amount) {
        console.log(`Paid ${amount} using card.`);
    }
}
exports.CardPayment = CardPayment;
// Câu 24
class Appliance {
}
class Fan extends Appliance {
    turnOn() {
        console.log("Fan is turned on.");
    }
}
exports.Fan = Fan;
class AirConditioner extends Appliance {
    turnOn() {
        console.log("Air conditioner is turned on.");
    }
}
exports.AirConditioner = AirConditioner;
// Câu 25
class ShapeStatic {
    static describe() {
        console.log("A shape is a geometric figure.");
    }
}
exports.ShapeStatic = ShapeStatic;
// Câu 26
class Order {
    constructor(products = []) {
        this.products = products;
    }
    addProduct(product) {
        this.products.push(product);
    }
    calculateTotal() {
        return this.products.reduce((total, product) => total + product.price, 0);
    }
}
exports.Order = Order;
// Câu 27
class Teacher extends Person {
    constructor(name, age, subject) {
        super(name, age);
        this.subject = subject;
    }
    introduce() {
        console.log(`My name is ${this.name}. I am ${this.age} years old. I teach ${this.subject}.`);
    }
}
exports.Teacher = Teacher;
// Câu 28
class ProtectedAnimal {
    constructor(name) {
        this.name = name;
    }
    makeSound() {
        console.log("Animal makes a sound.");
    }
    speak() {
        this.makeSound();
    }
}
class ProtectedDog extends ProtectedAnimal {
    makeSound() {
        console.log(`${this.name}: Woof!`);
    }
}
exports.ProtectedDog = ProtectedDog;
class ProtectedCat extends ProtectedAnimal {
    makeSound() {
        console.log(`${this.name}: Meow!`);
    }
}
exports.ProtectedCat = ProtectedCat;
class MovableCar {
    move() {
        console.log("Car is moving.");
    }
}
exports.MovableCar = MovableCar;
class Robot {
    move() {
        console.log("Robot is moving.");
    }
}
exports.Robot = Robot;
// Câu 30
class School {
    constructor() {
        this.students = [];
        this.teachers = [];
    }
    addStudent(student) {
        this.students.push(student);
    }
    addTeacher(teacher) {
        this.teachers.push(teacher);
    }
    displayInfo() {
        console.log(" STUDENTS ");
        this.students.forEach(student => {
            student.displayAllInfo();
        });
        console.log(" TEACHERS ");
        this.teachers.forEach(teacher => {
            teacher.introduce();
        });
    }
}
exports.School = School;
const school = new School();
school.addStudent(new Student("Alice", 20, 8.5));
school.addStudent(new Student("Bob", 21, 9));
school.addTeacher(new Teacher("Mr. John", 40, "Mathematics"));
school.addTeacher(new Teacher("Ms. Anna", 35, "English"));
school.displayInfo();
