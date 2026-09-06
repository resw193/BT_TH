"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function taskThatSucceeds() {
    return new Promise((resolve) => setTimeout(() => resolve("Thanh cong!"), 500));
}
function taskThatFails() {
    return new Promise((_resolve, reject) => setTimeout(() => reject(new Error("That bai!")), 500));
}
taskThatSucceeds()
    .then((msg) => console.log(msg))
    .catch((err) => console.log(err.message))
    .finally(() => console.log("Done (truong hop thanh cong)"));
taskThatFails()
    .then((msg) => console.log(msg))
    .catch((err) => console.log(err.message))
    .finally(() => console.log("Done (truong hop that bai)"));
