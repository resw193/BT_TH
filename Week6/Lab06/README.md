# LAB 06 — NAVIGATION (Expo + React Native + TypeScript)

**Dựa theo:** `Lab06_Navigation_HuongDan.docx` (12 trang). Project này triển khai đủ 5 bài trong **một** ứng dụng. Vào app sẽ thấy menu chọn **Bài 1 → Bài 5**. Cấu trúc thư mục `Lab06/` bám sát tài liệu, các màn hình/luồng được đặt vào `src/ex1`, `src/ex3`, `src/ex4`, `src/ex5`.

> **Lưu ý:** Tài liệu Word chỉ chứa mã khung và TODO, không đính kèm source project mẫu hay ảnh điện thoại thật. Ảnh `assets/phones/*.png` trong gói này là hình minh họa **tự dựng** với 4 màu, đủ để thực hành chuyển màu; giao diện tái dựng theo mô tả Word. Liên kết Figma yêu cầu mở được trong tài khoản của bạn để so khớp thêm nếu giáo viên chấm pixel-perfect.

## 1. Cài và chạy trên máy (Windows, macOS, Linux)

### Yêu cầu

- Node.js **22.13+** (chạy `node -v` để kiểm tra). Expo SDK 57 dùng React Native 0.86.3.
- Kết nối Internet **lần đầu** để tải các package qua NPM.
- VS Code, trình duyệt hoặc điện thoại có Expo Go tương thích **SDK 57** (tính đến 25/10/2026, Expo Go trên App Store/Google Play vẫn có thể đang dùng SDK 57; khi Expo Go đã chuyển sang SDK 58 thì cần chọn bản Expo Go phù hợp hoặc nâng SDK).

### Chạy trực tiếp

Giải nén **nguyên thư mục `Lab06`**, mở Terminal / PowerShell **bên trong thư mục `Lab06`** (chỗ chứa `package.json`).

```powershell
cd Lab06
npm install
npx expo install --fix
npm run typecheck
npx expo start -c
```

> `npx expo install --fix` kiểm tra và đồng bộ các phiên bản native packages với Expo SDK trong `package.json`. Nên chạy lần đầu hoặc sau khi nâng cấp thư viện. Máy phải có Internet để thực hiện.

Sau đó: trên điện thoại mở **Expo Go**, cùng Wi-Fi với máy tính, quét QR hiện trên Terminal. Trên máy tính nhấn `w` để mở giao diện web (cần dependencies web, đã khai báo trong project). Nếu không hiện QR do mạng LAN, thử `npx expo start --tunnel` (có thể yêu cầu đăng nhập Expo). Nhấn `r` trong Terminal để reload.

### Nếu gặp lỗi hay thấy "Package ... version mismatch"

```powershell
npx expo install --fix
npx expo start --clear
```

Nếu báo `Unable to resolve module`: kiểm tra đã mở **đúng folder `Lab06`**, chạy `npm install` thành công, sau đó chạy lại. Nếu TypeScript chưa có thư viện, npm vẫn chưa cài đủ. Nếu menu Drawer báo Reanimated/Worklets, đóng Expo Go, chạy `npx expo install react-native-gesture-handler react-native-reanimated react-native-worklets`, rồi `npx expo start -c`. `babel-preset-expo` của SDK 57 tự xử lý worklets, nên project không bắt buộc có `babel.config.js`.

## 2. Cấu trúc thư mục

