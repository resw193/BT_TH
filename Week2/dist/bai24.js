"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
async function postData() {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos", {
        method: "POST",
        headers: { "Content-Type": "application/json; charset=UTF-8" },
        body: JSON.stringify({
            title: "Hoc TypeScript Async",
            completed: false,
            userId: 1,
        }),
    });
    const created = await response.json();
    console.log("Da tao moi:", created);
}
// Demo
postData().catch((err) => console.log("Loi khi goi API:", err));
