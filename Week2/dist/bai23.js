"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
async function getIncompleteTodos() {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos?userId=1&_limit=10");
    const todos = await response.json();
    // Loc ra nhung todo CHUA hoan thanh (completed === false)
    return todos.filter((todo) => !todo.completed);
}
// Demo
async function main() {
    const incomplete = await getIncompleteTodos();
    console.log(`Co ${incomplete.length} cong viec chua hoan thanh:`);
    incomplete.forEach((t) => console.log(`- [${t.id}] ${t.title}`));
}
main().catch((err) => console.log("Loi khi goi API:", err));
