function delay(ms: number): Promise<void> {
    return new Promise((resolve) => setTimeout(resolve, ms));
}

async function multiplyByThree(n: number): Promise<number> {
    await delay(1000);
    return n * 3;
}

async function main() {
    const result = await multiplyByThree(7);
    console.log(`7 x 3 = ${result}`);
}

main();

export { };
