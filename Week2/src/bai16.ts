function simulateTask(time: number, name: string): Promise<string> {
    return new Promise((resolve) => {
        setTimeout(() => resolve(`${name} xong sau ${time}ms`), time);
    });
}

async function runInParallel() {
    console.time("Tong thoi gian (song song)");
    const results = await Promise.all([
        simulateTask(1000, "Task A"),
        simulateTask(1000, "Task B"),
        simulateTask(1000, "Task C"),
    ]);
    results.forEach((r) => console.log(r));
    console.timeEnd("Tong thoi gian (song song)");
}

runInParallel();

export { };
