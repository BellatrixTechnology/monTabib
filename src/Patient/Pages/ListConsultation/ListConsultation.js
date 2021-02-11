import React from 'react';
import { View, StatusBar, TouchableOpacity, SafeAreaView, ScrollView } from 'react-native';
import { Text, Input } from 'react-native-elements';
import { styling } from './styling';
import Icon from 'react-native-vector-icons/AntDesign';
import Icons from 'react-native-vector-icons/FontAwesome';


const ListConsultation = () => {
    return (
        <SafeAreaView style={styling.safeContainer} >
            <StatusBar barStyle="dark-content" hidden={false} backgroundColor="white" translucent={false} />


            <View style={styling.mainContainer}>
                <View style={styling.headerView}>
                    <Text style={styling.headerTXT}>List of consultations</Text>
                </View>


                <View style={styling.labelView}>
                    <Text style={styling.labelTXT}>Doctor Name</Text>
                    <Text style={styling.labelTXT}>Date</Text>
                    <Text style={styling.labelTXT}>Telephone</Text>
                    <Text style={styling.labelTXT}>Service</Text>
                </View>



            </View>

        </SafeAreaView >
    )
}

export default ListConsultation;