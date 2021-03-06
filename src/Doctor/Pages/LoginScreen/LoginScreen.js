import React, { useState } from 'react';
import { StyleSheet, View, TouchableOpacity, ActivityIndicator, TextInput, StatusBar, SafeAreaView } from 'react-native';
import { Text, Input, colors } from 'react-native-elements';

import AsyncStorage from '@react-native-community/async-storage';


import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { styling } from './styling';
import { ToastAndroid } from 'react-native';
const LoginScreen = (props) => {
    const [focuspass, setpassfocus] = useState(false);
    const [emailfocus, setemailfocus] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorEmail, setErrorEmail] = useState('');
    const [errorPassword, seterrorPassword] = useState(false);
    const [isLoading, setisLoading] = useState(false)
    function check() {
        if (email != '' && password != '') {
            setisLoading(true)
            loginUser()

        }
        else {
            ToastAndroid.show('Empty Fields')
            setisLoading(false)

        }
    }
    const loginUser = () => {

        let obj = {
            username: email,
            password: password
        }
        AsyncStorage.setItem('UserData', JSON.stringify(obj));

        fetch('https://www.montabib.com/loginApp', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                "username": email,
                "password": password
            })
        }).then((response) => response.json())
            .then((responseJson) => {
                console.log(responseJson, 'res JSON');
                console.log(responseJson.medecinid)
                if (responseJson.error == 'Invalid credentials.') {
                    seterrorPassword(true)
                    setisLoading(false)
                }
                else {
                    seterrorPassword(false)
                    setisLoading(false)
                    AsyncStorage.setItem('token', JSON.stringify(responseJson.medecinid))
                    props.navigation.navigate('Tab')
                }
            })
            .catch((error) => {
                console.error('asdasd', error);
            });
    }
    return (
        <SafeAreaView style={styling.safeContainer}>
            <View style={styling.mainContainer}>
                <StatusBar barStyle="dark-content" hidden={false} backgroundColor="white" translucent={false} />

                <View style={styling.profileView}>
                    <View style={styling.headerView}>
                        <Text style={styling.welcomeText}>Welcome</Text>
                        <Text style={styling.signText}>Doctor Login</Text>
                    </View>
                </View>
                <View style={styling.innerView}>
                    <View style={emailfocus ? styling.fieldfocus : styling.fieldnotfocus}>
                        <Icon name='email-outline' size={18} style={emailfocus ? { color: '#3f4079' } : { color: 'grey' }} />

                        <TextInput
                            placeholder='Email'
                            onFocus={() => setemailfocus(true)}
                            onChangeText={val => setEmail(val)}
                        />
                    </View>
                    <View style={focuspass ? styling.fieldfocus : styling.fieldnotfocus}>
                        <Icon name='lock-outline' size={18} style={emailfocus ? { color: '#3f4079' } : { color: 'grey' }} />

                        <TextInput
                            placeholder='Password'
                            onFocus={() => setpassfocus(true)}
                            onChangeText={val => setPassword(val)}
                            secureTextEntry
                        />
                    </View>
                    {errorPassword && <Text style={{ color: 'red' }}>Email or Password incorrect</Text>}

                </View>
                <View style={styling.forgetView}>
                    <Text style={styling.forgetlabel}>Foregt Password?</Text>
                </View>
                <View style={styling.OpacityView}>
                    <TouchableOpacity style={styling.OpacityLog} onPress={() => {
                        setisLoading(true)
                        check()
                    }}>
                        {
                            !isLoading ?
                                <Text style={styling.Opacitytxt}>LOGIN</Text>
                                : <ActivityIndicator size='large' color="white" />
                        }
                    </TouchableOpacity>
                    <View style={styling.createv}>
                        <Text style={styling.labeltag}>Don't have account? </Text>
                        <TouchableOpacity style={styling.Opacitycreate} onPress={() => { props.navigation.navigate('Home') }}>

                            <Text style={styling.forgetlabel}>Register Now</Text>

                        </TouchableOpacity>

                    </View>
                </View>
            </View>
        </SafeAreaView>
    )

}




export default LoginScreen;