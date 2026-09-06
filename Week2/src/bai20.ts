function simulateApiCall(time: number): Promise<string> {
    return new Promise((resolve) => {
        setTimeout(() => resolve("Du lieu tra ve tu API"), time);
    });
}

function withTimeout<T>(promise: Promise<T>, ms: number): Promise<T> {
    const timeout = new Promise<T>((_resolve, reject) => {
        setTimeout(() => reject(new Error(`Qua thoi gian cho phep (${ms}ms)`)), ms);
    });
    return Promise.race([promise, timeout]);
}

async function demoNhanh() {
    try {
        const data = await withTimeout(simulateApiCall(1000), 2000);
        console.log(`Demo nhanh: ${data}`);
    } catch (err) {
        if (err instanceof Error) console.log(`Demo nhanh - Loi: ${err.message}`);
    }
}

async function demoCham() {
    try {
        const data = await withTimeout(simulateApiCall(3000), 2000);
        console.log(`Demo cham: ${data}`);
    } catch (err) {
        if (err instanceof Error) console.log(`Demo cham - Loi: ${err.message}`);
    }
}

demoNhanh();
demoCham();

export { };
