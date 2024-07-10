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

function HomeScreen({ navigation }) {
  return (
    <ScrollView style={{ flex: 1 }}>
      <GenreCard navigation={navigation} />
    </ScrollView>
  );
}

const useFetchAndSort = (url, programType) => {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [sortBy, setSortBy] = useState("newest"); // Default sort by newest

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();

        const filteredData = data.entries.filter(
          (entry) => entry.programType === programType
        );
        setData(filteredData);
        setFilteredData(filteredData); // Initial list includes all movies
      } catch (error) {
        console.error(error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url, programType]);

  useEffect(() => {
    // Apply sorting based on sortBy value
    let sortedData = [...data];

    switch (sortBy) {
      case "newest":
        sortedData.sort((a, b) => b.releaseYear - a.releaseYear);
        break;
      case "oldest":
        sortedData.sort((a, b) => a.releaseYear - b.releaseYear);
        break;
      case "rating":
        alert("IMDb rating data is not available in the database.");
        setSortBy("newest"); // Default to "newest" sorting
        break;
      case "random":
        sortedData = shuffledArray(sortedData);
        break;
      default:
        break;
    }

    setFilteredData(sortedData);
  }, [sortBy, data]);

  const shuffledArray = (array) => {
    let currentIndex = array.length,
      randomIndex;

    while (currentIndex !== 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex],
        array[currentIndex],
      ];
    }

    return array;
  };

  return {
    filteredData,
    loading,
    error,
    sortBy,
    setSortBy,
    shuffledArray,
  };
};

function MoviesScreen() {
  const { filteredData, loading, error, sortBy, setSortBy, shuffledArray } =
    useFetchAndSort(
      "https://gist.githubusercontent.com/hknclk/5710c4adb791755b31ccde6777f04bd2/raw/bd4e28b3e34027707a0d393f414355c5ff5362db/sample.json",
      "movie"
    );

  const [searchQuery, setSearchQuery] = useState("");

  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <Image
        source={{ uri: item.images["Poster Art"].url }}
        style={styles.image}
      />
      <Text style={styles.title}>{item.title}</Text>
      <Text>{item.description}</Text>
      <Text>{item.releaseYear}</Text>
    </View>
  );

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
    <View style={{ flex: 1 }}>
      <View style={styles.dropdownContainer}>
        <Text style={styles.label}>Sort by:</Text>
        <Picker
          selectedValue={sortBy}
          onValueChange={(itemValue) => setSortBy(itemValue)}
          style={styles.dropdown}
        >
          <Picker.Item label='Newest' value='newest' />
          <Picker.Item label='Oldest' value='oldest' />
          <Picker.Item label='Rating' value='rating' />
          <Picker.Item label='Random' value='random' />
        </Picker>
      </View>
      <TextInput
        style={styles.searchInput}
        onChangeText={(text) => setSearchQuery(text)}
        value={searchQuery}
        placeholder='Search movies...'
      />
      <FlatList
        data={
          searchQuery.length >= 3
            ? filteredData.filter((item) =>
                item.title.toLowerCase().includes(searchQuery.toLowerCase())
              )
            : filteredData.slice(0, 18)
        }
        renderItem={renderItem}
        keyExtractor={(item) => item.title}
      />
    </View>
  );
}

function SeriesScreen() {
  const { filteredData, loading, error, sortBy, setSortBy, shuffledArray } =
    useFetchAndSort(
      "https://gist.githubusercontent.com/hknclk/5710c4adb791755b31ccde6777f04bd2/raw/bd4e28b3e34027707a0d393f414355c5ff5362db/sample.json",
      "series"
    );

  const [searchQuery, setSearchQuery] = useState("");

  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <Image
        source={{ uri: item.images["Poster Art"].url }}
        style={styles.image}
      />
      <Text style={styles.title}>{item.title}</Text>
      <Text>{item.description}</Text>
      <Text>{item.releaseYear}</Text>
    </View>
  );

  if (loading) {
    return (
      <View style={styles.loading}>
        <ActivityIndicator size="large" color="#0000ff" />
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
    <View style={{ flex: 1 }}>
      <View style={styles.dropdownContainer}>
        <Text style={styles.label}>Sort by:</Text>
        <Picker
          selectedValue={sortBy}
          onValueChange={(itemValue) => setSortBy(itemValue)}
          style={styles.dropdown}
        >
          <Picker.Item label="Newest" value="newest" />
          <Picker.Item label="Oldest" value="oldest" />
          <Picker.Item label="Rating" value="rating" />
          <Picker.Item label="Random" value="random" />
        </Picker>
      </View>
      <TextInput
        style={styles.searchInput}
        onChangeText={(text) => setSearchQuery(text)}
        value={searchQuery}
        placeholder="Search series..."
      />
      <FlatList
        data={
          searchQuery.length >= 3
            ? filteredData.filter((item) =>
                item.title.toLowerCase().includes(searchQuery.toLowerCase())
              )
            : filteredData.slice(0, 18)
        }
        renderItem={renderItem}
        keyExtractor={(item) => item.title}
      />
    </View>
  );
};

const Stack = createNativeStackNavigator();

export default function RootLayout() {
  return (
    <NavigationContainer independent={true}>
      <Header />
      <PopularThings />
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen
          name='Home'
          component={HomeScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name='Movies'
          component={MoviesScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name='Series'
          component={SeriesScreen}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
      <Footer />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  item: {
    marginBottom: 20,
    padding: 10,
    backgroundColor: "#fff",
    borderRadius: 5,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 0 },
  },
  image: {
    width: "100%",
    height: 200,
    resizeMode: "cover",
    borderRadius: 5,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginVertical: 5,
  },
  loading: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  dropdownContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    marginTop: 10,
    marginBottom: 5,
  },
  label: {
    fontSize: 16,
    fontWeight: "bold",
  },
  dropdown: {
    height: 40,
    width: 150,
  },
  searchInput: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});
