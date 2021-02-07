import React, { useState } from 'react';
import { StyleSheet, View, TouchableOpacity, ToastAndroid, ScrollView, Image } from 'react-native';
import { Text, Input } from 'react-native-elements';
import { Avatar } from 'react-native-elements';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

import Icon from 'react-native-vector-icons/Octicons';

const SunscribeScreen = (props) => {
    // const myIcon = (<Icon name="rocket" size={30} color="#900" />)

    return (
        <View style={styles.container}>
            <View style={styles.innerView}>
                <Text style={styles.label}>Subscription</Text>
            </View>
            <View style={styles.avatarView}>

            </View>
            <View style={styles.innerView2}>
                <View style={styles.dataView}>
                    <TouchableOpacity style={styles.buttonView}>
                        <Icon name='primitive-dot' size={20} />
                        <Text style={styles.tagLabel}>Monthly</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttonView}>
                        <Icon name='primitive-dot' size={20} />
                        <Text style={styles.tagLabel}>Yearly</Text>
                    </TouchableOpacity>
                </View>

                <TouchableOpacity style={styles.continueView}>
                    <Text>Continue</Text>
                </TouchableOpacity>
            </View>
        </View>
    )

}



const styles = StyleSheet.create({
    container: {
        width: wp('100%'),
        height: hp('100%'),
    },
    innerView: {
        padding: 10,
        height: hp('10%'),
        width: wp('100%'),
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 2,
        backgroundColor: 'white',
        borderBottomEndRadius: 10,
        borderBottomStartRadius: 10
    },
    IconButton: {

        backgroundColor: 'white',
        color: 'black'
    },
    label: {
        fontSize: 26,
    },
    avatarView: {
        height: hp('35%'),
        width: wp('100%'),
        padding: 20,
        flexDirection: 'row',
    },
    dataView: {

        marginTop: 10,
        height: hp('25%'),
        width: wp('80%'),
        padding: 20,

    },
    buttonView: {
        backgroundColor: 'white',
        height: 50,
        borderRadius: 5,
        width: wp('70%'),
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 10,
        marginTop: 20,
        // padding: 10,
        flexDirection: 'row',
        justifyContent: 'space-evenly'
    },
    avatarStyles: {
        backgroundColor: 'grey',
        height: 150,
        width: 150,
        borderRadius: 500
    },
    tagLabel: {
        fontSize: 20,
        fontWeight: 'bold'
    },
    continueView: {
        backgroundColor: 'white',
        height: 50,
        borderRadius: 20,
        width: wp('50%'),
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 10,
        marginTop: 20,


    },
    innerView2: {
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        height: hp('55%'),
        width: wp('100%'),
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 10
    }

})
export default SunscribeScreen; 