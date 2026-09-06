// Bai 21: Dung fetch de lay du lieu tu mot API cong khai
interface Todo {
    userId: number;
    id: number;
    title: string;
    completed: boolean;
}

async function getTodo() {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
    const todo: Todo = await response.json();
    console.log(todo);
}

// Demo
getTodo().catch((err) => console.log("Loi khi goi API:", err));

export { }; // Bien file nay thanh module de tranh xung dot ten giua cac file
