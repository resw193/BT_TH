function simulateTask(time: number, name: string): Promise<string> {
    return new Promise((resolve) => {
        setTimeout(() => resolve(`${name} xong sau ${time}ms`), time);
    });
}

async function runSequentially() {
    console.time("Tong thoi gian (tuan tu)");

    const result1 = await simulateTask(1000, "Task A");
    console.log(result1);

    const result2 = await simulateTask(1000, "Task B");
    console.log(result2);

    const result3 = await simulateTask(1000, "Task C");
    console.log(result3);
    
    console.timeEnd("Tong thoi gian (tuan tu)");
}

runSequentially();

export { };
