import React, { useState } from 'react';
import { View, TouchableOpacity } from 'react-native';
import { Text } from 'react-native-elements';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { GlobalStyle } from '../StyleSheet/GlobalStyle';

const Subscription = () => {
    const [diamondselect, setdSelect] = useState('');
    const [goldselect, setgSelect] = useState('');
    const [silverselect, setsSelect] = useState('');



    return (
        <View style={GlobalStyle.containerView}>
            <View style={GlobalStyle.headerView}>
                <Text style={GlobalStyle.headerText}> Subscription Plans</Text>
            </View>
            <View style={GlobalStyle.diamondCard}>
                <View style={GlobalStyle.cardinnerView}>
                    <Text style={GlobalStyle.cardLabel}>Diamond</Text>
                    <Text style={GlobalStyle.cardLabel}> 350$</Text>
                    <Text style={GlobalStyle.cardLabel}> {diamondselect}</Text>
                </View>
                <TouchableOpacity onPress={() => { setdSelect('Selected'), setgSelect(''), setsSelect('') }}>
                    <Text>Select</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => { setdSelect('') }}>
                    <Text>UnSelect</Text>
                </TouchableOpacity>
            </View>
            <View style={GlobalStyle.goldCard}>
                <View style={GlobalStyle.cardinnerView}>
                    <Text style={GlobalStyle.cardLabel}>Gold</Text>
                    <Text style={GlobalStyle.cardLabel}> 200$</Text>
                    <Text style={GlobalStyle.cardLabel}> {goldselect}</Text>

                </View>
                <TouchableOpacity onPress={() => { setgSelect('Selected'), setdSelect(''), setsSelect('') }}>
                    <Text>Select</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => { setgSelect('') }}>
                    <Text>UnSelect</Text>
                </TouchableOpacity>
            </View>
            <View style={GlobalStyle.silverCard}>
                <View style={GlobalStyle.cardinnerView}>
                    <Text style={GlobalStyle.cardLabel}>Silver</Text>
                    <Text style={GlobalStyle.cardLabel}> 100$</Text>
                    <Text style={GlobalStyle.cardLabel}> {silverselect}</Text>

                </View>
                <TouchableOpacity onPress={() => { setsSelect('Selected'), setgSelect(''), setdSelect('') }}>
                    <Text>Select</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => { setsSelect('') }}>
                    <Text>UnSelect</Text>
                </TouchableOpacity>
            </View>



        </View>

    )
}

export default Subscription;