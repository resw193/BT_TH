function simulateTask(time: number, name: string): Promise<string> {
    return new Promise((resolve) => {
        setTimeout(() => resolve(`${name} (cho ${time}ms)`), time);
    });
}

async function processTasks() {
    const tasks: Promise<string>[] = [
        simulateTask(300, "Task 1"),
        simulateTask(100, "Task 2"),
        simulateTask(200, "Task 3"),
    ];

    for await (const result of tasks) {
        console.log(`Da xu ly: ${result}`);
    }
}

processTasks();

export { };
