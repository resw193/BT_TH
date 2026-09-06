"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function simulateTask4(time) {
    return new Promise((resolve) => setTimeout(() => resolve("Task done"), time));
}
async function runTask() {
    const result = await simulateTask4(2000);
    console.log(result);
}
runTask();
