import React, { Component } from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from "react-navigation-stack";
import mainScreen from '../screens/mainScreen';

// import SplashScreen from 'react-native-splash-screen';

// Manifest of possible screens
const AppNavigator = createStackNavigator(
	{
		Main: { screen: mainScreen },
	},
	{
		// Default config for all screens
		headerMode: 'none',
		initialRouteName: 'Main'
	}
);

let Navigation = createAppContainer(AppNavigator);

export default class App extends Component {
	render() {
		return (
			<Navigation />
		);
	}
}
