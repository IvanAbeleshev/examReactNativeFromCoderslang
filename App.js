import React, {useEffect} from 'react';
import { View, Text, StyleSheet } from 'react-native';
import * as Font from 'expo-font';

export default function App() {
  useEffect(()=>{
    const loadFonts = async ()=>{
      Font.loadAsync()
      await Font.loadAsync({
          // Load a font `Montserrat` from a static resource
          Montserrat: require('./assets/fonts/Montserrat.ttf'),
    
          // Any string can be used as the fontFamily name. Here we use an object to provide more control
          'Montserrat-SemiBold': {
            uri: require('./assets/fonts/Montserrat-SemiBold.ttf'),
            display: Font.FontDisplay.FALLBACK,
          },
        });
      };
    
      loadFonts();
    },[]);

  return (
    <View styles={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
    </View>
  );
}
