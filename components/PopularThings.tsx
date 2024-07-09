import React from "react";
import { View, Text } from "react-native";

export default function PopularThings() {
  return (
    <View
    style={{
        padding: 16,
        backgroundColor: "gray",
    }}>
      <Text
      style={{
            color: "white",
            fontSize: 24,
            fontWeight: "bold",
        
      }}>Popüler Başlıklar</Text>
    </View>
  );
}
