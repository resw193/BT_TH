interface User {
    id: number;
    name: string;
    email: string;
}

function fetchUser(id: number): Promise<User> {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({ id, name: `Nguoi dung ${id}`, email: `user${id}@example.com` });
        }, 500);
    });
}

async function fetchUsers(ids: number[]): Promise<User[]> {
    const promises = ids.map((id) => fetchUser(id));
    return Promise.all(promises);
}

async function main() {
    const users = await fetchUsers([1, 2, 3]);
    users.forEach((u) => console.log(u));
}

main();

export { };
