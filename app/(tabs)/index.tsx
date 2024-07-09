import { Image, StyleSheet, Platform, View } from "react-native";
import Header from "@/components/Header";
import PopularThings from "@/components/PopularThings";

export default function HomeScreen() {
  return (
    <View style={{ flex: 1, backgroundColor: "#fff" }}>
      <Header />
      <PopularThings />
    </View>
  );
}
