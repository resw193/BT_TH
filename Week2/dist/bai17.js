"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function simulateTask(time, name) {
    return new Promise((resolve) => {
        setTimeout(() => resolve(`${name} (cho ${time}ms)`), time);
    });
}
async function processTasks() {
    const tasks = [
        simulateTask(300, "Task 1"),
        simulateTask(100, "Task 2"),
        simulateTask(200, "Task 3"),
    ];
    for await (const result of tasks) {
        console.log(`Da xu ly: ${result}`);
    }
}
processTasks();
