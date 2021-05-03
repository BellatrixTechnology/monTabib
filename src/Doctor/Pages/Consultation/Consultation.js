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
            let parsed1 = JSON.parse(user);
            console.log('sdfsd', parsed1)
            get(parsed1)

        }
        catch (error) {
            console.log(error)
        }
    }
    const get = (parsed1) => {
        fetch('https://www.montabib.com/loginApp', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                "username": parsed1.username,
                "password": parsed1.password
            })
        }).then((response) => response.json())
            .then((responseJson) => {
                console.log(responseJson, 'res JSON');
                console.log('123asfsdf', responseJson.error)
                if (responseJson.error == 'Invalid credentials.') {
                }
                else {
                    fetch('https://montabib.com/api/consultations', {
                        method: 'GET'

                    }).then((res) => {
                        console.log(res)
                        if (res.ok == true) {
                            res.json().then((data) => { console.log('kk', data), setobj2(data['hydra:member']) }).catch((error) => { console.log(error) })
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
                console.error('asdasd', error);
            });
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
                            renderItem={({ item }) => {
                                return (

                                    <View style={styling.detailView}>
                                        <Text style={styling.labelTXT}>Chloe</Text>

                                        <Text style={styling.labelTXT}>{moment(item.dateConsultation).format("YYYY-MM-DD")}</Text>
                                    </View>
                                )
                            }
                            }
                        />
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

                    </View> :
                    console.log('waiting')
                }



            </View>
        </SafeAreaView>
    )
}
export default Consultation;