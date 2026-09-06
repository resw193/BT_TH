"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Bai 26: Dung async/await ket hop setTimeout de mo phong cho 5 giay
function wait(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}
async function main() {
    console.log("Bat dau cho 5 giay...");
    await wait(5000);
    console.log("Da cho xong 5 giay!");
}
// Demo
main();
