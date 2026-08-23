// Câu 1
export class Person {
    constructor(public name: string, public age: number){}

    displayInfo(): void {
        console.log(`Name : ${this.name}, Age: ${this.age}`)
    }
}

// Câu 2
export class Student extends Person {
    constructor(name: string, age: number, public grade: number){
        super(name, age)
    }

    displayAllInfo(): void {
        console.log(`Name : ${this.name}, Age: ${this.age}, Grade: ${this.grade}`)
    }
}
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
