
import { useEffect } from 'react';
import 'react-native-reanimated';
import {View, Text} from 'react-native';
import Header from '@/components/Header';
import PopularThings from '@/components/PopularThings';
import Footer from '@/components/Footer';
import GenreCard from '@/components/GenreCard';



export default function RootLayout() {
 
  return (
    <View style={{
      flex: 1,
    }}>
      <Header/>
      <PopularThings/>
      <GenreCard/>
      <Footer/>
    </View>
  );
}
