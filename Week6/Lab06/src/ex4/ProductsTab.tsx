import React from "react";
import { FlatList, StyleSheet, Text } from "react-native";
import { PHONES } from "../data/phones";
import { colors } from "../theme";
import type { TabProps } from "./types";
import { ProductRow } from "./ProductRow";

// Bài 4 - TODO 3: bấm sản phẩm ở Tab -> mở Stack ProductDetails, truyền id.
export function ProductsTab({ navigation }: TabProps<"Products">) {
  return (
    <FlatList
      data={PHONES}
      keyExtractor={(item) => item.id}
      ListHeaderComponent={<Text style={s.heading}>Sản phẩm ({PHONES.length})</Text>}
      contentContainerStyle={s.list}
      renderItem={({ item }) => (
        <ProductRow phone={item} onPress={() => navigation.navigate("ProductDetails", { id: item.id })} />
      )}
    />
  );
}
const s = StyleSheet.create({
  heading: { fontSize: 19, fontWeight: "800", color: colors.navy, marginBottom: 8 },
  list: { padding: 15, gap: 10 },
});
