import React from "react";
import { FlatList, StyleSheet, Text } from "react-native";
import { PHONES } from "../data/phones";
import { colors } from "../theme";
import { ProductRow } from "./ProductRow";
import type { TabProps } from "./types";
import { useFavorites } from "./FavoritesContext";

// Bài 4 - TODO 8: danh sách lọc theo Context, cùng nút điều hướng như Products.
export function FavoritesTab({ navigation }: TabProps<"Favorites">) {
  const { ids } = useFavorites();
  const saved = PHONES.filter((phone) => ids.includes(phone.id));
  return (
    <FlatList
      data={saved}
      keyExtractor={(item) => item.id}
      ListHeaderComponent={<Text style={s.heading}>Yêu thích ({saved.length})</Text>}
      contentContainerStyle={s.list}
      renderItem={({ item }) => <ProductRow phone={item} onPress={() => navigation.navigate("ProductDetails", { id: item.id })} />}
      ListEmptyComponent={<Text style={s.empty}>Chưa có sản phẩm nào được lưu.</Text>}
    />
  );
}
const s = StyleSheet.create({
  heading: { fontSize: 19, fontWeight: "800", color: colors.navy, marginBottom: 8 },
  list: { padding: 15, gap: 10, flexGrow: 1 },
  empty: { marginTop: 50, textAlign: "center", fontSize: 16, color: colors.muted },
});
