// Bai 23: Ham async lay danh sach todos va loc ra nhung cai CHUA hoan thanh
interface Todo {
    userId: number;
    id: number;
    title: string;
    completed: boolean;
}

async function getIncompleteTodos(): Promise<Todo[]> {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos?userId=1&_limit=10");
    const todos: Todo[] = await response.json();
    // Loc ra nhung todo CHUA hoan thanh (completed === false)
    return todos.filter((todo) => !todo.completed);
}

// Demo
async function main() {
    const incomplete = await getIncompleteTodos();
    console.log(`Co ${incomplete.length} cong viec chua hoan thanh:`);
    incomplete.forEach((t) => console.log(`- [${t.id}] ${t.title}`));
}

main().catch((err) => console.log("Loi khi goi API:", err));

export { }; // Bien file nay thanh module de tranh xung dot ten giua cac file
