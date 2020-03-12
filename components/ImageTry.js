import React, { Component } from 'react';
import { View, Image,TouchableHighlight,Button, StyleSheet } from 'react-native';

var _state = { uri: require('../assets/2.jpeg') }
var _state1 = { uri: require('../assets/3.jpg') }

export default class ImageTry extends Component {
  constructor(props) {
    super(props);
    this.state = { uri: _state.uri }
  }

  changeLogo() {
    var arrayPhoto= [require('../assets/1.jpeg'),
                     require('../assets/2.jpeg'),
                     require('../assets/3.jpg'),
                     require('../assets/4.jpg'),
                     require('../assets/5.jpg')];
    var rnd = Math.floor(Math.random() * 4);
    
    this.setState({
      uri: arrayPhoto[rnd]
    });
  }

  render() {
    return (
      <View>
       <TouchableHighlight onPress={() => this.changeLogo()}>
            <Image
                source={this.state.uri}
                style={{width: 250, height: 250}}
            />
        </TouchableHighlight> 

        <View style={styles.submit}>
          <Button stlye={styles.btn1} onPress={()=> btn1Click()} title="Banana"></Button>
          <Button stlye={styles.btn2} onPress={()=> btn2Click()} title="Car"></Button>
        </View>
      </View>
    );
  }
}

function btn1Click()
{
    alert('Buton1 tıklandı!');
}

function btn2Click()
{
    alert('Buton2 tıklandı!');
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#000000',
      alignItems: 'center',
      justifyContent: 'center',
    },
    submit:{
      flexDirection:'row',
      justifyContent :'space-between',
      borderRadius:10,
      marginTop:40,
      borderColor: '#fff',
      
    },

    btn1:{
        backgroundColor: '#fff'
    },
    btn2:
    {

    },
    
    submitText:{
        color:'#fff',
        textAlign:'center',
    }
  });

