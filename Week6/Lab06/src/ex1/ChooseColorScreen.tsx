import React, { useState } from "react";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import type { ColorKey, Phone } from "../types";
import { COLOR_ORDER, PHONE_COLORS } from "../data/phones";
import { colors, formatPrice } from "../theme";
import type { SelectPhoneParamList } from "./SelectPhoneApp";

type Props = NativeStackScreenProps<SelectPhoneParamList, "ChooseColor"> & { phone: Phone };

export function ChooseColorScreen({ navigation, route, phone }: Props) {
  // Screen 02 khi undefined; Screen 03 khi người dùng đã chọn ô màu.
  const [picked, setPicked] = useState<ColorKey | undefined>(route.params?.color);
  const [line1, line2 = ""] = phone.name.split(" - ");
  const availableColors = COLOR_ORDER.filter((key) => phone.colors.includes(key));

  return (
    <SafeAreaView edges={["bottom"]} style={s.root}>
      <View style={s.header}>
        <Image source={PHONE_COLORS[picked ?? phone.defaultColor].image} style={s.thumb} resizeMode="contain" />
        <View style={s.headerText}>
          <Text style={s.small}>{line1}</Text>
          <Text style={s.small}>{line2}</Text>
          {/* Bài 1 - TODO 3: 3 dòng chỉ hiện sau khi đã chọn màu. */}
          {picked !== undefined && (
            <View style={s.extra}>
              <Text style={s.small}>Màu: <Text style={s.bold}>{PHONE_COLORS[picked].label}</Text></Text>
              <Text style={s.small}>Cung cấp bởi <Text style={s.bold}>{phone.supplier}</Text></Text>
              <Text style={s.bold}>{formatPrice(phone.price)}</Text>
            </View>
          )}
        </View>
      </View>

      <View style={s.body}>
        <Text style={s.hint}>Chọn một màu bên dưới:</Text>
        <View style={s.swatches}>
          {availableColors.map((key) => (
            <Pressable
              key={key}
              accessibilityRole="button"
              accessibilityLabel={`Chọn màu ${PHONE_COLORS[key].label}`}
              onPress={() => setPicked(key)}
              style={[s.swatch, { backgroundColor: PHONE_COLORS[key].hex }, picked === key && s.swatchOn]}
            />
          ))}
        </View>

        {/* Bài 1 - TODO 4: dùng popTo để quay về chính Product hiện hữu,
            đồng thời đưa params.color về Product. Trên RN Navigation 7,
            popTo là lựa chọn tương đương luồng navigate/merge trong đề. */}
        <Pressable
          accessibilityRole="button"
          style={({ pressed }) => [s.doneBtn, pressed && { opacity: .85 }]}
          onPress={() => navigation.popTo("Product", { color: picked })}
        >
          <Text style={s.doneText}>XONG</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}

const s = StyleSheet.create({
  root: { flex: 1, backgroundColor: "#fff" },
  header: { minHeight: 158, backgroundColor: "#fff", flexDirection: "row", paddingHorizontal: 15, paddingVertical: 12, gap: 16 },
  thumb: { width: 105, height: 135 },
  headerText: { flex: 1, paddingTop: 7, gap: 4 },
  small: { color: colors.text, fontSize: 15, lineHeight: 21 },
  extra: { marginTop: 4, gap: 4 },
  bold: { fontWeight: "800", fontSize: 15, color: colors.text },
  body: { flex: 1, backgroundColor: colors.grey, padding: 16 },
  hint: { fontSize: 18, color: colors.text, fontWeight: "500" },
  swatches: { alignItems: "center", flex: 1, justifyContent: "center", gap: 12, paddingVertical: 8 },
  swatch: { width: 92, height: 66, borderRadius: 4, borderWidth: 2, borderColor: "transparent" },
  swatchOn: { borderColor: "#111", borderWidth: 4 },
  doneBtn: { backgroundColor: colors.blue, borderRadius: 4, minHeight: 50, alignItems: "center", justifyContent: "center", marginBottom: 8 },
  doneText: { color: "white", fontSize: 19, fontWeight: "800" },
});
