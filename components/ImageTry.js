import React, { Component } from 'react';
import { View, Image,TouchableHighlight, StyleSheet, TouchableOpacity,Text } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';

import Card from './Card';


var _state = { uri: require('../assets/2.jpeg') }
var arrayPhoto= [require('../assets/1.jpeg'),
                     require('../assets/2.jpeg'),
                     require('../assets/3.jpg'),
                     require('../assets/4.jpg'),
                     require('../assets/5.jpg')];

var btn1Name = 'Muz';
var btn1Value = '1';


var btn2Name = 'Portakal';
var btn2Value = '0';


var btn3Name = 'Çilek';
var btn3Value = '0';



export default class ImageTry extends Component {
  constructor(props) {
    super(props);
    this.state = { uri: _state.uri, value: 15 }
    
  }

  changeLogo() {
    var rnd = Math.floor(Math.random() * 4);
    
    this.setState({
      uri: arrayPhoto[rnd]
    });
  }

   btn1Click(a)
    {
        this.changeLogo();
    }

    btn2Click(a)
    {
        this.changeLogo();
    }

    btn3Click(a)
    {
        this.changeLogo();
    }

  render() {
    return (
      <View style={styles.screen}>
          
        <Card style={styles.inputContainer}>
       <TouchableHighlight underlayColor="white" onPress={() => this.changeLogo()}>
            <Image
                source={this.state.uri}
                style={{width: '100%', height: 300}}
                resizeMode={'center'}
            />
        </TouchableHighlight> 

        <View style={styles.buttonContainer}>
          <TouchableHighlight underlayColor="white" onPress={()=> this.btn1Click(btn1Value)}>
            <View style={styles.btnOne}>
                <Text style={styles.buttonText}>{btn1Name}</Text>
              </View>
          </TouchableHighlight>
          <TouchableOpacity onPress={()=> this.btn2Click(btn2Value)}>
            <View style={styles.btnTwo}> 
                <Text style={styles.buttonText}>{btn2Name}</Text>
              </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=> this.btn3Click(btn3Value)}>
            <View style={styles.btnThree}>
                <Text style={styles.buttonText}>{btn3Name}</Text>
              </View>
          </TouchableOpacity>
          </View>
        </Card>
      </View>
    );
  }
}


const styles = StyleSheet.create({
    screen:{
      
        padding: 10,
        alignItems: 'center',
        justifyContent:'space-between'
    },
    buttonContainer: {
        paddingTop: 30,
        alignItems: 'stretch'
    },
    button: {
        marginBottom: 20,
        alignItems: 'center',
      },
    
    btnOne:{
        borderRadius:20,
        marginBottom: 20,
        alignItems: 'center',
        backgroundColor: '#2196F3'
    },
    btnTwo:{
        borderRadius:20,
        marginBottom: 20,
        alignItems: 'center',
        backgroundColor: 'black'
    }, 
    btnThree:{
        borderRadius:20,
        marginBottom: 20,
        alignItems: 'center',
        backgroundColor: '#841584'
    }, 
    buttonText:{
        
        color: 'white',
        textAlign:'center',
        padding:20,
        fontSize:18,
    },

    thumbnail: {
        flex: 1,
        width: undefined,
        height: undefined,
        resizeMode: 'cover'
      }

})


