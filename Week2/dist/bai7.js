"use strict";
function simulateTask3(time) {
    return new Promise((resolve) => {
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