```text
Lab06/
├── index.ts                      # react-native-gesture-handler + registerRootComponent
├── App.tsx                       # màn menu 5 bài
├── app.json, package.json, tsconfig.json
├── .env.example                  # mẫu endpoint Bài 2
├── mockapi_phones.json           # 6 sản phẩm để nhập lên MockAPI
├── README.md                     # file này
├── HUONG_DAN_CHAY.txt            # tóm tắt bước chạy
├── assets/
│   ├── icon.png, favicon.png
│   └── phones/
│       ├── blue.png
│       ├── red.png
│       ├── black.png
│       └── silver.png
└── src/
    ├── types.ts                  # Phone, ColorKey
    ├── theme.ts                  # màu và formatPrice
    ├── data/
    │   └── phones.ts             # 6 sản phẩm, ảnh từng màu
    ├── api/
    │   └── phoneApi.ts           # fetchPhone, cấu hình MockAPI/offline
    ├── components/
    │   ├── Stars.tsx
    │   ├── Loading.tsx
    │   └── ErrorBox.tsx
    ├── ex1/
    │   ├── SelectPhoneApp.tsx    # Stack dùng chung cho Bài 1 & 2
    │   ├── SelectPhoneLocal.tsx  # Bài 1
    │   ├── ProductScreen.tsx
    │   ├── ChooseColorScreen.tsx
    │   └── SelectPhoneApi.tsx    # Bài 2
    ├── ex3/
    │   └── BottomTabApp.tsx      # Bài 3
    ├── ex4/
    │   ├── types.ts
    │   ├── FavoritesContext.tsx
    │   ├── ProductRow.tsx
    │   ├── ProductsTab.tsx
    │   ├── FavoritesTab.tsx
    │   ├── ProductDetailsScreen.tsx
    │   └── StackTabApp.tsx       # Bài 4
    └── ex5/
        └── DrawerApp.tsx         # Bài 5, có Context chế độ tối
```

## 3. Kết quả từng bài và cách kiểm tra

### Bài 1 — Select Phone (4 trạng thái / 2 màn thật)

- Mở Bài 1 -> Product: ảnh xanh, sao/đánh giá, giá **1.790.000 đ**, huy hiệu, nút **4 MÀU-CHỌN MÀU**, **CHỌN MUA** màu đỏ sát dưới.
- Chạm `4 MÀU-CHỌN MÀU` -> ChooseColor: ảnh nhỏ xanh, 2 dòng tên, nền xám với 4 ô màu **bạc, đỏ, đen, xanh** xếp dọc.
- Chọn ô **đỏ** -> ảnh nhỏ đỏ, viền ô đậm, xuất hiện `Màu: đỏ`, nhà cung cấp, giá (đây là Screen 03).
- Chạm **XONG** -> trở về Product cùng params `color=red`: ảnh lớn đỏ, nút ghi **4 MÀU-CHỌN LOẠI** (Screen 04).
- Chạm **CHỌN MUA** -> hiện thông báo minh họa; không thực hiện đơn hàng thật.

Các TODO của Bài 1 được ghi chú trực tiếp trong `ProductScreen.tsx`, `ChooseColorScreen.tsx`. Ở phiên bản React Navigation 7, `navigation.popTo('Product', {color})` trả params cho Product hiện có, tương đương mục đích luồng `navigate(..., {merge:true})` nêu trong đề.

### Bài 2 — API

- Không khai báo `EXPO_PUBLIC_API_URL`: Bài 2 dùng dữ liệu **offline**, giả lập 650 ms để thấy spinner **Đang tải...**.
- Có endpoint MockAPI thật: Bài 2 gọi **GET `/phones/1`**, hiển thị dữ liệu mới.
- API lỗi hoặc mất kết nối: hiện **Không tải được dữ liệu** và nút **THỬ LẠI**.

### Bài 3 — Bottom Tab

- Có 3 tab tiếng Việt: Trang chủ / Tìm kiếm / Cá nhân, icon **đặc khi chọn**, **viền khi không chọn**, active đỏ.
- Home: `FlatList` gồm 6 điện thoại.
- Search: nhập `aris` -> chỉ có **Vsmart Aris Pro**; nhập `zzz` -> **Không có kết quả cho “zzz”.**
- Profile: avatar tròn **NA**, tên **Nguyễn Văn An**, email minh họa.

### Bài 4 — Stack + Tab + Passing Params

- Stack `Home` chứa Tab **Sản phẩm** / **Yêu thích**, Stack thứ hai là **ProductDetails**.
- Chọn **Vsmart Live 4** -> `navigate('ProductDetails',{id:'2'})` -> chi tiết giá **3.990.000 đ**.
- Chọn **♡ Lưu vào yêu thích** -> quay lại, mở tab Yêu thích -> sản phẩm hiện trong danh sách.
- Vào chi tiết lần nữa -> **♥ Đã lưu** -> chạm bỏ lưu -> tab Yêu thích cập nhật hoặc trở lại trống.
- Dữ liệu Favorites sử dụng React Context, giữ trạng thái khi đổi tab và mở chi tiết.

