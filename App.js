import React from 'react';
import CountdownCircle from 'react-native-countdown-circle';
import { StyleSheet, View} from 'react-native';
import Header from './components/Headers';
import ImageTry from './components/ImageTry';
import StartGameScreen from './screens/StartGameScreen';

export default function App() {
  return (

    <View style={styles.screen}>
      <Header/>
      <ImageTry ></ImageTry>
    </View>
  );
}

const styles = StyleSheet.create({
  screen:{
    flex:1
  }
});
