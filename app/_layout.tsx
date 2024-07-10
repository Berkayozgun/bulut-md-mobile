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

function MoviesScreen() {
  const [movies, setMovies] = useState([]);
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const loadMovies = async () => {
      try {
        const response = await fetch(
          "https://gist.githubusercontent.com/hknclk/5710c4adb791755b31ccde6777f04bd2/raw/bd4e28b3e34027707a0d393f414355c5ff5362db/sample.json"
        );

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();

        const filteredMovies = data.entries.filter(
          (entry) => entry.programType === "movie"
        );
        setMovies(filteredMovies);
        setFilteredMovies(filteredMovies); // Initial list includes all movies
      } catch (error) {
        console.error(error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    loadMovies();
  }, []);

  useEffect(() => {
    // Filter movies based on searchQuery
    const filtered = movies.filter(item =>
      item.title.toLowerCase().includes(searchQuery.toLowerCase())
    );

    // Check if searchQuery length is at least 3 characters before updating filteredMovies
    if (searchQuery.length >= 3 || searchQuery === '') {
      setFilteredMovies(filtered);
    }
  }, [searchQuery, movies]);

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
      <TextInput
        style={styles.searchInput}
        onChangeText={text => setSearchQuery(text)}
        value={searchQuery}
        placeholder="Search movies..."
      />
      <FlatList
        data={filteredMovies}
        renderItem={renderItem}
        keyExtractor={item => item.title}
      />
    </View>
  );
}

function SeriesScreen() {
  const [series, setSeries] = useState([]);
  const [filteredSeries, setFilteredSeries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const loadSeries = async () => {
      try {
        const response = await fetch('https://gist.githubusercontent.com/hknclk/5710c4adb791755b31ccde6777f04bd2/raw/bd4e28b3e34027707a0d393f414355c5ff5362db/sample.json');
        
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();

        const filteredSeries = data.entries.filter(entry => entry.programType === 'series');
        setSeries(filteredSeries);
        setFilteredSeries(filteredSeries); // Initial list includes all series
      } catch (error) {
        console.error(error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    loadSeries();
  }, []);

  useEffect(() => {
    // Filter series based on searchQuery
    const filtered = series.filter(item =>
      item.title.toLowerCase().includes(searchQuery.toLowerCase())
    );

    // Check if searchQuery length is at least 3 characters before updating filteredSeries
    if (searchQuery.length >= 3 || searchQuery === '') {
      setFilteredSeries(filtered);
    }
  }, [searchQuery, series]);

  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <Image source={{ uri: item.images['Poster Art'].url }} style={styles.image} />
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
      <TextInput
        style={styles.searchInput}
        onChangeText={text => setSearchQuery(text)}
        value={searchQuery}
        placeholder="Search series..."
      />
      <FlatList
        data={filteredSeries}
        renderItem={renderItem}
        keyExtractor={item => item.title}
      />
    </View>
  );
}


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
});
