"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Bai 25: Ham downloadFile mo phong tai file trong 3 giay va log khi xong
function downloadFile(fileName) {
    console.log(`Bat dau tai file "${fileName}"...`);
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(`Da tai xong file "${fileName}"`);
        }, 3000);
    });
}
// Demo
async function main() {
    const result = await downloadFile("bao-cao.pdf");
    console.log(result);
}
main();
