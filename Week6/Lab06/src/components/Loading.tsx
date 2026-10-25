import React from "react";
import { ActivityIndicator, StyleSheet, Text, View } from "react-native";
import { colors } from "../theme";

export function Loading() {
  return (
    <View style={s.root}>
      <ActivityIndicator size="large" color={colors.blue} />
      <Text style={s.label}>Đang tải...</Text>
    </View>
  );
}
const s = StyleSheet.create({
  root: { flex: 1, backgroundColor: "#fff", justifyContent: "center", alignItems: "center", gap: 15 },
  label: { fontSize: 16, color: colors.muted },
});
