import React from 'react';
import CountdownCircle from 'react-native-countdown-circle';
import { StyleSheet, Text, View, Image, TouchableHighlight, Button} from 'react-native';

import ImageTry from './components/ImageTry';
var _state = { uri: require('./assets/2.jpeg') }

export default function App() {
  return (
    <View style={styles.container}>
      <ImageTry ></ImageTry>
    </View>
  );
}



function RndPhoto()
{
  
  
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
});
