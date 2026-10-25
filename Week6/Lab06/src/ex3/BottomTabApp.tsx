import React, { useMemo, useState } from "react";
import { FlatList, Image, StyleSheet, Text, TextInput, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import { PHONES, PHONE_COLORS } from "../data/phones";
import { colors, formatPrice } from "../theme";
import type { Phone } from "../types";

type TabParamList = { Home: undefined; Search: undefined; Profile: undefined };
const Tab = createBottomTabNavigator<TabParamList>();

const ICONS: Record<keyof TabParamList, [keyof typeof Ionicons.glyphMap, keyof typeof Ionicons.glyphMap]> = {
  Home: ["home", "home-outline"],
  Search: ["search", "search-outline"],
  Profile: ["person", "person-outline"],
};

function PhoneCard({ phone }: { phone: Phone }) {
  return (
    <View style={s.card}>
      <Image source={PHONE_COLORS[phone.defaultColor].image} resizeMode="contain" style={s.image} />
      <View style={s.cardText}>
        <Text style={s.name}>{phone.name.split(" - ")[0]}</Text>
        <Text style={s.price}>{formatPrice(phone.price)}</Text>
      </View>
    </View>
  );
}

function HomeTab() {
  return (
    <FlatList
      data={PHONES}
      keyExtractor={(p) => p.id}
      ListHeaderComponent={<Text style={s.heading}>Danh sách điện thoại ({PHONES.length})</Text>}
      contentContainerStyle={s.list}
      renderItem={({ item }) => <PhoneCard phone={item} />}
    />
  );
}

// Bài 3 - TODO 1: nhập từ khóa và tìm kiếm không phân biệt chữ hoa/chữ thường.
function SearchTab() {
  const [keyword, setKeyword] = useState("");
  const result = useMemo(
    () => PHONES.filter((phone) => phone.name.toLowerCase().includes(keyword.trim().toLowerCase())),
    [keyword],
  );
  return (
    <View style={s.page}>
      <View style={s.inputWrap}>
        <Ionicons name="search-outline" size={22} color={colors.muted} />
        <TextInput
          value={keyword}
          onChangeText={setKeyword}
          placeholder="Nhập từ khóa"
          placeholderTextColor={colors.muted}
          style={s.input}
          autoCapitalize="none"
          clearButtonMode="while-editing"
        />
      </View>
      <FlatList
        data={result}
        keyExtractor={(phone) => phone.id}
        renderItem={({ item }) => <PhoneCard phone={item} />}
        contentContainerStyle={s.searchList}
        keyboardShouldPersistTaps="handled"
        ListEmptyComponent={<Text style={s.empty}>Không có kết quả cho “{keyword}”.</Text>}
      />
    </View>
  );
}

// Bài 3 - TODO 2: avatar hình tròn + tên và email.
function ProfileTab() {
  return (
    <View style={s.profile}>
      <View style={s.avatar}><Text style={s.avatarText}>NA</Text></View>
      <Text style={s.profileName}>Nguyễn Văn An</Text>
      <Text style={s.email}>an.nguyen@example.com</Text>
    </View>
  );
}

// Bài 3 - TODO 3: NavigationContainer với 3 Tab và Ionicons đặc/viền.
export function BottomTabApp() {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={({ route }) => ({
        tabBarActiveTintColor: colors.red,
        tabBarInactiveTintColor: colors.muted,
        tabBarLabelStyle: { fontSize: 12, fontWeight: "600" },
        tabBarIcon: ({ focused, color, size }) => (
          <Ionicons name={ICONS[route.name][focused ? 0 : 1]} size={size} color={color} />
        ),
      })}>
        <Tab.Screen name="Home" component={HomeTab} options={{ title: "Trang chủ" }} />
        <Tab.Screen name="Search" component={SearchTab} options={{ title: "Tìm kiếm" }} />
        <Tab.Screen name="Profile" component={ProfileTab} options={{ title: "Cá nhân" }} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const s = StyleSheet.create({
  page: { flex: 1, backgroundColor: colors.bg },
  list: { gap: 10, padding: 16, paddingBottom: 25 },
  searchList: { gap: 10, padding: 16, flexGrow: 1 },
  heading: { fontSize: 20, fontWeight: "800", color: colors.navy, marginBottom: 8 },
  card: { backgroundColor: "white", borderRadius: 10, flexDirection: "row", padding: 10, alignItems: "center", gap: 14, minHeight: 114, borderWidth: 1, borderColor: colors.line },
  image: { width: 69, height: 95 },
  cardText: { flex: 1, gap: 8 },
  name: { fontWeight: "700", fontSize: 15, lineHeight: 22, color: colors.text },
  price: { color: colors.red, fontWeight: "800", fontSize: 17 },
  inputWrap: { margin: 16, marginBottom: 0, paddingHorizontal: 12, borderWidth: 1, borderColor: colors.line, borderRadius: 9, backgroundColor: "white", flexDirection: "row", alignItems: "center" },
  input: { flex: 1, height: 49, marginLeft: 8, fontSize: 16, color: colors.text },
  empty: { textAlign: "center", marginTop: 42, color: colors.muted, fontSize: 16 },
  profile: { flex: 1, alignItems: "center", justifyContent: "center", backgroundColor: colors.bg, gap: 14 },
  avatar: { width: 96, height: 96, borderRadius: 48, backgroundColor: colors.navy, alignItems: "center", justifyContent: "center" },
  avatarText: { color: "white", fontSize: 30, fontWeight: "800" },
  profileName: { fontSize: 24, fontWeight: "800", color: colors.text },
  email: { fontSize: 16, color: colors.muted },
});
