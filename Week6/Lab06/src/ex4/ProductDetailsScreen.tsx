import React from "react";
import { Image, Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { PHONES, PHONE_COLORS } from "../data/phones";
import { colors, formatPrice } from "../theme";
import { Stars } from "../components/Stars";
import type { RootProps } from "./types";
import { useFavorites } from "./FavoritesContext";

export function ProductDetailsScreen({ route }: RootProps<"ProductDetails">) {
  // Bài 4 - TODO 4: nhận id qua route.params từ màn danh sách.
  const { id } = route.params;
  const phone = PHONES.find((p) => p.id === id);
  const { has, toggle } = useFavorites();

  // Bài 4 - TODO 5: xử lý id không tồn tại.
  if (!phone) return <View style={s.notFound}><Text>Không tìm thấy sản phẩm #{id}</Text></View>;
  const saved = has(phone.id);
  return (
    <ScrollView style={s.root} contentContainerStyle={s.content}>
      {/* Bài 4 - TODO 6: hiển thị thông tin theo id được truyền sang. */}
      <View style={s.imageBox}>
        <Image source={PHONE_COLORS[phone.defaultColor].image} style={s.image} resizeMode="contain" />
      </View>
      <Text style={s.name}>{phone.name}</Text>
      <Stars value={phone.rating} size={20} />
      <Text style={s.review}>{phone.reviewCount} đánh giá</Text>
      <Text style={s.price}>{formatPrice(phone.price)}</Text>
      {phone.oldPrice > phone.price && <Text style={s.oldPrice}>{formatPrice(phone.oldPrice)}</Text>}
      <Text style={s.supplier}>Cung cấp bởi <Text style={s.bold}>{phone.supplier}</Text></Text>
      <Text style={s.supplier}>Màu mặc định: {PHONE_COLORS[phone.defaultColor].label}</Text>

      {/* Bài 4 - TODO 7: bật / tắt yêu thích bằng Context dùng chung cả 2 tab. */}
      <Pressable
        accessibilityRole="button"
        onPress={() => toggle(phone.id)}
        style={[s.button, saved && s.buttonSaved]}
      >
        <Ionicons name={saved ? "heart" : "heart-outline"} size={24} color={saved ? colors.red : "white"} />
        <Text style={[s.buttonText, saved && s.buttonTextSaved]}>
          {saved ? "♥ Đã lưu" : "♡ Lưu vào yêu thích"}
        </Text>
      </Pressable>
    </ScrollView>
  );
}
const s = StyleSheet.create({
  root: { flex: 1, backgroundColor: "white" },
  content: { padding: 20, gap: 12 },
  imageBox: { height: 270, alignItems: "center", justifyContent: "center" },
  image: { width: 190, height: 255 },
  name: { fontSize: 21, lineHeight: 29, fontWeight: "800", color: colors.text },
  review: { color: colors.muted, fontSize: 14 },
  price: { color: colors.red, fontSize: 28, fontWeight: "800" },
  oldPrice: { color: colors.muted, textDecorationLine: "line-through", fontSize: 15 },
  supplier: { color: colors.text, fontSize: 15 },
  bold: { fontWeight: "800" },
  button: { marginTop: 18, borderWidth: 2, borderColor: colors.red, backgroundColor: colors.red, borderRadius: 9, padding: 15, alignItems: "center", justifyContent: "center", flexDirection: "row", gap: 9 },
  buttonSaved: { backgroundColor: "white" },
  buttonText: { color: "white", fontWeight: "800", fontSize: 17 },
  buttonTextSaved: { color: colors.red },
  notFound: { flex: 1, alignItems: "center", justifyContent: "center" },
});
