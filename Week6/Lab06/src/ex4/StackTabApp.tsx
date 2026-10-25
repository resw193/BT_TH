import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import { colors } from "../theme";
import { FavoritesProvider } from "./FavoritesContext";
import { ProductsTab } from "./ProductsTab";
import { FavoritesTab } from "./FavoritesTab";
import { ProductDetailsScreen } from "./ProductDetailsScreen";
import type { RootStackParamList, TabParamList } from "./types";

const Stack = createNativeStackNavigator<RootStackParamList>();
const Tab = createBottomTabNavigator<TabParamList>();

// Bài 4 - TODO 1: 2 Tab lồng trong màn Home của Stack.
function HomeTabs() {
  return (
    <Tab.Navigator screenOptions={({ route }) => ({
      headerShown: false,
      tabBarActiveTintColor: colors.red,
      tabBarIcon: ({ color, size, focused }) => (
        <Ionicons
          name={route.name === "Products" ? (focused ? "phone-portrait" : "phone-portrait-outline") : (focused ? "heart" : "heart-outline")}
          size={size}
          color={color}
        />
      ),
    })}>
      <Tab.Screen name="Products" component={ProductsTab} options={{ title: "Sản phẩm" }} />
      <Tab.Screen name="Favorites" component={FavoritesTab} options={{ title: "Yêu thích" }} />
    </Tab.Navigator>
  );
}

// Bài 4 - TODO 2: FavoritesProvider nằm ngoài NavigationContainer để giữ state qua 2 tab.
export function StackTabApp() {
  return (
    <FavoritesProvider>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerTintColor: colors.navy }}>
          <Stack.Screen name="Home" component={HomeTabs} options={{ title: "Cửa hàng" }} />
          <Stack.Screen name="ProductDetails" component={ProductDetailsScreen} options={{ title: "Chi tiết sản phẩm" }} />
        </Stack.Navigator>
      </NavigationContainer>
    </FavoritesProvider>
  );
}
