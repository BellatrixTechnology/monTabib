import React, { useEffect, useState } from 'react';
import { View, StatusBar, TouchableOpacity, SafeAreaView, ToastAndroid } from 'react-native';
import { Text, Input } from 'react-native-elements';
import { styling } from './styling';
import Icon from 'react-native-vector-icons/AntDesign';
import Icons from 'react-native-vector-icons/FontAwesome';
import Dialog from "react-native-dialog";
import AsyncStorage from '@react-native-async-storage/async-storage';

// import CalendarPicker from 'react-native-calendar-picker';

const Absences = () => {
    const [isVisible, setisVisible] = useState(false)
    const [day, setDay] = useState('')
    const [month, setMonth] = useState('')
    const [year, setYear] = useState('')
    const [hour, setHour] = useState('')
    const [Mint, setMint] = useState('')
    const [reason, setReason] = useState('')
    const [userData, setUserData] = useState('')
    useEffect(() => {
        getUser()
    }, [])
    async function getUser() {
        try {
            let user = await AsyncStorage.getItem('UserData');
            let parsed1 = JSON.parse(user);
            setUserData(parsed1);
        }
        catch (error) {
            console.log(error)
        }
    }
    console.log(userData)

    const SaveData = () => {

        fetch('https://www.montabib.com/loginApp', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                "username": userData.username,
                "password": userData.password
            })
        }).then((response) => response.json())
            .then((responseJson) => {
                console.log(responseJson, 'res JSON');
                console.log(responseJson.error)
                if (responseJson.error == 'Invalid credentials.') {
                }
                else {
                    fetch('https://montabib.com/api/absences', {
                        method: 'POST',
                        headers: {
                            'Accept': 'application/json',
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify({
                            "dateDebut": year + "-" + month + "-" + day + "T" + hour + ":" + Mint + ":08.223Z",
                            "dateFin": year + "-" + month + "-" + day + "T" + hour + ":" + Mint + ":08.223Z",
                            "commentaire": reason

                        })
                    }).then((response) => {
                        console.log(response)
                        if (response.ok == true) {
                            response.json().then((data) => { console.log(data) }).catch((error) => { console.log(error) })
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

        console.log(year + "-" + month + "-" + day + "T" + hour + ":" + Mint + ":00.223Z")
        console.log('2021-02-24T20:56:08.223Z')

    }
    const get = () => {

        fetch('https://montabib.com/api/absences', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                "dateDebut": "2021-02-24T20:56:08.223Z",
                "dateFin": "2021-02-24T20:56:08.223Z",
                "commentaire": "string"
            })
        }).then((response) => {
            console.log(response)
            if (response.ok == true) {
                response.json().then((data) => { console.log(data) }).catch((error) => { console.log(error) })
            } else {
                ToastAndroid.show("Error! Check your details ", ToastAndroid.SHORT);
            }
        })
            .catch((error) => {
                console.log(error)
                ToastAndroid.show(error, ToastAndroid.SHORT);
            });
    }
    return (
        <SafeAreaView style={styling.safeContainer} >
            <StatusBar barStyle="dark-content" hidden={false} backgroundColor="white" translucent={false} />


            <View style={styling.mainContainer}>
                <View style={styling.headerView}>
                    <Text style={styling.headerTXT}>My Absences</Text>
                </View>

                <TouchableOpacity style={styling.absenceOpacity}
                    onPress={() => setisVisible(true)}
                >
                    <Icons name='plus' size={20} color='white' />
                </TouchableOpacity>

                <View style={styling.labelView}>
                    <Text style={styling.labelTXT}>Title</Text>
                    <Text style={styling.labelTXT}>Start Date</Text>
                    <Text style={styling.labelTXT}>End Date</Text>
                    <View style={styling.ActionView}>
                        <Text style={styling.labelTXT}>Action</Text>
                    </View>
                </View>
                <View style={styling.dataView}>
                    <Text style={styling.dataTXT}>Roger</Text>
                    <Text style={styling.dataTXT}>20-2-2022</Text>
                    <Text style={styling.dataTXT}>090078601</Text>
                    <View style={styling.ActionView}>
                        <TouchableOpacity style={styling.actionOp}>
                            <Icon name='closecircle' color='#0069da' size={40} />
                        </TouchableOpacity>
                    </View>
                </View>
                <Dialog.Container visible={isVisible}>
                    <Dialog.Title>Add Absence Detail</Dialog.Title>
                    <Dialog.Input placeholder='Note' style={styling.resField} label='Reason' multiline={true} value={reason}
                        onChangeText={(reas) => {
                            setReason(reas)
                        }} />
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Dialog.Input placeholder='DD' style={styling.dayField} keyboardType='number-pad' label='day' maxLength={2} value={day}
                            onChangeText={(day) => {
                                setDay(day)
                            }} />
                        <Dialog.Input placeholder='MM' style={styling.dayField} keyboardType='number-pad' maxLength={2} label='Month'
                            value={month}
                            onChangeText={(mon) => {
                                setMonth(mon)
                            }} />
                        <Dialog.Input placeholder='YYYY' style={styling.dayField} keyboardType='number-pad' maxLength={4} label='Year'
                            value={year}
                            onChangeText={(year) => {
                                setYear(year)
                            }} />
                    </View>

                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Dialog.Input placeholder='HH' style={styling.dayField} keyboardType='number-pad' label='Hour' maxLength={2}
                            value={hour}
                            onChangeText={(hour) => {
                                setHour(hour)
                            }}
                        />
                        <Dialog.Input placeholder='MM' style={styling.dayField} keyboardType='number-pad' label='Minutes' maxLength={2}
                            value={Mint}
                            onChangeText={(mint) => {
                                setMint(mint)
                            }}
                        />
                    </View>
                    <Dialog.Button label="Cancel" onPress={() => setisVisible(false)} />
                    <Dialog.Button label="Add" onPress={() => {
                        if (day != '' && month != '' && year != '' && hour != '' && Mint != '' && reason != '') {
                            SaveData()
                            setisVisible(false)
                        }
                        else {
                            ToastAndroid.show('Empty Fields', ToastAndroid.SHORT);

                        }
                    }} />
                </Dialog.Container>




            </View>

        </SafeAreaView >
    )
}

export default Absences;