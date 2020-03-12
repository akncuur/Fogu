import React from 'react';
import CountdownCircle from 'react-native-countdown-circle';
import { StyleSheet, Text, View, Image, TouchableHighlight, Button} from 'react-native';



var a = 'https://facebook.github.io/react/logo-og.png';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={{flexDirection: 'row', justifyContent: 'flex-end'}}>Kemalcim selam!</Text>
      <Image
          style={{width: 150, height: 150}}
          source={{uri: a}}
        />
        <View style={{flexDirection: 'row'}}>
          <Button title="Banana"></Button>
          <Button title="Car"></Button>
        </View>

        <View style={{flexDirection: 'row', justifyContent: 'flex-end'}}>
        <CountdownCircle
            seconds={10}
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
  var arrayPhoto= ['1.jpeg','2.jpeg','3.jpg','4.jpg','5.jpg'];
  var rnd = Math.floor(Math.random() * 4);

  a = 'https://upload.wikimedia.org/wikipedia/commons/f/f9/Phoenicopterus_ruber_in_S%C3%A3o_Paulo_Zoo.jpg';
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  submit:{
    marginRight:40,
    marginLeft:40,
    marginTop:10,
    paddingTop:20,
    paddingBottom:20,
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
