import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, ScrollView, Image } from 'react-native';
import SearchIcon from "../assets/icons/search.svg"
import Location from "../assets/icons/location.svg"
import Location2 from "../assets/icons/loc.svg"
import BackIcon from "../assets/icons/back.svg"
import PlusIcon from "../assets/icons/plus.svg"

import Star from "../assets/icons/star.svg"
import GardenComponent from "../components/GardenComponent";
import ChillingComponent from "../components/ChillingComponent";
import HotelsComponent from "../components/HotelsComponent";
import BarComponent from "../components/BarComponent";
import ParkingComponent from "../components/ParkingComponent";
import GymComponent from "../components/GymComponent";
import RestaurantsComponent from "../components/RestaurantsComponent";
import TransportComponent from "../components/TransportComponent";
import PropertyComponent1 from "../components/PropertyComponent1";
import PropertyComponent2 from "../components/PropertyComponent2";
import PropertyComponent3 from "../components/PropertyComponent3";
import PropertyComponent4 from "../components/PropertyComponent4";
import PropertyComponent5 from "../components/PropertyComponent5";
import PropertyComponent6 from "../components/PropertyComponent6";
class cardsScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rate: {
        checked: false,
        number: null
      }
    };
  }

  onRate = (num) => {
    this.setState({
      rate: {
        checked: true,
        number: num
      }
    })
  }

  render() {
    return (
      <View style={styles.viewContainer}>
        {/* <View style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'flex-start',
                    marginTop: 20
                }} >
                    <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
                        <BackIcon fill={'#111111'} style={{ width: 16, height: 16 }} />
                    </TouchableOpacity>
                    <Text style={styles.headerTitle}> Add a recommandation </Text>
                </View> */}

        <View style={styles.searchBarContainer}>
          <TextInput
            underlineColorAndroid="transparent"
            placeholder="Search for a place"
            value={this.state.search}
            onChangeText={text => this._onChange(text)}
            style={{
              height: 50, width: '75%', paddingLeft: 15, paddingRight: 15,
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
              elevation: 9,
              // marginLeft: 30

            }}
          ></TextInput>

          <TouchableOpacity style={styles.search}>
            <SearchIcon fill={'#fff'} style={{ width: 16, height: 16 }} />
          </TouchableOpacity>
          <View style={styles.whiteicon}>
            <Location fill={'#fff'} style={{ width: 16, height: 16 }} />
          </View>
        </View>
        <View style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'flex-start',
          marginTop: 20
        }} >
          <Text style={styles.subTitle}> Select Category </Text>
        </View>
        <ScrollView style={{
          // position: 'absolute',
          // top: 160,
          // margin: 20,
          zIndex: 8,
          marginTop: 10
        }}
          horizontal={true}
          showsHorizontalScrollIndicator={false}


        >

          <GardenComponent onPress={()=>console.log('salam')}/>
          <ChillingComponent />
          <HotelsComponent onPress={()=>console.log('salam')}/>
          <BarComponent />
          <GymComponent />
          <ParkingComponent />
          <RestaurantsComponent />
          <TransportComponent />

        </ScrollView>
        <View style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'flex-start',
          marginTop: 20
        }} >
          <Text style={styles.subTitle}> For You </Text>
        </View>

        <ScrollView style={{
          // position: 'absolute',
          // top: 160,
          marginTop: 20,
          zIndex: 8,
          width: '100%',
          height: 400
        }}
          showsVerticalScrollIndicator={false}
          
        >

          <View style={styles.imageCard} >
            <Image resizeMode={'stretch'} style={styles.image} source={require('../assets/images/1.jpg')} />
            <View style={styles.detailsContainer} >
              <Text style={styles.headerTitle} >Hotel Ibis - Alger</Text>
              <View  style={{
                flexDirection  : 'row' , 
                justifyContent : 'flex-start',
                alignItems: 'center',
              }} >
                <Star fill={'#4F6DD8'} style={{ width: 30, height: 30 }} />
                <Star fill={'#4F6DD8'} style={{ width: 30, height: 30 }} />
                <Star fill={'#4F6DD8'} style={{ width: 30, height: 30 }} />
                <Star fill={'#6E6E6E'} style={{ width: 30, height: 30 }} />
                <Star fill={'#6E6E6E'} style={{ width: 30, height: 30 }} />
                <Text style={{ color : '#6E6E6E' , marginLeft : 10 , fontSize : 16}} >2k reviewed this</Text>

              </View>
              <View style={{
                flexDirection  : 'row' , 
                justifyContent : 'flex-start',
                alignItems: 'center',
              }} >
                <Location2 fill={'#6E6E6E'} style={{ width: 20, height: 20 }} />
                <Text style={{ color : '#6E6E6E' ,marginLeft : 10 , fontSize : 16}} >Bab Ezzouar, Alger</Text>

              </View>
            </View>
          </View>



          <View style={styles.imageCard} >
            <Image resizeMode={'stretch'} style={styles.image} source={require('../assets/images/2.jpg')} />
            <View style={styles.detailsContainer} >
              <Text style={styles.headerTitle} >Hotel Mercure - Alger</Text>
              <View  style={{
                flexDirection  : 'row' , 
                justifyContent : 'flex-start',
                alignItems: 'center',
              }} >
                <Star fill={'#4F6DD8'} style={{ width: 30, height: 30 }} />
                <Star fill={'#4F6DD8'} style={{ width: 30, height: 30 }} />
                <Star fill={'#4F6DD8'} style={{ width: 30, height: 30 }} />
                <Star fill={'#6E6E6E'} style={{ width: 30, height: 30 }} />
                <Star fill={'#6E6E6E'} style={{ width: 30, height: 30 }} />
                <Text style={{ color : '#6E6E6E' , marginLeft : 10 , fontSize : 16}} >2.1 reviewed this</Text>

              </View>
              <View style={{
                flexDirection  : 'row' , 
                justifyContent : 'flex-start',
                alignItems: 'center',
              }} >
                <Location2 fill={'#6E6E6E'} style={{ width: 20, height: 20 }} />
                <Text style={{ color : '#6E6E6E' ,marginLeft : 10 , fontSize : 16}} >Staouali , Alger</Text>

              </View>
            </View>
          </View>
          <View style={styles.imageCard} >
            <Image resizeMode={'stretch'} style={styles.image} source={require('../assets/images/3.jpg')} />
            <View style={styles.detailsContainer} >
              <Text style={styles.headerTitle} >Hotel IBIS - Alger</Text>
              <View  style={{
                flexDirection  : 'row' , 
                justifyContent : 'flex-start',
                alignItems: 'center',
              }} >
                <Star fill={'#4F6DD8'} style={{ width: 30, height: 30 }} />
                <Star fill={'#4F6DD8'} style={{ width: 30, height: 30 }} />
                <Star fill={'#6E6E6E'} style={{ width: 30, height: 30 }} />
                <Star fill={'#6E6E6E'} style={{ width: 30, height: 30 }} />
                <Star fill={'#6E6E6E'} style={{ width: 30, height: 30 }} />
                <Text style={{ color : '#6E6E6E' , marginLeft : 10 , fontSize : 16}} >1.1 reviewed this</Text>

              </View>
              <View style={{
                flexDirection  : 'row' , 
                justifyContent : 'flex-start',
                alignItems: 'center',
              }} >
                <Location2 fill={'#6E6E6E'} style={{ width: 20, height: 20 }} />
                <Text style={{ color : '#6E6E6E' ,marginLeft : 10 , fontSize : 16}} >Alger Centre</Text>

              </View>
            </View>
          </View>
          <View style={styles.imageCard} >
            <Image resizeMode={'stretch'} style={styles.image} source={require('../assets/images/4.jpg')} />
            <View style={styles.detailsContainer} >
              <Text style={styles.headerTitle} >Hotel Mercure - Alger</Text>
              <View  style={{
                flexDirection  : 'row' , 
                justifyContent : 'flex-start',
                alignItems: 'center',
              }} >
                <Star fill={'#4F6DD8'} style={{ width: 30, height: 30 }} />
                <Star fill={'#4F6DD8'} style={{ width: 30, height: 30 }} />
                <Star fill={'#6E6E6E'} style={{ width: 30, height: 30 }} />
                <Star fill={'#6E6E6E'} style={{ width: 30, height: 30 }} />
                <Star fill={'#6E6E6E'} style={{ width: 30, height: 30 }} />
                <Text style={{ color : '#6E6E6E' , marginLeft : 10 , fontSize : 16}} >1.1 reviewed this</Text>

              </View>
              <View style={{
                flexDirection  : 'row' , 
                justifyContent : 'flex-start',
                alignItems: 'center',
              }} >
                <Location2 fill={'#6E6E6E'} style={{ width: 20, height: 20 }} />
                <Text style={{ color : '#6E6E6E' ,marginLeft : 10 , fontSize : 16}} >Staouali , Alger </Text>

              </View>
            </View>
          </View>

        </ScrollView>
        <TouchableOpacity onPress={() => this.props.navigation.navigate('Add')} style={styles.fab}>
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
    backgroundColor: '#111111',
    borderRadius: 5,
    shadowColor: '#00000029',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 6,
    shadowRadius: 1,
  },
  detailsContainer: {
    marginLeft: 10,
    padding: 10,
    flexDirection: 'column',
    height: '100%',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  image: {
    width: 120,
    height: 100,
    borderTopRightRadius: 5,
    borderBottomRightRadius: 5,
  },
  imageCard: {
    width: '100%',
    // shadowColor: '#000',
    borderColor: '#00000029',
    // shadowOffset: { width: 0, height: 6 },
    // shadowRadius: 1,
    elevation: 1,
    height: 120,
    // borderWidth: 2,
    paddingBottom: 10,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginTop : 10 ,
    paddingTop: 10
    // borderColor : 'red'
  },
  headerTitle: {
    fontSize: 20,
    fontFamily: 'ITC-bold',
  },
  textButton: {
    textAlign: 'center',
    color: "#fff",
    fontSize: 16,
    fontFamily: 'ITC-Med'
  },
  blockButton: {
    backgroundColor: '#4F6DD8',
    borderRadius: 5,
    shadowColor: '#000',
    borderColor: 'red',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 6,
    shadowRadius: 1,
    padding: 12,
    elevation: 5
  },
  subTitle: {
    fontSize: 16,
    color: "#6E6E6E",
    fontFamily: 'ITC-Light'
  },
  viewContainer: {
    height : '100%',
    width: '100%',
    paddingTop: 0,
    padding: 25,
  },
  search: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "#4F6DD8",
    shadowColor: "#000000",
    shadowOpacity: 0.8,
    shadowRadius: 2,
    shadowOffset: {
      height: 0,
      width: 3
    },
    elevation: 6,
    height: 50,
    width: 50,
    borderRadius: 5,
    zIndex: 100
  },
  whiteicon: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "#111111",
    shadowColor: "#000000",
    shadowOpacity: 1,
    marginLeft: 4,
    shadowRadius: 2,
    shadowOffset: {
      height: 0,
      width: 3
    },
    elevation: 6,
    height: 50,
    width: 50,
    borderRadius: 5,
  },
  searchBarContainer: {
    marginTop: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  }
})

export default cardsScreen;
