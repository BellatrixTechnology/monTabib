import React, { useState, useEffect } from 'react';
import { StyleSheet, View, TouchableOpacity, ToastAndroid, FlatList, SafeAreaView } from 'react-native';
import { Text, Input } from 'react-native-elements';
import Icon from 'react-native-vector-icons/AntDesign';
import Icons from 'react-native-vector-icons/FontAwesome';
import { styling } from './styling';
import Dialog from "react-native-dialog";
import AsyncStorage from '@react-native-community/async-storage';
import moment from 'moment';

const Consultation = ({ props }) => {
    const [show, setshow] = useState(false);
    const [data, setData] = useState(false);
    const [name, setName] = useState('');
    const [date, setdate] = useState('');
    const [phone, setphone] = useState('');
    const [obj2, setobj2] = useState({});

    useEffect(() => {
        getUser()
        const unsubscribe = props.navigation.addListener('focus', () => {
            getUser()
        });
        return () => {
            unsubscribe;
        };
    }, [])
    async function getUser() {
        try {
            let user = await AsyncStorage.getItem('UserData');
            let token = await AsyncStorage.getItem('token');
            console.log(token)
            let parsed1 = JSON.parse(user);
            get(parsed1)

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
    const get = (parsed1) => {
        console.log(parsed1)
        fetch('https://www.montabib.com/loginApp', {
            method: 'POST',
            headers: initHeader(),
            body: JSON.stringify({
                "username": parsed1.username,
                "password": parsed1.password
            })
        }).then((response) => response.json())
            .then((responseJson) => {
                console.log(responseJson, '++++')
                if (responseJson.error == 'Invalid credentials.') {
                }
                else {
                    fetch('https://montabib.com/api/consultations', {
                        method: 'GET',
                    }).then((res) => {
                        if (res.ok == true) {
                            res.json().then((data) => { console.log(data['hydra:member']), setobj2(data['hydra:member']) }).catch((error) => { console.log(error) })
                        } else {
                            ToastAndroid.show("Error! Check your details ", ToastAndroid.SHORT);
                        }
                    })
                        .catch((error) => {
                            console.log(error)
                            ToastAndroid.show(error, ToastAndroid.SHORT);
                        });
                }
            })
            .catch((error) => {
                console.error(error);
            });
    }

    function _renderItem({ item }) {
        let A = item.dateConsultation
        console.log(moment.utc(A).format('hh:mm'), '===', item.dateConsultation)
        return (
            <View>
                <View style={styling.detailView}>
                    <Text style={styling.labelTXT}>{item.patient.nom} {item.patient.prenom}</Text>
                    <Text style={styling.labelTXT}>{item.dateConsultation}</Text>
                </View>
                <View style={styling.opacityButton} >
                    <TouchableOpacity style={styling.prescriptOpacity}
                        onPress={() => {
                            props.navigation.navigate('Prescribe')
                        }}
                    >
                        <Text style={styling.opacityTXT}>Enter the Prescription</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styling.removeOpacity}
                        onPress={() => {
                            setName('')
                            setdate('')
                            setphone('')
                            setData(false)
                        }}
                    >
                        <Text style={styling.removeTXT} >Remove</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }


    return (
        <SafeAreaView style={styling.safeContainer}>

            <View style={styling.mainContainer}>
                <View style={styling.headerView}>

                    <Text style={styling.headerTXT}>My Consultation</Text>
                </View>

                <TouchableOpacity style={styling.consultationOpacity}
                    onPress={() => {
                        props.navigation.navigate('addPatient', { props: props })
                    }}
                >
                    <Icons name='plus' size={20} color='white' />
                </TouchableOpacity>
                {obj2 != '' ?
                    <View style={styling.patientView}>
                        <Text style={styling.patientTXT}>Patient Detail</Text>
                        <View style={styling.detailView}>
                            <Text style={styling.headTXT}>Patient Name:</Text>
                            <Text style={styling.headTXT}>Date of Consultation:</Text>

                        </View>
                        <FlatList
                            data={obj2}
                            renderItem={_renderItem}
                        />


                    </View> :
                    console.log('waiting')
                }



            </View>
        </SafeAreaView>
    )
}
export default Consultation;