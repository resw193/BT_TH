// Bai 24: Ham async postData() gui POST request den mot API test
interface NewTodo {
    title: string;
    completed: boolean;
    userId: number;
  }
  
  async function postData() {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos", {
      method: "POST",
      headers: { "Content-Type": "application/json; charset=UTF-8" },
      body: JSON.stringify({
        title: "Hoc TypeScript Async",
        completed: false,
        userId: 1,
      } as NewTodo),
    });
    const created = await response.json();
    console.log("Da tao moi:", created);
  }
  
  // Demo
  postData().catch((err) => console.log("Loi khi goi API:", err));
  
  export {}; // Bien file nay thanh module de tranh xung dot ten giua cac file
  