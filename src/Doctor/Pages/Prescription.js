import React, { useState } from 'react';
import { StyleSheet, View, TouchableOpacity, ToastAndroid, ScrollView, Image } from 'react-native';
import { Text, Input } from 'react-native-elements';
import { Avatar } from 'react-native-elements';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

import Icon from 'react-native-vector-icons/Octicons';
import Icons from 'react-native-vector-icons/AntDesign';

const Prescription = (props) => {
    // const myIcon = (<Icon name="rocket" size={30} color="#900" />)

    return (
        <View style={styles.container}>
            <View style={styles.innerView}>
                <Text style={styles.label}>Prescription</Text>
            </View>
            <View style={styles.avatarView}>

                <View style={styles.textView}>
                    <Icons name='arrowright' size={22} />
                    <Text style={styles.labeltag}>  This is My Prescription</Text>

                </View>

            </View>

            <View style={styles.innerView2}>
                <TouchableOpacity style={styles.continueView}>
                    <Icons name='pluscircleo' size={20} />
                    <Text style={styles.label}>Add</Text>
                </TouchableOpacity>
            </View>
        </View>
    )

}



const styles = StyleSheet.create({
    container: {
        width: wp('100%'),
        height: hp('100%'),
        alignItems: 'center'
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
        height: hp('70%'),
        width: wp('90%'),
        padding: 10,
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
    labeltag: {
        fontSize: 20,
        fontWeight: 'bold'
    },
    continueView: {
        backgroundColor: 'white',
        height: 50,
        borderRadius: 20,
        width: wp('50%'),
        alignItems: 'center',
        elevation: 10,
        marginTop: 20,
        flexDirection: 'row',
        justifyContent: 'space-evenly'

    },
    innerView2: {
        height: hp('10%'),
        width: wp('80%'),
        alignItems: 'center',
        justifyContent: 'center',
    },
    textView: {
        flexDirection: 'row',
        width: 350,
        alignContent: 'center'
    }

})
export default Prescription; 