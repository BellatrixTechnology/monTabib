import React, { useState } from 'react';
import { View, SafeAreaView, } from 'react-native';
import { Text } from 'react-native-elements';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Picker } from '@react-native-picker/picker';
import { GlobalStyle } from '../StyleSheet/GlobalStyle';

const OpenningHour = () => {
    const Timepick = ['01:00', '02:00', '03:00', '04:00', '05:00', '06:00', '07:00', '08:00', '09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00', '21:00', '22:00', '23:00', '24:00'];
    const [day, setday] = useState('');
    const [startMorningMonday, setstartMorningMonday] = useState('');
    const [startMorningTuesday, setstartMorningTuesday] = useState('');
    const [startMorningWednesday, setstartMorningWednesday] = useState('');
    const [startMorningThursday, setstartMorningThursday] = useState('');
    const [startMorningFriday, setstartMorningFriday] = useState('');
    const [startMorningSaturday, setstartMorningSaturday] = useState('');
    const [startMorningSunday, setstartMorningSunday] = useState('');
    const [endMorningMonday, setendMorningMonday] = useState('');
    const [endMorningTuesday, setendMorningTuesday] = useState('');
    const [endMorningWednesday, setendMorningWednesday] = useState('');
    const [endMorningThursday, setendMorningThursday] = useState('');
    const [endMorningFriday, setendMorningFriday] = useState('');
    const [endMorningSaturday, setendMorningSaturday] = useState('');
    const [endMorningSunday, setendMorningSunday] = useState('');
    const [startAfternoonMonday, setstartAfternoonMonday] = useState('');
    const [startAfternoonTuesday, setstartAfternoonTuesday] = useState('');
    const [startAfternoonWednesday, setstartAfternoonWednesday] = useState('');
    const [startAfternoonThursday, setstartAfternoonThursday] = useState('');
    const [startAfternoonFriday, setstartAfternoonFriday] = useState('');
    const [startAfternoonSaturday, setstartAfternoonSaturday] = useState('');
    const [startAfternoonSunday, setstartAfternoonSunday] = useState('');
    const [endAfternoonMonday, setendAfternoonMonday] = useState('');
    const [endAfternoonTuesday, setendAfternoonTuesday] = useState('');
    const [endAfternoonWednesday, setendAfternoonWednesday] = useState('');
    const [endAfternoonThursday, setendAfternoonThursday] = useState('');
    const [endAfternoonFriday, setendAfternoonFriday] = useState('');
    const [endAfternoonSaturday, setendAfternoonSaturday] = useState('');
    const [endAfternoonSunday, setendAfternoonSunday] = useState('');

    const SaveData = () => {

        let data = {
            Monday: {
                Morning: {
                    Start: startMorningMonday,
                    End: endMorningMonday
                },
                Afternoon: {
                    Start: startAfternoonMonday,
                    End: endAfternoonMonday
                }
            },
            Tuesday: {
                Morning: {
                    Start: startMorningTuesday,
                    End: endMorningTuesday
                },
                Afternoon: {
                    Start: startAfternoonTuesday,
                    End: endAfternoonTuesday
                }
            },
            Wednesday: {
                Morning: {
                    Start: startMorningWednesday,
                    End: endMorningWednesday
                },
                Afternoon: {
                    Start: startAfternoonWednesday,
                    End: endAfternoonWednesday
                }
            },
            Thursday: {
                Morning: {
                    Start: startMorningThursday,
                    End: endMorningThursday
                },
                Afternoon: {
                    Start: startAfternoonThursday,
                    End: endAfternoonThursday
                }
            },
            Friday: {
                Morning: {
                    Start: startMorningFriday,
                    End: endMorningFriday
                },
                Afternoon: {
                    Start: startAfternoonFriday,
                    End: endAfternoonFriday
                }
            },
            Saturday: {
                Morning: {
                    Start: startMorningSaturday,
                    End: endMorningSaturday
                },
                Afternoon: {
                    Start: startAfternoonSaturday,
                    End: endAfternoonSaturday
                }
            },
            Sunday: {
                Morning: {
                    Start: startMorningSunday,
                    End: endMorningSunday
                },
                Afternoon: {
                    Start: startAfternoonSunday,
                    End: endAfternoonSunday
                }
            },
        }
        AsyncStorage.setItem('useropenning', JSON.stringify(data));

    }

    return (
        <SafeAreaView>
            <View style={GlobalStyle.containerView}>
                <View style={GlobalStyle.headerView}>
                    <Text style={GlobalStyle.headerText}>Openning Hour</Text>
                </View>
                <View style={GlobalStyle.dayView}>

                    <Text style={GlobalStyle.daytagLabel}>Monday </Text>

                    <View style={GlobalStyle.daypickerView}>
                        <Picker
                            style={{ height: 50, width: 120 }}
                            onValueChange={(itemValue, itemIndex) =>

                                setday(itemValue)
                            }>
                            <Picker.Item label="Day Part" value="Day Part" />
                            <Picker.Item label="Morning" value="Morning" />
                            <Picker.Item label="Afternoon" value="Afternoon" />
                        </Picker>
                        <Picker
                            style={{ height: 50, width: 130 }}
                            onValueChange={(itemValue, itemIndex) => {
                                if (day == 'Morning') {
                                    setstartMorningMonday(itemValue)
                                }
                                else {
                                    setstartAfternoonMonday(itemValue)
                                }
                            }}>
                            <Picker.Item label="Start Time" value="Start Time" />
                            {
                                Timepick.map(val => {
                                    return <Picker.Item label={val} value={val} />
                                })}
                        </Picker>
                        <Picker
                            style={{ height: 50, width: 130 }}
                            onValueChange={(itemValue, itemIndex) => {
                                if (day == 'Morning') {
                                    setendMorningMonday(itemValue)
                                }
                                else {
                                    setendAfternoonMonday(itemValue)
                                }
                            }}>
                            <Picker.Item label="End Time" value="End Time" />
                            {day == 'Morning' ? Timepick.map(val => {
                                if (val > startMorningMonday) {
                                    return <Picker.Item label={val} value={val} />
                                }

                            }) : Timepick.map(val => {
                                if (val > startAfternoonMonday) {
                                    return <Picker.Item label={val} value={val} />
                                }

                            })
                            }

                        </Picker>
                    </View>

                    {endMorningMonday != '' || endAfternoonMonday != '' ? <View >
                        <Text>Morning: {startMorningMonday} - {endMorningMonday}</Text>
                        <Text>Afternoon: {startAfternoonMonday} - {endAfternoonMonday}</Text>
                    </View> : console.log('wait')}

                </View>

                <View style={GlobalStyle.dayView}>

                    <Text style={GlobalStyle.daytagLabel}>Tuesday </Text>

                    <View style={GlobalStyle.daypickerView}>
                        <Picker
                            style={{ height: 50, width: 120 }}
                            onValueChange={(itemValue, itemIndex) =>

                                setday(itemValue)
                            }>
                            <Picker.Item label="Day Part" value="Day Part" />
                            <Picker.Item label="Morning" value="Morning" />
                            <Picker.Item label="Afternoon" value="Afternoon" />
                        </Picker>
                        <Picker
                            style={{ height: 50, width: 130 }}
                            onValueChange={(itemValue, itemIndex) => {
                                if (day == 'Morning') {
                                    setstartMorningTuesday(itemValue)
                                }
                                else {
                                    setstartAfternoonTuesday(itemValue)
                                }
                            }}>
                            <Picker.Item label="Start Time" value="Start Time" />
                            {
                                Timepick.map(val => {
                                    return <Picker.Item label={val} value={val} />
                                })}
                        </Picker>
                        <Picker
                            style={{ height: 50, width: 130 }}
                            onValueChange={(itemValue, itemIndex) => {
                                if (day == 'Morning') {
                                    setendMorningTuesday(itemValue)
                                }
                                else {
                                    setendAfternoonTuesday(itemValue)
                                }
                            }}>
                            <Picker.Item label="End Time" value="End Time" />
                            {day == 'Morning' ? Timepick.map(val => {
                                if (val > startMorningTuesday) {
                                    return <Picker.Item label={val} value={val} />
                                }

                            }) : Timepick.map(val => {
                                if (val > startAfternoonTuesday) {
                                    return <Picker.Item label={val} value={val} />
                                }

                            })
                            }

                        </Picker>
                    </View>
                    {endMorningTuesday != '' || endAfternoonTuesday != '' ? <View >
                        <Text>Morning: {startMorningTuesday} - {endMorningTuesday}</Text>
                        <Text>Afternoon: {startAfternoonTuesday} - {endAfternoonTuesday}</Text>
                    </View> : console.log('wait')}
                </View>


                <View style={GlobalStyle.dayView}>

                    <Text style={GlobalStyle.daytagLabel}>Wednesday </Text>

                    <View style={GlobalStyle.daypickerView}>
                        <Picker
                            style={{ height: 50, width: 120 }}
                            onValueChange={(itemValue, itemIndex) =>

                                setday(itemValue)
                            }>
                            <Picker.Item label="Day Part" value="Day Part" />
                            <Picker.Item label="Morning" value="Morning" />
                            <Picker.Item label="Afternoon" value="Afternoon" />
                        </Picker>
                        <Picker
                            style={{ height: 50, width: 130 }}
                            onValueChange={(itemValue, itemIndex) => {
                                if (day == 'Morning') {
                                    setstartMorningWednesday(itemValue)
                                }
                                else {
                                    setstartAfternoonWednesday(itemValue)
                                }
                            }}>
                            <Picker.Item label="Start Time" value="Start Time" />
                            {
                                Timepick.map(val => {
                                    return <Picker.Item label={val} value={val} />
                                })}
                        </Picker>
                        <Picker
                            style={{ height: 50, width: 130 }}
                            onValueChange={(itemValue, itemIndex) => {
                                if (day == 'Morning') {
                                    setendMorningWednesday(itemValue)
                                }
                                else {
                                    setendAfternoonWednesday(itemValue)
                                }
                            }}>
                            <Picker.Item label="End Time" value="End Time" />
                            {day == 'Morning' ? Timepick.map(val => {
                                if (val > startMorningWednesday) {
                                    return <Picker.Item label={val} value={val} />
                                }

                            }) : Timepick.map(val => {
                                if (val > startAfternoonWednesday) {
                                    return <Picker.Item label={val} value={val} />
                                }
                            })}

                        </Picker>
                    </View>
                    {endMorningWednesday != '' || endAfternoonWednesday != '' ? <View >
                        <Text>Morning: {startMorningWednesday} - {endMorningWednesday}</Text>
                        <Text>Afternoon: {startAfternoonWednesday} - {endAfternoonWednesday}</Text>
                    </View> : console.log('wait')}
                </View>

                <View style={GlobalStyle.dayView}>

                    <Text style={GlobalStyle.daytagLabel}>Thursday </Text>

                    <View style={GlobalStyle.daypickerView}>
                        <Picker
                            style={{ height: 50, width: 120 }}
                            onValueChange={(itemValue, itemIndex) =>

                                setday(itemValue)
                            }>
                            <Picker.Item label="Day Part" value="Day Part" />
                            <Picker.Item label="Morning" value="Morning" />
                            <Picker.Item label="Afternoon" value="Afternoon" />
                        </Picker>
                        <Picker
                            style={{ height: 50, width: 130 }}
                            onValueChange={(itemValue, itemIndex) => {
                                if (day == 'Morning') {
                                    setstartMorningThursday(itemValue)
                                }
                                else {
                                    setstartAfternoonThursday(itemValue)
                                }
                            }}>
                            <Picker.Item label="Start Time" value="Start Time" />
                            {
                                Timepick.map(val => {
                                    return <Picker.Item label={val} value={val} />
                                })}
                        </Picker>
                        <Picker
                            style={{ height: 50, width: 130 }}
                            onValueChange={(itemValue, itemIndex) => {
                                if (day == 'Morning') {
                                    setendMorningThursday(itemValue)
                                }
                                else {
                                    setendAfternoonThursday(itemValue)
                                }
                            }}>
                            <Picker.Item label="End Time" value="End Time" />
                            {day == 'Morning' ? Timepick.map(val => {
                                if (val > startMorningThursday) {
                                    return <Picker.Item label={val} value={val} />
                                }

                            }) : Timepick.map(val => {
                                if (val > startAfternoonThursday) {
                                    return <Picker.Item label={val} value={val} />
                                }

                            })
                            }

                        </Picker>
                    </View>

                    {endMorningThursday != '' || endAfternoonThursday != '' ? <View >
                        <Text>Morning: {startMorningThursday} - {endMorningThursday}</Text>
                        <Text>Afternoon: {startAfternoonThursday} - {endAfternoonThursday}</Text>
                    </View> : console.log('wait')}
                </View>

                <View style={GlobalStyle.dayView}>

                    <Text style={GlobalStyle.daytagLabel}>Friday </Text>

                    <View style={GlobalStyle.daypickerView}>
                        <Picker
                            style={{ height: 50, width: 120 }}
                            onValueChange={(itemValue, itemIndex) =>
                                setday(itemValue)
                            }>
                            <Picker.Item label="Day Part" value="Day Part" />
                            <Picker.Item label="Morning" value="Morning" />
                            <Picker.Item label="Afternoon" value="Afternoon" />
                        </Picker>
                        <Picker
                            style={{ height: 50, width: 130 }}
                            onValueChange={(itemValue, itemIndex) => {
                                if (day == 'Morning') {
                                    setstartMorningFriday(itemValue)
                                }
                                else {
                                    setstartAfternoonFriday(itemValue)
                                }
                            }}>
                            <Picker.Item label="Start Time" value="Start Time" />
                            {
                                Timepick.map(val => {
                                    return <Picker.Item label={val} value={val} />
                                })}
                        </Picker>
                        <Picker
                            style={{ height: 50, width: 130 }}
                            onValueChange={(itemValue, itemIndex) => {
                                if (day == 'Morning') {
                                    setendMorningFriday(itemValue)
                                }
                                else {
                                    setendAfternoonFriday(itemValue)
                                }
                            }}>
                            <Picker.Item label="End Time" value="End Time" />
                            {day == 'Morning' ? Timepick.map(val => {
                                if (val > startMorningFriday) {
                                    return <Picker.Item label={val} value={val} />
                                }

                            }) : Timepick.map(val => {
                                if (val > startAfternoonFriday) {
                                    return <Picker.Item label={val} value={val} />
                                }

                            })
                            }

                        </Picker>
                    </View>
                    {endMorningFriday != '' || endAfternoonFriday != '' ? <View >
                        <Text>Morning: {startMorningFriday} - {endMorningFriday}</Text>
                        <Text>Afternoon: {startAfternoonFriday} - {endAfternoonFriday}</Text>
                    </View> : console.log('wait')}
                </View>

                <View style={GlobalStyle.dayView}>

                    <Text style={GlobalStyle.daytagLabel}>Saturday </Text>

                    <View style={GlobalStyle.daypickerView}>
                        <Picker
                            style={{ height: 50, width: 120 }}
                            onValueChange={(itemValue, itemIndex) =>

                                setday(itemValue)
                            }>
                            <Picker.Item label="Day Part" value="Day Part" />
                            <Picker.Item label="Morning" value="Morning" />
                            <Picker.Item label="Afternoon" value="Afternoon" />
                        </Picker>
                        <Picker
                            style={{ height: 50, width: 130 }}
                            onValueChange={(itemValue, itemIndex) => {
                                if (day == 'Morning') {
                                    setstartMorningSaturday(itemValue)
                                }
                                else {
                                    setstartAfternoonSaturday(itemValue)
                                }
                            }}>
                            <Picker.Item label="Start Time" value="Start Time" />
                            {
                                Timepick.map(val => {
                                    return <Picker.Item label={val} value={val} />
                                })}
                        </Picker>
                        <Picker
                            style={{ height: 50, width: 130 }}
                            onValueChange={(itemValue, itemIndex) => {
                                if (day == 'Morning') {
                                    setendMorningSaturday(itemValue)
                                }
                                else {
                                    setendAfternoonSaturday(itemValue)
                                }
                            }}>
                            <Picker.Item label="End Time" value="End Time" />
                            {day == 'Morning' ? Timepick.map(val => {
                                if (val > startMorningSaturday) {
                                    return <Picker.Item label={val} value={val} />
                                }

                            }) : Timepick.map(val => {
                                if (val > startAfternoonSaturday) {
                                    return <Picker.Item label={val} value={val} />
                                }
                            })}
                        </Picker>
                    </View>
                    {endMorningSaturday != '' || endAfternoonSaturday != '' ? <View >
                        <Text>Morning:- {startMorningSaturday} - {endMorningSaturday}</Text>
                        <Text>Afternoon: {startAfternoonSaturday} - {endAfternoonSaturday}</Text>
                    </View> : console.log('wait')}
                </View>
                <View style={GlobalStyle.dayView}>

                    <Text style={GlobalStyle.daytagLabel}>Sunday </Text>

                    <View style={GlobalStyle.daypickerView}>
                        <Picker
                            style={{ height: 50, width: 120 }}
                            onValueChange={(itemValue, itemIndex) =>

                                setday(itemValue)
                            }>
                            <Picker.Item label="Day Part" value="Day Part" />
                            <Picker.Item label="Morning" value="Morning" />
                            <Picker.Item label="Afternoon" value="Afternoon" />
                        </Picker>
                        <Picker
                            style={{ height: 50, width: 130 }}
                            onValueChange={(itemValue, itemIndex) => {
                                if (day == 'Morning') {
                                    setstartMorningSunday(itemValue)
                                }
                                else {
                                    setstartAfternoonSunday(itemValue)
                                }
                            }}>
                            <Picker.Item label="Start Time" value="Start Time" />
                            {
                                Timepick.map(val => {
                                    return <Picker.Item label={val} value={val} />
                                })}
                        </Picker>
                        <Picker
                            style={{ height: 50, width: 130 }}
                            onValueChange={(itemValue, itemIndex) => {
                                if (day == 'Morning') {
                                    setendMorningSunday(itemValue)
                                }
                                else {
                                    setendAfternoonSunday(itemValue)
                                }
                            }}>
                            <Picker.Item label="End Time" value="End Time" />
                            {day == 'Morning' ? Timepick.map(val => {
                                if (val > startMorningSunday) {
                                    return <Picker.Item label={val} value={val} />
                                }

                            }) : Timepick.map(val => {
                                if (val > startAfternoonSunday) {
                                    return <Picker.Item label={val} value={val} />
                                }
                            })
                            }

                        </Picker>
                    </View>
                    {endMorningSunday != '' || endAfternoonSunday != '' ? <View >
                        <Text>Morning:: {startMorningSunday} - {endMorningSunday}</Text>
                        <Text>Afternoon {startAfternoonSunday} - {endAfternoonSunday}</Text>
                    </View> : console.log('wait')}
                </View>


                {endAfternoonSunday != '' ? SaveData() : console.log('empty')}

            </View>
        </SafeAreaView>

    )
}

export default OpenningHour;