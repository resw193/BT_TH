import React, { useState } from "react";
import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Ionicons } from "@expo/vector-icons";
import { StatusBar } from "expo-status-bar";
import { colors } from "./src/theme";
import { USING_API } from "./src/api/phoneApi";
import { SelectPhoneLocal } from "./src/ex1/SelectPhoneLocal";
import { SelectPhoneApi } from "./src/ex1/SelectPhoneApi";
import { BottomTabApp } from "./src/ex3/BottomTabApp";
import { StackTabApp } from "./src/ex4/StackTabApp";
import { DrawerApp } from "./src/ex5/DrawerApp";

type Exercise = 1 | 2 | 3 | 4 | 5;
const EXERCISES: { id: Exercise; title: string; desc: string; icon: keyof typeof Ionicons.glyphMap }[] = [
  { id: 1, title: "Select Phone", desc: "Stack · 4 trạng thái giao diện · chọn màu", icon: "phone-portrait-outline" },
  { id: 2, title: "Select Phone + API", desc: "fetch · Loading / Error / Thử lại · MockAPI", icon: "cloud-download-outline" },
  { id: 3, title: "Bottom Tab", desc: "Home · Search · Profile · Ionicons", icon: "albums-outline" },
  { id: 4, title: "Stack + Tab + Params", desc: "Products · Favorites · Chi tiết · Context", icon: "layers-outline" },
  { id: 5, title: "Drawer Navigation", desc: "Home · Profile · Settings · Switch", icon: "menu-outline" },
];

function Menu({ onChoose }: { onChoose: (exercise: Exercise) => void }) {
  return (
    <ScrollView contentContainerStyle={s.menu}>
      <View style={s.brand}>
        <Text style={s.kicker}>THỰC HÀNH REACT NATIVE</Text>
        <Text style={s.heading}>LAB 06 · NAVIGATION</Text>
        <Text style={s.subtitle}>Chọn một trong 5 bài để chạy và kiểm tra</Text>
      </View>
      {EXERCISES.map((exercise) => (
        <Pressable key={exercise.id} accessibilityRole="button" onPress={() => onChoose(exercise.id)} style={({ pressed }) => [s.card, pressed && { opacity: .8 }]}>
          <View style={s.number}><Text style={s.numberText}>{exercise.id}</Text></View>
          <View style={s.details}>
            <Text style={s.cardTitle}>Bài {exercise.id}: {exercise.title}</Text>
            <Text style={s.cardDescription}>{exercise.desc}</Text>
          </View>
          <Ionicons name="chevron-forward" size={23} color={colors.muted} />
        </Pressable>
      ))}
      <Text style={s.note}>{USING_API ? "Bài 2: đang sử dụng endpoint MockAPI trong .env" : "Bài 2: đang sử dụng dữ liệu offline (chưa đặt EXPO_PUBLIC_API_URL)"}</Text>
    </ScrollView>
  );
}

/** Root duy nhất; mỗi bài tự sở hữu đúng 1 NavigationContainer. */
export default function App() {
  const [active, setActive] = useState<Exercise | null>(null);
  return (
    <GestureHandlerRootView style={s.root}>
      <SafeAreaProvider>
        <StatusBar style="dark" />
        {active === null ? (
          <SafeAreaView style={s.root} edges={["top", "bottom"]}>
            <Menu onChoose={setActive} />
          </SafeAreaView>
        ) : (
          <SafeAreaView style={s.root} edges={["top"]}>
            <View style={s.toolbar}>
              <Pressable accessibilityRole="button" onPress={() => setActive(null)} style={s.goBack}>
                <Ionicons name="arrow-back" size={21} color="white" />
                <Text style={s.backText}>MENU</Text>
              </Pressable>
              <Text style={s.toolbarTitle}>BÀI {active} / 5</Text>
            </View>
            <View style={s.main}>
              {active === 1 ? <SelectPhoneLocal /> :
                active === 2 ? <SelectPhoneApi /> :
                active === 3 ? <BottomTabApp /> :
                active === 4 ? <StackTabApp /> : <DrawerApp />}
            </View>
          </SafeAreaView>
        )}
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
}

const s = StyleSheet.create({
  root: { flex: 1, backgroundColor: "white" },
  menu: { flexGrow: 1, backgroundColor: colors.bg, paddingHorizontal: 17, paddingTop: 25, paddingBottom: 30, gap: 12 },
  brand: { marginBottom: 10 },
  kicker: { fontSize: 12, fontWeight: "800", letterSpacing: 1.7, color: colors.blue },
  heading: { fontSize: 27, marginTop: 10, fontWeight: "900", color: colors.navy },
  subtitle: { color: colors.muted, fontSize: 15, lineHeight: 23, marginTop: 9 },
  card: { backgroundColor: "white", borderWidth: 1, borderColor: colors.line, borderRadius: 11, minHeight: 94, padding: 12, flexDirection: "row", alignItems: "center", gap: 12 },
  number: { width: 45, height: 45, borderRadius: 12, backgroundColor: colors.navy, alignItems: "center", justifyContent: "center" },
  numberText: { color: "white", fontWeight: "800", fontSize: 21 },
  details: { flex: 1, gap: 5 },
  cardTitle: { color: colors.text, fontSize: 16, fontWeight: "800" },
  cardDescription: { color: colors.muted, lineHeight: 19, fontSize: 12 },
  note: { textAlign: "center", marginTop: 17, color: colors.muted, fontSize: 12, lineHeight: 19 },
  toolbar: { height: 47, backgroundColor: colors.navy, alignItems: "center", flexDirection: "row", justifyContent: "space-between", paddingHorizontal: 13 },
  goBack: { flexDirection: "row", alignItems: "center", gap: 5, paddingVertical: 6, paddingRight: 15 },
  backText: { color: "white", fontWeight: "800", fontSize: 14 },
  toolbarTitle: { color: "white", fontSize: 13, fontWeight: "700" },
  main: { flex: 1 },
});
