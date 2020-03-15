import React, { Component } from 'react';
import { View, Image,TouchableHighlight, StyleSheet, TouchableOpacity,Text,Alert, Platform } from 'react-native';
import Card from './Card';
import CountdownCircle from 'react-native-countdown-circle';
//import {NavigationContainer} from '@react-navigation/native';
//import {createStackNavigator} from '@react-navigation/stack';


var _ImageRndIndex = 0;



const customData = require('../assets/UKpath.json');
var _time = 25;

var gameHealth = 3;

var firstImage = customData.corona.imagesUK[_ImageRndIndex].pathShadow;

var _btn1Name = '';
var _btn1Value = '';
var _btn2Name = '';
var _btn2Value = '';
var _btn3Name = '';
var _btn3Value = '';


function setOrjinPhoto(id)
{
  this.setState({

    uri: customData.corona.imagesUK[id].pathOrjinal
  })
}

function setGame()
{


  _btn1Name=customData.corona.imagesUK[_ImageRndIndex].btns[0].btn1,
  _btn2Name=customData.corona.imagesUK[_ImageRndIndex].btns[1].btn2,
  _btn3Name=customData.corona.imagesUK[_ImageRndIndex].btns[2].btn3,

  _btn1Value=customData.corona.imagesUK[_ImageRndIndex].btns[0].value,
  _btn2Value=customData.corona.imagesUK[_ImageRndIndex].btns[1].value,
  _btn3Value=customData.corona.imagesUK[_ImageRndIndex].btns[2].value
  gameHealth = 3;
  _time = 25;
}

export default class ImageTry extends Component {
  constructor(props) {
    super(props);
    setGame();
    this.state = { uri: firstImage , time1: _time, ImageRndIndex: _ImageRndIndex,
      btn1Name : _btn1Name,
      btn1Value : _btn1Value,
      btn2Name : _btn2Name,
      btn2Value : _btn2Value,
      btn3Name : _btn3Name,
      btn3Value : _btn3Value,
    
    }
  
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


   setGame()
{
  
  this.setState({
    
  btn1Name:customData.corona.imagesUK[this.state.ImageRndIndex].btns[0].btn1,
  btn2Name:customData.corona.imagesUK[this.state.ImageRndIndex].btns[1].btn2,
  btn3Name:customData.corona.imagesUK[this.state.ImageRndIndex].btns[2].btn3,

  btn1Value:customData.corona.imagesUK[this.state.ImageRndIndex].btns[0].value,
  btn2Value:customData.corona.imagesUK[this.state.ImageRndIndex].btns[1].value,
  btn3Value:customData.corona.imagesUK[this.state.ImageRndIndex].btns[2].value,
  uri: customData.corona.imagesUK[this.state.ImageRndIndex].pathShadow
  })
  gameHealth = 3;
  _time = 25;
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
    this.setGame();
    this.countdown.restartCount();
  }

  GameOver()
{
  gameHealth--;
  if(gameHealth <= 0)
  {
    this.setState({
      uri: customData.corona.imagesUK[0].pathOrjinal
    });
    
    this.UKAlertAskStartGame()

    return;
  }
  this.UKAlert('No Answer!','You have '+gameHealth,this.countdown.restartCount)
}

  changeLogo() {
    this.setState({
      uri: customData.corona.imagesUK[this.state.ImageRndIndex].pathOrjinal
    });
   
  }
  

  GenerateRnd()
  {

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
        this.changeLogo();
        this.setState({
          ImageRndIndex: Math.floor(Math.random() * 3)
        });
        
        var a= setTimeout(()=> {setOrjinPhoto,this.StartGame();},2000);
        
        
        
      }
      else
      {
        gameHealth--;
      }
        
    }

  render() {
    return (
      <View style={styles.screen}>
        <Card style={styles.inputContainer}>
        <View style={{flexDirection:'row', justifyContent:'flex-end'}}>
        <CountdownCircle
            ref = {ref => this.countdown = ref}
            seconds={this.state.time1}
            radius={15}
            borderWidth={5}
            color="red"
            bgColor="white"
            textStyle={{ fontSize: 10 }}
            restartAnimation={()=>this.start()}
            onTimeElapsed={() => this.GameOver()}
        />
      </View>
       <TouchableHighlight underlayColor="white" onPress={() => this.UKAlertAskStartGame()}>
            <Image
                source={{uri: this.state.uri}}
                style={{width: '100%', height: 300}}
                resizeMode={'center'}
            />
        </TouchableHighlight> 

        <View style={styles.buttonContainer}>
          <TouchableOpacity onPress={()=> this.btnClick(this.state.btn1Value)}>
            <View style={styles.btnOne}>
                <Text style={styles.buttonText}>{this.state.btn1Name}</Text>
              </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=> this.btnClick(this.state.btn2Value)}>
            <View style={styles.btnTwo}> 
                <Text style={styles.buttonText}>{this.state.btn2Name}</Text>
              </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=> this.btnClick(this.state.btn3Value)}>
            <View style={styles.btnThree}>
                <Text style={styles.buttonText}>{this.state.btn3Name}</Text>
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
        
        marginTop:'0%',
        padding: 0,
        alignItems: 'center',
        justifyContent:'center'
    },
    buttonContainer: {
        paddingTop: '10%',
        alignItems: 'stretch'
    },
    button: {
        marginBottom: '25%',
        alignItems: 'center',
      },
    
    btnOne:{
        borderRadius:20,
        height: 50,
        marginBottom: 7,
        alignItems: 'center',
        backgroundColor: '#2196F3'
    },
    btnTwo:{
        borderRadius:20,
        height: 50,
        marginBottom: 7,
        alignItems: 'center',
        backgroundColor: '#2196F3'
    }, 
    btnThree:{
        borderRadius:20,
        height: 50,
        marginBottom: 7,
        alignItems: 'center',
        backgroundColor: '#2196F3'
    }, 
    buttonText:{
        
        color: 'white',
        textAlign:'center',
        padding:10,
        fontSize:18,
    },

    thumbnail: {
        flex: 1,
        width: undefined,
        height: undefined,
        resizeMode: 'cover'
      }

})


