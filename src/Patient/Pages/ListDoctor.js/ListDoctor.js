import React, { useState } from 'react';
import { ScrollView, View, Text, SafeAreaView, TouchableOpacity, FlatList } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import DropDownPicker from 'react-native-dropdown-picker';

import Icon from 'react-native-vector-icons/AntDesign';
import { styling } from './styling';

const ListDoctor = (props) => {
    const Monday = [
        { Time: '09:30' }, { Time: '10:30' }, { Time: '11:00' }, { Time: '11:30' }, { Time: '12:00' }, { Time: '05:30' },
        { Time: '06:00' }, { Time: '06:30' }, { Time: '07:00' }, { Time: '07:30' }
    ];
    const [book, setBook] = useState(false);
    const [selectMon, setMonSelect] = useState(null);
    const [time, setTime] = useState('');
    const [date, setdate] = useState('');
    const [Special, setSpecial] = useState('');
    const [City, setCity] = useState('')
    return (
        <SafeAreaView style={styling.safeContainer}>

            <View style={styling.mainContainer}>
                <View style={styling.headView}>
                    <Text style={styling.headTXT}>Doctors</Text>
                </View>
                {!book && <View style={styling.innerView}>
                    <View style={styling.nameView}>
                        <Text style={styling.DRTXT}>Dr. Roger</Text>
                        <Text style={styling.labelTXT}>ACUPUNCTURIST</Text>
                        <Text style={styling.labelTXT}>0519291929</Text>
                    </View>
                    <TouchableOpacity style={styling.OpacityLog} onPress={() => setBook(true)}>
                        <Text style={styling.Opacitytxt}>Book a Consultation</Text>
                    </TouchableOpacity>

                </View>
                }
                {book && <View style={styling.innerView}>
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

                    <TouchableOpacity style={styling.OpacityLog} onPress={() => props.navigation.navigate('PTabs')}>
                        <Text style={styling.Opacitytxt}>Confirm</Text>
                    </TouchableOpacity>
                </View>}
            </View>

        </SafeAreaView >
    )
}

export default ListDoctor;