### Bài 5 — Drawer

- Mở menu bằng **☰** ở header hoặc vuốt từ mép trái; có Trang chủ / Cá nhân / Cài đặt và mục chọn đỏ.
- Settings gồm **Nhận thông báo** (mặc định bật) và **Chế độ tối** (mặc định tắt).
- Gạt Switch -> dòng `Thông báo: BẬT/TẮT · Giao diện: tối/sáng` cập nhật ngay.
- Đã làm thêm TODO nâng cao: bật chế độ tối đổi nền Home / Profile / Settings và Drawer.

## 4. Tạo MockAPI thật cho Bài 2

1. Truy cập **https://mockapi.io/**, đăng nhập, tạo một project mới, ví dụ `phones-lab`.
2. Chọn **New Resource**, đặt tên đúng **`phones`** (chữ thường).
3. Tạo các trường (MockAPI tự có `id`): `name` (string), `price` (number), `oldPrice` (number), `rating` (number), `reviewCount` (number), `supplier` (string), `badge` (string), `colors` (array), `defaultColor` (string). Một số tài khoản MockAPI yêu cầu tự nhập JSON bản ghi thay vì import cả file.
4. Lần lượt thêm 6 đối tượng từ `mockapi_phones.json` (cần có **id = "1"** cho Bài 2). Nếu mockapi.io tự sinh id, nhập bản ghi Joy 3 **đầu tiên**.
5. Mở `https://TEN-PROJECT.mockapi.io/api/v1/phones/1` trên trình duyệt để chắc chắn có JSON hợp lệ.
6. Tạo file **`.env`** ở thư mục `Lab06` cùng chỗ với `package.json`. File này có đúng một dòng như dưới, chỉ đổi URL thành endpoint của bạn:

```dotenv
EXPO_PUBLIC_API_URL=https://TEN-PROJECT.mockapi.io/api/v1
```

**Không thêm `/phones` ở cuối** vì `fetchPhone()` tự gọi `/phones/1`.

7. Đóng Expo đang chạy và khởi động lại:

```powershell
npx expo start -c
```

8. Vào menu Bài 2 -> nếu mạng bình thường app hiển thị dữ liệu MockAPI. Sửa `name` hoặc `price` trong bản ghi id 1, quay ra menu và mở lại Bài 2 để kiểm tra. Để kiểm tra `THỬ LẠI`, nhập tạm endpoint sai hoặc tắt mạng. **Muốn dùng lại offline**, xóa file `.env` hoặc bỏ dòng biến môi trường và khởi động lại Expo.

### Đặt biến trực tiếp qua Terminal (không tạo `.env`)

Windows PowerShell:

```powershell
$env:EXPO_PUBLIC_API_URL="https://TEN-PROJECT.mockapi.io/api/v1"
npx expo start -c
```

macOS/Linux:

```bash
EXPO_PUBLIC_API_URL="https://TEN-PROJECT.mockapi.io/api/v1" npx expo start -c
```

## 5. Những điều cần biết khi nộp bài

- Đầy đủ **mã nguồn TypeScript và ảnh** nằm sẵn trong folder `Lab06`.
- **Không chứa `node_modules`** để gói nộp nhẹ. Bắt buộc `npm install` lần đầu trên máy người nhận. Đây là quy tắc phổ biến với bài thực hành React Native.
- File `.env` chứa endpoint cá nhân **không được nộp công khai**; thay thế bằng `.env.example`.
- Chạy `npm run typecheck` sau khi `npm install` để kiểm tra lỗi kiểu. Có thể chạy `npx expo-doctor` để chẩn đoán phụ thuộc.
- Mẫu Word không đưa quy tắc riêng về tên file .rar, nên dùng `Lab06_Navigation_5Bai.rar` chứa đúng thư mục cấp cao `Lab06/`.
- Bộ ảnh điện thoại trong project là ảnh minh họa được tạo để đáp ứng bài thực hành; không phải ảnh thật từ file Figma.
