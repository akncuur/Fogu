import React, { Component } from 'react';
import { View, StyleSheet, Text, Button } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

const StartGameScreen= props => {
    return(
        <View style={styles.centeredView}>
            <View style={styles.modalView}>
                <TouchableOpacity style={styles.modalText} title='Play' onPress={()=> { props.navigation.push('FOGU')}}>
                <View style={styles.openButton}>
                    <Text style={styles.textStyle}>
                        Play
                    </Text>
                </View>
                </TouchableOpacity>
            </View>       
        </View>
    )
};

StartGameScreen.navigationOptions={
    headerShown:false
}

const styles = StyleSheet.create({
    centeredView: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
     
    },
    modalView: {
     width: "100%",
      height: "100%",
      margin: 20,
      backgroundColor: "#38b6ff",
      //borderRadius: 20,
      padding: 35,
      justifyContent: "center",
      alignItems: "center",
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        width: 0,
        height: 2
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5,
      resizeMode: "contain"
    },
    openButton: {
        borderWidth:1,
        borderColor:'rgba(0,0,0,0.2)',
        alignItems:'center',
        justifyContent:'center',
        width:150,
        height:150,
        backgroundColor:'#fff',
        borderRadius:75,
        fontSize: 45
    },
    textStyle: {
      color: "black",
      fontWeight: "bold",
      textAlign: "center",
      justifyContent: "center",
      alignItems: "center",
      fontSize: 45
    },
    modalText: {
      marginBottom: 15,
      textAlign: "center",
      color: "white",
      justifyContent: "center",
      alignItems: "center",
      fontSize: 35
      }
  });


export default StartGameScreen;
