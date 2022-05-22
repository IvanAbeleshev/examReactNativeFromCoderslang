import React, {useEffect, useState} from 'react';
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native';
import * as Font from 'expo-font';

export default function App() {
  const[loadingFonts, setLoadingFonts] = useState(true);
  useEffect(()=>{
    const loadFonts = async ()=>{
      await Font.loadAsync({
          'RobotoBold': require('./src/assets/fonts/Roboto/Roboto-Bold.ttf'),
          'RobotoItalic': require('./src/assets/fonts/Roboto/Roboto-Italic.ttf'),
          'RobotoRegular': require('./src/assets/fonts/Roboto/Roboto-Regular.ttf'),
          'RobotoMedium': require('./src/assets/fonts/Roboto/Roboto-Medium.ttf'),
      });
    };
    
    loadFonts();
    setLoadingFonts(false);
    },[]);

  return (
    <View styles={styles.container}> 
      {loadingFonts? <ActivityIndicator textContent={'Loading...'} visible={loadingFonts} size={'small'} />:
       <Text style={styles.textStyle}>Open up App.js to start working on your app!</Text>}

    </View>
  );
}

const styles = StyleSheet.create({
  container:{

  },
  textStyle:{
    marginTop:50,
    fontFamily: 'RobotoBold',
  },

})
