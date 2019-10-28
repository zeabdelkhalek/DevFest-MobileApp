import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import SearchIcon from "../assets/icons/search.svg"
import Location from "../assets/icons/location.svg"
import BackIcon from "../assets/icons/back.svg"
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
class addRecScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            rate : {
                checked : false , 
                number : null
            }
        };
    }

    onRate = (num) => {
        this.setState({
            rate : {
                checked : true , 
                number : num
            }
        })
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
        return (
            <View style={styles.viewContainer}>
                <View style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'flex-start',
                    marginTop: 20
                }} >
                    <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
                        <BackIcon fill={'#111111'} style={{ width: 16, height: 16 }} />
                    </TouchableOpacity>
                    <Text style={styles.headerTitle}> Add a recommandation </Text>
                </View>

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
                    zIndex: 8
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
                    <Text style={styles.subTitle}> Select proprieties </Text>
                </View>

                <ScrollView style={{
                    // position: 'absolute',
                    // top: 160,
                    marginTop: 20,
                    zIndex: 8,
                    width: '100%',
                    height : 250
                }}
                    showsHorizontalScrollIndicator={false}
                >
                    <PropertyComponent1 />
                    <PropertyComponent2 />
                    <PropertyComponent3 />
                    <PropertyComponent4 />
                    <PropertyComponent5 />
                    <PropertyComponent6 />


                </ScrollView>
                <View style={{
                    // flexDirection: 'row',
                    // alignItems: 'center',
                    // justifyContent: 'flex-start',
                    marginTop: 20
                }} >
                    <Text style={styles.subTitle}> Rate it </Text>
                    <View style={styles.ratesContainer}>
                        <TouchableOpacity onPress={() => this.onRate(1)} style={[styles.cardRate , { backgroundColor : this.state.rate.number === 1 ? '#4F6DD8' :'#fff'} ]} >
                            <Text style={[styles.cardText , { color : this.state.rate.number === 1 ? '#fff' :'#000'} ]} >1-2</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => this.onRate(3)} style={[styles.cardRate , { backgroundColor : this.state.rate.number === 3 ? '#4F6DD8' :'#fff'} ]} >
                            <Text style={[styles.cardText , { color : this.state.rate.number === 3 ? '#fff' :'#000'} ]} >3-4</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => this.onRate(5)} style={[styles.cardRate , { backgroundColor : this.state.rate.number === 5 ? '#4F6DD8' :'#fff'} ]} >
                            <Text style={[styles.cardText , { color : this.state.rate.number === 5 ? '#fff' :'#000'} ]} >5</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => this.onRate(6)} style={[styles.cardRate , { backgroundColor : this.state.rate.number === 6 ? '#4F6DD8' :'#fff'} ]} >
                            <Text style={[styles.cardText , { color : this.state.rate.number === 6 ? '#fff' :'#000'} ]} >6-7</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => this.onRate(8)} style={[styles.cardRate , { backgroundColor : this.state.rate.number === 8 ? '#4F6DD8' :'#fff'} ]} >
                            <Text style={[styles.cardText , { color : this.state.rate.number === 8 ? '#fff' :'#000'} ]} >8</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => this.onRate(10)} style={[styles.cardRate , { backgroundColor : this.state.rate.number === 10 ? '#4F6DD8' :'#fff'} ]} >
                            <Text style={[styles.cardText , { color : this.state.rate.number === 10 ? '#fff' :'#000'} ]} >10</Text>
                        </TouchableOpacity>
                    </View>

                </View>

                <View style={{

                    marginTop: 20
                }}  >
                    <TouchableOpacity style={styles.blockButton} onPress={
                        () =>  {
                            this.setState({search:''})
                            alert('Your review has been successfully added')
                        }
                    }>
                        <Text style={styles.textButton} >Add the review</Text>

                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    ratesContainer: {
        marginTop: 20 , 
        flexDirection: 'row' ,
        justifyContent : 'space-around' ,
        alignItems: 'center',
    },
    cardRate: {
        padding: 15,
        marginLeft : 3 ,
        marginRight : 3 ,
        width: 50,
        height: 50,
        borderRadius: 5,
        borderColor: '#000',
        // borderWidth: 2,
        justifyContent: 'center',
        alignItems: 'center',
        // shadowColor: '#000',
        // shadowOffset: { width: 0, height: 3 },
        // shadowOpacity: 6,
        // shadowRadius: 1,
        padding: 12,
        elevation : 5
    },
    cardText: {
        fontSize: 15,
        fontFamily: 'ITC-Med',
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
        width: '100%',
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

export default addRecScreen;
