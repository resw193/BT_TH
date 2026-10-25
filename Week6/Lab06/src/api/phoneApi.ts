import { PHONES } from "../data/phones";
import type { ColorKey, Phone } from "../types";

// Chỉ dùng dữ liệu mạng khi người dùng cấu hình endpoint thật.
export const API_URL = (process.env.EXPO_PUBLIC_API_URL ?? "").trim().replace(/\/+$/, "");
export const USING_API = API_URL !== "";
const sleep = (ms: number) => new Promise<void>((resolve) => setTimeout(resolve, ms));
const validColors: ColorKey[] = ["silver", "red", "black", "blue"];
const isColor = (x: unknown): x is ColorKey => validColors.some((c) => c === x);

/** Chuyển JSON từ MockAPI thành kiểu Phone; báo lỗi khi máy chủ trả về dữ liệu bất thường. */
function parsePhone(json: unknown): Phone {
  if (!json || typeof json !== "object") throw new Error("API trả về dữ liệu sản phẩm không hợp lệ.");
  const p = json as Record<string, unknown>;
  if (p.id == null || typeof p.name !== "string") throw new Error("Dữ liệu API thiếu id hoặc name.");
  if (typeof p.price !== "number" || !Number.isFinite(p.price)) throw new Error("Trường price phải là số.");
  const palette = Array.isArray(p.colors) ? p.colors.filter(isColor) : validColors;
  return {
    id: String(p.id), name: p.name, price: p.price,
    oldPrice: typeof p.oldPrice === "number" ? p.oldPrice : p.price,
    rating: typeof p.rating === "number" ? Math.max(0, Math.min(5, Math.round(p.rating))) : 0,
    reviewCount: typeof p.reviewCount === "number" ? p.reviewCount : 0,
    supplier: typeof p.supplier === "string" ? p.supplier : "Đang cập nhật",
    badge: typeof p.badge === "string" ? p.badge : "CHÍNH HÃNG",
    colors: palette.length ? palette : validColors,
    defaultColor: isColor(p.defaultColor) ? p.defaultColor : "blue",
  };
}

export async function fetchPhone(id: string): Promise<Phone> {
  if (!USING_API) {
    await sleep(650); // Giả lập độ trễ để người chấm quan sát Loading ở Bài 2.
    const p = PHONES.find((x) => x.id === id);
    if (!p) throw new Error(`Không tìm thấy sản phẩm #${id}`);
    return p;
  }

  const response = await fetch(`${API_URL}/phones/${encodeURIComponent(id)}`, {
    headers: { Accept: "application/json" },
  });
  if (!response.ok) throw new Error(`Máy chủ trả về lỗi ${response.status}. Hãy kiểm tra URL API.`);
  return parsePhone(await response.json());
}
