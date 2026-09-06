"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
async function getTodo() {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
    const todo = await response.json();
    console.log(todo);
}
// Demo
getTodo().catch((err) => console.log("Loi khi goi API:", err));
