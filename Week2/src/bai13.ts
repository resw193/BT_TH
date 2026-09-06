function errorPromise2(): Promise<string> {
    return new Promise<string>((resolve, reject) => {
        setTimeout(() => {
            reject("Something went wrong");
        }, 1000);
    });
}

async function main2(): Promise<void> {
    try {
        const result = await errorPromise2();

        console.log(result);
    } catch (error) {
        console.log("Error:", error);
    }
}

main2();