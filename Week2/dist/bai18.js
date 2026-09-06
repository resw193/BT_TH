"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function fetchUser(id) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({
                id,
                name: `Nguoi dung ${id}`,
                email: `user${id}@example.com`,
            });
        }, 1000);
    });
}
async function main() {
    const user = await fetchUser(1);
    console.log(user);
}
main();
