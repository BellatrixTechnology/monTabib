import moment from 'moment';
import React, { useState, useEffect } from 'react';
import { StatusBar, View, TouchableOpacity, Text, ToastAndroid, ScrollView, SafeAreaView } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import Swiper from 'react-native-swiper';
import { ISModal, ReserveSucesss } from '../../AlertModal/index';

import { styling } from './styling';


const SwiperTime = (navigation) => {
    console.log(navigation.navigation)
    const [id, setid] = useState(0);
    const userData = navigation.route.params.detailData
    const consult = navigation.route.params.consult
    const date = navigation.route.params.next
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
    useEffect(() => {
        getTime()
    }, [])
    async function getTime() {

        {
            fetch('https://montabib.com/api/availabilitiesDoctors/' + navigation.route.params.detailData.id + '?dateDebut=' + date[0].date,
                {
                    method: "GET",
                }).then((res) => {
                    if (res.ok == true) {
                        res.json().then((dat) => {
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
            fetch('https://montabib.com/api/availabilitiesDoctors/' + navigation.route.params.detailData.id + '?dateDebut=' + date[1].date,
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
            fetch('https://montabib.com/api/availabilitiesDoctors/' + navigation.route.params.detailData.id + '?dateDebut=' + date[2].date,
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
            fetch('https://montabib.com/api/availabilitiesDoctors/' + navigation.route.params.detailData.id + '?dateDebut=' + date[3].date,
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
            fetch('https://montabib.com/api/availabilitiesDoctors/' + navigation.route.params.detailData.id + '?dateDebut=' + date[4].date,
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
            fetch('https://montabib.com/api/availabilitiesDoctors/' + navigation.route.params.detailData.id + '?dateDebut=' + date[5].date,
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
            fetch('https://montabib.com/api/availabilitiesDoctors/' + navigation.route.params.detailData.id + '?dateDebut=' + date[6].date,
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
        }

    }
    function _renderItem({ item }) {
        console.log(item.date)
        return (
            <TouchableOpacity style={
                time == moment(item.date).format('hh:mm') ? styling.selecttimeOpacity :
                    styling.timeOpacity
            }
                onPress={() => {
                    setTime(moment(item.date).format('hh:mm'))
                    setSelectDate(moment(item.date).format('llll'))
                }}
            >
                {/*  */}
                <Text style={time == moment(item.date).format('hh:mm') ? styling.selecttimeTxt : styling.unselecttimeTxt}>
                    {moment(item.date).format('hh:mm')}</Text>
            </TouchableOpacity>
        )

    }
    function addConsult() {
        console.log(selectDate)
        // console.log('res', responseJson)
        // fetch('https://montabib.com/api/consultations', {
        //     method: 'POST',
        //     headers: {
        //         'Accept': 'application/json',
        //         'Content-Type': 'application/json',
        //     },
        //     body: JSON.stringify({

        //         "medecin": "/api/medecins/122",
        //         "patient": firstName,
        //         "dateConsultation": "2021-03-31T10:30:00.000Z",
        //         "motif": service,
        //         "compteRendu": ""


        //     })
        // }).then((response) => {
        //     console.log(response)
        //     if (response.ok == true) {
        //         response.json().then((data) => { console.log(data) }).catch((error) => { console.log(error) })
        //     } else {
        //         ToastAndroid.show("Error! Check your details ", ToastAndroid.SHORT);
        //     }
        // })
        //     .catch((error) => {
        //         console.log(error)
        //         ToastAndroid.show(error, ToastAndroid.SHORT);
        //     });

    }
    // console.log(day1, day2, day3, day4, day5, day6, day7)
    return (
        <SafeAreaView style={styling.safeContainer}>
            <StatusBar barStyle="dark-content" hidden={false} backgroundColor="#45347a" translucent={false} />

            <View style={styling.swiperContainer}>
                <Swiper showsButtons={false} showsPagination={true} loop={false} showsButtons={true}
                    nextButton={<View><Text style={styling.nextbutton}> {'>'} </Text></View>}
                    prevButton={<View><Text style={styling.nextbutton}> {'<'} </Text></View>}
                >

                    <View style={styling.slide1}>
                        <View style={styling.timeView}>
                            <Text style={styling.timeTxt}>{moment(date[0].date).format('dddd')}</Text>

                        </View>
                        {day1 != '' ?
                            <View style={styling.FlatListView}>
                                <FlatList
                                    showsVerticalScrollIndicator={false}
                                    data={day1}
                                    renderItem={_renderItem}
                                />
                                <TouchableOpacity style={styling.OpacityLogconfirm} disabled={time ? false : true}
                                    onPress={() => setIsVisible(true)}
                                >
                                    <Text style={styling.Opacitytxt}>Confirm</Text>
                                </TouchableOpacity>
                            </View>
                            :
                            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                                <Text>DOCTOR DAY OFF</Text>
                            </View>
                        }

                    </View>

                    <View style={styling.slide1}>
                        <View style={styling.timeView}>
                            <Text style={styling.timeTxt}>{moment(date[1].date).format('dddd')}</Text>
                        </View>
                        {day2 != '' ?
                            <View style={styling.FlatListView}>
                                <FlatList
                                    showsVerticalScrollIndicator={false}
                                    data={day2}
                                    renderItem={_renderItem}
                                />
                                <TouchableOpacity style={styling.OpacityLogconfirm} disabled={time ? false : true}
                                    onPress={() => setIsVisible(true)}
                                >
                                    <Text style={styling.Opacitytxt}>Confirm</Text>
                                </TouchableOpacity>
                            </View>
                            :
                            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                                <Text>DOCTOR DAY OFF</Text>
                            </View>}
                    </View>
                    <View style={styling.slide1}>
                        <View style={styling.timeView}>
                            <Text style={styling.timeTxt}>{moment(date[2].date).format('dddd')}</Text>
                        </View>
                        {day3 != '' ?
                            <View style={styling.FlatListView}>
                                <FlatList
                                    showsVerticalScrollIndicator={false}
                                    data={day3}
                                    renderItem={_renderItem}
                                />
                                <TouchableOpacity style={styling.OpacityLogconfirm} disabled={time ? false : true}
                                    onPress={() => setIsVisible(true)}
                                >
                                    <Text style={styling.Opacitytxt}>Confirm</Text>
                                </TouchableOpacity>
                            </View>
                            :
                            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                                <Text>DOCTOR DAY OFF</Text>
                            </View>}
                    </View>
                    <View style={styling.slide1}>
                        <View style={styling.timeView}>
                            <Text style={styling.timeTxt}>{moment(date[3].date).format('dddd')}</Text>
                        </View>
                        {day4 != '' ?
                            <View style={styling.FlatListView}>
                                <FlatList
                                    showsVerticalScrollIndicator={false}
                                    data={day4}
                                    renderItem={_renderItem}
                                />
                                <TouchableOpacity style={styling.OpacityLogconfirm} disabled={time ? false : true}
                                    onPress={() => setIsVisible(true)}
                                >
                                    <Text style={styling.Opacitytxt}>Confirm</Text>
                                </TouchableOpacity>
                            </View>
                            :
                            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                                <Text>DOCTOR DAY OFF</Text>
                            </View>}
                    </View>
                    <View style={styling.slide1}>
                        <View style={styling.timeView}>
                            <Text style={styling.timeTxt}>{moment(date[4].date).format('dddd')}</Text>
                        </View>
                        {day5 != '' ?
                            <View style={styling.FlatListView}>
                                <FlatList
                                    showsVerticalScrollIndicator={false}
                                    data={day5}
                                    renderItem={_renderItem}
                                />
                                <TouchableOpacity style={styling.OpacityLogconfirm} disabled={time ? false : true}
                                    onPress={() => setIsVisible(true)}
                                >
                                    <Text style={styling.Opacitytxt}>Confirm</Text>
                                </TouchableOpacity>
                            </View>
                            :
                            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                                <Text>DOCTOR DAY OFF</Text>
                            </View>}
                    </View>
                    <View style={styling.slide1}>
                        <View style={styling.timeView}>
                            <Text style={styling.timeTxt}>{moment(date[5].date).format('dddd')}</Text>
                        </View>
                        {day6 != '' ?
                            <View style={styling.FlatListView}>
                                <FlatList
                                    showsVerticalScrollIndicator={false}
                                    data={day6}
                                    renderItem={_renderItem}
                                />
                                <TouchableOpacity style={styling.OpacityLogconfirm} disabled={time ? false : true}
                                    onPress={() => setIsVisible(true)}
                                >
                                    <Text style={styling.Opacitytxt}>Confirm</Text>
                                </TouchableOpacity>
                            </View>
                            :
                            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                                <Text>DOCTOR DAY OFF</Text>
                            </View>}
                    </View>
                    <View style={styling.slide1}>
                        <View style={styling.timeView}>
                            <Text style={styling.timeTxt}>{moment(date[6].date).format('dddd')}</Text>
                        </View>
                        {day7 != '' ?
                            <View style={styling.FlatListView}>
                                <FlatList
                                    showsVerticalScrollIndicator={false}
                                    data={day7}
                                    renderItem={_renderItem}
                                />
                                <TouchableOpacity style={styling.OpacityLogconfirm} disabled={time ? false : true}
                                    onPress={() => setIsVisible(true)}
                                >
                                    <Text style={styling.Opacitytxt}>Confirm</Text>
                                </TouchableOpacity>
                            </View>
                            :
                            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                                <Text>DOCTOR DAY OFF</Text>
                            </View>}
                    </View>
                </Swiper>

                <ISModal
                    isVisible={isVisible}
                    onBackdropPress={() => {
                        setIsVisible(false)
                    }}
                    onPress={() => {
                        setIsVisible(false)
                        setReserveSucesss(true)
                    }}
                    value={selectedService}
                    onChangeItem={(val) => {
                        setSelectService(val.value)
                    }}
                    Date={selectDate}
                    DoctorName={userData.prenom + ' ' + userData.nom}
                    itemData={consult}
                    type={'ACUPUNCTURIST'}
                    address={userData.adresse}
                />
                <ReserveSucesss
                    isVisible={Reserve}
                    onBackdropPress={false}
                    onPress={() => {
                        // navigation.navigation.pop()
                        // navigation.navigation.pop()
                        addConsult()
                    }}
                />
            </View >

        </SafeAreaView>
    )
}

export default SwiperTime;