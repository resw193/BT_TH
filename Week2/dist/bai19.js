"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function fetchUser(id) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({ id, name: `Nguoi dung ${id}`, email: `user${id}@example.com` });
        }, 500);
    });
}
async function fetchUsers(ids) {
    const promises = ids.map((id) => fetchUser(id));
    return Promise.all(promises);
}
async function main() {
    const users = await fetchUsers([1, 2, 3]);
    users.forEach((u) => console.log(u));
}
main();
