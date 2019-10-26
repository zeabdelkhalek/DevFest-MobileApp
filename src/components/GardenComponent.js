import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity , Image} from 'react-native';
import GardenIcon from '../assets/icons/garden.svg';
// import CheckedIcon from '../assets/icons/checked.svg';

class cardComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      card: {
        checked: false
      }
    };
  }
  _onCheck = () => {
    this.props.onPress()
    this.setState(prevState => {
        return {
          card : {
            checked : !prevState.card.checked 
          } 
        }
    })
  }
  render() {
    let icon = <GardenIcon fill={this.state.card.checked ? '#fff' : '#4F6DD8'} style={{ width: 40, height: 30 }} />
    let checkedIconComponent = <Image source={require('../assets/icons/checked.png')} style={{ right: -5 , top : -5 , position : 'absolute', width: 20, height: 20 , zIndex : 10 }} />
    return (
      <TouchableOpacity onPress={this._onCheck} style={{
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        overflow : 'visible',
        width : 80 ,
        marginTop : 6
      }}>
        <View style={{
          height: 70,
          width: 70,
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: 5,
          backgroundColor: this.state.card.checked ? '#4F6DD8' : '#fff',
          // shadowColor: "#000000",
          // shadowOpacity: 0.8,
          // shadowRadius: 2,
          // shadowOffset: {
          //   height: 1,
          //   width: 0
          // },
          elevation : 5
          // padding : 15
        }} >
          { this.state.card.checked ? checkedIconComponent : null }
          {icon}
        </View>
        <Text style={{ marginTop: 5 }} >
          Gardens
            </Text>
      </TouchableOpacity >

    );
  }
}



export default cardComponent;
