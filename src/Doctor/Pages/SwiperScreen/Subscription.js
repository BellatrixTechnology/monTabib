import React, { useState } from 'react';
import { View, TouchableOpacity, SafeAreaView } from 'react-native';
import { Text } from 'react-native-elements';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { styling } from './styling'
const Subscription = () => {
    const [diamondselect, setdSelect] = useState('');
    const [goldselect, setgSelect] = useState('');
    const [silverselect, setsSelect] = useState('');



    return (
        <SafeAreaView style={styling.safeContainer}>
            <View style={styling.containerView}>
                <View style={styling.headerView}>
                    <Text style={styling.headerText}> Subscription Plans</Text>
                </View>
                <View style={styling.diamondCard}>
                    <View style={styling.cardinnerView}>
                        <Text style={styling.cardLabel}>Diamond</Text>
                        <Text style={styling.cardLabel}> 19.99 euro</Text>
                        <Text style={styling.cardLabel}> {diamondselect}</Text>
                    </View>
                    <TouchableOpacity onPress={() => { setdSelect('Selected'), setgSelect(''), setsSelect('') }}>
                        <Text>Select</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => { setdSelect('') }}>
                        <Text>UnSelect</Text>
                    </TouchableOpacity>
                </View>
                {/* <View style={styling.goldCard}>
                    <View style={styling.cardinnerView}>
                        <Text style={styling.cardLabel}>Gold</Text>
                        <Text style={styling.cardLabel}> 200$</Text>
                        <Text style={styling.cardLabel}> {goldselect}</Text>

                    </View>
                    <TouchableOpacity onPress={() => { setgSelect('Selected'), setdSelect(''), setsSelect('') }}>
                        <Text>Select</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => { setgSelect('') }}>
                        <Text>UnSelect</Text>
                    </TouchableOpacity>
                </View> */}
                {/* <View style={styling.silverCard}>
                    <View style={styling.cardinnerView}>
                        <Text style={styling.cardLabel}>Silver</Text>
                        <Text style={styling.cardLabel}> 100$</Text>
                        <Text style={styling.cardLabel}> {silverselect}</Text>

                    </View>
                    <TouchableOpacity onPress={() => { setsSelect('Selected'), setgSelect(''), setdSelect('') }}>
                        <Text>Select</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => { setsSelect('') }}>
                        <Text>UnSelect</Text>
                    </TouchableOpacity>
                </View> */}



            </View>
        </SafeAreaView>

    )
}

export default Subscription;