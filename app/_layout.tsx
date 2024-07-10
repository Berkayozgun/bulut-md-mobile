import React, { useState, useEffect } from "react";
import {
  ScrollView,
  View,
  Text,
  Image,
  FlatList,
  StyleSheet,
  ActivityIndicator,
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
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

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
      } catch (error) {
        console.error(error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    loadMovies();
  }, []);

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
    <FlatList
      data={movies}
      renderItem={renderItem}
      keyExtractor={(item) => item.title}
    />
  );
}

function SeriesScreen() {
  const [series, setSeries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

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
      } catch (error) {
        console.error(error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    loadSeries();
  }, []);

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
    <FlatList
      data={series}
      renderItem={renderItem}
      keyExtractor={item => item.title}
    />
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
