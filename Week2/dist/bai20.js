"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function simulateApiCall(time) {
    return new Promise((resolve) => {
        setTimeout(() => resolve("Du lieu tra ve tu API"), time);
    });
}
function withTimeout(promise, ms) {
    const timeout = new Promise((_resolve, reject) => {
        setTimeout(() => reject(new Error(`Qua thoi gian cho phep (${ms}ms)`)), ms);
    });
    return Promise.race([promise, timeout]);
}
async function demoNhanh() {
    try {
        const data = await withTimeout(simulateApiCall(1000), 2000);
        console.log(`Demo nhanh: ${data}`);
    }
    catch (err) {
        if (err instanceof Error)
            console.log(`Demo nhanh - Loi: ${err.message}`);
    }
}
async function demoCham() {
    try {
        const data = await withTimeout(simulateApiCall(3000), 2000);
        console.log(`Demo cham: ${data}`);
    }
    catch (err) {
        if (err instanceof Error)
            console.log(`Demo cham - Loi: ${err.message}`);
    }
}
demoNhanh();
demoCham();
