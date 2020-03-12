import React from 'react';
import CountdownCircle from 'react-native-countdown-circle';
import { StyleSheet, Text, View, Image, TouchableHighlight, Button} from 'react-native';

import ImageTry from './components/ImageTry';
var _state = { uri: require('./assets/2.jpeg') }

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={{flexDirection: 'row', justifyContent: 'flex-end'}}>Kemalcim selam!</Text>
      
      <ImageTry ></ImageTry>
      
        <View style={styles.submit}>
          <Button title="Banana"></Button>
          <Button title="Car"></Button>
        </View>

        <View style={{flexDirection: 'row',flexDirection:'column'}}>
        <CountdownCircle
            seconds={2}
            radius={18}
            borderWidth={1}
            color="#fff1"
            bgColor="#fff"
            textStyle={{ fontSize: 30 }}
            onTimeElapsed={RndPhoto()}
      />
      </View>
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
  },
  submit:{
    flexDirection:'row',
    justifyContent :'space-evenly',
    
    backgroundColor:'#68a0cf',
    borderRadius:10,
    borderWidth: 1,
    borderColor: '#fff'
  },
  submitText:{
      color:'#fff',
      textAlign:'center',
  }
});
