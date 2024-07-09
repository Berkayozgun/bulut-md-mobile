import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

export default function GenreCard({ navigation }) {
  return (
    <View
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: 16,
        alignItems: "center",
      }}
    >
      <View
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 16,
          gap: 16,
          alignItems: "center",
        }}
      >
        <TouchableOpacity onPress={() => navigation.navigate("Movies")}>
          <Image
            style={{
              width: 150,
              height: 150,
              borderWidth: 1,
              borderColor: "black",
              borderRadius: 15,
            }}
            source={{
              uri: "https://upload.wikimedia.org/wikipedia/en/e/eb/Wolfcreek.png",
            }}
          />
        </TouchableOpacity>
        <Text>Film</Text>
      </View>

      <View
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 16,
          gap: 16,
          alignItems: "center",
        }}
      >
        <TouchableOpacity onPress={() => navigation.navigate("Series")}>
          <Image
            style={{
              width: 150,
              height: 150,
              borderWidth: 1,
              borderColor: "black",
              borderRadius: 15,
            }}
            source={{
              uri: "https://upload.wikimedia.org/wikipedia/en/d/d7/Community_S1_DVD.jpg",
            }}
          />
        </TouchableOpacity>
        <Text>Dizi</Text>
      </View>
    </View>
  );
}
