// Bai 25: Ham downloadFile mo phong tai file trong 3 giay va log khi xong
function downloadFile(fileName: string): Promise<string> {
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

export { }; // Bien file nay thanh module de tranh xung dot ten giua cac file
