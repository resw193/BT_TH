import React from "react";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import type { Phone } from "../types";
import { PHONE_COLORS } from "../data/phones";
import { colors, formatPrice } from "../theme";
import { useFavorites } from "./FavoritesContext";

export function ProductRow({ phone, onPress }: { phone: Phone; onPress: () => void }) {
  const { has } = useFavorites();
  return (
    <Pressable accessibilityRole="button" onPress={onPress} style={({ pressed }) => [s.root, pressed && { opacity: .8 }]}>
      <Image source={PHONE_COLORS[phone.defaultColor].image} resizeMode="contain" style={s.image} />
      <View style={s.info}>
        <Text style={s.name}>{phone.name.split(" - ")[0]}</Text>
        <Text style={s.price}>{formatPrice(phone.price)}</Text>
        <Text style={s.hint}>Bấm xem chi tiết</Text>
      </View>
      <Ionicons name={has(phone.id) ? "heart" : "chevron-forward"} color={has(phone.id) ? colors.red : colors.muted} size={23} />
    </Pressable>
  );
}
const s = StyleSheet.create({
  root: { padding: 12, borderRadius: 11, backgroundColor: "white", flexDirection: "row", alignItems: "center", gap: 12, borderWidth: 1, borderColor: colors.line },
  image: { width: 70, height: 96 },
  info: { flex: 1, gap: 7 },
  name: { color: colors.text, fontWeight: "700", fontSize: 15 },
  price: { color: colors.red, fontSize: 17, fontWeight: "800" },
  hint: { color: colors.muted, fontSize: 12 },
});
