import React from 'react';
import { StyleSheet, View} from 'react-native';
import Header from './components/Headers';
import Navigator from './navigation/navigator';

export default function App() {
  return (

    <View style={styles.screen}>
      <Header/>
      <Navigator></Navigator>
    </View>
  );
}

const styles = StyleSheet.create({
  screen:{
    flex:1
  }
});
