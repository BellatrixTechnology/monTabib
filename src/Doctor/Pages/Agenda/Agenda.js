import React from 'react';
import { View, StatusBar, TouchableOpacity, SafeAreaView, ScrollView } from 'react-native';
import { Text, Input } from 'react-native-elements';
import { styling } from './styling';
import Icon from 'react-native-vector-icons/AntDesign';
import Icons from 'react-native-vector-icons/FontAwesome';

import CalendarPicker from 'react-native-calendar-picker';


const Agenda = () => {
    return (
        <SafeAreaView style={styling.safeContainer} >
            <StatusBar barStyle="dark-content" hidden={false} backgroundColor="white" translucent={false} />


            <View style={styling.mainContainer}>
                <View style={styling.headerView}>
                    <Text style={styling.headerTXT}>My Agenda</Text>
                </View>
                <View style={styling.opcaityView}>
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
                </View>

                <View style={styling.calendarView}>
                    <CalendarPicker
                        scrollable={false}
                        horizontal={true}


                    />
                </View>


            </View>

        </SafeAreaView >
    )
}

export default Agenda;