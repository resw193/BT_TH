import type { ColorKey, Phone } from "../types";

/** Ảnh tự tạo cho bài thực hành; một bộ 4 màu dùng ở mọi bài. */
export const PHONE_COLORS: Record<ColorKey, { label: string; hex: string; image: number }> = {
  silver: { label: "bạc", hex: "#C9EEFA", image: require("../../assets/phones/silver.png") },
  red: { label: "đỏ", hex: "#E53A2F", image: require("../../assets/phones/red.png") },
  black: { label: "đen", hex: "#000000", image: require("../../assets/phones/black.png") },
  blue: { label: "xanh", hex: "#2A4494", image: require("../../assets/phones/blue.png") },
};

export const COLOR_ORDER: ColorKey[] = ["silver", "red", "black", "blue"];

/** 6 sản phẩm để bài 3 lọc/search và bài 4 mở theo id. */
export const PHONES: Phone[] = [
  {
    id: "1", name: "Điện Thoại Vsmart Joy 3 - Hàng chính hãng",
    price: 1790000, oldPrice: 1790000, rating: 5, reviewCount: 828,
    supplier: "Tiki Tradding", badge: "Ở ĐÂU RẺ HƠN HOÀN TIỀN",
    colors: COLOR_ORDER, defaultColor: "blue",
  },
  {
    id: "2", name: "Điện Thoại Vsmart Live 4 - Hàng chính hãng",
    price: 3990000, oldPrice: 4490000, rating: 5, reviewCount: 632,
    supplier: "Tiki Trading", badge: "Ở ĐÂU RẺ HƠN HOÀN TIỀN",
    colors: COLOR_ORDER, defaultColor: "black",
  },
  {
    id: "3", name: "Điện Thoại Vsmart Star 5 - Hàng chính hãng",
    price: 2690000, oldPrice: 2990000, rating: 4, reviewCount: 219,
    supplier: "Tiki Trading", badge: "CAM KẾT CHÍNH HÃNG",
    colors: COLOR_ORDER, defaultColor: "silver",
  },
  {
    id: "4", name: "Điện Thoại Vsmart Active 3 - Hàng chính hãng",
    price: 3290000, oldPrice: 3690000, rating: 4, reviewCount: 441,
    supplier: "Vsmart Official", badge: "Ở ĐÂU RẺ HƠN HOÀN TIỀN",
    colors: COLOR_ORDER, defaultColor: "red",
  },
  {
    id: "5", name: "Điện Thoại Vsmart Aris Pro - Hàng chính hãng",
    price: 6990000, oldPrice: 7490000, rating: 5, reviewCount: 356,
    supplier: "Vsmart Official", badge: "CAM KẾT CHÍNH HÃNG",
    colors: COLOR_ORDER, defaultColor: "blue",
  },
  {
    id: "6", name: "Điện Thoại Vsmart Bee 3 - Hàng chính hãng",
    price: 1490000, oldPrice: 1690000, rating: 4, reviewCount: 127,
    supplier: "Tiki Trading", badge: "GIÁ TỐT MỖI NGÀY",
    colors: COLOR_ORDER, defaultColor: "black",
  },
];
