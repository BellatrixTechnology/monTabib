import React from 'react';
import { View, StatusBar, TouchableOpacity, SafeAreaView, ScrollView } from 'react-native';
import { Text, Input } from 'react-native-elements';
import { styling } from './styling';
import Icon from 'react-native-vector-icons/AntDesign';
import Icons from 'react-native-vector-icons/FontAwesome';

// import CalendarPicker from 'react-native-calendar-picker';


const Absences = () => {
    return (
        <SafeAreaView style={styling.safeContainer} >
            <StatusBar barStyle="dark-content" hidden={false} backgroundColor="white" translucent={false} />


            <View style={styling.mainContainer}>
                <View style={styling.headerView}>
                    <Text style={styling.headerTXT}>My Absences</Text>
                </View>

                <TouchableOpacity style={styling.absenceOpacity}

                >
                    <Icons name='plus' size={20} color='white' />
                    <Text style={styling.consultTXT}> Add an Absences</Text>
                </TouchableOpacity>

                <View style={styling.labelView}>
                    <Text style={styling.labelTXT}>Title</Text>
                    <Text style={styling.labelTXT}>Start Date</Text>
                    <Text style={styling.labelTXT}>End Date</Text>
                    <Text style={styling.labelTXT}>Action</Text>
                </View>



            </View>

        </SafeAreaView >
    )
}

export default Absences;