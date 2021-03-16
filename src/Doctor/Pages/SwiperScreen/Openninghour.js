import React, { useState } from 'react';
import { View, StatusBar, SafeAreaView, Switch } from 'react-native';
import { Text } from 'react-native-elements';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Picker } from '@react-native-picker/picker';
import { styling } from './styling';

const OpenningHour = () => {
    const Timepick = ['01:00', '02:00', '03:00', '04:00', '05:00', '06:00', '07:00', '08:00', '09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00', '21:00', '22:00', '23:00', '24:00'];
    const [day, setday] = useState('');
    const [startMorningMonday, setstartMorningMonday] = useState('00:00');
    const [startMorningTuesday, setstartMorningTuesday] = useState('00:00');
    const [startMorningWednesday, setstartMorningWednesday] = useState('00:00');
    const [startMorningThursday, setstartMorningThursday] = useState('00:00');
    const [startMorningFriday, setstartMorningFriday] = useState('00:00');
    const [startMorningSaturday, setstartMorningSaturday] = useState('00:00');
    const [startMorningSunday, setstartMorningSunday] = useState('00:00');
    const [endMorningMonday, setendMorningMonday] = useState('00:00');
    const [endMorningTuesday, setendMorningTuesday] = useState('00:00');
    const [endMorningWednesday, setendMorningWednesday] = useState('00:00');
    const [endMorningThursday, setendMorningThursday] = useState('00:00');
    const [endMorningFriday, setendMorningFriday] = useState('00:00');
    const [endMorningSaturday, setendMorningSaturday] = useState('00:00');
    const [endMorningSunday, setendMorningSunday] = useState('00:00');
    const [startAfternoonMonday, setstartAfternoonMonday] = useState('00:00');
    const [startAfternoonTuesday, setstartAfternoonTuesday] = useState('00:00');
    const [startAfternoonWednesday, setstartAfternoonWednesday] = useState('00:00');
    const [startAfternoonThursday, setstartAfternoonThursday] = useState('00:00');
    const [startAfternoonFriday, setstartAfternoonFriday] = useState('00:00');
    const [startAfternoonSaturday, setstartAfternoonSaturday] = useState('00:00');
    const [startAfternoonSunday, setstartAfternoonSunday] = useState('00:00');
    const [endAfternoonMonday, setendAfternoonMonday] = useState('00:00');
    const [endAfternoonTuesday, setendAfternoonTuesday] = useState('00:00');
    const [endAfternoonWednesday, setendAfternoonWednesday] = useState('00:00');
    const [endAfternoonThursday, setendAfternoonThursday] = useState('00:00');
    const [endAfternoonFriday, setendAfternoonFriday] = useState('00:00');
    const [endAfternoonSaturday, setendAfternoonSaturday] = useState('00:00');
    const [endAfternoonSunday, setendAfternoonSunday] = useState('00:00');
    const [mon, setMon] = useState(true);
    const [tues, setTues] = useState(true);
    const [wed, setWed] = useState(true);
    const [thrus, setThrus] = useState(true);
    const [friday, setFriday] = useState(true);
    const [sat, setSat] = useState(true);
    const [sun, setSun] = useState(true);

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
                },
                status: mon
            },
            Tuesday: {
                Morning: {
                    Start: startMorningTuesday,
                    End: endMorningTuesday
                },
                Afternoon: {
                    Start: startAfternoonTuesday,
                    End: endAfternoonTuesday
                },
                status: tues
            },
            Wednesday: {
                Morning: {
                    Start: startMorningWednesday,
                    End: endMorningWednesday
                },
                Afternoon: {
                    Start: startAfternoonWednesday,
                    End: endAfternoonWednesday
                },
                status: wed
            },
            Thursday: {
                Morning: {
                    Start: startMorningThursday,
                    End: endMorningThursday
                },
                Afternoon: {
                    Start: startAfternoonThursday,
                    End: endAfternoonThursday
                },
                status: thrus
            },
            Friday: {
                Morning: {
                    Start: startMorningFriday,
                    End: endMorningFriday
                },
                Afternoon: {
                    Start: startAfternoonFriday,
                    End: endAfternoonFriday
                },
                status: friday
            },
            Saturday: {
                Morning: {
                    Start: startMorningSaturday,
                    End: endMorningSaturday
                },
                Afternoon: {
                    Start: startAfternoonSaturday,
                    End: endAfternoonSaturday
                },
                status: sat
            },
            Sunday: {
                Morning: {
                    Start: startMorningSunday,
                    End: endMorningSunday
                },
                Afternoon: {
                    Start: startAfternoonSunday,
                    End: endAfternoonSunday
                },
                status: sun
            },
        }
        AsyncStorage.setItem('useropenning', JSON.stringify(data));

    }

    return (
        <SafeAreaView style={styling.safeContainer}>
            <View style={styling.containerView}>
                <View style={styling.headerView}>
                    <Text style={styling.headerText}>Openning Hour</Text>
                </View>
                <View style={styling.dayView}>
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={styling.daytagLabel}>Monday </Text>
                        <Switch
                            trackColor={{ false: "#767577", true: "#FF2D55" }}
                            thumbColor={sat ? "#E5E5E5" : "#f4f3f4"}
                            ios_backgroundColor="#3e3e3e"
                            onValueChange={() => {
                                if (!mon) {
                                    setMon(true)
                                    setendMorningMonday('00:00')
                                    setstartMorningMonday('00:00')
                                    setendAfternoonMonday('00:00')
                                    setstartAfternoonMonday('00:00')
                                } else { setMon(false) }

                            }}
                            value={mon}
                        />
                    </View>

                    {!mon && <View style={styling.daypickerView}>
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
                    </View>}

                    {!mon && <View >
                        <Text>Morning: {startMorningMonday} - {endMorningMonday}</Text>
                        <Text>Afternoon: {startAfternoonMonday} - {endAfternoonMonday}</Text>
                    </View>}

                </View>

                <View style={styling.dayView}>
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={styling.daytagLabel}>Tuesday </Text>
                        <Switch
                            trackColor={{ false: "#767577", true: "#FF2D55" }}
                            thumbColor={sat ? "#E5E5E5" : "#f4f3f4"}
                            ios_backgroundColor="#3e3e3e"
                            onValueChange={() => {
                                setTues(true)
                                if (!tues) {
                                    setTues(true)
                                    setendMorningTuesday('00:00')
                                    setstartMorningTuesday('00:00')
                                    setstartAfternoonTuesday('00:00')
                                    setendAfternoonTuesday('00:00')
                                } else setTues(false)

                            }}
                            value={tues}
                        />
                    </View>
                    {!tues && <View style={styling.daypickerView}>
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
                    </View>}
                    {!tues && <View >
                        <Text>Morning: {startMorningTuesday} - {endMorningTuesday}</Text>
                        <Text>Afternoon: {startAfternoonTuesday} - {endAfternoonTuesday}</Text>
                    </View>}
                </View>


                <View style={styling.dayView}>

                    <View style={{ flexDirection: 'row' }}>
                        <Text style={styling.daytagLabel}>Wednesday </Text>
                        <Switch
                            trackColor={{ false: "#767577", true: "#FF2D55" }}
                            thumbColor={sat ? "#E5E5E5" : "#f4f3f4"}
                            ios_backgroundColor="#3e3e3e"
                            onValueChange={() => {
                                setWed(true)
                                if (!wed) {
                                    setWed(true)
                                    setendMorningWednesday('00:00')
                                    setstartAfternoonWednesday('00:00')
                                    setendAfternoonWednesday('00:00')
                                    setstartMorningWednesday('00:00')
                                } else setWed(false)

                            }}
                            value={wed}
                        />
                    </View>
                    {!wed && <View style={styling.daypickerView}>
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
                    </View>}
                    {!wed && <View >
                        <Text>Morning: {startMorningWednesday} - {endMorningWednesday}</Text>
                        <Text>Afternoon: {startAfternoonWednesday} - {endAfternoonWednesday}</Text>
                    </View>}
                </View>

                <View style={styling.dayView}>
                    <View style={{ flexDirection: 'row' }}>

                        <Text style={styling.daytagLabel}>Thursday </Text>
                        <Switch
                            trackColor={{ false: "#767577", true: "#FF2D55" }}
                            thumbColor={sat ? "#E5E5E5" : "#f4f3f4"}
                            ios_backgroundColor="#3e3e3e"
                            onValueChange={() => {
                                setThrus(true)
                                if (!thrus) {
                                    setThrus(true)
                                    setstartMorningThursday('00:00')
                                    setendMorningThursday('00:00')
                                    setstartAfternoonThursday('00:00')
                                    setendAfternoonThursday('00:00')
                                } else setThrus(false)

                            }}
                            value={thrus}
                        />
                    </View>

                    {!thrus && <View style={styling.daypickerView}>
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
                    </View>}

                    {!thrus && <View >
                        <Text>Morning: {startMorningThursday} - {endMorningThursday}</Text>
                        <Text>Afternoon: {startAfternoonThursday} - {endAfternoonThursday}</Text>
                    </View>}
                </View>

                <View style={styling.dayView}>
                    <View style={{ flexDirection: 'row' }}>

                        <Text style={styling.daytagLabel}>Friday </Text>
                        <Switch
                            trackColor={{ false: "#767577", true: "#FF2D55" }}
                            thumbColor={sat ? "#E5E5E5" : "#f4f3f4"}
                            ios_backgroundColor="#3e3e3e"
                            onValueChange={() => {
                                setFriday(true)
                                if (!friday) {
                                    setFriday(true)
                                    setstartMorningFriday('00:00')
                                    setendMorningFriday('00:00')
                                    setstartAfternoonFriday('00:00')
                                    setendAfternoonFriday('00:00')
                                } else setFriday(false)

                            }}
                            value={friday}
                        />
                    </View>

                    {!friday && <View style={styling.daypickerView}>
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
                    </View>}
                    {!friday && <View >
                        <Text>Morning: {startMorningFriday} - {endMorningFriday}</Text>
                        <Text>Afternoon: {startAfternoonFriday} - {endAfternoonFriday}</Text>
                    </View>}
                </View>

                <View style={styling.dayView}>
                    <View style={{ flexDirection: 'row' }}>

                        <Text style={styling.daytagLabel}>Saturday </Text>
                        <Switch
                            trackColor={{ false: "#767577", true: "#FF2D55" }}
                            thumbColor={sat ? "#E5E5E5" : "#f4f3f4"}
                            ios_backgroundColor="#3e3e3e"
                            onValueChange={() => {
                                setSat(true)
                                if (!sat) {
                                    setSat(true)
                                    setstartMorningSaturday('00:00')
                                    setendMorningSaturday('00:00')
                                    setstartAfternoonSaturday('00:00')
                                    setendAfternoonSaturday('00:00')
                                } else setSat(false)

                            }}
                            value={sat}
                        />
                    </View>
                    {!sat == true && <View style={styling.daypickerView}>
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
                    </View>}
                    {!sat && <View >
                        <Text>Morning:- {startMorningSaturday} - {endMorningSaturday}</Text>
                        <Text>Afternoon: {startAfternoonSaturday} - {endAfternoonSaturday}</Text>
                    </View>}

                </View>
                <View style={styling.dayView}>

                    <View style={{ flexDirection: 'row' }}>
                        <Text style={styling.daytagLabel}>Sunday </Text>
                        <Switch

                            trackColor={{ false: "#767577", true: "#FF2D55" }}
                            thumbColor={sun ? "#E5E5E5" : "#f4f3f4"}
                            ios_backgroundColor="#3e3e3e"
                            onValueChange={() => {
                                if (!sun) {
                                    setSun(true)
                                    setstartMorningSunday('00:00')
                                    setendMorningSunday('00:00')
                                    setendAfternoonSunday('00:00')
                                    setstartAfternoonSunday('00:00')
                                } else setSun(false)
                            }}
                            value={sun}
                        />
                    </View>
                    {!sun == true &&
                        <View style={styling.daypickerView}>
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
                        </View>}
                    {!sun && <View >
                        <Text>Morning:: {startMorningSunday} - {endMorningSunday}</Text>
                        <Text>Afternoon {startAfternoonSunday} - {endAfternoonSunday}</Text>
                    </View>}
                </View>


                {endAfternoonSunday != '' ? SaveData() : console.log('empty')}

            </View>
        </SafeAreaView >

    )
}

export default OpenningHour;