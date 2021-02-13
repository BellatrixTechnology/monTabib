import React, { useState } from 'react';
import { StyleSheet, View, TouchableOpacity, SafeAreaView, ScrollView, Image } from 'react-native';
import { Text, Input } from 'react-native-elements';
import { Avatar } from 'react-native-elements';
import Icon from 'react-native-vector-icons/AntDesign';
import { hp, wp } from '../Global/Styles/Scalling';


const Main = (props) => {
    return (
        <SafeAreaView style={styles.flexContainer}>
            <View style={styles.mainContainer}>
                <View>
                    <TouchableOpacity style={styles.docOpacity}
                        onPress={() => {
                            props.navigation.navigate('Home')
                        }}
                    >
                        <Text style={styles.DTXT}>Doctor</Text>
                    </TouchableOpacity>
                </View>
                <View>
                    <TouchableOpacity style={styles.docOpacity}
                        onPress={() => {
                            props.navigation.navigate('LoginIn')
                        }}
                    >
                        <Text style={styles.DTXT}>Patient</Text>
                    </TouchableOpacity>

                </View>
            </View>
        </SafeAreaView>
    )

}
const styles = StyleSheet.create({
    flexContainer: {
        flex: 1
    },
    mainContainer: {
        height: hp(80),
        width: wp(100),
        padding: 20,
        justifyContent: 'center'
    },
    docOpacity: {
        width: wp(50),
        height: hp(8),
        backgroundColor: '#3f4079',
        alignSelf: 'center',
        marginTop: 50,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center'

    },
    DTXT: {
        fontSize: 22,
        color: 'white'
    }


})

export default Main;