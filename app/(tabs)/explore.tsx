import Ionicons from "@expo/vector-icons/Ionicons";
import { StyleSheet, Image, Platform, View, Text } from "react-native";
import Header from "@/components/Header";
import PopularThings from "@/components/PopularThings";

import { Collapsible } from "@/components/Collapsible";
import { ExternalLink } from "@/components/ExternalLink";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";

export default function TabTwoScreen() {
  return (
    <View style={{ flex: 1, backgroundColor: "#fff" }}>
      <Header />
      <PopularThings />
      <Text>details</Text>
    </View>
  );
}
