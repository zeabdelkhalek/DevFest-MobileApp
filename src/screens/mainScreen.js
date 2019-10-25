import React, { Component } from 'react';
import { View, Text , StyleSheet} from 'react-native';

class mainScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View>
        <Text> mainScreen z zdz </Text>
        <View style={styles.fab}>
          <Text>dfjk</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  fab : {
    width : 40 , 
    height : 40 , 
    position : 'absolute',
    right : 18 , 
    bottom : 70,
    backgroundColor : '#FFB53E' , 
    borderRadius: 5,
    shadowColor: '#00000029',
			shadowOffset: { width: 0, height: 3 },
			shadowOpacity: 6,
			shadowRadius: 1,
  }
});

export default mainScreen;
