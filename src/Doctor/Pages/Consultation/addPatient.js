import React, { useState, useEffect } from 'react';
import { FlatList, View, TouchableOpacity, ToastAndroid, ScrollView, SafeAreaView, ActivityIndicator } from 'react-native';
import { Text, Input } from 'react-native-elements';
import Icon from 'react-native-vector-icons/AntDesign';
import Icons from 'react-native-vector-icons/Entypo';
import DropDownPicker from 'react-native-dropdown-picker';
import { Picker } from '@react-native-picker/picker';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import AsyncStorage from '@react-native-community/async-storage';
import moment from 'moment'


import { styling } from './styling';



const addPatient = (props) => {

    const [check, setCheck] = useState(false);
    const [main, setMain] = useState(true);
    const [timeView, setTimeView] = useState(false);
    const [detail, setDetail] = useState(false)
    const Monday = [
        { Time: '09:30' }, { Time: '10:30' }, { Time: '11:00' }, { Time: '11:30' }, { Time: '12:00' }, { Time: '05:30' },
        { Time: '06:00' }, { Time: '06:30' }, { Time: '07:00' }, { Time: '07:30' }
    ];


    const [selectMon, setMonSelect] = useState(null);
    const [selectTues, setTuesSelect] = useState(null);
    const [selectWed, setWedSelect] = useState(null);
    const [selectFri, setFriSelect] = useState(null);
    const [selectThur, setThurSelect] = useState(null);
    const [selectSat, setSatSelect] = useState(null);
    const [selectSun, setSunSelect] = useState(null);

    const [firstName, SetFName] = useState('');
    const [name, setName] = useState('');
    const [secondName, SetSName] = useState('');
    const [DOB, SetDOB] = useState('');
    const [service, setService] = useState('');
    const [serviceLabel, setServiceLAbel] = useState('')
    const [time, setTime] = useState('');
    const [date, setdate] = useState('');
    const [consult, setConsult] = useState([])
    const [markers, setMarkers] = useState([])
    const [userData, setUserData] = useState('')
    const [loading, setLoadings] = useState(true)

    const today = new Date()
    const [next, setNext] = useState([])
    useEffect(() => {
        const unsubscribe = props.navigation.addListener('focus', () => {
            getUser()
        });
        return () => {
            unsubscribe;
        };
    }, [])
    function getdates() {
        let list = []
        list.push({ date: moment(today).format('YYYY-MM-DD') })
        list.push({ date: moment().add(1, 'day').format('YYYY-MM-DD') })
        list.push({ date: moment().add(2, 'day').format('YYYY-MM-DD') })
        list.push({ date: moment().add(3, 'day').format('YYYY-MM-DD') })
        list.push({ date: moment().add(4, 'day').format('YYYY-MM-DD') })
        list.push({ date: moment().add(5, 'day').format('YYYY-MM-DD') })
        list.push({ date: moment().add(6, 'day').format('YYYY-MM-DD') })
        setNext(list)
    }
    async function getUser() {
        try {
            let user = await AsyncStorage.getItem('UserData');
            let token = await AsyncStorage.getItem('token');
            let parsed1 = JSON.parse(user);
            getUserRecord(token)
            setUserData(parsed1);

            getdates()
        }
        catch (error) {
            console.log(error)
        }
    }
    async function getUserRecord(token) {
        await fetch('https://montabib.com/api/medecins/' + token, {
            method: 'GET',
        }).then((response) => response.json())
            .then(async (responseJson) => {
                await motif(responseJson.motifs)
                setLoadings(false)

            })
            .catch((error) => {
                console.error(error);
            });
    }
    function motif(item) {
        let list = []
        item.forEach(element => {
            console.log(element)
            list.push({ label: element.libelle, value: element.id })
        });
        setConsult(list)
    }
    function initHeader() {
        let auth = {
            'Content-Type': "application/json",
        };
        return auth;
    }
    async function SaveRecord() {
        console.log(firstName)
        fetch('https://www.montabib.com/loginApp', {
            method: 'POST',
            headers: initHeader(),
            body: JSON.stringify({
                "username": userData.username,
                "password": userData.password
            })
        }).then((response) => response.json())
            .then((responseJson) => {
                if (responseJson.error == 'Invalid credentials.') {
                }
                else {
                    fetch('https://montabib.com/api/consultations', {
                        method: 'POST',
                        headers: initHeader(),
                        body: JSON.stringify({
                            "medecin": "/api/medecins/122",
                            "patient": "/api/patients/31",
                            "dateConsultation": "2021-03-31T10:30:00.000Z",
                            "motif": "/api/motifs/1200",
                            "compteRendu": ""


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
                console.error(error);
            });

    }


    return (
        <SafeAreaView style={styling.safeContainer}>


            <View style={styling.mainAddView}>
                {loading ? <ActivityIndicator color='white' size='small' /> :
                    <>
                        <View style={styling.headView}>
                            <TouchableOpacity>
                                <Icons name='circle-with-cross' size={30} color='white' onPress={() => { props.navigation.goBack() }} />
                            </TouchableOpacity>
                        </View>
                        {main && <View style={styling.addPatientView}>
                            <View style={styling.checkView}>
                                <Text style={styling.removeTXT}>If patient not registered check it!</Text>
                                <Icon.Button name='checkcircle' backgroundColor='white' color={!check ? 'black' : 'green'} onPress={() => {
                                    if (!check) {
                                        setCheck(true)
                                    }
                                    else setCheck(false)
                                }}></Icon.Button>
                            </View>

                            {check && <View style={styling.patientDataView}>
                                <Text style={styling.headTXT}>Patient Detail</Text>
                                <Input
                                    placeholder='First Name'
                                    value={firstName}
                                    onChangeText={(val) => {
                                        SetFName(val)
                                    }}
                                />
                                <Input
                                    placeholder='Second Name'
                                    value={secondName}
                                    onChangeText={(val) => {
                                        SetSName(val)
                                    }}
                                />
                                <Input
                                    placeholder='Date Of Birth'
                                    value={DOB}
                                    onChangeText={(val) => {
                                        SetDOB(val)
                                    }}
                                />

                                <View style={styling.dropdownView}>
                                    <DropDownPicker
                                        items={consult}
                                        defaultValue={service}
                                        placeholder='Service Type'
                                        labelStyle={styling.dropdownLabel}
                                        style={styling.dropDown}
                                        containerStyle={styling.containerStyle}
                                        dropDownStyle={styling.dropdownStyle}
                                        showArrow={true}
                                        onChangeItem={(service) => {
                                            setService(service.value)
                                        }}

                                    />
                                </View>

                                <View style={styling.opacityView}>
                                    <TouchableOpacity style={styling.OpacityLog} onPress={() => {
                                        setCheck(false)
                                        let newMarkers = [...markers];
                                        newMarkers.push(
                                            firstName
                                        )
                                        setMarkers(newMarkers)
                                    }}          >
                                        <Text style={styling.Opacitytxt}>SAVE</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>}

                            {!check &&
                                <View style={styling.patientDropView}>
                                    <View style={styling.dropdownView}>
                                        <DropDownPicker
                                            items={[
                                                { label: 'Alex', value: '/api/patients/31' },
                                                { label: 'Daniyal', value: '/api/patients/31' }
                                            ]}
                                            defaultValue={firstName}
                                            placeholder='Patient Name'
                                            labelStyle={styling.dropdownLabel}
                                            style={styling.dropDown}
                                            containerStyle={styling.containerStyle}
                                            dropDownStyle={styling.dropdownStyle}
                                            showArrow={true}
                                            onChangeItem={(val) => {
                                                SetFName(val.value)
                                                setName(val.label)
                                            }}

                                        />


                                    </View>
                                    <View style={styling.dropdownView}>
                                        {/* <View style={{ height: hp(8), width: wp(70), borderWidth: 0.5, borderRadius: 10 }}> */}
                                        <DropDownPicker
                                            items={consult}
                                            defaultValue={service}
                                            placeholder='Service Type'
                                            labelStyle={styling.dropdownLabel}
                                            style={styling.dropDown}
                                            containerStyle={styling.containerStyle}
                                            dropDownStyle={styling.dropdownStyle}
                                            showArrow={true}
                                            onChangeItem={(service) => {
                                                setService(service.value)
                                                setServiceLAbel(service.label)
                                            }}

                                        />
                                    </View>

                                    <View style={styling.opacityView}>
                                        <TouchableOpacity style={styling.OpacityLog} onPress={() => {
                                            // setMain(false)
                                            // setTimeView(true)
                                            props.navigation.navigate('DoctorSwiperTime', { Name: name, ServiceLabel: serviceLabel, service: service, nameValue: firstName, Next: next })
                                        }}          >
                                            <Text style={styling.Opacitytxt}>NEXT</Text>
                                        </TouchableOpacity>
                                    </View>


                                </View>
                            }

                        </View>}

                        {timeView && <View style={styling.addPatientView}>
                            <View style={styling.timeView}>
                                <View style={styling.headerView}>
                                    <Text style={styling.headTXT}>Select Time</Text>
                                </View>
                                <ScrollView showsVerticalScrollIndicator={false}>
                                    <View style={styling.dayView}>
                                        <Text style={styling.headTXT}>Monday</Text>
                                    </View>
                                    <View style={styling.selecttimeView}>
                                        <FlatList
                                            horizontal={true}
                                            showsHorizontalScrollIndicator={false}
                                            data={Monday}
                                            renderItem={(val, index) => {
                                                return (
                                                    <TouchableOpacity style={val.index == selectMon ? styling.selecttimeOpacity : styling.timeOpacity}
                                                        onPress={() => {
                                                            setMonSelect(val.index)
                                                            setTime(val.item.Time)
                                                            setdate('Monday')
                                                        }}
                                                    >
                                                        <Text style={val.index == selectMon ? styling.selecttimeTxt : styling.timeTxt}>
                                                            {val.item.Time}</Text>
                                                    </TouchableOpacity>
                                                )
                                            }}
                                        />
                                    </View>

                                    <View style={styling.dayView}>
                                        <Text style={styling.headTXT}>Tuesday</Text>
                                    </View>
                                    <View style={styling.selecttimeView}>
                                        <FlatList
                                            horizontal={true}
                                            showsHorizontalScrollIndicator={false}
                                            data={Monday}
                                            renderItem={(val, index) => {
                                                return (
                                                    <TouchableOpacity style={val.index == selectTues ? styling.selecttimeOpacity : styling.timeOpacity}
                                                        onPress={() => {
                                                            setTuesSelect(val.index)
                                                            setTime(val.item.Time)
                                                            setdate('Tuesday')
                                                            console.log(time)
                                                        }}
                                                    >
                                                        <Text style={val.index == selectTues ? styling.selecttimeTxt : styling.timeTxt}>
                                                            {val.item.Time}</Text>
                                                    </TouchableOpacity>
                                                )
                                            }}
                                        />
                                    </View>

                                    <View style={styling.dayView}>
                                        <Text style={styling.headTXT}>Wednesday</Text>
                                    </View>
                                    <View style={styling.selecttimeView}>
                                        <FlatList
                                            horizontal={true}
                                            showsHorizontalScrollIndicator={false}
                                            data={Monday}
                                            renderItem={(val, index) => {
                                                return (
                                                    <TouchableOpacity style={val.index == selectWed ? styling.selecttimeOpacity : styling.timeOpacity}
                                                        onPress={() => {
                                                            setWedSelect(val.index)
                                                            setTime(val.item.Time)
                                                            setdate('Wednesday')

                                                        }}
                                                    >
                                                        <Text style={val.index == selectWed ? styling.selecttimeTxt : styling.timeTxt}>
                                                            {val.item.Time}</Text>
                                                    </TouchableOpacity>
                                                )
                                            }}
                                        />
                                    </View>

                                    <View style={styling.dayView}>
                                        <Text style={styling.headTXT}>Thursday</Text>
                                    </View>
                                    <View style={styling.selecttimeView}>
                                        <FlatList
                                            horizontal={true}
                                            showsHorizontalScrollIndicator={false}
                                            data={Monday}
                                            renderItem={(val, index) => {
                                                return (
                                                    <TouchableOpacity style={val.index == selectThur ? styling.selecttimeOpacity : styling.timeOpacity}
                                                        onPress={() => {
                                                            setThurSelect(val.index)
                                                            setTime(val.item.Time)
                                                            setdate('Thursday')

                                                        }}
                                                    >
                                                        <Text style={val.index == selectThur ? styling.selecttimeTxt : styling.timeTxt}>
                                                            {val.item.Time}</Text>
                                                    </TouchableOpacity>
                                                )
                                            }}
                                        />
                                    </View>

                                    <View style={styling.dayView}>
                                        <Text style={styling.headTXT}>Friday</Text>
                                    </View>
                                    <View style={styling.selecttimeView}>
                                        <FlatList
                                            horizontal={true}
                                            showsHorizontalScrollIndicator={false}
                                            data={Monday}
                                            renderItem={(val, index) => {
                                                return (
                                                    <TouchableOpacity style={val.index == selectFri ? styling.selecttimeOpacity : styling.timeOpacity}
                                                        onPress={() => {
                                                            setFriSelect(val.index)
                                                            setTime(val.item.Time)
                                                            setdate('Friday')

                                                        }}
                                                    >
                                                        <Text style={val.index == selectFri ? styling.selecttimeTxt : styling.timeTxt}>
                                                            {val.item.Time}</Text>
                                                    </TouchableOpacity>
                                                )
                                            }}
                                        />
                                    </View>
                                    <View style={styling.dayView}>
                                        <Text style={styling.headTXT}>Saturday</Text>
                                    </View>
                                    <View style={styling.selecttimeView}>
                                        <FlatList
                                            horizontal={true}
                                            showsHorizontalScrollIndicator={false}
                                            data={Monday}
                                            renderItem={(val, index) => {
                                                return (
                                                    <TouchableOpacity style={val.index == selectSat ? styling.selecttimeOpacity : styling.timeOpacity}
                                                        onPress={() => {
                                                            setSatSelect(val.index)
                                                            setTime(val.item.Time)
                                                            setdate('Saturday')

                                                        }}
                                                    >
                                                        <Text style={val.index == selectSat ? styling.selecttimeTxt : styling.timeTxt}>
                                                            {val.item.Time}</Text>
                                                    </TouchableOpacity>
                                                )
                                            }}
                                        />
                                    </View>

                                    <View style={styling.dayView}>
                                        <Text style={styling.headTXT}>Sunday</Text>
                                    </View>
                                    <View style={styling.selecttimeView}>
                                        <FlatList
                                            horizontal={true}
                                            showsHorizontalScrollIndicator={false}
                                            data={Monday}
                                            renderItem={(val, index) => {
                                                return (
                                                    <TouchableOpacity style={val.index == selectSun ? styling.selecttimeOpacity : styling.timeOpacity}
                                                        onPress={() => {
                                                            setSunSelect(val.index)
                                                            setTime(val.item.Time)
                                                            setdate('Sunday')

                                                        }}
                                                    >
                                                        <Text style={val.index == selectSun ? styling.selecttimeTxt : styling.timeTxt}>
                                                            {val.item.Time}</Text>
                                                    </TouchableOpacity>
                                                )
                                            }}
                                        />
                                    </View>
                                    <View style={styling.opacityView}>
                                        <TouchableOpacity style={styling.OpacityLog} onPress={() => {
                                            setMain(false)
                                            setTimeView(false)
                                            setDetail(true)
                                        }}          >
                                            <Text style={styling.Opacitytxt}>NEXT</Text>
                                        </TouchableOpacity>
                                    </View>
                                </ScrollView>
                            </View>



                        </View>}

                        {detail && <View style={styling.addPatientView}>
                            <View style={styling.detailsView} >
                                <View style={styling.headerView}>
                                    <Text style={styling.headTXT}>Patient Detail</Text>
                                </View>
                                <View style={styling.innerDetail}>
                                    <Text style={styling.headTXT}>Name:  Chloe</Text>
                                    {/* <Text style={styling.headTXT}>Second Name:  none</Text> */}
                                    {/* <Text style={styling.headTXT}>Date of Birth:  {DOB}</Text> */}
                                    <Text style={styling.headTXT}>Service:  CheckUp</Text>
                                    <Text style={styling.headTXT}>Date & Time:  {time} - {date}</Text>

                                </View>
                                <View style={styling.opacityPView}>
                                    <TouchableOpacity style={styling.OpacityLog} onPress={() => {
                                        // uploaded();
                                        // props.navigation.goBack()
                                        SaveRecord()

                                    }}>
                                        <Text style={styling.Opacitytxt}>Proceed</Text>
                                    </TouchableOpacity>
                                </View>

                            </View>
                        </View>
                        }
                    </>}
            </View>
        </SafeAreaView >
    )
}
export default addPatient