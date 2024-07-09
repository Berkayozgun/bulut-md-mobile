import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function Footer() {
  return (
    <View style={styles.footerContainer}>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-evenly",
        }}
      >
        <Text style={{ color: "#fff" }}>Anasayfa</Text>
        <Text style={{ color: "#fff" }}> | </Text>
        <Text style={{ color: "#fff" }}>Kullanıcı Sözleşmesi</Text>
        <Text style={{ color: "#fff" }}> | </Text>
        <Text style={{ color: "#fff" }}>Gizlilik Sözleşimesi</Text>
      </View>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <Text style={{ color: "#fff" }}>f</Text>
        <Text style={{ color: "#fff" }}>t</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  footerContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    position: "absolute",
    bottom: 0,
    width: "100%",
    alignItems: "center",
    backgroundColor: "#000",
    textColor: "#fff",
    // Add any additional styling you want for the footer
  },
});
