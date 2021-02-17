import React from 'react';
import { View, StatusBar, TouchableOpacity, SafeAreaView, ScrollView } from 'react-native';
import { Text, Input } from 'react-native-elements';
import { styling } from './styling';
import Icon from 'react-native-vector-icons/AntDesign';
import Icons from 'react-native-vector-icons/FontAwesome';

import WeeklyCalendar from 'react-native-weekly-calendar';


const Agenda = () => {
    const sampleEvents = [
        { 'start': '2021-02-21 09:00:00', 'duration': '04:20:00', 'note': 'Morning' },
        { 'start': '2021-02-21 17:00:00', 'duration': '04:00:00', 'note': 'AfterNoon' },
        { 'start': '2021-02-22 09:00:00', 'duration': '04:20:00', 'note': 'Morning' },
        { 'start': '2021-02-22 17:00:00', 'duration': '04:00:00', 'note': 'AfterNoon' },
        { 'start': '2021-02-23 09:00:00', 'duration': '04:20:00', 'note': 'Morning' },
        { 'start': '2021-02-23 17:00:00', 'duration': '04:00:00', 'note': 'AfterNoon' },
        { 'start': '2021-02-24 09:00:00', 'duration': '04:20:00', 'note': 'Morning' },
        { 'start': '2021-02-24 17:00:00', 'duration': '04:00:00', 'note': 'AfterNoon' },
        { 'start': '2021-02-25 09:00:00', 'duration': '04:20:00', 'note': 'Morning' },
        { 'start': '2021-02-25 17:00:00', 'duration': '04:00:00', 'note': 'AfterNoon' },
        { 'start': '2021-02-26 09:00:00', 'duration': '04:20:00', 'note': 'Morning' },
        { 'start': '2021-02-26 17:00:00', 'duration': '04:00:00', 'note': 'AfterNoon' },
        { 'start': '2021-02-27 09:00:00', 'duration': '04:20:00', 'note': 'Morning' },
        { 'start': '2021-02-27 17:00:00', 'duration': '04:00:00', 'note': 'AfterNoon' },
        { 'start': '2021-02-28 09:00:00', 'duration': '04:20:00', 'note': 'Morning' },
        { 'start': '2021-02-28 17:00:00', 'duration': '04:00:00', 'note': 'AfterNoon' },
    ]

    return (
        <SafeAreaView style={styling.safeContainer} >
            <StatusBar barStyle="dark-content" hidden={false} backgroundColor="white" translucent={false} />


            <View style={styling.mainContainer}>
                <View style={styling.headerView}>
                    <Text style={styling.headerTXT}>My Agenda</Text>
                </View>
                {/* <View style={styling.opcaityView}>
                    <TouchableOpacity style={styling.consultationOpacity}

                    >
                        <Icons name='plus' size={20} color='white' />
                        <Text style={styling.consultTXT}> Add Consultation</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styling.absenceOpacity}

                    >
                        <Icons name='plus' size={20} color='white' />
                        <Text style={styling.consultTXT}> Add an Absences</Text>
                    </TouchableOpacity>
                </View> */}

                {/* <View style={styling.calendarView}> */}
                <WeeklyCalendar events={sampleEvents} style={styling.calendarView} />

                {/* </View> */}


            </View>

        </SafeAreaView >
    )
}

export default Agenda;