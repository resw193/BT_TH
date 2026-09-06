"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function readArray() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
        }, 1000);
    });
}
readArray().then((arr) => {
    const evenNumbers = arr.filter((n) => n % 2 === 0);
    console.log(`Mang goc: [${arr.join(", ")}]`);
    console.log(`So chan: [${evenNumbers.join(", ")}]`);
});
