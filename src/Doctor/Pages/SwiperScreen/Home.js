import React, { useState } from 'react';
import { StatusBar, View, TouchableOpacity, Text, ToastAndroid, ScrollView, SafeAreaView } from 'react-native';
import Swiper from 'react-native-swiper';
import OpenningHour from './Openninghour';
import Register from './Register';
import Services from './Services';
import Subscription from './Subscription';
import AsyncStorage from '@react-native-async-storage/async-storage';
import firebase from '../../../db/config';

import { styling } from './styling';


const Home = (props) => {
    const [obj, setobj] = useState({});
    const [obj1, setobj1] = useState({});
    const [obj2, setobj2] = useState({});
    const [userId, setuseiD] = useState('')

    const [id, setid] = useState(0);
    const swipe = (a) => {
        setid(a)
    }

    const registerdata = async () => {
        try {
            let user = await AsyncStorage.getItem('user');
            let parsed1 = JSON.parse(user);
            setobj(parsed1);
        }
        catch (error) {
            console.log(error)
        }
    }
    const openning = async () => {
        try {
            let useropen = await AsyncStorage.getItem('useropenning');
            let parsed2 = JSON.parse(useropen);
            setobj1(parsed2);
        }
        catch (error) {
            console.log(error)
        }

    }
    const Service = async () => {
        try {
            let userservice = await AsyncStorage.getItem('userservice');
            let parsed3 = JSON.parse(userservice);
            setobj2(parsed3);
        }
        catch (error) {
            console.log(error)
        }
        console.log(obj1)
    }


    const upload = () => {
        fetch('https://www.montabib.com/api/users', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                // 'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "username": obj.Email,
                "password": obj.Name,
                "rank": true
            })
        }).then((res) => {
            console.log('register', res);
            if (res.ok == true) {
                res.json().then((data) => {
                    // setuseiD()
                    saveDATA(data.id)

                    console.log(data)
                })
            } else {
                console.log('ad')
            }
        }).catch((error) => {
            console.error(error);
        });

    }
    const saveDATA = (userIDAPI) => {
        console.log(userIDAPI)
        console.log("/api/users/" + userIDAPI)
        fetch('https://www.montabib.com/api/medecins', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                "nom": obj.Name,
                "prenom": obj.SurName,
                "sexe": obj.Gender,
                "adresse": obj.Address,
                "email": obj.Email,
                "telephone": obj.Telephone,
                "description": "medecin de tizi ouzou",
                "specialisation": [
                    "/api/specialisations/1"
                ],
                "lat": 0.64077229268898,
                "lon": 0.07063884171566,
                "latDegree": 36.713548,
                "lonDegree": 4.0473075,
                "identifiantUnique": "OIBEC23",
                "user": ["/api/users/" + userIDAPI]
            })
        }).then((ress) => {
            console.log(ress)
            if (ress.ok == true) {
                console.log(ress)
                ress.json().then((data) => {
                    console.log(data)
                    // props.navigation.navigate('Tab')
                });
            } else {
                ToastAndroid.show("Error! Check your details ", ToastAndroid.SHORT);
            }
        })
            .catch((error) => {
                console.log(error)
                ToastAndroid.show("Error! Check your details ", ToastAndroid.SHORT);
            });
    }

    return (
        <SafeAreaView style={styling.safeContainer}>
            <StatusBar barStyle="dark-content" hidden={false} backgroundColor="white" translucent={false} />

            <ScrollView>
                <View style={styling.mainContainer}>
                    <Swiper showsButtons={false} showsPagination={false} loop={false} index={id}>

                        <View style={styling.slide1}>
                            <Register />
                            <View style={styling.nextButtonView}>
                                <TouchableOpacity style={styling.nextButton}
                                    onPress={() => {
                                        swipe(1)
                                        registerdata()
                                    }}
                                >
                                    <Text style={styling.nextbuttonText}>Next</Text>
                                </TouchableOpacity >
                            </View>
                        </View>

                        <View style={styling.slide1}>
                            <OpenningHour />

                            <View style={styling.nextPButtonView}>
                                <TouchableOpacity style={styling.nextButton}
                                    onPress={() => {
                                        swipe(0)
                                        openning()
                                    }}
                                >
                                    <Text style={styling.nextbuttonText}>Previous</Text>
                                </TouchableOpacity >
                                <TouchableOpacity style={styling.nextButton}
                                    onPress={() => {
                                        swipe(2)
                                        openning()
                                    }}
                                >
                                    <Text style={styling.nextbuttonText}>Next</Text>
                                </TouchableOpacity >
                            </View>
                        </View>
                        <View style={styling.slide1}>
                            <Services />
                            <View style={styling.nextPButtonView}>
                                <TouchableOpacity style={styling.nextButton}
                                    onPress={() => {
                                        swipe(1)
                                        openning()
                                    }}
                                >
                                    <Text style={styling.nextbuttonText}>Previous</Text>
                                </TouchableOpacity >
                                <TouchableOpacity style={styling.nextButton}
                                    onPress={() => {
                                        swipe(3)
                                        openning()
                                    }}
                                >
                                    <Text style={styling.nextbuttonText}>Next</Text>
                                </TouchableOpacity >
                            </View>
                        </View>
                        <View style={styling.slide1}>
                            <Subscription />
                            <View style={styling.nextPButtonView}>
                                <TouchableOpacity style={styling.nextButton}
                                    onPress={() => {
                                        swipe(2)
                                        openning()
                                    }}
                                >
                                    <Text style={styling.nextbuttonText}>Previous</Text>
                                </TouchableOpacity >
                                <TouchableOpacity style={styling.nextButton} onPress={() => {
                                    upload()
                                    // 

                                }} >
                                    <Text style={styling.nextbuttonText}>Done</Text>
                                </TouchableOpacity >
                            </View>


                        </View>
                    </Swiper>


                </View >
            </ScrollView>
        </SafeAreaView>
    )
}

export default Home;