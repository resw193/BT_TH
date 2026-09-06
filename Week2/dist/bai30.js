"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Bai 30: Dung async/await + Promise.allSettled() de xu ly nhieu API call
// va hien thi trang thai thanh cong/that bai cua tung cai
function callApi(id) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // Gia lap: cac id chan thanh cong, id le that bai (de minh hoa allSettled)
            if (id % 2 === 0) {
                resolve(`API ${id}: du lieu OK`);
            }
            else {
                reject(new Error(`API ${id}: that bai`));
            }
        }, 500);
    });
}
async function main() {
    const ids = [1, 2, 3, 4, 5];
    const results = await Promise.allSettled(ids.map((id) => callApi(id)));
    results.forEach((result, index) => {
        if (result.status === "fulfilled") {
            console.log(`[Thanh cong] ${result.value}`);
        }
        else {
            console.log(`[That bai] API ${ids[index]}: ${result.reason.message}`);
        }
    });
}
// Demo
main();
