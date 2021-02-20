import React, { useState } from 'react';
import { FlatList, View, TouchableOpacity, ToastAndroid, ScrollView, SafeAreaView } from 'react-native';
import { Text, Input } from 'react-native-elements';
import Icon from 'react-native-vector-icons/AntDesign';
import Icons from 'react-native-vector-icons/FontAwesome';
import DropDownPicker from 'react-native-dropdown-picker';
import { Picker } from '@react-native-picker/picker';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';



import { styling } from './styling';
import Swiper from 'react-native-swiper'


const addPatient = (props) => {
    const [check, setCheck] = useState(false);

    const Monday = [
        { Time: '09:30' }, { Time: '10:30' }, { Time: '11:00' }, { Time: '11:30' }, { Time: '12:00' }, { Time: '05:30' },
        { Time: '06:00' }, { Time: '06:30' }, { Time: '07:00' }, { Time: '07:30' }
    ];
    const Tuesday = [
        { Time: '11:00' }, { Time: '11:30' }, { Time: '12:00' }, { Time: '12:30' }, { Time: '13:00' }, { Time: '05:30' },
        { Time: '06:00' }, { Time: '06:30' }, { Time: '07:00' }, { Time: '07:30' }
    ];
    const Wed = [
        { Time: '09:30' }, { Time: '10:30' }, { Time: '11:00' }, { Time: '11:30' }, { Time: '12:00' }, { Time: '05:30' },
        { Time: '06:00' }, { Time: '06:30' }, { Time: '07:00' }, { Time: '07:30' }
    ];
    const Thursday = [
        { Time: '09:30' }, { Time: '10:30' }, { Time: '11:00' }, { Time: '11:30' }, { Time: '12:00' }, { Time: '05:30' },
        { Time: '06:00' }, { Time: '06:30' }, { Time: '07:00' }, { Time: '07:30' }
    ]
    const Friday = [
        { Time: '09:30' }, { Time: '10:30' }, { Time: '11:00' }, { Time: '11:30' }, { Time: '12:00' }, { Time: '05:30' },
        { Time: '06:00' }, { Time: '06:30' }, { Time: '07:00' }, { Time: '07:30' }
    ]
    const Saturday = [
        { Time: '09:30' }, { Time: '10:30' }, { Time: '11:00' }, { Time: '11:30' }, { Time: '12:00' }, { Time: '05:30' },
        { Time: '06:00' }, { Time: '06:30' }, { Time: '07:00' }, { Time: '07:30' }
    ]
    const Sunday = [
        { Time: '09:30' }, { Time: '10:30' }, { Time: '11:00' }, { Time: '11:30' }, { Time: '12:00' }, { Time: '05:30' },
        { Time: '06:00' }, { Time: '06:30' }, { Time: '07:00' }, { Time: '07:30' }
    ]

    const [selectMon, setMonSelect] = useState(null);
    const [selectTues, setTuesSelect] = useState(null);
    const [selectWed, setWedSelect] = useState(null);
    const [selectFri, setFriSelect] = useState(null);
    const [selectThur, setThurSelect] = useState(null);
    const [selectSat, setSatSelect] = useState(null);
    const [selectSun, setSunSelect] = useState(null);

    const [firstName, SetFName] = useState('');
    const [secondName, SetSName] = useState('');
    const [DOB, SetDOB] = useState('');
    const [service, setService] = useState('');
    const [time, setTime] = useState('');
    const [date, setdate] = useState('');

    const [markers, setMarkers] = useState([])

    return (
        <SafeAreaView style={styling.safeContainer}>
            <View style={styling.mainAddView}>

                <Swiper style={styling.swiperView} showsButtons={true} scrollEnabled={false} autoplay={false} pagingEnabled={false}>
                    <View style={styling.addPatientView}>
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
                                    items={[
                                        { label: 'Consultation', value: 'Consultation' },
                                        { label: 'Therapy', value: 'Therapy' },]}
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
                                }}

                                >
                                    <Text style={styling.Opacitytxt}>SAVE</Text>
                                </TouchableOpacity>
                            </View>
                        </View>}

                        {!check &&
                            <View style={styling.patientDropView}>
                                <View style={styling.dropdownView}>
                                    <View style={{ height: hp(8), width: wp(70), borderWidth: 0.5, borderRadius: 10 }}>
                                        <Picker
                                            style={{ height: hp(10), width: wp(70) }}
                                            onValueChange={(itemValue, itemIndex) =>

                                                SetFName(itemValue)
                                            }
                                            selectedValue={firstName}
                                        >
                                            <Picker.item label='name' />
                                            {markers.map(item => {
                                                return <Picker.Item label={item} value={item} />
                                            })}
                                        </Picker>
                                    </View>

                                </View>
                                <View style={styling.dropdownView}>
                                    <View style={{ height: hp(8), width: wp(70), borderWidth: 0.5, borderRadius: 10 }}>
                                        <Picker
                                            style={{ height: hp(10), width: wp(70) }}
                                            onValueChange={(itemValue, itemIndex) =>

                                                setService(itemValue)
                                            }
                                            selectedValue={service}
                                        >
                                            <Picker.item label='Service Type' value='Servie' />
                                            <Picker.item label='Consultation' value='Consultation' />
                                            <Picker.item label='Therapy' value='Therapy' />


                                        </Picker>
                                    </View>
                                </View>


                            </View>
                        }

                    </View>
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
                        </ScrollView>
                    </View>


                    <View style={styling.detailsView} >
                        <View style={styling.headerView}>
                            <Text style={styling.headTXT}>Patient Detail</Text>
                        </View>
                        <View style={styling.innerDetail}>
                            <Text style={styling.headTXT}>First Name:  {firstName}</Text>
                            <Text style={styling.headTXT}>Second Name:  {secondName}</Text>
                            <Text style={styling.headTXT}>Date of Birth:  {DOB}</Text>
                            <Text style={styling.headTXT}>Service:  {service}</Text>
                            <Text style={styling.headTXT}>Date & Time:  {time} - {date}</Text>

                        </View>
                        <View style={styling.opacityPView}>
                            <TouchableOpacity style={styling.OpacityLog} >
                                <Text style={styling.Opacitytxt}>Proceed</Text>
                            </TouchableOpacity>
                        </View>

                    </View>
                </Swiper>

            </View>
        </SafeAreaView >
    )
}
export default addPatient