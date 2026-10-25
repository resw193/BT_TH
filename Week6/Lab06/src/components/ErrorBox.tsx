import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { colors } from "../theme";

export function ErrorBox({ message, onRetry }: { message: string; onRetry: () => void }) {
  return (
    <View style={s.root}>
      <Ionicons name="cloud-offline-outline" size={52} color={colors.red} />
      <Text style={s.title}>Không tải được dữ liệu</Text>
      <Text style={s.body}>{message}</Text>
      <Pressable onPress={onRetry} accessibilityRole="button" style={s.button}>
        <Text style={s.buttonText}>THỬ LẠI</Text>
      </Pressable>
    </View>
  );
}
const s = StyleSheet.create({
  root: { flex: 1, backgroundColor: "#fff", padding: 25, justifyContent: "center", alignItems: "center", gap: 16 },
  title: { fontSize: 20, fontWeight: "800", color: colors.text },
  body: { color: colors.muted, textAlign: "center", fontSize: 15, lineHeight: 23 },
  button: { paddingHorizontal: 36, paddingVertical: 14, borderRadius: 7, backgroundColor: colors.blue },
  buttonText: { color: "white", fontWeight: "800", letterSpacing: .5 },
});
