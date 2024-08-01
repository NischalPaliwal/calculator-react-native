import React from 'react';
import { View, Text, StyleSheet, Image, SafeAreaView } from 'react-native';
import logo from '../assets/calculator.png';

const IntroScreen = () => {
  return (
    <SafeAreaView style={{ backgroundColor: '#ADD8E6' }}>
    <View style={styles.container}>
        <Image source={logo} style={styles.logo} />
        <View style={styles.bottomLine}>
           <Text style={styles.bottomMessage}>Made with ❤️ by Nischal Paliwal</Text>
        </View>
    </View>
    </SafeAreaView>
  )
}

export default IntroScreen;

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    height: '100%', 
    width: '100%',
    backgroundColor: '#ADD8E6',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    marginVertical: 54
},
  logo: {
    width: 200,
    height: 200
  },
  bottomLine: {
    backgroundColor: '#FFFFFF',
    borderRadius: 4
  },
  bottomMessage: {
    color: '#000000',
    marginHorizontal: 7
  }
});