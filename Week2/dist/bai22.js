"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
async function getTodoById(id) {
    const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`);
    return response.json();
}
async function main() {
    const ids = [1, 2, 3];
    for (const id of ids) {
        const todo = await getTodoById(id);
        console.log(`Todo #${todo.id}: "${todo.title}" - completed: ${todo.completed}`);
    }
}
// Demo
main().catch((err) => console.log("Loi khi goi API:", err));
