"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function delay(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}
async function multiplyByThree(n) {
    await delay(1000);
    return n * 3;
}
async function main() {
    const result = await multiplyByThree(7);
    console.log(`7 x 3 = ${result}`);
}
main();
