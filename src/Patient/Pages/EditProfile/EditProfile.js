import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, SafeAreaView, TouchableOpacity, ActivityIndicator } from 'react-native';
import { Avatar, Input } from 'react-native-elements';
import { styling } from './styling';
import AsyncStorage from '@react-native-community/async-storage';
import Icon from 'react-native-vector-icons/AntDesign';
import { ScrollView } from 'react-native-gesture-handler';
import { ToastAndroid } from 'react-native';

const EditProfile = (props) => {
    const [name, setName] = useState('')
    const [last, setLast] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [id, setId] = useState('')
    const [userId, setUID] = useState('')
    const [gender, setGender] = useState('')
    const [dob, setDob] = useState('')
    const [isLoading, setLoading] = useState(false)
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
            let parsed = JSON.parse(PatData);
            setUSer(parsed);
            console.log('sdfsd', parsed)
            get(parsed)

        }
        catch (error) {
            console.log(error)
        }
    }
    function initHeader() {
        let auth = {
            'Content-Type': "application/json",
        };
        return auth;
    }
    const get = (parsed) => {
        console.log(parsed)
        fetch(`https://montabib.com/loginApp`, {
            method: "POST",
            headers: initHeader(),
            body: JSON.stringify(
                {
                    "username": parsed.username,
                    "password": parsed.password
                }
            ),
        }).then((responce) => responce.json()).then((res) => {
            setId(res.patientid)
            setUID(res.userid)
            console.log(res.userid)
            fetch(`https://montabib.com/api/patients/` + res.patientid,
                {
                    method: "GET",
                }).then((res) => res.json()).then((data) => {
                    setName(data.nom)
                    setEmail(data.username)
                    setPhone(data.telephone)
                    setLast(data.prenom)
                    setDob(data.dateNaissance)
                    setGender(data.sexe)
                })
        });
    }
    function setValue() {
        console.log(dob, phone, gender, last, name, userId)
        fetch(`https://montabib.com/loginApp`, {
            method: "POST",
            headers: initHeader(),
            body: JSON.stringify(
                {
                    "username": userdata.username,
                    "password": userdata.password
                }
            ),
        }).then((responce) => responce.json()).then((res) => {
            console.log(res)
            fetch('https://www.montabib.com/api/patients/' + id, {
                method: "PUT",
                headers: initHeader(),
                body: JSON.stringify({
                    "nom": name.trim(),
                    "prenom": last.trim(),
                    "sexe": gender.trim(),
                    "telephone": phone.trim(),
                    "user": "/api/users/" + userId,
                    "dateNaissance": dob.trim()
                })
            }).then((ress) => {
                console.log(ress)
                ress.json()
            }).then((data) => {
                console.log(data)
                setLoading(false)
                ToastAndroid.showWithGravity(
                    "Profile Updated",
                    ToastAndroid.SHORT,
                    ToastAndroid.BOTTOM
                )
                // props.navigation.navigate('Home')
            }).catch((err) => { console.log(err) })
        });
    }
    return (
        <SafeAreaView style={styling.safeContainer}>
            <View style={styling.heading}>
                <Icon name='left' size={20} color='black' onPress={() => {
                    props.navigation.pop()
                }} />
                <View />
                <Text style={styling.headingTXT}>Update Profile</Text>
                <View />
                <View />
            </View>

            <View style={styling.mainContainer}>
                <ScrollView>
                    <View style={styling.headView}>

                        <View style={styling.avatarView}>
                            <Icon name='camera' color='white' size={30} />
                        </View>

                    </View>
                    <View style={styling.innerView}>
                        {/* <View style={styling.emailView}> */}
                        <Input
                            label='First Name'
                            placeholder='First Name'
                            value={name}
                            onChangeText={(val) => {
                                setName(val)
                            }}
                        />
                        <Input
                            label='Last Name'
                            placeholder='Last Name'
                            value={last}
                            onChangeText={(val) => {
                                setLast(val)
                            }}
                        />
                        <Input
                            label='Mobile'
                            placeholder='Mobile Number'
                            value={phone}
                            maxLength={10}
                            onChangeText={(val) => {
                                setPhone(val)
                            }}
                        />


                    </View>

                    <View style={styling.signupView}>
                        <TouchableOpacity style={styling.signupOpacity} onPress={() => { setValue(), setLoading(true) }}>
                            {!isLoading ? <Text style={styling.signupText}>Update</Text> : <ActivityIndicator size='large' color="white" />
                            }
                        </TouchableOpacity>
                    </View>

                </ScrollView>
            </View>

        </SafeAreaView >
    )
}
export default EditProfile;