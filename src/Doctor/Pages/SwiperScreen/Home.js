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
    const [ids, setID] = useState('')

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
        console.log(obj.Email)
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
        }).then((response) => response.json())
            .then((responseJson) => {
                console.log(responseJson, 'res JSON');
                if (responseJson.error == 'Invalid credentials.') {
                    console.log('sadasd')

                }
                else {
                    setID(responseJson.id)
                    saveDATA()
                }
            }).catch((error) => {
                console.error(error);
            });

        // Name: obj.Name,
        // Email: obj.Email,
        // SurName: obj.SurName,
        // Gender: obj.Gender,
        // Address: obj.Address,
        // Telephone: obj.Telephone,
        // UI: obj.UI,
        // Specialist: obj.Specialist,
        // Consult: obj2.Consult,
        // Service: obj2.Service,


        ToastAndroid.show("Registered Successfully!", ToastAndroid.SHORT);
    }
    const saveDATA = () => {
        fetch('https://www.montabib.com/api/medecins', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                "nom": obj.SurName,
                "prenom": obj.Name,
                "sexe": "1",
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
                "identifiantUnique": obj.UI,
                "user": "/api/users/" + ids
            })
        }).then((response) => response.json())
            .then((responseJson) => {
                console.log(responseJson, 'res JSON');
                if (responseJson.error == 'Invalid credentials.') {
                    console.log('sadasd')
                }
                else {

                    console.log('asdasd')
                }
            })
            .catch((error) => {
                console.error(error);
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
                                    // props.navigation.navigate('Tab')

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