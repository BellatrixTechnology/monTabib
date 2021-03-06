import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, SafeAreaView, TouchableOpacity } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import DropDownPicker from 'react-native-dropdown-picker';
// import AsyncStorage from '@react-native-community/async-storage';

import Icon from 'react-native-vector-icons/AntDesign';
import { styling } from './styling';

const HomeScreen = (props) => {
    console.log(props)
    const [Gender, setGender] = useState('');
    // useEffect(() => {
    //     get()
    // }, [])
    // async function get() {
    //     let Login = await AsyncStorage.getItem('token');
    //     console.log(Login)
    // }
    const [Special, setSpecial] = useState('');
    const [City, setCity] = useState('')
    return (
        <SafeAreaView style={styling.safeContainer}>

            <View style={styling.mainContainer}>
                <View style={styling.headView}>
                    <Text style={styling.headTXT}>monTabib</Text>
                </View>
                <View style={styling.innerView}>

                    <View style={styling.headersView}>
                        <DropDownPicker
                            items={[
                                { label: 'Acupuncture', value: '1' },
                                { label: 'Surgeon', value: '2' },]}
                            defaultValue={Special}
                            placeholder='Select Specialist'
                            labelStyle={styling.dropdownLabel}
                            style={styling.dropDown}
                            containerStyle={styling.containerStyle}
                            dropDownStyle={styling.dropdownStyle}
                            showArrow={true}
                            onChangeItem={(special) => {
                                setSpecial(special.value)
                            }}

                        />
                    </View>
                    <View style={styling.headersView}>
                        <DropDownPicker
                            items={[
                                { label: 'Paris', value: 'Paris' },
                                { label: 'France', value: 'France' },
                            ]}
                            defaultValue={City}
                            placeholder='City'
                            labelStyle={styling.dropdownLabel}
                            style={styling.dropDown}
                            containerStyle={styling.containerStyle}
                            dropDownStyle={styling.dropdownStyle}
                            showArrow={true}
                            onChangeItem={(city) => { setCity(city.value) }}
                        />
                    </View>

                </View>

                <TouchableOpacity
                    disabled={(City != '' && Special != '') ? false : true}
                    style={styling.OpacityLog} onPress={() => props.navigation.navigate('ListDoctor', { city: City, Special: Special })}  >
                    <Text style={styling.Opacitytxt}>Search</Text>
                </TouchableOpacity>
            </View>


        </SafeAreaView >
    )
}

export default HomeScreen;