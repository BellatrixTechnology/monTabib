import React from 'react';
import { View, StatusBar, TouchableOpacity, SafeAreaView, ScrollView } from 'react-native';
import { Text, Input } from 'react-native-elements';
import { styling } from './styling';
import Icon from 'react-native-vector-icons/Entypo';
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
                </TouchableOpacity>

                <View style={styling.labelView}>
                    <Text style={styling.labelTXT}>Title</Text>
                    <Text style={styling.labelTXT}>Start Date</Text>
                    <Text style={styling.labelTXT}>End Date</Text>
                    <View style={styling.ActionView}>
                        <Text style={styling.labelTXT}>Action</Text>
                    </View>
                </View>
                <View style={styling.dataView}>
                    <Text style={styling.dataTXT}>Roger</Text>
                    <Text style={styling.dataTXT}>20-2-2022</Text>
                    <Text style={styling.dataTXT}>090078601</Text>
                    <View style={styling.ActionView}>
                        <TouchableOpacity style={styling.actionOp}>
                            <Icon name='cross' color='white' size={30} />
                        </TouchableOpacity>
                    </View>
                </View>




            </View>

        </SafeAreaView >
    )
}

export default Absences;