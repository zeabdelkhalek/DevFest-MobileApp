import React, { Component } from 'react';

import { View, TextInput, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
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
import FilterIcon from "../assets/icons/filter.svg"
// import CardSilder from 'react-native-cards-slider';
import MapView from 'react-native-maps';
import RNGooglePlaces from 'react-native-google-places';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';

class mapScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: '',
      searchText:'Search a place',
      place:''
    };
  }

  openSearchModal() {
    RNGooglePlaces.openAutocompleteModal({
      country: 'DZ',
      type: 'address'
      }, ['placeID', 'location', 'name', 'address', 'types', 'openingHours', 'plusCode', 'rating', 'userRatingsTotal', 'viewport']
    )
    .then((place) => {
      console.log(place);
      this.setState({searchText: place.address});
    })
    .catch(error => console.log(error.message));

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

  _onChange = (data) => {
 this.setState({search:data})
  }

  render() {
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
    
    return (

      <View style={{ height: '100%', width: '100%' }} >
         

        <MapView
          style={{ height: '100%', width: '100%' , zIndex : 1 }}
          customMapStyle={mapStyle}
          ref={ref => { this.map = ref; }}
          initialRegion={{
            latitude: 37.600425,
            longitude: -122.385861,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0922,
          }}
        >

        </MapView>
        <ScrollView style={{
          position: 'absolute',
          top: 100,
          margin: 20,
          zIndex : 1
        }}
          horizontal={true}
          showsHorizontalScrollIndicator={false}


        >
       
            <GardenComponent />
            <ChillingComponent />
            <HotelsComponent />
            <BarComponent />
            <GymComponent />
            <ParkingComponent />
            <RestaurantsComponent />
            <TransportComponent />

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
         fetch('https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input='+this.state.search+'&inputtype=textquery&fields=photos,formatted_address,name&key=AIzaSyBWNLHVEqpKvx-NKjGavZnSHhumM4z8AJM')
        .then(response=>response.json())
        .then(resj=>{
          console.warn(resj.candidates[0]);
          this.setState({search:resj.candidates[0].formatted_address})
        })
        
        ;
        }}>
          <SearchIcon fill={'#fff'} style={{ width: 16, height: 16 }} />
        </TouchableOpacity>
        <View style={styles.whiteicon}>
          <FilterIcon fill={'#111111'} style={{ width: 16, height: 16 }} />
        </View>
        <TouchableOpacity style={styles.fab}>
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
    marginLeft: 268,
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
    marginLeft: 325,


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
    backgroundColor: '#FFB53E',
    borderRadius: 5,
    shadowColor: '#00000029',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 6,
    shadowRadius: 1,
  }
});

export default mapScreen;
