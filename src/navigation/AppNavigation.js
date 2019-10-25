import React, { Component } from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from "react-navigation-stack";
import mainScreen from '../screens/mainScreen';
import mapScreen from '../screens/mapScreen';
import cardsScreen from '../screens/cardsScreen';
import profileScreen from '../screens/profileScreen';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { Image , Text} from "react-native";
import MapIcon from '../assets/icons/map.svg' ;
import LayerIcon from '../assets/icons/layers_2.svg' ;
import ProfileIcon from '../assets/icons/profile_close_2.svg' ;
// import SplashScreen from 'react-native-splash-screen';
import { TabBar } from "react-native-animated-nav-tab-bar";

// Manifest of possible screens
// const AppNavigator = createStackNavigator(
// 	{
// 		Main: { screen: mainScreen },
// 	},
// 	{
// 		// Default config for all screens
// 		headerMode: 'none',
// 		initialRouteName: 'Main'
// 	}
// );

const RouteConfigs = {
	Map: {
		screen: mapScreen,
		navigationOptions: {
			title: 'Map',
			tabBarIcon: ({tintColor}) => (
				<MapIcon fill={tintColor} style={{ width: 16, height: 16 }} />
			) , 
		}
	},
	Cards: {
		screen: cardsScreen,
		navigationOptions: {
			title: 'Cards',
			tabBarIcon: ({tintColor}) => (
				<LayerIcon fill={tintColor}  style={{ width: 16, height: 16 }} />
			) ,
		}
	},
	Profile: {
		screen: profileScreen,
		navigationOptions: {
			title: 'Profile',
			tabBarIcon: ({tintColor}) => (
				<ProfileIcon fill={tintColor}  style={{ width: 16, height: 16 }} />
			),
		}
	}
}

const TabNavigatorConfig = {
	initialRouteName: 'Map',
	// navigationOptions : ({navigation}) => ({
	// 	tabBarLabel : ({focused}) => {
	// 		const { routeName } = navigation.state ;
	// 		switch (routeName) {
	// 			case 'Map':
	// 				return focused ? ( <Text>{routeName}</Text> ) : null
	// 				break;
			
	// 			default:
	// 				return null ;
	// 				break;
	// 		}
	// 	}
	// }),
	tabBarOptions : {
		activeTintColor : "#4F6DD8" , 
		inactiveTintColor : "#111111" , 
		style : {
			// height : 60 , 
			shadowColor: '#000',
			shadowOffset: { width: 0, height: -2 },
			shadowOpacity: 6,
			shadowRadius: 1,  
			borderColor : 'red'
		}
		// activeBackgroundColor : '#4F6DD8'
	} , 
	tabBarComponent: props => <TabBar
                activeColors={'#ffffff'} // or activeColors={'#e6b580'}
                activeTabBackgrounds={'#4F6DD8'} // or activeTabBackgrounds={'#ede7e6'}
                {...props}
            />,

}
const bottomTabNavigator = createBottomTabNavigator(RouteConfigs, TabNavigatorConfig);

let Navigation = createAppContainer(bottomTabNavigator);

export default class App extends Component {
	render() {
		return (
			<Navigation />
		);
	}
}
