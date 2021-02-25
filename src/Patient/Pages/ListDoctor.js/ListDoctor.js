import React, { useState } from 'react';
import { ScrollView, View, Text, SafeAreaView, TouchableOpacity, FlatList } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import DropDownPicker from 'react-native-dropdown-picker';

import Icon from 'react-native-vector-icons/AntDesign';
import Awesome from 'react-native-vector-icons/FontAwesome'
import { styling } from './styling';

const ListDoctor = (props) => {
    const Monday = [
        { Time: '09:30' }, { Time: '10:30' }, { Time: '11:00' }, { Time: '11:30' }, { Time: '12:00' }, { Time: '05:30' },
        { Time: '06:00' }, { Time: '06:30' }, { Time: '07:00' }, { Time: '07:30' }
    ];
    const [book, setBook] = useState(false);
    const [detail, setdetail] = useState(false);
    const [booking, setBooking] = useState(false);
    const [Confirmation, setConfirmation] = useState(false);


    const [selectMon, setMonSelect] = useState(null);
    const [time, setTime] = useState('');
    const [date, setdate] = useState('');
    const [Special, setSpecial] = useState('');
    const [City, setCity] = useState('')
    console.log(props)
    return (
        <SafeAreaView style={styling.safeContainer}>

            <View style={styling.mainContainer}>
                <View style={styling.headView}>
                    <TouchableOpacity onPress={() => props.navigation.goBack()}>
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
                                    { label: 'Male', value: 'Male' },
                                    { label: 'Female', value: 'Female' },
                                ]}
                                defaultValue={Special}
                                placeholder='Select Gender'
                                labelStyle={styling.dropdownLabel}
                                style={styling.dropDown}
                                containerStyle={styling.containerStyle}
                                dropDownStyle={styling.dropdownStyle}
                                showArrow={true}
                                onChangeItem={(special) => {
                                    console.log('ee')
                                    setSpecial(special.value)
                                }}

                            />
                        </View>
                        <View style={styling.headersView}>
                            <DropDownPicker
                                items={[
                                    { label: 'Today', value: 'Today' },
                                    { label: 'Tomorrow', value: 'Tomorrow' },

                                ]}
                                defaultValue={City}
                                placeholder='Availablity'
                                labelStyle={styling.dropdownLabel}
                                style={styling.dropDown}
                                containerStyle={styling.containerStyle}
                                dropDownStyle={styling.dropdownStyle}
                                showArrow={true}
                                onChangeItem={(city) => { setCity(city.value) }}
                            />
                        </View>

                    </View>
                    <TouchableOpacity style={styling.nameView} onPress={() => {
                        setdetail(true),
                            setBook(true)
                    }}>
                        <Text style={styling.DRTXT}>Dr. Roger</Text>
                        <Text style={styling.labelTXT}>ACUPUNCTURIST</Text>
                        <Text style={styling.labelTXT}>051924535</Text>
                    </TouchableOpacity >
                    <TouchableOpacity style={styling.nameView}>
                        <Text style={styling.DRTXT}>Dr. Alpha</Text>
                        <Text style={styling.labelTXT}>ACUPUNCTURIST</Text>
                        <Text style={styling.labelTXT}>0519291929</Text>
                    </TouchableOpacity >
                    <TouchableOpacity style={styling.nameView}>
                        <Text style={styling.DRTXT}>Dr. Mario</Text>
                        <Text style={styling.labelTXT}>ACUPUNCTURIST</Text>
                        <Text style={styling.labelTXT}>051453`1929</Text>
                    </TouchableOpacity >
                </View>
                }
                {detail && <View style={styling.innerView}>
                    <View style={styling.nameView} >
                        <Text style={styling.DRTXT}>Dr. Roger</Text>
                        <Text style={styling.labelTXT}>ACUPUNCTURIST</Text>
                        <Text style={styling.labelTXT}>051924535</Text>
                        <Text style={styling.labelTXT}>Alger Centre, Algérie</Text>

                    </View >
                    <View style={styling.nameView} >
                        <Text style={styling.headDRTXT}>Experiences and Training</Text>
                        <Text style={styling.labelDRTXT}>2000 - 2010 - Surgeon</Text>


                    </View >
                    <View style={styling.nameView}>
                        <Text style={styling.headDRTXT}>Rates & Payment methods</Text>
                        <Text style={styling.labelDRTXT}>
                            Hypnosis session	2000 da</Text>
                        <Text style={styling.labelDRTXT}>
                            Rehabilitation session	2000 da</Text>
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