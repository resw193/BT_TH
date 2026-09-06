function taskThatSucceeds(): Promise<string> {
    return new Promise((resolve) => setTimeout(() => resolve("Thanh cong!"), 500));
}

function taskThatFails(): Promise<string> {
    return new Promise((_resolve, reject) => setTimeout(() => reject(new Error("That bai!")), 500));
}

taskThatSucceeds()
    .then((msg) => console.log(msg))
    .catch((err: Error) => console.log(err.message))
    .finally(() => console.log("Done (truong hop thanh cong)"));

taskThatFails()
    .then((msg) => console.log(msg))
    .catch((err: Error) => console.log(err.message))
    .finally(() => console.log("Done (truong hop that bai)"));

export { };
