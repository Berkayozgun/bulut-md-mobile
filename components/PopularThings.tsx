import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function PopularThings() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Popüler Başlıklar</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: "gray",
  },
  text: {
    color: "white",
    fontSize: 24,
    fontWeight: "bold",
  },
});
