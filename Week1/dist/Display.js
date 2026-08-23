"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const BaiTap_1 = require("./BaiTap");
// Câu 1
console.log("Câu 1");
new BaiTap_1.Person("AAAA", 40).displayInfo();
// Câu 2
console.log("Câu 2");
new BaiTap_1.Student("BBBB", 20, 3.5).displayAllInfo();
// Câu 3
console.log("Câu 3");
new BaiTap_1.Car("Toyota", "Camry", 2020).displayInfo();
// Câu 4
console.log("Câu 4");
console.log("Area:", new BaiTap_1.Rectangle(10, 20).area());
console.log("Perimeter:", new BaiTap_1.Rectangle(10, 20).perimeter());
// Câu 5
console.log("Câu 5");
const account1 = new BaiTap_1.BankAccount(9999999);
account1.deposit(500);
account1.withdraw(300);
// Câu 6
console.log("Câu 6");
const book = new BaiTap_1.Book("Java", "ABC", 2026);
console.log(book);
// Câu 7
console.log("Câu 7");
const user1 = new BaiTap_1.User("John");
console.log(user1.getName());
user1.setName("Peter");
console.log(user1.getName());
// Câu 8
console.log("Câu 8");
const products = [
    new BaiTap_1.Product("Mouse", 50),
    new BaiTap_1.Product("Keyboard", 120),
    new BaiTap_1.Product("Monitor", 300),
    new BaiTap_1.Product("USB Cable", 20),
    new BaiTap_1.Product("Headphone", 150)
];
console.log("All products:");
products.forEach(product => console.log(product));
const expensiveProducts = products.filter(product => product.price > 100);
console.log("Products with price > 100:");
expensiveProducts.forEach(product => console.log(product));
// Câu 9
console.log("Câu 9");
const dogAnimal = new BaiTap_1.DogAnimal("Buddy");
dogAnimal.sound();
// Câu 10
console.log("Câu 10");
const account2 = new BaiTap_1.Account("admin", "123456", 1001);
console.log(account2.username);
console.log(account2.accountId);
console.log(account2.checkPassword("123456"));
// Câu 11
console.log("Câu 11");
const dog1 = new BaiTap_1.Dog("Rex");
const cat1 = new BaiTap_1.Cat("Kitty");
dog1.bark();
cat1.meow();
// Câu 12
console.log("Câu 12");
const bird1 = new BaiTap_1.Bird();
const fish1 = new BaiTap_1.Fish();
bird1.fly();
fish1.swim();
// Câu 13
console.log("Câu 13");
const square1 = new BaiTap_1.Square(5);
const circle1 = new BaiTap_1.Circle(3);
console.log("Square area:", square1.area());
console.log("Circle area:", circle1.area());
// Câu 14
console.log("Câu 14");
const manager1 = new BaiTap_1.Manager("John", 3000);
const developer1 = new BaiTap_1.Developer("Alice", 2500);
manager1.work();
manager1.manageTeam();
developer1.work();
developer1.writeCode();
// Câu 15
console.log("Câu 15");
const library = new BaiTap_1.Library();
library.addBook(new BaiTap_1.Book("JavaScript", "John Doe", 2020));
library.addBook(new BaiTap_1.Book("TypeScript", "Jane Doe", 2022));
library.addUser(new BaiTap_1.User("Alice"));
library.addUser(new BaiTap_1.User("Bob"));
library.showBooks();
library.showUsers();
// Câu 16
console.log("Câu 16");
const numberBox = new BaiTap_1.Box(100);
const stringBox = new BaiTap_1.Box("Hello TypeScript");
console.log(numberBox.getValue());
console.log(stringBox.getValue());
// Câu 17
console.log("Câu 17");
const logger1 = BaiTap_1.Logger.getInstance();
const logger2 = BaiTap_1.Logger.getInstance();
logger1.log("Application started.");
console.log(logger1 === logger2);
// Câu 18
console.log("Câu 18");
console.log(BaiTap_1.MathUtil.add(10, 5));
console.log(BaiTap_1.MathUtil.subtract(10, 5));
console.log(BaiTap_1.MathUtil.multiply(10, 5));
console.log(BaiTap_1.MathUtil.divide(10, 5));
// Câu 19
console.log("Câu 19");
const animals = [
    new BaiTap_1.DogPolymorphism(),
    new BaiTap_1.CatPolymorphism(),
    new BaiTap_1.AnimalPolymorphism()
];
animals.forEach(animal => animal.makeSound());
// Câu 20
console.log("Câu 20");
const vehicleCar = new BaiTap_1.VehicleCar();
const bike1 = new BaiTap_1.Bike();
vehicleCar.start();
vehicleCar.stop();
bike1.start();
bike1.stop();
// Câu 21
console.log("Câu 21");
const studentRepository = new BaiTap_1.Repository();
studentRepository.add(new BaiTap_1.Student("John", 20, 8));
studentRepository.add(new BaiTap_1.Student("Alice", 21, 9));
console.log(studentRepository.getAll());
// Câu 22
console.log("Câu 22");
const stack = new BaiTap_1.Stack();
stack.push(10);
stack.push(20);
stack.push(30);
console.log("Peek:", stack.peek());
console.log("Pop:", stack.pop());
console.log("Peek:", stack.peek());
console.log("Is empty:", stack.isEmpty());
// Câu 23
console.log("Câu 23");
const cashPayment = new BaiTap_1.CashPayment();
const cardPayment = new BaiTap_1.CardPayment();
cashPayment.pay(100);
cardPayment.pay(200);
// Câu 24
console.log("Câu 24");
const fan = new BaiTap_1.Fan();
const airConditioner = new BaiTap_1.AirConditioner();
fan.turnOn();
airConditioner.turnOn();
// Câu 25
console.log("Câu 25");
BaiTap_1.ShapeStatic.describe();
// Câu 26
console.log("Câu 26");
const order = new BaiTap_1.Order();
order.addProduct(new BaiTap_1.Product("Keyboard", 120));
order.addProduct(new BaiTap_1.Product("Mouse", 50));
order.addProduct(new BaiTap_1.Product("Monitor", 300));
console.log("Order total:", order.calculateTotal());
// Câu 27
console.log("Câu 27");
const teacher1 = new BaiTap_1.Teacher("Mr. Smith", 35, "Mathematics");
teacher1.introduce();
// Câu 28
console.log("Câu 28");
const protectedDog = new BaiTap_1.ProtectedDog("Buddy");
const protectedCat = new BaiTap_1.ProtectedCat("Kitty");
protectedDog.speak();
protectedCat.speak();
// Câu 29
console.log("Câu 29");
const movableCar = new BaiTap_1.MovableCar();
const robot = new BaiTap_1.Robot();
movableCar.move();
robot.move();
// Câu 30
console.log("Câu 30");
const school = new BaiTap_1.School();
school.addStudent(new BaiTap_1.Student("Alice", 20, 8.5));
school.addStudent(new BaiTap_1.Student("Bob", 21, 9));
school.addTeacher(new BaiTap_1.Teacher("Mr. John", 40, "Mathematics"));
school.addTeacher(new BaiTap_1.Teacher("Ms. Anna", 35, "English"));
school.displayInfo();
