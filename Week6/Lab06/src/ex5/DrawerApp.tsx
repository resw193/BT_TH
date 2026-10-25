import React, { createContext, useContext, useMemo, useState } from "react";
import { ScrollView, StyleSheet, Switch, Text, View } from "react-native";
import { NavigationContainer, DarkTheme, DefaultTheme } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { Ionicons } from "@expo/vector-icons";
import { colors } from "../theme";

type DrawerParamList = { Home: undefined; Profile: undefined; Settings: undefined };
const Drawer = createDrawerNavigator<DrawerParamList>();

type SettingsCtx = {
  notify: boolean; setNotify: (value: boolean) => void;
  dark: boolean; setDark: (value: boolean) => void;
};
const SettingsContext = createContext<SettingsCtx | null>(null);

function useSettings(): SettingsCtx {
  const ctx = useContext(SettingsContext);
  if (!ctx) throw new Error("Missing SettingsContext");
  return ctx;
}

// Bài 5 - TODO 3 (nâng cao): Context lưu 2 tùy chọn và đổi giao diện toàn bộ Drawer.
function SettingsProvider({ children }: { children: React.ReactNode }) {
  const [notify, setNotify] = useState(true);
  const [dark, setDark] = useState(false);
  const value = useMemo(() => ({ notify, setNotify, dark, setDark }), [notify, dark]);
  return <SettingsContext.Provider value={value}>{children}</SettingsContext.Provider>;
}

function HomeScreen() {
  const { dark } = useSettings();
  return (
    <View style={[s.center, dark && s.darkBg]}>
      <Ionicons name="home-outline" color={dark ? "white" : colors.navy} size={55} />
      <Text style={[s.big, dark && s.darkText]}>Xin chào 👋</Text>
      <Text style={[s.muted, dark && s.darkMuted]}>Mở menu ☰ hoặc vuốt từ mép trái để điều hướng.</Text>
    </View>
  );
}

function ProfileScreen() {
  const { dark } = useSettings();
  return (
    <View style={[s.center, dark && s.darkBg]}>
      <View style={s.avatar}><Text style={s.avatarText}>NA</Text></View>
      <Text style={[s.big, dark && s.darkText]}>Nguyễn Văn An</Text>
      <Text style={[s.muted, dark && s.darkMuted]}>an.nguyen@example.com</Text>
    </View>
  );
}

// Bài 5 - TODO 1: 2 Switch và trạng thái cập nhật ngay khi bật/tắt.
function SettingsScreen() {
  const { notify, setNotify, dark, setDark } = useSettings();
  return (
    <ScrollView style={[s.page, dark && s.darkBg]} contentContainerStyle={s.settings}>
      <Text style={[s.heading, dark && s.darkText]}>Tùy chọn</Text>
      <View style={[s.settingRow, dark && s.settingDark]}>
        <View style={s.settingText}>
          <Text style={[s.option, dark && s.darkText]}>Nhận thông báo</Text>
          <Text style={[s.muted, dark && s.darkMuted]}>Bật/tắt nhận thông báo</Text>
        </View>
        <Switch value={notify} onValueChange={setNotify} trackColor={{ true: colors.red }} />
      </View>
      <View style={[s.settingRow, dark && s.settingDark]}>
        <View style={s.settingText}>
          <Text style={[s.option, dark && s.darkText]}>Chế độ tối</Text>
          <Text style={[s.muted, dark && s.darkMuted]}>Đổi giao diện của Home và Profile</Text>
        </View>
        <Switch value={dark} onValueChange={setDark} trackColor={{ true: colors.red }} />
      </View>
      <View style={[s.status, dark && s.settingDark]}>
        <Text style={[s.statusText, dark && s.darkText]}>
          Thông báo: {notify ? "BẬT" : "TẮT"} · Giao diện: {dark ? "tối" : "sáng"}
        </Text>
      </View>
    </ScrollView>
  );
}

const ICONS: Record<keyof DrawerParamList, keyof typeof Ionicons.glyphMap> = {
  Home: "home-outline", Profile: "person-outline", Settings: "settings-outline",
};

function DrawerNavigator() {
  const { dark } = useSettings();
  return (
    <NavigationContainer theme={dark ? DarkTheme : DefaultTheme}>
      {/* Bài 5 - TODO 2: 3 màn và icon; header tự hiện nút ☰. */}
      <Drawer.Navigator screenOptions={({ route }) => ({
        drawerActiveTintColor: colors.red,
        drawerInactiveTintColor: dark ? "#F3F4F6" : colors.text,
        drawerStyle: { backgroundColor: dark ? "#1B2332" : "white" },
        headerStyle: { backgroundColor: dark ? "#1B2332" : "white" },
        headerTintColor: dark ? "white" : colors.navy,
        drawerIcon: ({ color, size }) => <Ionicons name={ICONS[route.name]} size={size} color={color} />,
      })}>
        <Drawer.Screen name="Home" component={HomeScreen} options={{ title: "Trang chủ" }} />
        <Drawer.Screen name="Profile" component={ProfileScreen} options={{ title: "Cá nhân" }} />
        <Drawer.Screen name="Settings" component={SettingsScreen} options={{ title: "Cài đặt" }} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
export function DrawerApp() {
  return <SettingsProvider><DrawerNavigator /></SettingsProvider>;
}

const s = StyleSheet.create({
  page: { flex: 1, backgroundColor: colors.bg },
  center: { flex: 1, alignItems: "center", justifyContent: "center", paddingHorizontal: 28, gap: 15, backgroundColor: colors.bg },
  big: { fontSize: 25, fontWeight: "800", color: colors.navy, textAlign: "center" },
  muted: { fontSize: 14, color: colors.muted, textAlign: "center", lineHeight: 21 },
  avatar: { width: 98, height: 98, borderRadius: 49, backgroundColor: colors.blue, alignItems: "center", justifyContent: "center" },
  avatarText: { color: "white", fontSize: 29, fontWeight: "800" },
  settings: { padding: 18, gap: 14 },
  heading: { fontSize: 23, fontWeight: "800", color: colors.navy, marginBottom: 4 },
  settingRow: { borderRadius: 12, padding: 16, backgroundColor: "white", flexDirection: "row", gap: 12, alignItems: "center" },
  settingText: { flex: 1, gap: 3 },
  option: { fontSize: 17, fontWeight: "700", color: colors.text },
  status: { padding: 17, backgroundColor: "white", borderRadius: 12, marginTop: 5 },
  statusText: { color: colors.navy, fontWeight: "700", fontSize: 14, textAlign: "center" },
  darkBg: { backgroundColor: "#101824" },
  settingDark: { backgroundColor: "#1B2332" },
  darkText: { color: "white" },
  darkMuted: { color: "#ADB5C3" },
});
