function simulateTask3(time: number): Promise<string> {
    return new Promise<string>((resolve) => {
        setTimeout(() => {
            resolve(`Task ${time}ms done`);
        }, time);
    });
}

Promise.race([
    simulateTask3(3000),
    simulateTask3(1000),
    simulateTask3(2000)
])
.then((result) => {
    console.log(result);
});