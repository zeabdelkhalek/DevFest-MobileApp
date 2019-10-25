import React, { Component } from 'react';
import { View, Text, StyleSheet , TouchableOpacity } from 'react-native';
import CardComponent from "../components/CardComponent";
import PlusIcon from "../assets/icons/plus.svg"
// import CardSilder from 'react-native-cards-slider';

class mapScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={{ height: '100%', width: '100%' }} >
        <CardSilder>
          <CardComponent />
          <CardComponent />
          <CardComponent />
          <CardComponent />
          <CardComponent />
          <CardComponent />
          <CardComponent />
          <CardComponent />
        </CardSilder>
        <TouchableOpacity style={styles.fab}>
          <PlusIcon fill={'#fff'} style={{ width: 16, height: 16 }} />
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  fab: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    right: 18,
    bottom: 20,
    backgroundColor: '#FFB53E',
    borderRadius: 5,
    shadowColor: '#00000029',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 6,
    shadowRadius: 1,
  }
});

export default mapScreen;
