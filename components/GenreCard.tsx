import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// GenreCard component for displaying genre cards on the home page
export default function GenreCard({ navigation }) {
  return (
    <View style={styles.container}>
      {/* Movie card */}
      <View style={styles.cardContainer}>
        <TouchableOpacity onPress={() => navigation.navigate("Movies")}>
          <Image
            style={styles.image}
            source={{
              uri: "https://upload.wikimedia.org/wikipedia/en/4/42/HungerGamesPoster.jpg",
            }}
          />
        </TouchableOpacity>
        <Text>Film</Text>
      </View>

      {/* Series card */}
      <View style={styles.cardContainer}>
        <TouchableOpacity onPress={() => navigation.navigate("Series")}>
          <Image
            style={styles.image}
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

// Style definitions for the genre card
const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    padding: 10,
    alignItems: "center",
  },
  cardContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    padding: 10,
    gap: 16,
    alignItems: "center",
  },
  image: {
    width: 150,
    height: 150,
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 15,
  },
};
