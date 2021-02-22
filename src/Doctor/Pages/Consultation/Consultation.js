import React, { useState } from 'react';
import { StyleSheet, View, TouchableOpacity, ToastAndroid, ScrollView, SafeAreaView } from 'react-native';
import { Text, Input } from 'react-native-elements';
import Icon from 'react-native-vector-icons/AntDesign';
import Icons from 'react-native-vector-icons/FontAwesome';
import { styling } from './styling';
import Dialog from "react-native-dialog";
import AsyncStorage from '@react-native-async-storage/async-storage';

const Consultation = ({ props }) => {
    const [show, setshow] = useState(false);
    const [data, setData] = useState(false);
    const [name, setName] = useState('');
    const [date, setdate] = useState('');
    const [phone, setphone] = useState('');
    const [obj2, setobj2] = useState({});

    const get = async () => {
        try {
            let Detail = await AsyncStorage.getItem('Detail');
            let parsed3 = JSON.parse(Detail);
            setobj2(parsed3);
        }
        catch (error) {
            console.log(error)
        }
        console.log(obj2)
    }

    return (
        <SafeAreaView style={styling.safeContainer}>

            <View style={styling.mainContainer}>
                <View style={styling.headerView}>

                    <Text style={styling.headerTXT}>My Consultation</Text>
                </View>

                <TouchableOpacity style={styling.consultationOpacity}
                    onPress={() => {
                        get();
                        props.navigation.navigate('addPatient', { props: props })
                    }}
                >
                    <Icons name='plus' size={20} color='white' />
                </TouchableOpacity>
                {data != false ? <View style={styling.patientView}>
                    <Text style={styling.patientTXT}>Patient Detail</Text>
                    <View style={styling.detailView}>
                        <Text style={styling.headTXT}>Patient Name:</Text>
                        <Text style={styling.headTXT}>Date of Consultation:</Text>

                    </View>

                    <View style={styling.detailView}>
                        <Text style={styling.labelTXT}>{name}</Text>

                        <Text style={styling.labelTXT}>{date}</Text>
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

                </View> :
                    console.log('waiting')
                }

                {/* <View>
                    <Dialog.Container visible={show}>
                        <Dialog.Title>Add Consultation Detail</Dialog.Title>

                        <Dialog.Input label='Name' placeholder='Alpha' onChangeText={(value) => { setName(value) }} />
                        <Dialog.Input label='Date' placeholder='02-03-2021' keyboardType='numeric' onChangeText={(value) => { setdate(value) }} />
                        <Dialog.Input label='Phone Number' placeholder='090078601' keyboardType='numeric' onChangeText={(value) => { setphone(value) }} />
                        <Dialog.Button label="Add" onPress={() => {
                            setData(true)
                            setshow(false)
                        }} />
                        <Dialog.Button label="Cancel" onPress={() => {
                            setshow(false)
                        }} />
                    </Dialog.Container>

                </View> */}

            </View>
        </SafeAreaView>
    )
}
export default Consultation;