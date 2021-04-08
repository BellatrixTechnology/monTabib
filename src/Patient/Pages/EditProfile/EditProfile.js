import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, SafeAreaView, TouchableOpacity } from 'react-native';
import { Avatar, Input } from 'react-native-elements';
import { styling } from './styling';

import Icon from 'react-native-vector-icons/AntDesign';

const EditProfile = ({ props }) => {

    useEffect(() => {
        fetch('https://www.montabib.com/loginApp', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                "username": 'Daniyalrathore1400@gmail.com',
                "password": 'daniyal'
            })
        }).then((response) => response.json())
            .then((responseJson) => {
                console.log(responseJson, 'res JSON');
                if (responseJson.error == 'Invalid credentials.') {
                }
                else {
                    let id = 'https://montabib.com/api/patients/' + responseJson.patientid
                    console.log(id)
                    fetch(id, {
                        method: 'GET'

                    }).then((res) => {
                        console.log(res)
                        if (res.ok == true) {
                            res.json().then((data) => { console.log('kk', data) }).catch((error) => { console.log(error) })
                        } else {
                            // ToastAndroid.show("Error! Check your details ", ToastAndroid.SHORT);
                        }
                    })
                        .catch((error) => {
                            console.log(error)
                            // ToastAndroid.show(error, ToastAndroid.SHORT);
                        });
                }
            })
            .catch((error) => {
                console.error('asdasd', error);
            });
    }, [])
    return (
        <SafeAreaView style={styling.safeContainer}>
            <View style={styling.heading}>
                <Icon.Button name='left' size={28} backgroundColor={'white'} color='black' onPress={() => {
                    // props.navigation.push('Profile')
                }}></Icon.Button>
                <View style={styling.headingTXTView}>
                    <Text style={styling.headingTXT}>Edit Profile</Text>
                </View>
            </View>

            <View style={styling.mainContainer}>
                <View style={styling.headView}>

                    <Avatar
                        size="large"
                        source={{
                            uri:
                                'https://www.tm-town.com/assets/default_male600x600-79218392a28f78af249216e097aaf683.png',
                        }}
                        activeOpacity={0.7}
                        rounded
                        containerStyle={styling.avatarStyles}
                        titleStyle={{ color: 'black' }}

                    >
                        <Avatar.Accessory size={40} />
                    </Avatar>


                </View>
                <View style={styling.innerView}>
                    {/* <View style={styling.emailView}> */}
                    <Input
                        label='Name'
                        placeholder='Name'
                        value='Daniyal'
                    />
                    <Input
                        label='Email'
                        placeholder='Email'
                        value='daniyalrathore14@gmail.com'
                    />
                    <Input
                        label='Mobile'
                        placeholder='Mobile Number'
                        value='03446021955'
                    />


                </View>

                <View style={styling.signupView}>
                    <TouchableOpacity style={styling.signupOpacity}>
                        <Text style={styling.signupText}>Update</Text>
                    </TouchableOpacity>
                </View>


            </View>

        </SafeAreaView >
    )
}
export default EditProfile;