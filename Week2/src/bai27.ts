// Bai 27: Ham fetchWithRetry(url, retries) - tu dong thu lai neu goi API that bai
// Vi ly do mo phong (khong phu thuoc mang that), ham goi API duoc gia lap:
// 2 lan dau se that bai, lan thu 3 moi thanh cong - de minh hoa co che retry.
let attemptCount = 0;

function simulatedFetch(url: string): Promise<string> {
    attemptCount++;
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (attemptCount < 3) {
                reject(new Error(`That bai o lan thu ${attemptCount}`));
            } else {
                resolve(`Du lieu tu ${url} (thanh cong o lan thu ${attemptCount})`);
            }
        }, 500);
    });
}

async function fetchWithRetry(url: string, retries: number): Promise<string> {
    for (let i = 1; i <= retries; i++) {
        try {
            return await simulatedFetch(url);
        } catch (err) {
            if (err instanceof Error) {
                console.log(`Lan thu ${i} that bai: ${err.message}`);
            }
            if (i === retries) {
                throw new Error(`Da het ${retries} lan thu, khong the ket noi den ${url}`);
            }
        }
    }
    // Dong code nay se khong bao gio chay toi vi vong lap luon return hoac throw
    throw new Error("Khong the ket noi");
}

// Demo
fetchWithRetry("https://api.example.com/data", 5)
    .then((result) => console.log(`Thanh cong: ${result}`))
    .catch((err: Error) => console.log(`That bai hoan toan: ${err.message}`));

export { }; // Bien file nay thanh module de tranh xung dot ten giua cac file
