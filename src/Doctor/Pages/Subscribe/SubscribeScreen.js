import React, { useState } from 'react';
import { StyleSheet, View, TouchableOpacity, ToastAndroid, ScrollView, Image, SafeAreaView } from 'react-native';
import { Text, Input } from 'react-native-elements';
import { Avatar } from 'react-native-elements';
import { styling } from './styling'
import Icon from 'react-native-vector-icons/Octicons';

const SunscribeScreen = (props) => {

    return (
        <SafeAreaView style={styling.safeContainer}>
            <View style={styling.mainContainer}>
                <View style={styling.innerView}>
                    <Text style={styling.label}>Subscription</Text>
                </View>
                <View style={styling.blankView}>

                </View>
                <View style={styling.innerView2}>
                    <View style={styling.dataView}>
                        <TouchableOpacity style={styling.buttonView}>
                            <Icon name='primitive-dot' size={18} />
                            <Text style={styling.tagLabel}>  Monthly</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styling.buttonView}>
                            <Icon name='primitive-dot' size={18} />
                            <Text style={styling.tagLabel}>  Yearly</Text>
                        </TouchableOpacity>
                    </View>

                    <TouchableOpacity style={styling.continueView}>
                        <Text style={styling.buttonTXT}>Continue</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    )

}




export default SunscribeScreen; 