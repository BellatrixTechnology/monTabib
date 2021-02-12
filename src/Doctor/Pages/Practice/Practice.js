import React, { useState } from 'react';
import { SafeAreaView, View, } from 'react-native';
import { Text, Input } from 'react-native-elements';
import { styling } from './styling';

const Practice = (props) => {

    return (
        <SafeAreaView style={styling.safeContainer}>
            <View style={styling.innerView}>
                <Text style={styling.label}>Practice</Text>
            </View>
            <View style={styling.mainContainer}>

                <View style={styling.detailView}>

                    <Text style={styling.labeltag}>Work Experience:</Text>
                    <Text style={styling.labeltext}> 5-Year</Text>

                </View>

            </View>
        </SafeAreaView>
    )

}




export default Practice; 