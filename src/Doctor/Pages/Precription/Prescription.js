import React, { useState } from 'react';
import { StyleSheet, View, TouchableOpacity, SafeAreaView, ScrollView, Image } from 'react-native';
import { Text, Input } from 'react-native-elements';
import { Avatar } from 'react-native-elements';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

import Icon from 'react-native-vector-icons/Octicons';
import Icons from 'react-native-vector-icons/AntDesign';
import { styling } from './styling';


const Prescription = (props) => {
    // const myIcon = (<Icon name="rocket" size={30} color="#900" />)

    return (
        <SafeAreaView style={styling.safeContainer}>
            <View style={styling.innerView}>
                <Text style={styling.label}>Prescription</Text>
            </View>
            <View style={styling.mainContainer}>

                <View style={styling.PreView}>

                    <View style={styling.textView}>
                        <Icons name='arrowright' size={22} />
                        <Text style={styling.labeltag}>  This is My Prescription</Text>

                    </View>

                </View>

                <View style={styling.innerView2}>
                    <TouchableOpacity style={styling.addView}>
                        <Icons name='pluscircleo' size={20} />
                        <Text style={styling.buttonTXT}>Add</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    )

}




export default Prescription; 