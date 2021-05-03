import React, { useState } from 'react';
import { StyleSheet, View, TouchableOpacity, ScrollView, TextInput, StatusBar, ActivityIndicator, SafeAreaView } from 'react-native';
import { Text, Input, colors } from 'react-native-elements';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Icons from 'react-native-vector-icons/FontAwesome';
import AsyncStorage from '@react-native-community/async-storage';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { styling } from './styling';
const LoginIn = (props) => {
    const [focuspass, setpassfocus] = useState(false);
    const [emailfocus, setemailfocus] = useState(false);
    const [email, setEmail] = useState('')
    const [password, setpassword] = useState('')
    const [errors, setError] = useState(false)
    const [isLoading, setLoading] = useState(false)
    let reg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const [FieldTitle, setFiedl] = useState('')

    function checkdata() {
        setLoading(true)
        if (reg.test(email) == true && password != '') {
            login()
        }
        else { setError(true), setLoading(false), setFiedl('Invalid credentials') }
    }
    function login() {
        let obj = {
            username: email,
            password: password
        }
        AsyncStorage.setItem('PatData', JSON.stringify(obj));
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
                if (responseJson.error == 'Invalid credentials.') {
                    setError(true)
                    setFiedl('Invalid credentials')
                    setLoading(false)
                }
                else {
                    setLoading(false)
                    AsyncStorage.setItem('token', JSON.stringify(responseJson.patientid))
                    props.navigation.navigate('PTabs')
                }
            })
            .catch((error) => {
                console.error('asdasd', error);
            })
    }

    return (
        <SafeAreaView style={styling.safeContainer}>
            <View style={styling.mainContainer}>
                <StatusBar barStyle="dark-content" hidden={false} backgroundColor="white" translucent={false} />

                <View style={styling.profileView}>
                    {/* <Icons name='user-circle-o' size={100} color='#f0f0f0' /> */}
                    <View style={styling.headerView}>
                        <Text style={styling.welcomeText}>Welcome</Text>
                        <Text style={styling.signText}>Sign in to Continue</Text>
                    </View>
                </View>
                <View style={styling.innerView}>
                    <View style={emailfocus ? styling.fieldfocus : styling.fieldnotfocus}>
                        <Icon name='email-outline' size={18} style={emailfocus ? { color: '#3f4079' } : { color: 'grey' }} />

                        <TextInput
                            placeholder='Email'
                            onFocus={() => setemailfocus(true)}
                            onChangeText={(val) => { setEmail(val) }}
                        />
                    </View>
                    <View style={focuspass ? styling.fieldfocus : styling.fieldnotfocus}>
                        <Icon name='lock-outline' size={18} style={emailfocus ? { color: '#3f4079' } : { color: 'grey' }} />

                        <TextInput
                            placeholder='Password'
                            onFocus={() => setpassfocus(true)}
                            onChangeText={(val) => { setpassword(val) }}
                            secureTextEntry
                        />

                    </View>
                    {errors && <Text style={{ color: 'red', alignSelf: 'center', marginBottom: 10 }}>{FieldTitle}</Text>}

                </View>
                <View style={styling.forgetView}>
                    <Text style={styling.forgetlabel}>Foregt Password?</Text>
                </View>
                <View style={styling.OpacityView}>
                    <TouchableOpacity style={styling.OpacityLog} onPress={() => { checkdata() }}>
                        {!isLoading ? <Text style={styling.Opacitytxt}>Sign Up</Text> : <ActivityIndicator size='large' color="white" />
                        }
                    </TouchableOpacity>
                    <View style={styling.createv}>
                        <Text style={styling.labeltag}>Don't have account? </Text>
                        <TouchableOpacity style={styling.Opacitycreate} onPress={() => { props.navigation.navigate('Signup') }}>

                            <Text style={styling.forgetlabel}>Sign Up</Text>
                        </TouchableOpacity>

                    </View>
                </View>
            </View>
        </SafeAreaView>
    )

}




export default LoginIn;