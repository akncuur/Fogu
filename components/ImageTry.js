import React, { Component } from 'react';
import { View, Image,TouchableHighlight, StyleSheet, TouchableOpacity,Text,Alert, Platform } from 'react-native';
import Card from './Card';
import CountdownCircle from 'react-native-countdown-circle';
//import {NavigationContainer} from '@react-navigation/native';
//import {createStackNavigator} from '@react-navigation/stack';


var _ImageRndIndex = 0;

var isFirst = false;
var _time = 25;

var gameHealth = 3;
var id = 0;
var bosData = {};

var rndList = [];

function getJson()
{
     return fetch("https://firebasestorage.googleapis.com/v0/b/ukhelp-8de3a.appspot.com/o/UKpath.json?alt=media&token=a382d951-8e9a-4296-8a97-46811934c56")
      .then(response => response.json())
      .then(responseJson => { 
          bosData= responseJson.imagesUK;
      });  
}


function setOrjinPhoto(id)
{
  alert(id);
  this.state.uri='https://firebasestorage.googleapis.com/v0/b/ukhelp-8de3a.appspot.com/o/'+this.state.dataSource[id].pathOrjinal+'?alt=media&token=a382d951-8e9a-4296-8a97-46811934c560';
}

function changeShadow()
{
  this.setState({
    uri:'https://firebasestorage.googleapis.com/v0/b/ukhelp-8de3a.appspot.com/o/'+this.state.dataSource[0].pathOrjinal+'?alt=media&token=a382d951-8e9a-4296-8a97-46811934c560'
  })
  //this.state.uri='https://firebasestorage.googleapis.com/v0/b/ukhelp-8de3a.appspot.com/o/'+this.state.dataSource[0].pathOrjinal+'?alt=media&token=a382d951-8e9a-4296-8a97-46811934c560';
}

export default class ImageTry extends Component {
  constructor(props) {
    super(props);
    dataSource_= [];
    this.state = { uri: '' ,original_uri: '', time1: _time, ImageRndIndex: _ImageRndIndex,isLoad:false,
      btn1Name : '',
      btn1Value : '',
      btn2Name : '',
      btn2Value : '',
      btn3Name : '',
      btn3Value : '',
      btncolourdefault_1: '#48d7db',
      btncolourdefault_2: '#48d7db',
      btncolourdefault_3: '#48d7db',
      dataSource_: []
    };

    this.componentDidMount();
  }
  
  componentDidMount() {
    
    
   return fetch("https://firebasestorage.googleapis.com/v0/b/ukhelp-8de3a.appspot.com/o/UKpath.json?alt=media",{method: "GET"})
      .then(response => response.json())
      .then(responseJson => {
        this.setState({
          isLoad:true,
          dataSource: responseJson.imagesUK
          
        })
      }).catch(function(error) {
        alert('There has been a problem with your fetch operation: ' + error.message);
         // ADD THIS THROW error
          throw error;
        });;  
    }


  UKAlertAskStartGame()
  {
    if(gameHealth > 0)
  {
    return;
  }
    Alert.alert(
      'Please press "FOGU" to continue.',
      '',
      [
        {text: 'FOGU', onPress: () => this.StartOver()},
      ],
      {cancelable: false},
    );
  }


   setGame()
{
  this.setState({
    btn1Name: this.state.dataSource[this.state.ImageRndIndex].btns[0].btn,
    btn2Name:this.state.dataSource[this.state.ImageRndIndex].btns[1].btn,
    btn3Name:this.state.dataSource[this.state.ImageRndIndex].btns[2].btn,

  btn1Value:this.state.dataSource[this.state.ImageRndIndex].btns[0].value,
  btn2Value:this.state.dataSource[this.state.ImageRndIndex].btns[1].value,
  btn3Value:this.state.dataSource[this.state.ImageRndIndex].btns[2].value,
  
  uri:'https://firebasestorage.googleapis.com/v0/b/ukhelp-8de3a.appspot.com/o/'+this.state.dataSource[this.state.ImageRndIndex].pathShadow+'?alt=media&token=a382d951-8e9a-4296-8a97-46811934c560',
  original_uri:'https://firebasestorage.googleapis.com/v0/b/ukhelp-8de3a.appspot.com/o/'+this.state.dataSource[this.state.ImageRndIndex].pathOrjinal+'?alt=media&token=a382d951-8e9a-4296-8a97-46811934c560'
});
  
  
  
 //gameHealth = 3;
  _time = 15; //Çok fazla.
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
    //gameHealth= 3;
    this.setState({btncolourdefault_1:'#48d7db',
    btncolourdefault_2:'#48d7db',
    btncolourdefault_3:'#48d7db'});                                    
  }

