import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import SearchIcon from "../assets/icons/search.svg"
import FilterIcon from "../assets/icons/filter.svg"
import BackIcon from "../assets/icons/back.svg"

class addRecScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <View style={styles.viewContainer}>
                <View style={{
                    flexDirection : 'row' , 
                    alignItems : 'center' , 
                    justifyContent: 'flex-start',
                    marginTop : 20
                }} >
                <BackIcon fill={'#111111'} style={{ width: 16, height: 16 }} />
                <Text style={styles.headerTitle}> Add a recommandation </Text>
                </View>
               
                <View style={styles.searchBarContainer}>
                    <TextInput
                        underlineColorAndroid="transparent"
                        placeholder="Search for a place"
                        value={this.state.search}
                        onChangeText={text => this._onChange(text)}
                        style={{
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
                            elevation: 9,
                            // marginLeft: 30

                        }}
                    ></TextInput>

                    <TouchableOpacity style={styles.search}>
                        <SearchIcon fill={'#fff'} style={{ width: 16, height: 16 }} />
                    </TouchableOpacity>
                    <View style={styles.whiteicon}>
                        <FilterIcon fill={'#111111'} style={{ width: 16, height: 16 }} />
                    </View>
                </View>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    headerTitle: {
        fontSize: 16,
        fontFamily: 'ITC-bold'
    },
    viewContainer: {
        padding: 25 ,
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
        marginLeft : 4 ,
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
        marginTop : 15,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
    }
})

export default addRecScreen;
