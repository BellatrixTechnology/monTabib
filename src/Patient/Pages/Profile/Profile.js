import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, SafeAreaView, TouchableOpacity } from 'react-native';
import { Avatar } from 'react-native-elements';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { styling } from './styling';
import AsyncStorage from '@react-native-async-storage/async-storage';

import Icon from 'react-native-vector-icons/AntDesign';

const Profile = (props) => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [userdata, setUSer] = useState('')

    useEffect(() => {
        const unsubscribe = props.navigation.addListener('focus', () => {
            getUser()
        });
        return () => {
            unsubscribe;
        };
    }, [])

    getUser = async () => {
        try {
            let PatData = await AsyncStorage.getItem('PatData');
            let parsed = await JSON.parse(PatData);
            setUSer(parsed)
            getData(parsed)

        }
        catch (error) {
            console.log(error)
        }
    }
    function getData(parsed) {
        fetch('https://montabib.com/loginApp', {
            method: "POST",
            headers: initHeader(),
            body: JSON.stringify(
                {
                    "username": parsed.username,
                    "password": parsed.password
                }
            ),
        }).then((responce) => responce.json()).then((res) => {
            let temp = res.patientid
            fetchrecord(temp)
        });
    }

    async function fetchrecord(temp) {
        fetch('https://montabib.com/api/patients/' + temp,
            {
                method: "GET",
            }).then((res) => res.json()).then((data) => {
                console.log(data)
                setName(data.nom + ' ' + data.prenom)
                setEmail(data.user.username)
                setPhone(data.telephone)

            })
    }
    function initHeader() {
        let auth = {
            'Content-Type': "application/json",
        };
        return auth;
    }
    return (
        <SafeAreaView style={styling.safeContainer}>
            <View style={styling.mainContainer}>
                <View style={styling.headView}>
                    <View style={styling.avatarView}>
                        {/* <Icon name='camera' color='white' size={30} /> */}
                    </View>

                    <TouchableOpacity style={styling.editOpacity} onPress={() => {


                        props.navigation.navigate('EProfile')
                    }}>
                        <Text style={styling.editTXT}>Edit profile</Text>
                    </TouchableOpacity>

                </View>


                <View style={styling.nameView}>

                    <Text style={styling.nameTXT}>{name}</Text>

                </View>
                <View style={styling.innerView}>
                    <View style={styling.emailView}>
                        <Text style={styling.headTXT}>Email</Text>
                        <Text style={styling.labelTXT}>{email}</Text>
                    </View>
                    <View style={styling.emailView}>
                        <Text style={styling.headTXT}>Number</Text>
                        <Text style={styling.labelTXT}>{phone}</Text>
                    </View>

                </View>


            </View>
        </SafeAreaView>
    )
}
export default Profile;