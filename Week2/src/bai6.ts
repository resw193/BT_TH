function simulateTask2(time: number): Promise<string> {
    return new Promise<string>((resolve) => {
        setTimeout(() => {
            resolve(`Task ${time}ms done`);
        }, time);
    });
}

Promise.all([
    simulateTask2(1000),
    simulateTask2(2000),
    simulateTask2(3000)
])
.then((results) => {
    console.log(results);
})
.catch((error) => {
    console.log(error);
});