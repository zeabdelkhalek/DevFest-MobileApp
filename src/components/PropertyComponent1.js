import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity , Image} from 'react-native';
import GardenIcon from '../assets/icons/1.svg';
// import CheckedIcon from '../assets/icons/checked.svg';
import RoundCheckbox from 'rn-round-checkbox';


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
    this.setState(prevState => {
        return {
          card : {
            checked : !prevState.card.checked 
          } 
        }
    })
  }
  render() {
    let icon = <GardenIcon fill={this.state.card.checked ? '#fff' : '#4F6DD8'} style={{ width: 24, height: 30 }} />
    let checkedIconComponent = <Image source={require('../assets/icons/checked.png')} style={{ right: -5 , top : -5 , position : 'absolute', width: 20, height: 20 , zIndex : 10 }} />
    return (
      <TouchableOpacity onPress={this._onCheck} style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        overflow : 'visible',
        width : 350,
        flex : 1,
        margin : 6

      }}>
          <View style={{
                flex : 2 ,
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'flex-start',
          }}>
          <View style={{
          height: 50,
          width: 50,
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: 5,
          backgroundColor: this.state.card.checked ? '#4F6DD8' : '#fff',
          elevation : 5

        //   shadowColor: "#000000",
        //   shadowOpacity: 0.8,
        //   shadowRadius: 2,
        //   shadowOffset: {
        //     height: 1,
        //     width: 0
        //   },
        //   elevation : 9
          // padding : 15
        }} >
          {/* { this.state.card.checked ? checkedIconComponent : null } */}
          {icon}
        </View>
        <Text style={{ marginLeft : 15 , fontFamily : this.state.card.checked ? 'ITC-bold'  : 'ITC-Med' , marginTop: 5 }} >
        Ramp at the door
            </Text>
          </View>
       
            <RoundCheckbox
            style={{
                flex : 9
            }}
  checked={this.state.card.checked}
  onValueChange={this._onCheck}
/>
      </TouchableOpacity >

    );
  }
}



export default cardComponent;
