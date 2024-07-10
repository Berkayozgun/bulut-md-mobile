import React from "react";
import { View, Text, Platform, TouchableOpacity, StyleSheet } from "react-native";

export default function Header() {
  return (
    <View style={styles.headerContainer}>
      <Text style={styles.headerText}>BulutMD </Text>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Deneme Başlat</Text>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 16,
    backgroundColor: "black",
    marginTop: Platform.OS === "ios" ? 0 : 24,
  },
  headerText: {
    color: "white",
    fontSize: 24,
    fontWeight: "bold",
  },
  button: {
    backgroundColor: "red",
    padding: 8,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
  },
});
