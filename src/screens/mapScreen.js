import React, { Component } from 'react';

import { View, TextInput, Image, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import GardenComponent from "../components/GardenComponent";
import ChillingComponent from "../components/ChillingComponent";
import HotelsComponent from "../components/HotelsComponent";
import BarComponent from "../components/BarComponent";
import ParkingComponent from "../components/ParkingComponent";
import GymComponent from "../components/GymComponent";
import RestaurantsComponent from "../components/RestaurantsComponent";
import TransportComponent from "../components/TransportComponent";
import PlusIcon from "../assets/icons/plus.svg"
import SearchIcon from "../assets/icons/search.svg"
import Filter from "../assets/icons/filter.svg"
// import CardSilder from 'react-native-cards-slider';
import MapView from 'react-native-maps';
import RNGooglePlaces from 'react-native-google-places';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';

import { Marker } from 'react-native-maps';

class mapScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name:'Algiers',
      latitude: 36.753768,
            longitude: 3.05
      ,
      search: '',
      searchText:'Search a place',
      place:'',
      hotels: [
        {
          latitude: 36.7187551,
          longitude: 3.1869592,
          title: "Hotel ibis"
        },
        {
          latitude: 36.7024372,
          longitude: 3.1766576,
          title: "Hotel Mercure"
        },
        {
          latitude: 36.7098628,
          longitude: 3.1596368,
          title: "Hotel Sofitel"
        },
      ],
      gardens: [
        {
          latitude: 36.7024372,
          longitude: 3.1766576,
          title: "Garden 1"
        },
        {
          latitude: 36.7098628,
          longitude: 3.1596368,
          title: "Garden 2"
        },
        
      ],
      category: null
    };
  }
  onPressHotels = () => {
    if (this.state.category === 'hotels') {
      this.setState({
        category: null
      })
    } else {
      this.setState({
        category: 'hotels'
      })
    }
   
  }
  onPressGardens = () => {
    if (this.state.category === 'gardens') {
      this.setState({
        category: null
      })
    } else {
      this.setState({
        category: 'gardens'
      })
    }
   
  }
  _onChange = (data) => {
    this.setState({
      search: data
    })

    // RNGooglePlaces.openAutocompleteModal(
    //   {country: 'DZ', type: 'address'}
    // )
    // .then((place) => {
    //     console.log(place);
    //     // place represents user's selection from the
    //     // suggestions and it is a simplified Google Place object.
    //     this.setState({searchText: place.address});
    // })
    // .catch(error => console.log(error.message));  // error is a Javascript Error object
  }



  render() {
    let myPosition = this.state.latitude ? ( <Marker
      coordinate={{
        latitude: this.state.latitude,
        longitude: this.state.longitude,
      }}

    >
      <View style={{
        backgroundColor: '#000'
      }}>
        <Text style={{ color: '#fff' }}> {this.state.name} </Text>

      </View>
      <Image
        source={require('../assets/images/marker.png')}
      />
    </Marker>) : null ;

    const mapStyle = [
      {
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#f5f5f5"
          }
        ]
      },
      {
        "elementType": "labels.icon",
        "stylers": [
          {
            "visibility": "off"
          }
        ]
      },
      {
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#616161"
          }
        ]
      },
      {
        "elementType": "labels.text.stroke",
        "stylers": [
          {
            "color": "#f5f5f5"
          }
        ]
      },
      {
        "featureType": "administrative.land_parcel",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#bdbdbd"
          }
        ]
      },
      {
        "featureType": "poi",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#eeeeee"
          }
        ]
      },
      {
        "featureType": "poi",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#757575"
          }
        ]
      },
      {
        "featureType": "poi.park",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#e5e5e5"
          }
        ]
      },
      {
        "featureType": "poi.park",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#9e9e9e"
          }
        ]
      },
      {
        "featureType": "road",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#ffffff"
          }
        ]
      },
      {
        "featureType": "road.arterial",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#757575"
          }
        ]
      },
      {
        "featureType": "road.highway",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#dadada"
          }
        ]
      },
      {
        "featureType": "road.highway",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#616161"
          }
        ]
      },
      {
        "featureType": "road.local",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#9e9e9e"
          }
        ]
      },
      {
        "featureType": "transit.line",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#e5e5e5"
          }
        ]
      },
      {
        "featureType": "transit.station",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#eeeeee"
          }
        ]
      },
      {
        "featureType": "water",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#c9c9c9"
          }
        ]
      },
      {
        "featureType": "water",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#9e9e9e"
          }
        ]
      }
    ]

    let hotels = this.state.hotels.map(marker => (
      <Marker
        coordinate={{
          latitude: marker.latitude,
          longitude: marker.longitude,
        }}

      >
        <View style={{
          backgroundColor: '#000'
        }}>
          <Text style={{ color: '#fff' }}> {marker.title} </Text>

        </View>
        <Image
          source={require('../assets/images/marker.png')}
        />
      </Marker>
    ));
    let gardens = this.state.gardens.map(marker => (
      <Marker
        coordinate={{
          latitude: marker.latitude,
          longitude: marker.longitude,
        }}

      >
        <View style={{
          backgroundColor: '#000'
        }}>
          <Text style={{ color: '#fff' }}> {marker.title} </Text>

        </View>
        <Image
          source={require('../assets/images/marker.png')}
        />
      </Marker>
    ));
    // let hotels = this.state.hotels.map(marker => {
    //   <Marker
    //     coordinate={{
    //       latitude : marker.latitude,
    //       longitude : marker.longitude,
    //       title : marker.title
    //     }}
    //   >
    //     <Image
    //       source={require('../assets/images/marker.png')}
    //     />
    //   </Marker>
    // })

    return (

      <View style={{ height: '100%', width: '100%' }} >
         

        <MapView
          style={{ height: '100%', width: '100%', zIndex: 1 }}
          customMapStyle={mapStyle}
          ref={ref => { this.map = ref; }}
          initialRegion={{
            latitude: 36.753768,
            longitude: 3.05,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0922,
          }}

          region={{
            latitude:this.state.latitude,
            longitude:this.state.longitude,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0922,
          }}

          
          
        >
          {this.state.category === 'hotels' ? hotels : null}
          {this.state.category === 'gardens' ? gardens : null}
          {myPosition}
        </MapView>
        <ScrollView style={{
          position: 'absolute',
          top: 100,
          margin: 20,
          zIndex: 1
        }}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          

        >
      
          <GardenComponent key={'1'} onPress={this.onPressGardens} />
          <ChillingComponent key={'2'}/>
          <HotelsComponent key={'3'} onPress={this.onPressHotels} />
          <BarComponent key={'4'}/>
          <GymComponent key={'5'}/>
          <ParkingComponent key={'6'}/>
          <RestaurantsComponent key={'7'}/>
          <TransportComponent key={'8'}/>

        </ScrollView>

        
         <TextInput style={{
          height: 50, width: 240, paddingLeft: 15, paddingRight: 15,
          backgroundColor: "#ffffff",

          borderTopLeftRadius: 5, borderBottomLeftRadius: 5,
          shadowColor: "#000000",
          shadowOpacity: 0.8,
          shadowRadius: 2,
          shadowOffset: {
            height: 1,
            width: 0
          },
          zIndex: 5,
          position: 'absolute',
          elevation: 9,
          marginTop: 50,
          marginLeft: 30,
          alignItems:'center',}}
          underlineColorAndroid="transparent"
          placeholder="Search for a place"
          value={this.state.search}
          onChangeText={text => this._onChange(text)}

         
        ></TextInput>

        <TouchableOpacity style={styles.search} onPress={() => {
         fetch('https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input='+this.state.search+'&inputtype=textquery&fields=photos,formatted_address,name,geometry&key=AIzaSyBWNLHVEqpKvx-NKjGavZnSHhumM4z8AJM')
        .then(response=>response.json())
        .then(resj=>{
          
          this.setState({search:resj.candidates[0].formatted_address, longitude: resj.candidates[0].geometry.location.lng,latitude: resj.candidates[0].geometry.location.lat,name:resj.candidates[0].name})
          
        })
        
        ;
        }}>
          <SearchIcon fill={'#fff'} style={{ width: 16, height: 16 }} />
        </TouchableOpacity>
        <View style={styles.whiteicon}>
          <Filter fill={'#111111'} style={{ width: 16, height: 16 }} />
        </View>
        <TouchableOpacity onPress={() => this.props.navigation.navigate('Add')} style={styles.fab}>
          <PlusIcon fill={'#fff'} style={{ width: 16, height: 16 }} />
        </TouchableOpacity>
      </View>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#fff',
    alignSelf: 'center',
    position: 'absolute'
  },
  search: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "#4F6DD8",
    shadowColor: "#000000",
    shadowOpacity: 0.8,
    position: 'absolute',
    shadowRadius: 2,
    shadowOffset: {
      height: 0,
      width: 3
    },
    elevation: 6,
    height: 50,
    width: 50,
    marginTop: 50,
    borderRadius: 5,
    marginLeft: 300,
    zIndex: 100




  },
  whiteicon: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "#ffffff",
    shadowColor: "#000000",
    shadowOpacity: 1,
    position: 'absolute',
    shadowRadius: 2,
    shadowOffset: {
      height: 0,
      width: 3
    },
    elevation: 6,
    height: 50,
    width: 50,
    marginTop: 50,
    borderRadius: 5,
    marginLeft: 360,


  }

  ,
  fab: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    right: 18,
    bottom: 20,
    backgroundColor: '#111111',
    borderRadius: 5,
    shadowColor: '#00000029',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 6,
    shadowRadius: 1,
  }
});

export default mapScreen;
