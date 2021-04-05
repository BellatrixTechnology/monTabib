import React, { useState } from 'react';
import { StyleSheet, View, TouchableOpacity, ScrollView, TextInput, ActivityIndicator, StatusBar, SafeAreaView } from 'react-native';
import { Text, Input, colors } from 'react-native-elements';
import Icons from 'react-native-vector-icons/AntDesign';
import moment from 'moment';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import { styling } from './styling'
const SignUp = (props) => {
    const [namefocus, setnamefocus] = useState(false);
    const [lastfocus, setlastnamefocus] = useState(false);
    const [emailfocus, setemailfocus] = useState(false);
    const [phonefocus, setphonefocus] = useState(false);
    const [genderfocus, setgenderfocusfocus] = useState(false);
    const [dobfocus, setdobfocusfocus] = useState(false);
    const [passfocus, setpassfocus] = useState(false);
    const [cpassfocus, setcpassfocus] = useState(false);
    const [name, setName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [gender, setGender] = useState('')
    const [date, setDate] = useState('')
    const [month, setMonth] = useState('')
    const [year, setYear] = useState('')
    const [password, setpassword] = useState('')
    const [phone, setPhone] = useState('')
    const [cpass, setcpass] = useState('')
    const [errors, setError] = useState(false)
    const [isLoading, setLoading] = useState(false)
    const [FieldTitle, setFiedl] = useState('')
    let reg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    function checkdata() {
        setLoading(true)
        if (reg.test(email) && lastName != '' && email != '' && phone != '' && gender != '' && password != '' && password == cpass && date != '' && year != '' && month != '') {
            register()
        }
        else { setError(true), setLoading(false), setFiedl('Check Your Data') }
    }
    function register() {

        fetch('https://www.montabib.com/api/users', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                // 'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "username": email,
                "password": password,
                "rank": false
            })
        }).then((res) => {
            console.log('register', res);
            if (res.ok == true) {
                res.json().then((data) => {
                    saveDATA(data.id)
                    // console.log(data)
                    // setIsVisble(true)
                    console.log(data)
                })
            } else {
                setError(true), setLoading(false), setFiedl('Email already register')
            }
        }).catch((error) => {
            console.error(error);
        });
    }
    function saveDATA(userId) {
        let DD = year + '-' + month + '-' + date
        console.log(userId)
        fetch('https://www.montabib.com/api/patients', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                "nom": name,
                "prenom": lastName,
                "sexe": gender,
                "telephone": phone,
                "user": "/api/users/" + userId,
                "dateNaissance": DD + "T00:00:22.962Z",
            })
        }).then((ress) => {
            console.log('jnjn', ress)
            if (ress.ok == true) {
                console.log(ress)
                ress.json().then((data) => {
                    props.navigation.navigate('PTabs')
                    setLoading(false)
                });
            } else {
                setError(true), setLoading(false), setFiedl('Check Your Field')
            }
        })
            .catch((error) => {
                console.log(error)
            });
    }
    return (
        <SafeAreaView style={styling.safeContainer}>
            <StatusBar barStyle="dark-content" hidden={false} backgroundColor="white" translucent={false} />
            <ScrollView>
                <View style={styling.headerView}>
                    <Icons name='arrowleft' size={30} color='#3f4079' />
                </View>
                <View style={styling.mainContainer}>
                    <View style={styling.labelView}>
                        <Text style={styling.welcomeText}>Sign Up</Text>
                    </View>
                    <View style={styling.innerView}>
                        <View style={namefocus ? styling.fieldfocus : styling.fieldnotfocus}>
                            <Icons name='user' size={18} style={namefocus ? { color: '#3f4079' } : { color: 'grey' }} />

                            <TextInput
                                placeholder='First Name'
                                onFocus={() => setnamefocus(true)}
                                onChangeText={(val) => {
                                    setName(val)
                                }}
                            />
                        </View>
                        <View style={lastfocus ? styling.fieldfocus : styling.fieldnotfocus}>
                            <Icons name='user' size={18} style={lastfocus ? { color: '#3f4079' } : { color: 'grey' }} />
                            <TextInput
                                placeholder='Last Name'
                                onFocus={() => setlastnamefocus(true)}
                                onChangeText={(val) => {
                                    setLastName(val)
                                }}
                            />
                        </View>
                        <Text>Select Gender</Text>
                        <View style={genderfocus ? [styling.fieldfocus, { borderBottomWidth: 0, justifyContent: 'space-evenly' }] : [styling.fieldnotfocus, { borderBottomWidth: 0, justifyContent: 'space-evenly' }]}>
                            {/* <Icon name='gender-male-female' size={18} style={genderfocus ? { color: '#3f4079' } : { color: 'grey' }} /> */}
                            <FontAwesome name='male' size={24} style={gender == '1' ? { color: '#3f4079' } : { color: 'grey' }} onPress={() => setGender('1')} />
                            <FontAwesome name='female' size={24} style={gender == '0' ? { color: '#3f4079' } : { color: 'grey' }} onPress={() => setGender('0')} />

                            {/* <TextInput
                                placeholder='Gender'
                                onFocus={() => setgenderfocusfocus(true)}
                            // onChangeText={(val) => {
                            //     if(val)
                            // }}      
                            /> */}
                        </View>
                        <View style={dobfocus ? [styling.fieldfocus, { justifyContent: 'space-evenly' }] : [styling.fieldnotfocus, { justifyContent: 'space-evenly' }]}>
                            <Icon name='calendar' size={18} style={dobfocus ? { color: '#3f4079' } : { color: 'grey' }} />

                            <TextInput
                                placeholder='YYYY'
                                onFocus={() => setdobfocusfocus(true)}
                                keyboardType='phone-pad'
                                onChangeText={(val) => {
                                    setYear(val)
                                }}
                                maxLength={4}
                                value={year}
                            />
                            <TextInput
                                placeholder='MM'
                                onFocus={() => setdobfocusfocus(true)}
                                keyboardType='phone-pad'
                                onChangeText={(val) => {
                                    if (val > 12) {
                                        setMonth('')
                                    }
                                    else setMonth(val)
                                }}
                                maxLength={2}
                                value={month}
                            />
                            <TextInput
                                placeholder='DD'
                                onFocus={() => setdobfocusfocus(true)}
                                keyboardType='phone-pad'
                                onChangeText={(val) => {
                                    if (val > 31) {
                                        setDate('')
                                    }
                                    else setDate(val)
                                }}
                                maxLength={2}

                            />
                        </View>
                        <View style={emailfocus ? styling.fieldfocus : styling.fieldnotfocus}>
                            <Icon name='cellphone' size={18} style={emailfocus ? { color: '#3f4079' } : { color: 'grey' }} />

                            <TextInput
                                placeholder='Email'
                                onFocus={() => setemailfocus(true)}
                                onChangeText={(val) => {
                                    setEmail(val)
                                }}
                            />
                        </View>
                        <View style={phonefocus ? styling.fieldfocus : styling.fieldnotfocus}>
                            <Icon name='cellphone' size={18} style={phonefocus ? { color: '#3f4079' } : { color: 'grey' }} />

                            <TextInput
                                placeholder='Phone'
                                onFocus={() => setphonefocus(true)}
                                keyboardType='number-pad'
                                onChangeText={(val) => {
                                    setPhone(val)
                                }}
                            />
                        </View>

                        <View style={passfocus ? styling.fieldfocus : styling.fieldnotfocus}>
                            <Icon name='lock-outline' size={18} style={passfocus ? { color: '#3f4079' } : { color: 'grey' }} />

                            <TextInput
                                secureTextEntry
                                placeholder='Password'
                                onFocus={() => setpassfocus(true)}
                                onChangeText={(val) => {
                                    setpassword(val)
                                }}
                            />
                        </View>
                        <View style={cpassfocus ? styling.fieldfocus : styling.fieldnotfocus}>
                            <Icon name='lock-outline' size={18} style={cpassfocus ? { color: '#3f4079' } : { color: 'grey' }} />

                            <TextInput
                                secureTextEntry
                                placeholder='Confirm Password'
                                onFocus={() => setcpassfocus(true)}
                                onChangeText={(val) => {
                                    setcpass(val)
                                }}

                            />
                        </View>
                        {errors && <Text style={{ color: 'red', alignSelf: 'center', marginBottom: 10 }}>{FieldTitle}</Text>
                        }
                    </View>
                    <View style={styling.OpacityView}>
                        <TouchableOpacity style={styling.OpacityLog} onPress={() => checkdata()}>
                            {!isLoading ? <Text style={styling.Opacitytxt}>Sign Up</Text> : <ActivityIndicator size='large' color="white" />
                            }
                        </TouchableOpacity>
                        <TouchableOpacity style={styling.Opacitycreate} onPress={() => { props.navigation.navigate('LoginIn') }}>
                            <Text style={styling.labeltag}>Already Have Account? </Text>
                            <Text style={styling.forgetlabel}>LOG IN</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )

}




export default SignUp;