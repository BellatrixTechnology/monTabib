import moment from 'moment';
import React, { useState, useEffect } from 'react';
import { StatusBar, View, TouchableOpacity, Text, ToastAndroid, ActivityIndicator, SafeAreaView } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import Swiper from 'react-native-swiper';
import { ISModal, ConfirmAlert, ReserveSucesss } from '../../../Patient/AlertModal/index';

import { styles } from './styless';

import AsyncStorage from '@react-native-community/async-storage';
const DoctorSwiperTime = (navigation) => {
    const [id, setid] = useState(0);
    const Name = navigation.route.params.Name
    const nameLabel = navigation.route.params.nameValue
    const consultLabel = navigation.route.params.ServiceLabel
    const consult = navigation.route.params.service
    const date = navigation.route.params.Next
    const [day1, setDay1] = useState([])
    const [day2, setDay2] = useState([])
    const [day3, setDay3] = useState([])
    const [day4, setDay4] = useState([])
    const [day5, setDay5] = useState([])
    const [day6, setDay6] = useState([])
    const [day7, setDay7] = useState([])
    const [isVisible, setIsVisible] = useState(false)
    const [Reserve, setReserveSucesss] = useState(false)
    const [selectedService, setSelectService] = useState('')
    const [time, setTime] = useState('')
    const [selectDate, setSelectDate] = useState('')
    const [data, setUserData] = useState('')
    const [TIMEDate, setTIMEDate] = useState('')
    const [isLoading, setLoading] = useState(false)
    const [Token, setToken] = useState('')
    useEffect(() => {
        const unsubscribe = navigation.navigation.addListener('focus', () => {
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
            let parsed1 = JSON.parse(user);

            getTime(token)
            setUserData(parsed1);
            setToken(token)
        }
        catch (error) {
            console.log(error)
        }
    }
    async function getTime(token) {
        console.log(token, 'asdasdasdasdasdasdasdlasd.as,dmasldmasdl')
        {
            fetch('https://montabib.com/api/availabilitiesDoctors/' + token + '?dateDebut=' + date[0].date,
                {
                    method: "GET",
                }).then((res) => {
                    if (res.ok == true) {
                        res.json().then((dat) => {
                            console.log(dat);

                            setDay1(dat.availabilities)
                        }).catch((error) => { console.log(error) })
                    } else {
                        console.log('err')
                    }
                })
                .catch((error) => {
                    console.log(error)
                });
        }
        {
            fetch('https://montabib.com/api/availabilitiesDoctors/' + token + '?dateDebut=' + date[1].date,
                {
                    method: "GET",
                }).then((res) => {
                    if (res.ok == true) {
                        res.json().then((dat) => {
                            setDay2(dat.availabilities)
                        }).catch((error) => { console.log(error) })
                    } else {
                        console.log('err')
                    }
                })
                .catch((error) => {
                    console.log(error)
                });
        }
        {
            fetch('https://montabib.com/api/availabilitiesDoctors/' + token + '?dateDebut=' + date[2].date,
                {
                    method: "GET",
                }).then((res) => {
                    if (res.ok == true) {
                        res.json().then((dat) => {
                            setDay3(dat.availabilities)
                        }).catch((error) => { console.log(error) })
                    } else {
                        console.log('err')
                    }
                })
                .catch((error) => {
                    console.log(error)
                });
        }
        {
            fetch('https://montabib.com/api/availabilitiesDoctors/' + token + '?dateDebut=' + date[3].date,
                {
                    method: "GET",
                }).then((res) => {
                    if (res.ok == true) {
                        res.json().then((dat) => {
                            setDay4(dat.availabilities)
                        }).catch((error) => { console.log(error) })
                    } else {
                        console.log('err')
                    }
                })
                .catch((error) => {
                    console.log(error)
                });
        }
        {
            fetch('https://montabib.com/api/availabilitiesDoctors/' + token + '?dateDebut=' + date[4].date,
                {
                    method: "GET",
                }).then((res) => {
                    if (res.ok == true) {
                        res.json().then((dat) => {
                            setDay5(dat.availabilities)
                        }).catch((error) => { console.log(error) })
                    } else {
                        console.log('err')
                    }
                })
                .catch((error) => {
                    console.log(error)
                });
        }
        {
            fetch('https://montabib.com/api/availabilitiesDoctors/' + token + '?dateDebut=' + date[5].date,
                {
                    method: "GET",
                }).then((res) => {
                    if (res.ok == true) {
                        res.json().then((dat) => {
                            setDay6(dat.availabilities)
                        }).catch((error) => { console.log(error) })
                    } else {
                        console.log('err')
                    }
                })
                .catch((error) => {
                    console.log(error)
                });
        }
        {
            fetch('https://montabib.com/api/availabilitiesDoctors/' + token + '?dateDebut=' + date[6].date,
                {
                    method: "GET",
                }).then((res) => {
                    if (res.ok == true) {
                        res.json().then((dat) => {
                            setDay7(dat.availabilities)
                        }).catch((error) => { console.log(error) })
                    } else {
                        console.log('err')
                    }
                })
                .catch((error) => {
                    console.log(error)
                });
            setLoading(false)
        }

    }
    function _renderItem({ item }) {
        return (
            <TouchableOpacity style={
                time == moment(item.date).format('hh:mm') ? styles.selecttimeOpacity :
                    styles.timeOpacity
            }
                onPress={() => {
                    setTime(moment(item.date).format('hh:mm'))
                    setSelectDate(moment(item.date).format('llll'))
                    setTIMEDate(item.date)
                }}
            >
                {/*  */}
                <Text style={time == moment(item.date).format('hh:mm') ? styles.selecttimeTxt : styles.unselecttimeTxt}>
                    {moment(item.date).format('hh:mm')}</Text>
            </TouchableOpacity>
        )
    }

    function addConsult() {
        fetch('https://montabib.com/loginApp', {
            method: "POST",
            headers: initHeader(),
            body: JSON.stringify(
                {
                    "username": data.username,
                    "password": data.password
                }
            ),
        }).then((responce) => responce.json()).then((res) => {
            let temp = res.patientid
            addConsultion(temp)
        });
    }
    function initHeader() {
        let auth = {
            'Content-Type': "application/json",
        };
        return auth;
    }
    async function addConsultion() {
        const motifValue = navigation.route.params.service
        let dateSelect = moment(TIMEDate).format();
        // console.log(consult, Token, nameLabel, date, motifValue)
        fetch('https://montabib.com/api/consultations', {
            method: 'POST',
            headers: initHeader(),
            body: JSON.stringify({
                "medecin": "/api/medecins/" + Token,
                "patient": nameLabel,
                "dateConsultation": dateSelect,
                "motif": "/api/motifs/" + motifValue,
                "compteRendu": ""
            })
        }).then((res) => {
            // console.log(res, '++++++')
            if (res.ok == true) {
                res.json().then((data) => {
                    // console.log(data, "+!!!!!=======")
                    setReserveSucesss(true)
                }).catch((error) => { console.log(error) })
            } else {
                ToastAndroid.show("Error! Check your details ", ToastAndroid.SHORT);
            }
        })
            .catch((error) => {
                console.log(error)
                ToastAndroid.show(error, ToastAndroid.SHORT);
            });
        // console.log("/api/motifs/" + navigation.route.params.service, TIMEDate, dateSelect)

    }


    return (
        <SafeAreaView style={styles.safeContainer}>
            <StatusBar barStyle="dark-content" hidden={false} backgroundColor="#45347a" translucent={false} />

            <View style={styles.swiperContainer}>
                {/* {
                    !isLoading ? <ActivityIndicator size={'large'} color='black' /> : */}
                <Swiper showsButtons={false} showsPagination={true} loop={false} showsButtons={true}
                    nextButton={<View><Text style={styles.nextbutton}> {'>'} </Text></View>}
                    prevButton={<View><Text style={styles.nextbutton}> {'<'} </Text></View>}
                >

                    <View style={styles.slide1}>
                        <View style={styles.timeView}>
                            <Text style={styles.timeTxt}>{moment(date[0].date).format('dddd')}</Text>
                        </View>
                        {day1 != '' ?
                            <View style={styles.FlatListView}>
                                <FlatList
                                    showsVerticalScrollIndicator={false}
                                    data={day1}
                                    renderItem={_renderItem}
                                />
                                <TouchableOpacity style={styles.OpacityLogconfirm} disabled={time ? false : true}
                                    onPress={() => {
                                        addConsult()

                                    }
                                    }
                                >
                                    <Text style={styles.Opacitytxt}>Confirm</Text>
                                </TouchableOpacity>
                            </View>
                            :
                            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                                <Text>DOCTOR DAY OFF</Text>
                            </View>
                        }

                    </View>

                    <View style={styles.slide1}>
                        <View style={styles.timeView}>
                            <Text style={styles.timeTxt}>{moment(date[1].date).format('dddd')}</Text>
                        </View>
                        {day2 != '' ?
                            <View style={styles.FlatListView}>
                                <FlatList
                                    showsVerticalScrollIndicator={false}
                                    data={day2}
                                    renderItem={_renderItem}
                                />
                                <TouchableOpacity style={styles.OpacityLogconfirm} disabled={time ? false : true}
                                    onPress={() => {
                                        addConsult()
                                    }
                                    }                                >
                                    <Text style={styles.Opacitytxt}>Confirm</Text>
                                </TouchableOpacity>
                            </View>
                            :
                            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                                <Text>DOCTOR DAY OFF</Text>
                            </View>}
                    </View>
                    <View style={styles.slide1}>
                        <View style={styles.timeView}>
                            <Text style={styles.timeTxt}>{moment(date[2].date).format('dddd')}</Text>
                        </View>
                        {day3 != '' ?
                            <View style={styles.FlatListView}>
                                <FlatList
                                    showsVerticalScrollIndicator={false}
                                    data={day3}
                                    renderItem={_renderItem}
                                />
                                <TouchableOpacity style={styles.OpacityLogconfirm} disabled={time ? false : true}
                                    onPress={() => {
                                        addConsult()
                                    }
                                    }                                >
                                    <Text style={styles.Opacitytxt}>Confirm</Text>
                                </TouchableOpacity>
                            </View>
                            :
                            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                                <Text>DOCTOR DAY OFF</Text>
                            </View>}
                    </View>
                    <View style={styles.slide1}>
                        <View style={styles.timeView}>
                            <Text style={styles.timeTxt}>{moment(date[3].date).format('dddd')}</Text>
                        </View>
                        {day4 != '' ?
                            <View style={styles.FlatListView}>
                                <FlatList
                                    showsVerticalScrollIndicator={false}
                                    data={day4}
                                    renderItem={_renderItem}
                                />
                                <TouchableOpacity style={styles.OpacityLogconfirm} disabled={time ? false : true}
                                    onPress={() => {
                                        addConsult()
                                    }
                                    }                                >
                                    <Text style={styles.Opacitytxt}>Confirm</Text>
                                </TouchableOpacity>
                            </View>
                            :
                            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                                <Text>DOCTOR DAY OFF</Text>
                            </View>}
                    </View>
                    <View style={styles.slide1}>
                        <View style={styles.timeView}>
                            <Text style={styles.timeTxt}>{moment(date[4].date).format('dddd')}</Text>
                        </View>
                        {day5 != '' ?
                            <View style={styles.FlatListView}>
                                <FlatList
                                    showsVerticalScrollIndicator={false}
                                    data={day5}
                                    renderItem={_renderItem}
                                />
                                <TouchableOpacity style={styles.OpacityLogconfirm} disabled={time ? false : true}
                                    onPress={() => {
                                        addConsult()
                                    }
                                    }                                >
                                    <Text style={styles.Opacitytxt}>Confirm</Text>
                                </TouchableOpacity>
                            </View>
                            :
                            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                                <Text>DOCTOR DAY OFF</Text>
                            </View>}
                    </View>
                    <View style={styles.slide1}>
                        <View style={styles.timeView}>
                            <Text style={styles.timeTxt}>{moment(date[5].date).format('dddd')}</Text>
                        </View>
                        {day6 != '' ?
                            <View style={styles.FlatListView}>
                                <FlatList
                                    showsVerticalScrollIndicator={false}
                                    data={day6}
                                    renderItem={_renderItem}
                                />
                                <TouchableOpacity style={styles.OpacityLogconfirm} disabled={time ? false : true}
                                    onPress={() => {
                                        addConsult()
                                    }
                                    }                                >
                                    <Text style={styles.Opacitytxt}>Confirm</Text>
                                </TouchableOpacity>
                            </View>
                            :
                            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                                <Text>DOCTOR DAY OFF</Text>
                            </View>}
                    </View>
                    <View style={styles.slide1}>
                        <View style={styles.timeView}>
                            <Text style={styles.timeTxt}>{moment(date[6].date).format('dddd')}</Text>
                        </View>
                        {day7 != '' ?
                            <View style={styles.FlatListView}>
                                <FlatList
                                    showsVerticalScrollIndicator={false}
                                    data={day7}
                                    renderItem={_renderItem}
                                />
                                <TouchableOpacity style={styles.OpacityLogconfirm} disabled={time ? false : true}
                                    onPress={() => {
                                        addConsult()
                                    }
                                    }
                                >
                                    <Text style={styles.Opacitytxt}>Confirm</Text>
                                </TouchableOpacity>
                            </View>
                            :
                            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                                <Text>DOCTOR DAY OFF</Text>
                            </View>}
                    </View>
                </Swiper>


                {/* } */}
            </View >
            <ConfirmAlert
                isVisible={Reserve}
                onBackdropPress={Reserve}
                onPress={() => {
                    navigation.navigation.pop()
                }}
                Name={Name}
                Motif={consultLabel}
                date={selectDate}
            />
        </SafeAreaView>
    )
}

export default DoctorSwiperTime;