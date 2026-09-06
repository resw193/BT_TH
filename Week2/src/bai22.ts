interface Todo {
    userId: number;
    id: number;
    title: string;
    completed: boolean;
}

async function getTodoById(id: number): Promise<Todo> {
    const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`);
    return response.json();
}

async function main() {
    const ids = [1, 2, 3];
    for (const id of ids) {
        const todo = await getTodoById(id);
        console.log(`Todo #${todo.id}: "${todo.title}" - completed: ${todo.completed}`);
    }
}

// Demo
main().catch((err) => console.log("Loi khi goi API:", err));

export { }; // Bien file nay thanh module de tranh xung dot ten giua cac file
