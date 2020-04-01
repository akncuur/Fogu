import React, { Component } from 'react';
import { View, Image,TouchableHighlight, StyleSheet, TouchableOpacity,Text } from 'react-native';


const Card= props => {
    return(
        <View style={{...styles.card, ...props.style}}>{props.children}</View>
    )
};

const styles = StyleSheet.create({
    card:{
        width:'100%',
        height: '100%',
        maxWidth: '100%',
        alignItems: 'stretch',
       /* shadowColor: 'black',
        shadowOffset: {width: 0, height: 2},
        shadowRadius: 6,
        shadowOpacity: 0.26,*/
        elevation: 8,
        backgroundColor: 'white',
        padding:0,
        resizeMode : 'contain'
      },

});


export default Card;