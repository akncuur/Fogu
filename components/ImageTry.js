import React, { Component } from 'react';
import { View, Image,TouchableHighlight } from 'react-native';

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
    style={{width: 150, height: 150}}
  />
</TouchableHighlight> 
      </View>
    );
  }
}

