// Bai 29: Ham async queueProcess() xu ly cac task TUAN TU theo hang doi
function processTask(id: number): Promise<string> {
    return new Promise((resolve) => {
        setTimeout(() => resolve(`Task ${id} da xu ly xong`), 500);
    });
}

async function queueProcess(taskIds: number[]) {
    console.log("Bat dau xu ly hang doi (tuan tu, tung task mot)...");
    for (const id of taskIds) {
        const result = await processTask(id);
        console.log(result);
    }
    console.log("Hang doi da xu ly xong toan bo!");
}

// Demo
queueProcess([1, 2, 3, 4, 5]);

export { }; // Bien file nay thanh module de tranh xung dot ten giua cac file
