function randomNumber(): Promise<number> {
    return new Promise<number>((resolve, reject) => {
        const number = Math.random();

        if (number >= 0.5) {
            resolve(number);
        } else {
            reject("Random number is too small");
        }
    });
}

randomNumber()
    .then((result) => {
        console.log("Random number:", result);
    })
    .catch((error) => {
        console.log("Error:", error);
    });