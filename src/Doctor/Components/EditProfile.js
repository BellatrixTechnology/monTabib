import React, { useState } from 'react';
import { StyleSheet, View, TouchableOpacity, ToastAndroid, ScrollView, Image } from 'react-native';
import { Text, Input } from 'react-native-elements';
import { Avatar } from 'react-native-elements';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

import Icon from 'react-native-vector-icons/AntDesign';

const EditProfile = (props) => {
    // const myIcon = (<Icon name="rocket" size={30} color="#900" />)

    return (
        <View style={styles.container}>
            <View style={styles.innerView}>
                <Icon.Button name="left" style={styles.IconButton} color='black' size={30}
                    onPress={() => {
                        props.navigation.push('Profile')
                    }}
                >

                </Icon.Button>

                <Text style={styles.label}> Edit Profile</Text>

            </View>
            <View style={styles.avatarView}>
                <Avatar
                    size="large"
                    source={{
                        uri:
                            'https://www.tm-town.com/assets/default_male600x600-79218392a28f78af249216e097aaf683.png',
                    }}
                    activeOpacity={0.7}
                    rounded
                    containerStyle={styles.avatarStyles}
                    titleStyle={{ color: 'black' }}
                >
                    <Avatar.Accessory size={40} />
                </Avatar>
            </View>
            <View style={styles.dataView}>
                <Input
                    placeholder='Name'
                />
                <Input
                    placeholder='Email'
                />
            </View>

            <TouchableOpacity style={styles.buttonView}>
                <Text>Update</Text>
            </TouchableOpacity>

        </View>
    )

}



const styles = StyleSheet.create({
    container: {
        width: wp('100%'),
        height: hp('100%'),
        alignItems: 'center',

    },
    innerView: {
        padding: 10,
        height: hp('10%'),
        width: wp('100%'),
        alignItems: 'center',
        flexDirection: 'row',
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
        marginLeft: 70
    },
    avatarView: {
        height: hp('25%'),
        width: wp('50%'),
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
        borderRadius: 15,
        width: wp('30%'),
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 10,
        marginTop: 20
    },
    avatarStyles: {
        backgroundColor: 'grey',
        height: 150,
        width: 150,
        borderRadius: 500
    },

})
export default EditProfile; 