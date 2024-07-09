import React from "react";
import { View, Text, Platform, TouchableOpacity } from "react-native";

export default function Header() {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        padding: 16,
        backgroundColor: "black",
        marginTop: Platform.OS === "ios" ? 0 : 24,
      }}
    >
      <Text
        style={{
          color: "white",
          fontSize: 24,
          fontWeight: "bold",
        }}
      >
        BulutMD{" "}
      </Text>
      <TouchableOpacity
        style={{
          backgroundColor: "red",
          padding: 8,
        }}
      >
        <Text
          style={{
            color: "white",
            fontSize: 16,
          }}
        >
          Deneme Başlat
        </Text>
      </TouchableOpacity>
     
    </View>
  );
}
