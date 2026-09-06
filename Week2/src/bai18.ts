interface User {
    id: number;
    name: string;
    email: string;
}

function fetchUser(id: number): Promise<User> {
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

export { };
