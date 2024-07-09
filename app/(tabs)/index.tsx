import { Image, StyleSheet, Platform, View, Text } from "react-native";
import Header from "@/components/Header";
import PopularThings from "@/components/PopularThings";

export default function HomeScreen() {
  return (
    <View style={{ flex: 1, backgroundColor: "#fff" }}>
      <Header />
      <PopularThings />
      <Text>detailsxxx</Text>
    </View>
  );
}
