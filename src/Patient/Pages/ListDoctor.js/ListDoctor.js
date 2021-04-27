import React, { useState, useEffect } from 'react';
import { ScrollView, View, Text, SafeAreaView, TouchableOpacity, FlatList } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import DropDownPicker from 'react-native-dropdown-picker';

import Icon from 'react-native-vector-icons/AntDesign';
import Awesome from 'react-native-vector-icons/FontAwesome'
import { styling } from './styling';

const ListDoctor = ({ navigation, route }) => {
    const city = route.params.city
    const special = route.params.Special
    const Monday = [
        { Time: '09:30' }, { Time: '10:30' }, { Time: '11:00' }, { Time: '11:30' }, { Time: '12:00' }, { Time: '05:30' },
        { Time: '06:00' }, { Time: '06:30' }, { Time: '07:00' }, { Time: '07:30' }
    ];
    const [book, setBook] = useState(false);
    const [detail, setdetail] = useState(false);
    const [detailData, setDetailData] = useState('')
    const [booking, setBooking] = useState(false);
    const [Confirmation, setConfirmation] = useState(false);
    const [data, setData] = useState('')
    const [data2, setdata2] = useState('')
    const [pages, setPage] = useState('1')
    useEffect(() => {
        getDoctor('1')
    }, [])

    async function getDoctor(page) {
        // let temp = []
        fetch('https://montabib.com/api/searchDoctors/' + special + '/' + city + '/' + page,
            {
                method: "GET",
            }).then((res) => {
                if (res.ok == true) {
                    res.json().then((dat) => {
                        setData(dat.medecins)
                    }).catch((error) => { console.log(error) })
                } else {
                    console.log('err')
                }
            })
            .catch((error) => {
                console.log(error)
            });
    }
    async function getDoctorFilter(gen, page) {
        console.log(gen)
        // let temp = []
        fetch('https://montabib.com/api/searchDoctors/' + special + '/' + city + '/' + page + '?sexe=' + gen,
            {
                method: "GET",
            }).then((res) => {
                if (res.ok == true) {
                    res.json().then((dat) => {
                        setData(dat.medecins)
                    }).catch((error) => { console.log(error) })
                } else {
                    console.log('err')
                }
            })
            .catch((error) => {
                console.log(error)
            });
    }
    async function getDoctorFilteravail(avl, page) {
        // console.log(avl)
        // let temp = []
        fetch('https://montabib.com/api/searchDoctors/' + special + '/' + city + '/' + page + '?sexe=' + gender + '&?disponibilite=' + avl,
            {
                method: "GET",
            }).then((res) => {
                if (res.ok == true) {
                    res.json().then((dat) => {
                        console.log(dat)
                        setData(dat.medecins)
                    }).catch((error) => { console.log(error) })
                } else {
                    console.log('err')
                }
            })
            .catch((error) => {
                console.log(error)
            });
    }
    const [selectMon, setMonSelect] = useState(null);
    const [time, setTime] = useState('');
    const [date, setdate] = useState('');
    const [gender, setGender] = useState('');
    const [avail, setAvail] = useState('')
    return (
        <SafeAreaView style={styling.safeContainer}>

            <View style={styling.mainContainer}>
                <View style={styling.headView}>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <Icon name='left' color='white' size={30} />
                    </TouchableOpacity>
                    <Text style={styling.headTXT}>Doctors</Text>
                    <View style={{ width: wp(12) }} />
                </View>
                {!book && <View style={styling.innerView}>
                    <View style={styling.drView}>

                        <View style={styling.headersView}>
                            <DropDownPicker
                                items={[
                                    { label: 'Male', value: '1' },
                                    { label: 'Female', value: '0' },
                                ]}
                                defaultValue={gender}
                                placeholder='Select Gender'
                                labelStyle={styling.dropdownLabel}
                                style={styling.dropDown}
                                containerStyle={styling.containerStyle}
                                dropDownStyle={styling.dropdownStyle}
                                showArrow={true}
                                onChangeItem={(val) => {
                                    let gen = val.value
                                    getDoctorFilter(gen, 1)
                                    setGender(val.value)
                                    setPage('1')
                                }}

                            />
                        </View>
                        <View style={styling.headersView}>
                            <DropDownPicker
                                items={[
                                    { label: 'Today', value: 'today' },
                                    { label: 'Tomorrow', value: 'tomorrow' },

                                ]}
                                defaultValue={avail}
                                placeholder='Availablity'
                                labelStyle={styling.dropdownLabel}
                                style={styling.dropDown}
                                containerStyle={styling.containerStyle}
                                dropDownStyle={styling.dropdownStyle}
                                showArrow={true}
                                onChangeItem={(val) => {
                                    setAvail(val.value)
                                    let avl = val.value
                                    getDoctorFilteravail(avl, 1)
                                }}
                            />
                        </View>

                    </View>
                    <FlatList
                        data={data}
                        showsVerticalScrollIndicator={false}
                        renderItem={({ item }) => {
                            return (
                                <View>
                                    <TouchableOpacity style={styling.nameView} onPress={() => {
                                        setdetail(true),
                                            setDetailData(item)
                                        setBook(true)
                                    }}>
                                        <Text style={styling.DRTXT}>{item.prenom} {item.nom}</Text>
                                        <Text style={styling.labelTXT}>ACUPUNCTURIST</Text>
                                        <Text style={styling.labelTXT}>{item.telephone}</Text>
                                    </TouchableOpacity >
                                </View>
                            )
                        }}
                        ListFooterComponent={() => {
                            let size = data.length
                            return (


                                <View style={{ flexDirection: 'row', alignSelf: 'center' }}>
                                    {pages > 1 &&
                                        <TouchableOpacity style={[styling.loadMore, { marginRight: 2 }]} onPress={() => {
                                            let Temp = Number(pages) - 1
                                            setPage(Temp)
                                            if (gender != '') {
                                                console.log('hello')
                                                getDoctorFilter(gender, Temp)
                                            }
                                            else
                                                getDoctor(Temp)

                                        }}>
                                            <Text style={styling.loadMoreText}>Previous</Text>
                                        </TouchableOpacity>
                                    }
                                    {size > 5 &&
                                        <TouchableOpacity style={styling.loadMore} onPress={() => {
                                            let Temp = Number(pages) + 1
                                            setPage(Temp)
                                            if (gender != '') {
                                                console.log('hello')

                                                getDoctorFilter(gender, Temp)
                                            }
                                            else
                                                getDoctor(Temp)

                                        }}>
                                            <Text style={styling.loadMoreText}>Next</Text>
                                        </TouchableOpacity>
                                    }
                                </View>

                            )

                        }}

                    />

                </View>
                }
                {detail && <View style={styling.innerView}>
                    <View style={styling.nameView} >
                        <Text style={styling.DRTXT}>{detailData.prenom} {detailData.nom}</Text>
                        <Text style={styling.labelTXT}>ACUPUNCTURIST</Text>
                        <Text style={styling.labelTXT}>{detailData.telephone}</Text>
                        <Text style={styling.labelTXT}>{detailData.adresse}</Text>

                    </View >
                    {
                        detailData.experiences != '' &&
                        <View style={styling.nameView} >
                            <Text style={styling.headDRTXT}>Experiences and Training</Text>
                            <Text style={styling.labelDRTXT}>2000 - 2010 - Surgeon</Text>
                        </View >

                    }

                    <View style={styling.nameView}>
                        <Text style={styling.headDRTXT}>Rates & Payment methods</Text>
                        <View>
                            <FlatList
                                data={detailData.services}
                                renderItem={({ item }) => {
                                    return (

                                        <View>
                                            < Text style={styling.labelDRTXT} >
                                                {item.libelle}	{item.prix} da</Text>

                                        </View>


                                    )
                                }
                                }
                            />
                        </View>
                    </View >
                    <TouchableOpacity style={styling.OpacityLog} onPress={() => { setBook(true), setdetail(false), setBooking(true) }}>
                        <Text style={styling.Opacitytxt}>Book</Text>
                    </TouchableOpacity>
                </View>
                }
                {booking && <View style={styling.innerView}>
                    <ScrollView showsVerticalScrollIndicator={false}>
                        <View style={styling.dayView}>
                            <Text style={styling.labelTXT}>Monday</Text>
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
                    </ScrollView>
                    <ScrollView showsVerticalScrollIndicator={false}>
                        <View style={styling.dayView}>
                            <Text style={styling.labelTXT}>Tuesday</Text>
                        </View>
                        <View style={styling.selecttimeView}>
                            <FlatList
                                horizontal={true}
                                showsHorizontalScrollIndicator={false}
                                data={Monday}
                                renderItem={(val, index) => {
                                    return (
                                        <TouchableOpacity style={styling.timeOpacity}
                                        // onPress={() => {
                                        //     setMonSelect(val.index)
                                        //     setTime(val.item.Time)
                                        //     setdate('Monday')
                                        // }}
                                        >
                                            <Text style={styling.timeTxt}>
                                                {val.item.Time}</Text>
                                        </TouchableOpacity>
                                    )
                                }}
                            />
                        </View>
                    </ScrollView>
                    <ScrollView showsVerticalScrollIndicator={false} >
                        <View style={styling.dayView}>
                            <Text style={styling.labelTXT}>Wednesday</Text>
                        </View>
                        <View style={styling.selecttimeView}>
                            <FlatList
                                horizontal={true}
                                showsHorizontalScrollIndicator={false}
                                data={Monday}
                                renderItem={(val, index) => {
                                    return (
                                        <TouchableOpacity style={styling.timeOpacity}
                                        // onPress={() => {
                                        //     setMonSelect(val.index)
                                        //     setTime(val.item.Time)
                                        //     setdate('Monday')
                                        // }}
                                        >
                                            <Text style={styling.timeTxt}>
                                                {val.item.Time}</Text>
                                        </TouchableOpacity>
                                    )
                                }}
                            />
                        </View>
                    </ScrollView>
                    <ScrollView showsVerticalScrollIndicator={false}>
                        <View style={styling.dayView}>
                            <Text style={styling.labelTXT}>Thursday</Text>
                        </View>
                        <View style={styling.selecttimeView}>
                            <FlatList
                                horizontal={true}
                                showsHorizontalScrollIndicator={false}
                                data={Monday}
                                renderItem={(val, index) => {
                                    return (
                                        <TouchableOpacity style={styling.timeOpacity}
                                        // onPress={() => {
                                        //     setMonSelect(val.index)
                                        //     setTime(val.item.Time)
                                        //     setdate('Monday')
                                        // }}
                                        >
                                            <Text style={styling.timeTxt}>
                                                {val.item.Time}</Text>
                                        </TouchableOpacity>
                                    )
                                }}
                            />
                        </View>
                    </ScrollView>
                    <ScrollView showsVerticalScrollIndicator={false}>
                        <View style={styling.dayView}>
                            <Text style={styling.labelTXT}>Friday</Text>
                        </View>
                        <View style={styling.selecttimeView}>
                            <FlatList
                                horizontal={true}
                                showsHorizontalScrollIndicator={false}
                                data={Monday}
                                renderItem={(val, index) => {
                                    return (
                                        <TouchableOpacity style={styling.timeOpacity}
                                        // onPress={() => {
                                        //     setMonSelect(val.index)
                                        //     setTime(val.item.Time)
                                        //     setdate('Monday')
                                        // }}
                                        >
                                            <Text style={styling.timeTxt}>
                                                {val.item.Time}</Text>
                                        </TouchableOpacity>
                                    )
                                }}
                            />
                        </View>
                    </ScrollView>
                    <ScrollView showsVerticalScrollIndicator={false}>
                        <View style={styling.dayView}>
                            <Text style={styling.labelTXT}>Saturday</Text>
                        </View>
                        <View style={styling.selecttimeView}>
                            <FlatList
                                horizontal={true}
                                showsHorizontalScrollIndicator={false}
                                data={Monday}
                                renderItem={(val, index) => {
                                    return (
                                        <TouchableOpacity style={styling.timeOpacity}
                                        // onPress={() => {
                                        //     setMonSelect(val.index)
                                        //     setTime(val.item.Time)
                                        //     setdate('Monday')
                                        // }}
                                        >
                                            <Text style={styling.timeTxt}>
                                                {val.item.Time}</Text>
                                        </TouchableOpacity>
                                    )
                                }}
                            />
                        </View>
                    </ScrollView>

                    <TouchableOpacity style={styling.OpacityLog} onPress={() => { setConfirmation(true), setBook(true), setdetail(false), setBooking(false) }}>
                        <Text style={styling.Opacitytxt}>Confirm</Text>
                    </TouchableOpacity>
                </View>}

                {Confirmation && <View style={styling.inner2View}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', marginVertical: 20 }}>
                        <Text style={styling.labelDRTXT}>Your consultation is confirmed </Text>
                        <Awesome name='check-circle-o' color='green' size={30} />
                    </View>

                    <View style={styling.sucesssView}>
                        <Text style={styling.sucessTxT}>We have sent you a confirmation email.</Text>
                        <Text style={styling.sucessTxT}>  You will also receive a reminder text message the day before the consultation.</Text>
                        <Text style={styling.sucessTxT}>   If you wish to cancel this consultation, please go to your personal space, Consultations tab.</Text>

                        <Text style={styling.msgTxT}> The monTabib team thanks you!</Text>
                    </View>

                </View>}



            </View>

        </SafeAreaView >
    )
}

export default ListDoctor;