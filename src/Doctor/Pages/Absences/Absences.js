import React, { useEffect, useState } from 'react';
import { View, StatusBar, TouchableOpacity, SafeAreaView, ToastAndroid } from 'react-native';
import { Text, Input } from 'react-native-elements';
import { styling } from './styling';
import Icon from 'react-native-vector-icons/AntDesign';
import Icons from 'react-native-vector-icons/FontAwesome';
import Dialog from "react-native-dialog";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { FlatList } from 'react-native';
import moment from 'moment';

// import CalendarPicker from 'react-native-calendar-picker';

const Absences = ({ props }) => {
    console.log(props)
    const [isVisible, setisVisible] = useState(false)
    const [day, setDay] = useState('')
    const [month, setMonth] = useState('')
    const [year, setYear] = useState('')
    const [hour, setHour] = useState('')
    const [Mint, setMint] = useState('')
    const [endday, setendDay] = useState('')
    const [endmonth, setendMonth] = useState('')
    const [endyear, setendYear] = useState('')
    const [endhour, setendHour] = useState('')
    const [endMint, setendMint] = useState('')
    const [reason, setReason] = useState('')
    const [userData, setUserData] = useState('')
    const [absence, setAbsense] = useState([])
    const temp = "hydra:member"
    useEffect(() => {
        getUser()

        const unsubscribe = props.navigation.addListener('focus', () => {
            getUser()
            console.log('effect')
        });
        return () => {
            unsubscribe;
        };
    }, [])
    async function getUser() {
        try {
            let user = await AsyncStorage.getItem('UserData');
            let parsed1 = JSON.parse(user);
            setUserData(parsed1);
            console.log('sdfsd', parsed1)
            get(parsed1)

        }
        catch (error) {
            console.log(error)
        }
    }

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
                    console.log('res', responseJson)
                    fetch('https://montabib.com/api/absences', {
                        method: 'POST',
                        headers: {
                            'Accept': 'application/json',
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify({
                            "dateDebut": year + "-" + month + "-" + day + "T" + hour + ":" + Mint + ":08.223Z",
                            "dateFin": endyear + "-" + endmonth + "-" + endday + "T" + endhour + ":" + endMint + ":08.223Z",
                            "commentaire": reason

                        })
                    }).then((response) => {
                        console.log(response)
                        if (response.ok == true) {
                            response.json().then((data) => { console.log(data), getUser() }).catch((error) => { console.log(error) })
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
    console.log(absence)
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
                    console.log('7777')
                    fetch('https://montabib.com/api/absences', {
                        method: 'GET'

                    }).then((res) => {
                        console.log('123asf56546sdf', res)
                        if (res.ok == true) {
                            res.json().then((data) => { console.log('kk', data), setAbsense(data['hydra:member']) }).catch((error) => { console.log(error) })
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

    absence.forEach(element => {
        console.log(element.commentaire)
    });

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
                <FlatList
                    data={absence}
                    renderItem={({ item }) => {
                        return (
                            <View style={styling.dataView}>
                                <Text style={styling.dataTXT}>{item.commentaire}</Text>
                                <Text style={styling.dataTXT}>{moment(item.dateDebut).format("YYYY-MM-DD")}</Text>
                                <Text style={styling.dataTXT}>{moment(item.dateFin).format("YYYY-MM-DD")}</Text>
                                <View style={styling.ActionView}>
                                    <TouchableOpacity style={styling.actionOp}>
                                        <Icon name='closecircle' color='#0069da' size={40} />
                                    </TouchableOpacity>
                                </View>
                            </View>
                        )
                    }}
                />
                <Dialog.Container visible={isVisible}>
                    <Dialog.Title>Add Absence Detail</Dialog.Title>
                    <Dialog.Input placeholder='Note' style={styling.resField} label='Reason' multiline={true} value={reason}
                        onChangeText={(reas) => {
                            setReason(reas)
                        }} />
                    <Text style={{ marginHorizontal: 5 }}>Start Date</Text>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>

                        <Dialog.Input placeholder='DD' style={styling.dayField} keyboardType='number-pad' label='day' maxLength={2} value={day}
                            value={day}
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
                    <Text style={{ marginHorizontal: 5 }}>End Date</Text>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>

                        <Dialog.Input placeholder='DD' style={styling.dayField} keyboardType='number-pad' label='day' maxLength={2} value={day}
                            value={endday}
                            onChangeText={(day) => {
                                setendDay(day)
                            }} />
                        <Dialog.Input placeholder='MM' style={styling.dayField} keyboardType='number-pad' maxLength={2} label='Month'
                            value={endmonth}
                            onChangeText={(mon) => {
                                setendMonth(mon)
                            }} />
                        <Dialog.Input placeholder='YYYY' style={styling.dayField} keyboardType='number-pad' maxLength={4} label='Year'
                            value={endyear}
                            onChangeText={(year) => {
                                setendYear(year)
                            }} />
                    </View>

                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Dialog.Input placeholder='HH' style={styling.dayField} keyboardType='number-pad' label='Hour' maxLength={2}
                            value={endhour}
                            onChangeText={(hour) => {
                                setendHour(hour)
                            }}
                        />
                        <Dialog.Input placeholder='MM' style={styling.dayField} keyboardType='number-pad' label='Minutes' maxLength={2}
                            value={endMint}
                            onChangeText={(mint) => {
                                setendMint(mint)
                            }}
                        />
                    </View>
                    <Dialog.Button label="Cancel" onPress={() => setisVisible(false)} />
                    <Dialog.Button label="Add" onPress={() => {
                        if (day != '' && month != '' && year != '' && hour != '' && Mint != '' && reason != '' && endday != '' && endmonth != '' && endyear != '' && endhour != '' && endMint != '') {
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