import React, { useState, useEffect } from "react";
import {
  ScrollView,
  View,
  Text,
  Image,
  FlatList,
  StyleSheet,
  ActivityIndicator,
  TextInput,
} from "react-native";
import { Picker } from "@react-native-picker/picker";
import Header from "@/components/Header";
import PopularThings from "@/components/PopularThings";
import Footer from "@/components/Footer";
import GenreCard from "@/components/GenreCard";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import useFetchAndSort from "../hooks/useFetchAndSort";

// HomeScreen component
const HomeScreen = ({ navigation }) => (
  <ScrollView style={styles.flexContainer}>
    <GenreCard navigation={navigation} />
  </ScrollView>
);

// common component for displaying movie and series data
const ProgramScreen = ({ programType }) => {
  const { filteredData, loading, error, sortBy, setSortBy } = useFetchAndSort(
    "https://gist.githubusercontent.com/hknclk/5710c4adb791755b31ccde6777f04bd2/raw/bd4e28b3e34027707a0d393f414355c5ff5362db/sample.json",
    programType
  );

  const [searchQuery, setSearchQuery] = useState("");

  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <Image
        source={{ uri: item.images["Poster Art"].url }}
        style={styles.image}
      />
      <Text style={styles.title}>{item.title}</Text>
    </View>
  );

  // Loading and error handling for fetching data from the API
  if (loading) {
    return (
      <View style={styles.loading}>
        <ActivityIndicator size='large' color='#0000ff' />
        <Text>Loading...</Text>
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.loading}>
        <Text>Error: {error}</Text>
      </View>
    );
  }

  return (
    <View style={styles.flexContainerWithMargin}>
      <TextInput
        style={styles.searchInput}
        onChangeText={setSearchQuery}
        value={searchQuery}
        placeholder='Film / Dizi / Oyuncu ara...'
      />
      <View style={styles.dropdownContainer}>
        <Picker
          selectedValue={sortBy}
          onValueChange={setSortBy}
          style={styles.dropdown}
        >
          <Picker.Item label='Sırala' value='sort' />
          <Picker.Item label='Yeniye Göre Sırala' value='newest' />
          <Picker.Item label='Eskiye Göre Sırala' value='oldest' />
          <Picker.Item label='Puana Göre Sırala' value='rating' />
          <Picker.Item label='Rastgele Sırala' value='random' />
        </Picker>
      </View>

      <FlatList
        style={styles.flatList}
        data={
          searchQuery.length >= 3
            ? filteredData.filter((item) =>
                item.title.toLowerCase().includes(searchQuery.toLowerCase())
              )
            : filteredData.slice(0, 18)
        }
        renderItem={renderItem}
        keyExtractor={(item) => item.title}
        numColumns={2}
      />
    </View>
  );
};

const MoviesScreen = () => <ProgramScreen programType='movie' />;
const SeriesScreen = () => <ProgramScreen programType='series' />;

const Stack = createNativeStackNavigator();

// RootLayout component for navigation and routing between screens
const RootLayout = () => (
  <NavigationContainer independent={true}>
    <Header />
    <PopularThings />
    <Stack.Navigator initialRouteName='Home'>
      <Stack.Screen
        name='Home'
        component={HomeScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name='Movies'
        component={MoviesScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name='Series'
        component={SeriesScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
    <Footer />
  </NavigationContainer>
);

export default RootLayout;

// Style definitions
const styles = StyleSheet.create({
  flexContainer: { flex: 1 },
  flexContainerWithMargin: { flex: 1, marginBottom: 50 },
  flatList: {
    display: "flex",
    width: "90%",
    alignSelf: "center",
    padding: 10,
    marginBottom: 20,
  },
  item: {
    marginBottom: 20,
    justifyContent: "center",
    alignItems: "center",
    width: 150,
    padding: 5,
    borderRadius: 15,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 0 },
  },
  image: {
    width: 140,
    height: 140,
    resizeMode: "stretch",
    borderRadius: 15,
    borderWidth: 1,
    borderColor: "#000",
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginVertical: 5,
    width: 150,
    textAlign: "center",
  },
  loading: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  dropdownContainer: {
    flexDirection: "row",
    height: 40,
    marginHorizontal: 20,
    marginTop: 10,
    alignItems: "center",
    justifyContent: "space-between",
    borderWidth: 1,
    borderRadius: 5,
  },
  dropdown: {
    height: 40,
    width: "100%",
    borderWidth: 1,
    textAlign: "center",
    justifyContent: "center",
  },
  searchInput: {
    height: 40,
    marginHorizontal: 20,
    marginTop: 10,
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    textAlign: "center",
  },
});
