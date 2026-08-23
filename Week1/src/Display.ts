import { Account, AirConditioner, AnimalPolymorphism, BankAccount, Bike, Bird, Book, Box, Car, CardPayment, CashPayment, Cat, CatPolymorphism, Circle, Developer, Dog, DogAnimal, DogPolymorphism, Fan, Fish, Library, Logger, Manager, MathUtil, MovableCar, Order, Person, Product, ProtectedCat, ProtectedDog, Rectangle, Repository, Robot, School, ShapeStatic, Square, Stack, Student, Teacher, User, VehicleCar } from "./BaiTap";

// Câu 1
console.log("Câu 1");
new Person("AAAA", 40).displayInfo();

// Câu 2
console.log("Câu 2");
new Student("BBBB", 20, 3.5).displayAllInfo();

// Câu 3
console.log("Câu 3");
new Car("Toyota", "Camry", 2020).displayInfo();

// Câu 4
console.log("Câu 4");
console.log("Area:", new Rectangle(10, 20).area());
console.log("Perimeter:", new Rectangle(10, 20).perimeter());

// Câu 5
console.log("Câu 5");
const account1 = new BankAccount(9999999);

account1.deposit(500);
account1.withdraw(300);

// Câu 6
console.log("Câu 6");
const book = new Book("Java", "ABC", 2026);
console.log(book);

// Câu 7
console.log("Câu 7");
const user1 = new User("John");
console.log(user1.getName());

user1.setName("Peter");
console.log(user1.getName());

// Câu 8
console.log("Câu 8");
const products: Product[] = [
    new Product("Mouse", 50),
    new Product("Keyboard", 120),
    new Product("Monitor", 300),
    new Product("USB Cable", 20),
    new Product("Headphone", 150)
];
console.log("All products:");
products.forEach(product => console.log(product));

const expensiveProducts = products.filter(product => product.price > 100);

console.log("Products with price > 100:");
expensiveProducts.forEach(product => console.log(product));

// Câu 9
console.log("Câu 9");
const dogAnimal = new DogAnimal("Buddy");
dogAnimal.sound();


// Câu 10
console.log("Câu 10");
const account2 = new Account("admin", "123456", 1001);

console.log(account2.username);
console.log(account2.accountId);
console.log(account2.checkPassword("123456"));

// Câu 11
console.log("Câu 11");
const dog1 = new Dog("Rex");
const cat1 = new Cat("Kitty");

dog1.bark();
cat1.meow();

// Câu 12
console.log("Câu 12");
const bird1 = new Bird();
const fish1 = new Fish();

bird1.fly();
fish1.swim();

// Câu 13
console.log("Câu 13");
const square1 = new Square(5);
const circle1 = new Circle(3);

console.log("Square area:", square1.area());
console.log("Circle area:", circle1.area());

// Câu 14
console.log("Câu 14");
const manager1 = new Manager("John", 3000);
const developer1 = new Developer("Alice", 2500);

manager1.work();
manager1.manageTeam();

developer1.work();
developer1.writeCode();

// Câu 15
console.log("Câu 15");
const library = new Library();

library.addBook(new Book("JavaScript", "John Doe", 2020));
library.addBook(new Book("TypeScript", "Jane Doe", 2022));

library.addUser(new User("Alice"));
library.addUser(new User("Bob"));

library.showBooks();
library.showUsers();

// Câu 16
console.log("Câu 16");
const numberBox = new Box<number>(100);
const stringBox = new Box<string>("Hello TypeScript");

console.log(numberBox.getValue());
console.log(stringBox.getValue());

// Câu 17
console.log("Câu 17");
const logger1 = Logger.getInstance();
const logger2 = Logger.getInstance();

logger1.log("Application started.");
console.log(logger1 === logger2); 

// Câu 18
console.log("Câu 18");
console.log(MathUtil.add(10, 5));
console.log(MathUtil.subtract(10, 5));
console.log(MathUtil.multiply(10, 5));
console.log(MathUtil.divide(10, 5));

// Câu 19
console.log("Câu 19");
const animals: AnimalPolymorphism[] = [
    new DogPolymorphism(),
    new CatPolymorphism(),
    new AnimalPolymorphism()
];
animals.forEach(animal => animal.makeSound());

// Câu 20
console.log("Câu 20");
const vehicleCar = new VehicleCar();
const bike1 = new Bike();

vehicleCar.start();
vehicleCar.stop();

bike1.start();
bike1.stop();

// Câu 21
console.log("Câu 21");
const studentRepository = new Repository<Student>();
studentRepository.add(new Student("John", 20, 8));
studentRepository.add(new Student("Alice", 21, 9));

console.log(studentRepository.getAll());

// Câu 22
console.log("Câu 22");
const stack = new Stack<number>();

stack.push(10);
stack.push(20);
stack.push(30);

console.log("Peek:", stack.peek());
console.log("Pop:", stack.pop());
console.log("Peek:", stack.peek());
console.log("Is empty:", stack.isEmpty());

// Câu 23
console.log("Câu 23");
const cashPayment = new CashPayment();
const cardPayment = new CardPayment();

cashPayment.pay(100);
cardPayment.pay(200);

// Câu 24
console.log("Câu 24");
const fan = new Fan();
const airConditioner = new AirConditioner();

fan.turnOn();
airConditioner.turnOn();

// Câu 25
console.log("Câu 25");
ShapeStatic.describe();

// Câu 26
console.log("Câu 26");
const order = new Order();

order.addProduct(new Product("Keyboard", 120));
order.addProduct(new Product("Mouse", 50));
order.addProduct(new Product("Monitor", 300));

console.log("Order total:", order.calculateTotal());

// Câu 27
console.log("Câu 27");
const teacher1 = new Teacher("Mr. Smith", 35, "Mathematics");
teacher1.introduce();

// Câu 28
console.log("Câu 28");
const protectedDog = new ProtectedDog("Buddy");
const protectedCat = new ProtectedCat("Kitty");

protectedDog.speak();
protectedCat.speak();

// Câu 29
console.log("Câu 29");
const movableCar = new MovableCar();
const robot = new Robot();

movableCar.move();
robot.move();

// Câu 30
console.log("Câu 30");
const school = new School();

school.addStudent(new Student("Alice", 20, 8.5));
school.addStudent(new Student("Bob", 21, 9));
school.addTeacher(new Teacher("Mr. John", 40, "Mathematics"));
school.addTeacher(new Teacher("Ms. Anna", 35, "English"));

school.displayInfo();