  StartOver()
  {
   
    this.setGame();
    this.countdown.restartCount();
    gameHealth= 3;
    this.setState({btncolourdefault_1:'#48d7db',
    btncolourdefault_2:'#48d7db',
    btncolourdefault_3:'#48d7db'});
                                          
  }

  GameOver()
{
  gameHealth--;
  if(gameHealth <= 0)
  {
    this.setState({
      uri: this.state.dataSource[0].pathOrjinal
    });
    
    this.UKAlertAskStartGame()

    return;
  }
  this.UKAlert('No Answer!','You have '+gameHealth,this.countdown.restartCount)
}

  changeLogo() {
    this.setState({
      uri: this.state.original_uri
    });
  }
  



  btnClick(flag,orderNo)
    {
      if(flag == 1)
      {
        if(orderNo==1){
          this.setState({btncolourdefault_1:'green'})
          
        }
        if(orderNo==2){
          this.setState({btncolourdefault_2:'green'})
        }   
        if(orderNo==3){
          this.setState({btncolourdefault_3:'green'})
        }

        id = this.ImageRndIndex;
        this.changeLogo();
        this.state.ImageRndIndex= Math.floor(Math.random() * this.state.dataSource.length);

        var a= setTimeout(()=> {setOrjinPhoto,this.StartGame();},800);
       /* this.setState({btncolourdefault_1:'#48d7db',
        btncolourdefault_2:'#48d7db',
        btncolourdefault_3:'#48d7db'});
                                          */

      }
      else
      {
        gameHealth--;
        if(gameHealth <= 0)
      {
        this.UKAlertAskStartGame();
        return;
      }
      }
      
    }

  render() {
      if(this.state.isLoad && isFirst == false)
      {
        this.setGame();
        isFirst= true;
      }
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
                style={{width: '100%', height: 350}}
                resizeMode={'contain'}
            />
        </TouchableHighlight> 

        <View style={styles.buttonContainer}>
          <TouchableOpacity onPress={()=> this.btnClick(this.state.btn1Value,1)}>
            <View style={[styles.btnOne, {backgroundColor: this.state.btncolourdefault_1}]}>
                <Text style={styles.buttonText}>{this.state.btn1Name}</Text>
              </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=> this.btnClick(this.state.btn2Value,2)}>
            <View style={[styles.btnTwo, {backgroundColor: this.state.btncolourdefault_2}]}> 
                <Text style={styles.buttonText}>{this.state.btn2Name}</Text>
              </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=> this.btnClick(this.state.btn3Value,3)}>
            <View style={[styles.btnThree, {backgroundColor: this.state.btncolourdefault_3}]}>
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
        justifyContent: 'center'
      },
    
    btnOne:{
        borderRadius:20,
        height: 50,
        marginBottom: 7,
        alignItems: 'center',
        justifyContent: 'center',
        
    },
    btnTwo:{
        borderRadius:20,
        height: 50,
        marginBottom: 7,
        alignItems: 'center',
        justifyContent: 'center',
        
    }, 
    btnThree:{
        borderRadius:20,
        height: 50,
        marginBottom: 7,
        alignItems: 'center',
        justifyContent: 'center',
      //  backgroundColor:  this.state.btncolourdefault_3
    },
    btnstyle:{
      borderRadius:20,
      height: 50,
      marginBottom: 7,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#48d7db'
      
  },
    btnstylecorrect:{
    borderRadius:20,
    height: 50,
    marginBottom: 7,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'green'
},
    buttonText:{
        
        color: 'white',
        textAlign:'center',
        padding:10,
        fontSize:25,
    },

    thumbnail: {
        flex: 1,
        width: undefined,
        height: undefined,
        resizeMode: 'cover'
      }

})


