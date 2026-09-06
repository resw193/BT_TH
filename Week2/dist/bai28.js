"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Bai 28: Ham async batchProcess() xu ly 5 task cung mot luc (dung Promise.all)
function processTask(id) {
    return new Promise((resolve) => {
        const time = 500 + Math.floor(Math.random() * 500);
        setTimeout(() => resolve(`Task ${id} xu ly xong sau ${time}ms`), time);
    });
}
async function batchProcess() {
    console.log("Bat dau xu ly 5 task cung luc...");
    const tasks = [1, 2, 3, 4, 5].map((id) => processTask(id));
    const results = await Promise.all(tasks);
    results.forEach((r) => console.log(r));
    console.log("Da xu ly xong toan bo batch!");
}
// Demo
batchProcess();
