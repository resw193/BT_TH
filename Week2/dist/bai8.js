"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function square(n) {
    return new Promise((resolve) => resolve(n * n));
}
function double(n) {
    return new Promise((resolve) => resolve(n * 2));
}
function addFive(n) {
    return new Promise((resolve) => resolve(n + 5));
}
square(2)
    .then((result) => {
    console.log(`Sau khi binh phuong: ${result}`);
    return double(result);
})
    .then((result) => {
    console.log(`Sau khi nhan doi: ${result}`);
    return addFive(result);
})
    .then((result) => {
    console.log(`Ket qua cuoi cung: ${result}`);
});
