import React, { Component } from 'react';
import { View, Image,TouchableHighlight, StyleSheet, TouchableOpacity,Text,Alert } from 'react-native';
import Card from './Card';
import CountdownCircle from 'react-native-countdown-circle';
//import {NavigationContainer} from '@react-navigation/native';
//import {createStackNavigator} from '@react-navigation/stack';


const customData = require('../assets/UKpath.json');
var _time = 3;

var gameHealth = 3;

var firstImage = customData.corona.imagesUK[0].pathShadow;

function setGame()
{
  btn1Name=customData.corona.imagesUK[0].btns[0].btn1;
  btn2Name=customData.corona.imagesUK[0].btns[1].btn2;
  btn3Name=customData.corona.imagesUK[0].btns[2].btn3;

  btn1Value=customData.corona.imagesUK[0].btns[0].value;
  btn2Value=customData.corona.imagesUK[0].btns[1].value;
  btn3Value=customData.corona.imagesUK[0].btns[2].value;

  gameHealth = 3;
  _time
}



var btn1Name = '';
var btn1Value = '';
var btn2Name = '';
var btn2Value = '';
var btn3Name = '';
var btn3Value = '';

export default class ImageTry extends Component {
  constructor(props) {
    super(props);
    this.state = { uri: firstImage , time1: _time}
    setGame();
  }
  
  UKAlertAskStartGame()
  {
    if(gameHealth > 0)
  {
    return;
  }
    Alert.alert(
      'Play Again ?',
      'My A',
      [
        {text: 'Yes', onPress: () => this.StartGame()},
        {text: 'No', onPress:''},
      ],
      {cancelable: false},
    );
  }

   UKAlert(Title,Comment,Func)
  {
    Alert.alert(
      Title,
      Comment,
      [
        {text: 'OK', onPress: () => this.countdown.restartCount()},
      ],
      {cancelable: false},
    );
  }

  StartGame()
  {
    setGame();
    this.countdown.restartCount();
  }

  GameOver()
{
  gameHealth--;
  if(gameHealth <= 0)
  {
    this.UKAlertAskStartGame()
    return;
  }
  this.UKAlert('No Answer!','You have '+gameHealth,this.countdown.restartCount)
}

  changeLogo() {
    var rnd = Math.floor(Math.random() * 4);
    
    this.setState({
      uri: customData.corona.imagesUK[0].pathOrjinal
    });
  }

  btnClick(flag)
    {
      if(gameHealth <= 0)
      {
        this.UKAlertAskStartGame();
        return;
      }

      if(flag == 1)
      {
        alert('Yes it s true');
      }
      else
      {
        gameHealth--;
        alert('wrong wrong!');
      }
        
    }

  render() {
    return (
      <View style={styles.screen}>
        <Card style={styles.inputContainer}>
       <TouchableHighlight underlayColor="white" onPress={() => this.UKAlertAskStartGame()}>
            <Image
                source={{uri: this.state.uri}}
                style={{width: '100%', height: 300}}
                resizeMode={'center'}
            />
        </TouchableHighlight> 

        <View style={styles.buttonContainer}>
          <TouchableOpacity onPress={()=> this.btnClick(btn1Value)}>
            <View style={styles.btnOne}>
                <Text style={styles.buttonText}>{btn1Name}</Text>
              </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=> this.btnClick(btn2Value)}>
            <View style={styles.btnTwo}> 
                <Text style={styles.buttonText}>{btn2Name}</Text>
              </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=> this.btnClick(btn3Value)}>
            <View style={styles.btnThree}>
                <Text style={styles.buttonText}>{btn3Name}</Text>
              </View>
          </TouchableOpacity>
          </View>
          <View style={{flexDirection:'row', justifyContent:'flex-end'}}>
        <CountdownCircle
            ref = {ref => this.countdown = ref}
            seconds={this.state.time1}
            radius={30}
            borderWidth={10}
            color="red"
            bgColor="white"
            textStyle={{ fontSize: 18 }}
            restartAnimation={()=>this.start()}
            onTimeElapsed={() => this.GameOver()}
        />
      </View>
        </Card>
      </View>
      
    );
  }
}


const styles = StyleSheet.create({
    screen:{
        
      marginTop:'10%',
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


