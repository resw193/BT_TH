"use strict";
function errorPromise2() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject("Something went wrong");
        }, 1000);
    });
}
async function main2() {
    try {
        const result = await errorPromise2();
        console.log(result);
    }
    catch (error) {
        console.log("Error:", error);
    }
}
main2();
