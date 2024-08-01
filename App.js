import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import MainScreen from './views/MainScreen';
import IntroScreen from './views/IntroScreen';

export default function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  setTimeout(() => {
    setIsLoaded(true);
  }, 3000);
  return (
    <View>
      { isLoaded ? <MainScreen/> : <IntroScreen/> }
    </View>
  );
}
