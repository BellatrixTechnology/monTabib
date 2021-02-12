import React, { useState } from 'react';
import { StyleSheet, View, TouchableOpacity, StatusBar, ScrollView, Image, SafeAreaView } from 'react-native';
import { Text, Input } from 'react-native-elements';
import { styling } from './styling';

const PatientFile = (props) => {
    // const myIcon = (<Icon name="rocket" size={30} color="#900" />)

    return (
        <SafeAreaView style={styling.safeContainer}>
            <StatusBar barStyle="dark-content" hidden={false} backgroundColor="white" translucent={false} />

            <View style={styling.innerView}>
                <Text style={styling.label}>Patient File</Text>
            </View>
            <View style={styling.mainContainer}>

                <View style={styling.patientView}>

                    <Text style={styling.labeltag}>History:</Text>
                    <Text style={styling.labeltext}>----------------------------------------------------------------------------------------
                    ----------------------------------------------------------------------------------------
                    --------------------------------------------------------------------------------------------------------------------------------------------</Text>
                    <Text style={styling.labeltag}>Disease:</Text>
                    <Text style={styling.labeltext}>----------------------------------------------------------------------------------------
                    ----------------------------------------------------------------------------------------
                    --------------------------------------------------------------------------------------------------------------------------------------------</Text>

                    <Text style={styling.labeltag}>Allergies:</Text>
                    <Text style={styling.labeltext}>----------------------------------------------------------------------------------------
                    ----------------------------------------------------------------------------------------
                    --------------------------------------------------------------------------------------------------------------------------------------------</Text>
                </View>

            </View>
        </SafeAreaView>
    )

}




export default PatientFile; 