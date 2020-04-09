import React from 'react';
import {View, Text, StyleSheet} from 'react-native';


const Header = props =>{
    return(
        <View style={ styles.header}>
            <Text style ={styles.headerTitle}>{props.title}</Text>
        </View>
    )

};


const styles= StyleSheet.create({
header:{
    width: '100%',
    height: 30,
    paddingTop: 5,
    backgroundColor: '#38b6ff',
    alignItems: 'center',
    justifyContent: 'center'

},
headerTitle:{
    color: 'white',
    fontSize: 18,
}

});

export default Header;