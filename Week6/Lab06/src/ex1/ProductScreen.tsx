import React from "react";
import { Alert, Image, Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import type { Phone } from "../types";
import { PHONE_COLORS } from "../data/phones";
import { colors, formatPrice } from "../theme";
import { Stars } from "../components/Stars";
import type { SelectPhoneParamList } from "./SelectPhoneApp";

type Props = NativeStackScreenProps<SelectPhoneParamList, "Product"> & { phone: Phone };

export function ProductScreen({ navigation, route, phone }: Props) {
  const picked = route.params?.color;
  const shown = picked ?? phone.defaultColor;

  return (
    <SafeAreaView edges={["bottom"]} style={styles.root}>
      <ScrollView contentContainerStyle={styles.scroll} showsVerticalScrollIndicator={false}>
        <View style={styles.imageWrap}>
          <Image source={PHONE_COLORS[shown].image} style={styles.image} resizeMode="contain" />
        </View>
        <View style={styles.info}>
          <Text style={styles.name}>{phone.name}</Text>
          <View style={styles.row}>
            <Stars value={phone.rating} size={19} />
            <Text style={styles.review}>(Xem {phone.reviewCount} đánh giá)</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.price}>{formatPrice(phone.price)}</Text>
            {phone.oldPrice !== phone.price && (
              <Text style={styles.oldPrice}>{formatPrice(phone.oldPrice)}</Text>
            )}
          </View>
          <View style={styles.badgeRow}>
            <Text style={styles.badge}>{phone.badge}</Text>
            <Ionicons name="help-circle-outline" size={20} color={colors.muted} />
          </View>

          {/* Bài 1 - TODO 1: nút chọn màu; đã chọn thì đổi thành CHỌN LOẠI. */}
          <Pressable
            accessibilityRole="button"
            style={({ pressed }) => [styles.chooseBtn, pressed && styles.pressed]}
            onPress={() => navigation.navigate("ChooseColor", { color: picked })}
          >
            <Text style={styles.chooseText}>
              {picked ? "4 MÀU-CHỌN LOẠI" : "4 MÀU-CHỌN MÀU"}
            </Text>
            <Text style={styles.arrow}>&gt;</Text>
          </Pressable>
          {picked && <Text style={styles.selected}>Đang chọn màu: {PHONE_COLORS[shown].label}</Text>}
        </View>
      </ScrollView>

      {/* Bài 1 - TODO 2: nút mua sát đáy, không bị che bởi cuộn nội dung. */}
      <Pressable
        accessibilityRole="button"
        onPress={() => Alert.alert("Chọn mua", `Bạn đã chọn ${phone.name.split(" - ")[0]} - màu ${PHONE_COLORS[shown].label}.`)}
        style={({ pressed }) => [styles.buyBtn, pressed && styles.pressed]}
      >
        <Text style={styles.buyText}>CHỌN MUA</Text>
      </Pressable>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  root: { flex: 1, backgroundColor: "#FFFFFF", paddingHorizontal: 16 },
  scroll: { flexGrow: 1 },
  imageWrap: { flexGrow: 1, minHeight: 250, maxHeight: 430, justifyContent: "center", alignItems: "center", paddingTop: 8 },
  image: { width: "82%", height: "100%", maxHeight: 385 },
  info: { gap: 12, paddingVertical: 12 },
  name: { fontSize: 19, fontWeight: "600", lineHeight: 27, color: colors.text },
  row: { flexDirection: "row", flexWrap: "wrap", alignItems: "center", gap: 12 },
  review: { color: colors.text, fontSize: 13 },
  price: { color: colors.red, fontWeight: "800", fontSize: 22 },
  oldPrice: { fontSize: 14, color: colors.muted, textDecorationLine: "line-through" },
  badgeRow: { flexDirection: "row", alignItems: "center", gap: 8 },
  badge: { borderWidth: 1, borderColor: colors.red, color: colors.red, borderRadius: 4, padding: 6, fontSize: 11, fontWeight: "800" },
  chooseBtn: { marginTop: 7, borderWidth: 1, borderColor: "#999999", borderRadius: 6, minHeight: 46, alignItems: "center", justifyContent: "center" },
  chooseText: { fontSize: 15, fontWeight: "600", color: colors.text },
  arrow: { position: "absolute", right: 12, top: 8, color: "#777", fontSize: 23 },
  selected: { color: colors.muted, fontSize: 12 },
  buyBtn: { backgroundColor: colors.red, marginBottom: 8, borderRadius: 6, minHeight: 48, alignItems: "center", justifyContent: "center" },
  buyText: { fontSize: 18, letterSpacing: .4, color: "#fff", fontWeight: "800" },
  pressed: { opacity: .8 },
});
