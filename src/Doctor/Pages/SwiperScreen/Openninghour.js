import React, { useState } from 'react';
import { View, StatusBar, SafeAreaView, Switch } from 'react-native';
import { Text } from 'react-native-elements';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Picker } from '@react-native-picker/picker';
import { styling } from './styling';
import { hp, wp } from '../../../Global/Styles/Scalling';
import { ScrollView } from 'react-native';

const OpenningHour = () => {
    const Timepick = ['01:00:00', '02:00:00', '03:00:00', '04:00:00', '05:00:00', '06:00:00', '07:00:00', '08:00:00', '09:00:00', '10:00:00', '11:00:00', '12:00:00', '13:00:00', '14:00:00', '15:00:00', '16:00:00', '17:00:00', '18:00:00', '19:00:00', '20:00:00', '21:00:00', '22:00:00', '23:00:00', '24:00:00'];
    const [day, setday] = useState('');
    const [startMorningMonday, setstartMorningMonday] = useState('08:00:00');
    const [startMorningTuesday, setstartMorningTuesday] = useState('08:00:00');
    const [startMorningWednesday, setstartMorningWednesday] = useState('08:00:00');
    const [startMorningThursday, setstartMorningThursday] = useState('08:00:00');
    const [startMorningFriday, setstartMorningFriday] = useState('08:00:00');
    const [startMorningSaturday, setstartMorningSaturday] = useState('08:00:00');
    const [startMorningSunday, setstartMorningSunday] = useState('08:00:00');
    const [endMorningMonday, setendMorningMonday] = useState('12:00:00');
    const [endMorningTuesday, setendMorningTuesday] = useState('12:00:00');
    const [endMorningWednesday, setendMorningWednesday] = useState('12:00:00');
    const [endMorningThursday, setendMorningThursday] = useState('12:00:00');
    const [endMorningFriday, setendMorningFriday] = useState('12:00:00');
    const [endMorningSaturday, setendMorningSaturday] = useState('12:00:00');
    const [endMorningSunday, setendMorningSunday] = useState('12:00:00');
    const [startAfternoonMonday, setstartAfternoonMonday] = useState('14:00:00');
    const [startAfternoonTuesday, setstartAfternoonTuesday] = useState('14:00:00');
    const [startAfternoonWednesday, setstartAfternoonWednesday] = useState('14:00:00');
    const [startAfternoonThursday, setstartAfternoonThursday] = useState('14:00:00');
    const [startAfternoonFriday, setstartAfternoonFriday] = useState('14:00:00');
    const [startAfternoonSaturday, setstartAfternoonSaturday] = useState('14:00:00');
    const [startAfternoonSunday, setstartAfternoonSunday] = useState('14:00:00');
    const [endAfternoonMonday, setendAfternoonMonday] = useState('18:00:00');
    const [endAfternoonTuesday, setendAfternoonTuesday] = useState('18:00:00');
    const [endAfternoonWednesday, setendAfternoonWednesday] = useState('18:00:00');
    const [endAfternoonThursday, setendAfternoonThursday] = useState('18:00:00');
    const [endAfternoonFriday, setendAfternoonFriday] = useState('18:00:00');
    const [endAfternoonSaturday, setendAfternoonSaturday] = useState('18:00:00');
    const [endAfternoonSunday, setendAfternoonSunday] = useState('18:00:00');
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

            <View style={styling.TimeontainerView}>
                <ScrollView
                    showsVerticalScrollIndicator={false}
                >
                    <View style={styling.headerView}>
                        <Text style={styling.headerText}>Openning Hour</Text>
                    </View>
                    <View style={styling.dayView}>
                        <View style={styling.maindaytagView}>
                            <Text style={styling.daytagLabel}>Monday </Text>
                            <Switch
                                trackColor={{ false: "#767577", true: "#FF2D55" }}
                                thumbColor={mon ? "#f4f3f4" : "#E5E5E5"}
                                ios_backgroundColor="#3e3e3e"
                                onValueChange={() => {
                                    if (!mon) {
                                        setMon(true)
                                        setendMorningMonday('12:00:00')
                                        setstartMorningMonday('08:00:00')
                                        setendAfternoonMonday('18:00:00')
                                        setstartAfternoonMonday('14:00:00')

                                    } else {
                                        setMon(false)
                                        setendMorningMonday('00:00:00')
                                        setstartMorningMonday('00:00:00')
                                        setendAfternoonMonday('00:00:00')
                                        setstartAfternoonMonday('00:00:00')
                                    }
                                }}
                                value={mon}
                            />
                        </View>

                        {mon &&
                            <View style={styling.mainTimePickerView}>
                                <View style={styling.dayheadingView}>
                                    <Text>Morning</Text>

                                    <Picker
                                        placeholder="Start"
                                        style={{ width: wp(25), height: hp(5) }}
                                        onValueChange={(itemValue) => {
                                            setstartMorningMonday(itemValue)
                                        }}
                                        selectedValue={startMorningMonday}

                                    >
                                        <Picker.Item label="Start" value="Start Time" />
                                        {
                                            Timepick.map(val => {
                                                return <Picker.Item label={val} value={val} />
                                            })}
                                    </Picker>
                                    <Picker
                                        style={{ width: wp(25), height: hp(5), }}
                                        onValueChange={(itemValue, itemIndex) => {
                                            setendMorningMonday(itemValue)
                                        }}
                                        selectedValue={endMorningMonday}
                                    >
                                        <Picker.Item label="End" value="End Time" />
                                        {Timepick.map(val => {
                                            if (val > startMorningMonday) {
                                                return <Picker.Item label={val} value={val} />
                                            }
                                        })}
                                    </Picker>
                                </View>
                                <View style={styling.dayheadingView}>
                                    <Text>Afternoon</Text>
                                    <Picker
                                        placeholder="Start"
                                        style={{ width: wp(25), height: hp(5) }}
                                        onValueChange={(itemValue) => {
                                            setstartAfternoonMonday(itemValue)
                                        }}
                                        selectedValue={startAfternoonMonday}
                                    >
                                        <Picker.Item label="Start at" value="Start Time" />
                                        {
                                            Timepick.map(val => {
                                                return <Picker.Item label={val} value={val} />
                                            })}
                                    </Picker>
                                    <Picker
                                        style={{ width: wp(25), height: hp(5) }}
                                        onValueChange={(itemValue, itemIndex) => {
                                            setendAfternoonMonday(itemValue)
                                        }}
                                        selectedValue={endAfternoonMonday}
                                    >
                                        <Picker.Item label="End Time" value="End Time" />
                                        {Timepick.map(val => {
                                            if (val > startAfternoonMonday) {
                                                return <Picker.Item label={val} value={val} />
                                            }
                                        })
                                        }
                                    </Picker>
                                </View>
                            </View>
                        }
                    </View>
                    <View style={styling.dayView}>
                        <View style={styling.maindaytagView}>
                            <Text style={styling.daytagLabel}>Tuesday </Text>
                            <Switch
                                trackColor={{ false: "#767577", true: "#FF2D55" }}
                                thumbColor={!tues ? "#E5E5E5" : "#f4f3f4"}
                                ios_backgroundColor="#3e3e3e"
                                onValueChange={() => {
                                    setTues(true)
                                    if (!tues) {
                                        setTues(true)
                                        setendMorningTuesday('12:00:00')
                                        setstartMorningTuesday('08:00:00')
                                        setstartAfternoonTuesday('14:00:00')
                                        setendAfternoonTuesday('18:00:00')

                                    } else {
                                        setTues(false)
                                        setendMorningTuesday('00:00:00')
                                        setstartMorningTuesday('00:00:00')
                                        setstartAfternoonTuesday('00:00:00')
                                        setendAfternoonTuesday('00:00:00')
                                    }

                                }}
                                value={tues}
                            />
                        </View>

                        {tues &&
                            <View style={styling.mainTimePickerView}>
                                <View style={styling.dayheadingView}>
                                    <Text>Morning</Text>

                                    <Picker
                                        placeholder="Start"
                                        style={{ width: wp(25), height: hp(5) }}
                                        onValueChange={(itemValue) => {
                                            setstartMorningTuesday(itemValue)
                                        }}
                                        selectedValue={startMorningTuesday}

                                    >
                                        <Picker.Item label="Start" value="Start Time" />
                                        {
                                            Timepick.map(val => {
                                                return <Picker.Item label={val} value={val} />
                                            })}
                                    </Picker>
                                    <Picker
                                        style={{ width: wp(25), height: hp(5), }}
                                        onValueChange={(itemValue, itemIndex) => {
                                            setendMorningTuesday(itemValue)
                                        }}
                                        selectedValue={endMorningTuesday}
                                    >
                                        <Picker.Item label="End" value="End Time" />
                                        {Timepick.map(val => {
                                            if (val > startMorningTuesday) {
                                                return <Picker.Item label={val} value={val} />
                                            }
                                        })}
                                    </Picker>
                                </View>
                                <View style={styling.dayheadingView}>
                                    <Text>Afternoon</Text>
                                    <Picker
                                        placeholder="Start"
                                        style={{ width: wp(25), height: hp(5) }}
                                        onValueChange={(itemValue) => {
                                            setstartAfternoonTuesday(itemValue)
                                        }}
                                        selectedValue={startAfternoonTuesday}
                                    >
                                        <Picker.Item label="Start at" value="Start Time" />
                                        {
                                            Timepick.map(val => {
                                                return <Picker.Item label={val} value={val} />
                                            })}
                                    </Picker>
                                    <Picker
                                        style={{ width: wp(25), height: hp(5) }}
                                        onValueChange={(itemValue, itemIndex) => {
                                            setendAfternoonTuesday(itemValue)
                                        }}
                                        selectedValue={endAfternoonTuesday}
                                    >
                                        <Picker.Item label="End Time" value="End Time" />
                                        {Timepick.map(val => {
                                            if (val > startAfternoonTuesday) {
                                                return <Picker.Item label={val} value={val} />
                                            }
                                        })
                                        }
                                    </Picker>
                                </View>
                            </View>
                        }
                    </View>
                    <View style={styling.dayView}>
                        <View style={styling.maindaytagView}>
                            <Text style={styling.daytagLabel}>Wednesday </Text>
                            <Switch
                                trackColor={{ false: "#767577", true: "#FF2D55" }}
                                thumbColor={!wed ? "#E5E5E5" : "#f4f3f4"}
                                ios_backgroundColor="#3e3e3e"
                                onValueChange={() => {
                                    setWed(true)
                                    if (!wed) {
                                        setWed(true)
                                        setendMorningWednesday('12:00:00')
                                        setstartAfternoonWednesday('14:00:00')
                                        setendAfternoonWednesday('18:00:00')
                                        setstartMorningWednesday('08:00:00')
                                    } else {
                                        setWed(false)
                                        setendMorningWednesday('00:00:00')
                                        setstartAfternoonWednesday('00:00:00')
                                        setendAfternoonWednesday('00:00:00')
                                        setstartMorningWednesday('00:00:00')
                                    }

                                }}
                                value={wed}
                            />
                        </View>

                        {wed &&
                            <View style={styling.mainTimePickerView}>
                                <View style={styling.dayheadingView}>
                                    <Text>Morning</Text>

                                    <Picker
                                        placeholder="Start"
                                        style={{ width: wp(25), height: hp(5) }}
                                        onValueChange={(itemValue) => {
                                            setstartMorningWednesday(itemValue)
                                        }}
                                        selectedValue={startMorningWednesday}

                                    >
                                        <Picker.Item label="Start" value="Start Time" />
                                        {
                                            Timepick.map(val => {
                                                return <Picker.Item label={val} value={val} />
                                            })}
                                    </Picker>
                                    <Picker
                                        style={{ width: wp(25), height: hp(5), }}
                                        onValueChange={(itemValue, itemIndex) => {
                                            setendMorningWednesday(itemValue)
                                        }}
                                        selectedValue={endMorningWednesday}
                                    >
                                        <Picker.Item label="End" value="End Time" />
                                        {Timepick.map(val => {
                                            if (val > startMorningWednesday) {
                                                return <Picker.Item label={val} value={val} />
                                            }
                                        })}
                                    </Picker>
                                </View>
                                <View style={styling.dayheadingView}>
                                    <Text>Afternoon</Text>
                                    <Picker
                                        placeholder="Start"
                                        style={{ width: wp(25), height: hp(5) }}
                                        onValueChange={(itemValue) => {
                                            setstartAfternoonWednesday(itemValue)
                                        }}
                                        selectedValue={startAfternoonWednesday}
                                    >
                                        <Picker.Item label="Start at" value="Start Time" />
                                        {
                                            Timepick.map(val => {
                                                return <Picker.Item label={val} value={val} />
                                            })}
                                    </Picker>
                                    <Picker
                                        style={{ width: wp(25), height: hp(5) }}
                                        onValueChange={(itemValue, itemIndex) => {
                                            setendAfternoonWednesday(itemValue)
                                        }}
                                        selectedValue={endAfternoonWednesday}
                                    >
                                        <Picker.Item label="End Time" value="End Time" />
                                        {Timepick.map(val => {
                                            if (val > startAfternoonWednesday) {
                                                return <Picker.Item label={val} value={val} />
                                            }
                                        })
                                        }
                                    </Picker>
                                </View>
                            </View>
                        }
                    </View>
                    <View style={styling.dayView}>
                        <View style={styling.maindaytagView}>

                            <Text style={styling.daytagLabel}>Thursday </Text>
                            <Switch
                                trackColor={{ false: "#767577", true: "#FF2D55" }}
                                thumbColor={thrus ? "#E5E5E5" : "#f4f3f4"}
                                ios_backgroundColor="#3e3e3e"
                                onValueChange={() => {
                                    setThrus(true)
                                    if (!thrus) {
                                        setThrus(true)
                                        setstartMorningThursday('08:00:00')
                                        setendMorningThursday('12:00:00')
                                        setstartAfternoonThursday('14:00:00')
                                        setendAfternoonThursday('18:00:00')

                                    } else {
                                        setThrus(false)
                                        setstartMorningThursday('00:00:00')
                                        setendMorningThursday('00:00:00')
                                        setstartAfternoonThursday('00:00:00')
                                        setendAfternoonThursday('00:00:00')
                                    }

                                }}
                                value={thrus}
                            />
                        </View>

                        {thrus &&
                            <View style={styling.mainTimePickerView}>
                                <View style={styling.dayheadingView}>
                                    <Text>Morning</Text>
                                    <Picker
                                        placeholder="Start"
                                        style={{ width: wp(25), height: hp(5) }}
                                        onValueChange={(itemValue) => {
                                            setstartMorningThursday(itemValue)
                                        }}
                                        selectedValue={startMorningThursday}

                                    >
                                        <Picker.Item label="Start" value="Start Time" />
                                        {
                                            Timepick.map(val => {
                                                return <Picker.Item label={val} value={val} />
                                            })}
                                    </Picker>
                                    <Picker
                                        style={{ width: wp(25), height: hp(5), }}
                                        onValueChange={(itemValue, itemIndex) => {
                                            setendMorningThursday(itemValue)
                                        }}
                                        selectedValue={endMorningThursday}
                                    >
                                        <Picker.Item label="End" value="End Time" />
                                        {Timepick.map(val => {
                                            if (val > startMorningThursday) {
                                                return <Picker.Item label={val} value={val} />
                                            }
                                        })}
                                    </Picker>
                                </View>
                                <View style={styling.dayheadingView}>
                                    <Text>Afternoon</Text>
                                    <Picker
                                        placeholder="Start"
                                        style={{ width: wp(25), height: hp(5) }}
                                        onValueChange={(itemValue) => {
                                            setstartAfternoonThursday(itemValue)
                                        }}
                                        selectedValue={startAfternoonThursday}
                                    >
                                        <Picker.Item label="Start at" value="Start Time" />
                                        {
                                            Timepick.map(val => {
                                                return <Picker.Item label={val} value={val} />
                                            })}
                                    </Picker>
                                    <Picker
                                        style={{ width: wp(25), height: hp(5) }}
                                        onValueChange={(itemValue, itemIndex) => {
                                            setendAfternoonThursday(itemValue)
                                        }}
                                        selectedValue={endAfternoonThursday}
                                    >
                                        <Picker.Item label="End Time" value="End Time" />
                                        {Timepick.map(val => {
                                            if (val > startAfternoonThursday) {
                                                return <Picker.Item label={val} value={val} />
                                            }
                                        })
                                        }
                                    </Picker>
                                </View>
                            </View>
                        }
                    </View>
                    <View style={styling.dayView}>
                        <View style={styling.maindaytagView}>

                            <Text style={styling.daytagLabel}>Friday </Text>
                            <Switch
                                trackColor={{ false: "#767577", true: "#FF2D55" }}
                                thumbColor={friday ? "#E5E5E5" : "#f4f3f4"}
                                ios_backgroundColor="#3e3e3e"
                                onValueChange={() => {
                                    setFriday(true)
                                    if (!friday) {
                                        setFriday(true)
                                        setstartMorningFriday('08:00:00')
                                        setendMorningFriday('12:00:00')
                                        setstartAfternoonFriday('14:00:00')
                                        setendAfternoonFriday('18:00:00')
                                    } else {
                                        setFriday(false)
                                        setstartMorningFriday('00:00:00')
                                        setendMorningFriday('00:00:00')
                                        setstartAfternoonFriday('00:00:00')
                                        setendAfternoonFriday('00:00:00')
                                    }

                                }}
                                value={friday}
                            />
                        </View>

                        {friday &&
                            <View style={styling.mainTimePickerView}>
                                <View style={styling.dayheadingView}>
                                    <Text>Morning</Text>

                                    <Picker
                                        placeholder="Start"
                                        style={{ width: wp(25), height: hp(5) }}
                                        onValueChange={(itemValue) => {
                                            setstartMorningFriday(itemValue)
                                        }}
                                        selectedValue={startMorningFriday}

                                    >
                                        <Picker.Item label="Start" value="Start Time" />
                                        {
                                            Timepick.map(val => {
                                                return <Picker.Item label={val} value={val} />
                                            })}
                                    </Picker>
                                    <Picker
                                        style={{ width: wp(25), height: hp(5), }}
                                        onValueChange={(itemValue, itemIndex) => {
                                            setendMorningFriday(itemValue)
                                        }}
                                        selectedValue={endMorningFriday}
                                    >
                                        <Picker.Item label="End" value="End Time" />
                                        {Timepick.map(val => {
                                            if (val > startMorningFriday) {
                                                return <Picker.Item label={val} value={val} />
                                            }
                                        })}
                                    </Picker>
                                </View>
                                <View style={styling.dayheadingView}>
                                    <Text>Afternoon</Text>
                                    <Picker
                                        placeholder="Start"
                                        style={{ width: wp(25), height: hp(5) }}
                                        onValueChange={(itemValue) => {
                                            setstartAfternoonFriday(itemValue)
                                        }}
                                        selectedValue={startAfternoonFriday}
                                    >
                                        <Picker.Item label="Start at" value="Start Time" />
                                        {
                                            Timepick.map(val => {
                                                return <Picker.Item label={val} value={val} />
                                            })}
                                    </Picker>
                                    <Picker
                                        style={{ width: wp(25), height: hp(5) }}
                                        onValueChange={(itemValue, itemIndex) => {
                                            setendAfternoonFriday(itemValue)
                                        }}
                                        selectedValue={endAfternoonFriday}
                                    >
                                        <Picker.Item label="End Time" value="End Time" />
                                        {Timepick.map(val => {
                                            if (val > startAfternoonFriday) {
                                                return <Picker.Item label={val} value={val} />
                                            }
                                        })
                                        }
                                    </Picker>
                                </View>
                            </View>
                        }
                    </View>
                    <View style={styling.dayView}>
                        <View style={styling.maindaytagView}>
                            <Text style={styling.daytagLabel}>Saturday </Text>
                            <Switch
                                trackColor={{ false: "#767577", true: "#FF2D55" }}
                                thumbColor={sat ? "#E5E5E5" : "#f4f3f4"}
                                ios_backgroundColor="#3e3e3e"
                                onValueChange={() => {
                                    setSat(true)
                                    if (!sat) {
                                        setSat(true)
                                        setstartMorningSaturday('08:00:00')
                                        setendMorningSaturday('12:00:00')
                                        setstartAfternoonSaturday('14:00:00')
                                        setendAfternoonSaturday('18:00:00')

                                    } else {
                                        setSat(false)
                                        setstartMorningSaturday('00:00:00')
                                        setendMorningSaturday('00:00:00')
                                        setstartAfternoonSaturday('00:00:00')
                                        setendAfternoonSaturday('00:00:00')
                                    }

                                }}
                                value={sat}
                            />
                        </View>

                        {sat &&
                            <View style={styling.mainTimePickerView}>
                                <View style={styling.dayheadingView}>
                                    <Text>Morning</Text>
                                    <Picker
                                        placeholder="Start"
                                        style={{ width: wp(25), height: hp(5) }}
                                        onValueChange={(itemValue) => {
                                            setstartMorningSaturday(itemValue)
                                        }}
                                        selectedValue={startMorningSaturday}

                                    >
                                        <Picker.Item label="Start" value="Start Time" />
                                        {
                                            Timepick.map(val => {
                                                return <Picker.Item label={val} value={val} />
                                            })}
                                    </Picker>
                                    <Picker
                                        style={{ width: wp(25), height: hp(5), }}
                                        onValueChange={(itemValue, itemIndex) => {
                                            setendMorningSaturday(itemValue)
                                        }}
                                        selectedValue={endMorningSaturday}
                                    >
                                        <Picker.Item label="End" value="End Time" />
                                        {Timepick.map(val => {
                                            if (val > startMorningSaturday) {
                                                return <Picker.Item label={val} value={val} />
                                            }
                                        })}
                                    </Picker>
                                </View>
                                <View style={styling.dayheadingView}>
                                    <Text>Afternoon</Text>
                                    <Picker
                                        placeholder="Start"
                                        style={{ width: wp(25), height: hp(5) }}
                                        onValueChange={(itemValue) => {
                                            setstartAfternoonSaturday(itemValue)
                                        }}
                                        selectedValue={startAfternoonSaturday}
                                    >
                                        <Picker.Item label="Start at" value="Start Time" />
                                        {
                                            Timepick.map(val => {
                                                return <Picker.Item label={val} value={val} />
                                            })}
                                    </Picker>
                                    <Picker
                                        style={{ width: wp(25), height: hp(5) }}
                                        onValueChange={(itemValue, itemIndex) => {
                                            setendAfternoonSaturday(itemValue)
                                        }}
                                        selectedValue={endAfternoonSaturday}
                                    >
                                        <Picker.Item label="End Time" value="End Time" />
                                        {Timepick.map(val => {
                                            if (val > startAfternoonSaturday) {
                                                return <Picker.Item label={val} value={val} />
                                            }
                                        })
                                        }
                                    </Picker>
                                </View>
                            </View>
                        }
                    </View>
                    <View style={styling.dayView}>
                        <View style={styling.maindaytagView}>
                            <Text style={styling.daytagLabel}>Sunday </Text>
                            <Switch
                                trackColor={{ false: "#767577", true: "#FF2D55" }}
                                thumbColor={sun ? "#E5E5E5" : "#f4f3f4"}
                                ios_backgroundColor="#3e3e3e"
                                onValueChange={() => {
                                    if (!sun) {
                                        setSun(true)
                                        setstartMorningSunday('08:00:00')
                                        setendMorningSunday('12:00:00')
                                        setendAfternoonSunday('18:00:00')
                                        setstartAfternoonSunday('14:00:00')


                                    } else {
                                        setSun(false)
                                        setstartMorningSunday('00:00:00')
                                        setendMorningSunday('00:00:00')
                                        setendAfternoonSunday('00:00:00')
                                        setstartAfternoonSunday('00:00:00')

                                    }
                                }}
                                value={sun}
                            />
                        </View>

                        {sun &&
                            <View style={styling.mainTimePickerView}>
                                <View style={styling.dayheadingView}>
                                    <Text>Morning</Text>
                                    <Picker
                                        placeholder="Start"
                                        style={{ width: wp(25), height: hp(5) }}
                                        onValueChange={(itemValue) => {
                                            setstartMorningSunday(itemValue)
                                        }}
                                        selectedValue={startMorningSunday}

                                    >
                                        <Picker.Item label="Start" value="Start Time" />
                                        {
                                            Timepick.map(val => {
                                                return <Picker.Item label={val} value={val} />
                                            })}
                                    </Picker>
                                    <Picker
                                        style={{ width: wp(25), height: hp(5), }}
                                        onValueChange={(itemValue, itemIndex) => {
                                            setendMorningSunday(itemValue)
                                        }}
                                        selectedValue={endMorningSunday}
                                    >
                                        <Picker.Item label="End" value="End Time" />
                                        {Timepick.map(val => {
                                            if (val > startMorningSunday) {
                                                return <Picker.Item label={val} value={val} />
                                            }
                                        })}
                                    </Picker>
                                </View>
                                <View style={styling.dayheadingView}>
                                    <Text>Afternoon</Text>
                                    <Picker
                                        placeholder="Start"
                                        style={{ width: wp(25), height: hp(5) }}
                                        onValueChange={(itemValue) => {
                                            setstartAfternoonSunday(itemValue)
                                        }}
                                        selectedValue={startAfternoonSunday}
                                    >
                                        <Picker.Item label="Start at" value="Start Time" />
                                        {
                                            Timepick.map(val => {
                                                return <Picker.Item label={val} value={val} />
                                            })}
                                    </Picker>
                                    <Picker
                                        style={{ width: wp(25), height: hp(5) }}
                                        onValueChange={(itemValue, itemIndex) => {
                                            setendAfternoonSunday(itemValue)
                                        }}
                                        selectedValue={endAfternoonSunday}
                                    >
                                        <Picker.Item label="End Time" value="End Time" />
                                        {Timepick.map(val => {
                                            if (val > startAfternoonSunday) {
                                                return <Picker.Item label={val} value={val} />
                                            }
                                        })
                                        }
                                    </Picker>
                                </View>
                            </View>
                        }
                    </View>

                    {endAfternoonSunday != '' ? SaveData() : SaveData()}
                </ScrollView>
            </View>
        </SafeAreaView >
    )
}

export default OpenningHour;