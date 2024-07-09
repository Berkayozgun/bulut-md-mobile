import { useEffect } from "react";
import "react-native-reanimated";
import { View, Text, Button } from "react-native";
import Header from "@/components/Header";
import PopularThings from "@/components/PopularThings";
import Footer from "@/components/Footer";
import GenreCard from "@/components/GenreCard";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1 }}>
      <GenreCard navigation={navigation} />
      <Footer />
    </View>
  );
}

function MoviesScreen() {
  return (
    <View style={{ flex: 1 }}>
      <Text>Movies Screen</Text>
    </View>
  );
}

function SeriesScreen() {
  return (
    <View style={{ flex: 1 }}>
      <Text>Series Screen</Text>
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
    </NavigationContainer>
  );
}
