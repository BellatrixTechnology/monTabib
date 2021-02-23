import React, { useState } from 'react';
import { StyleSheet, View, Text, SafeAreaView, TouchableOpacity } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import DropDownPicker from 'react-native-dropdown-picker';

import Icon from 'react-native-vector-icons/AntDesign';
import { styling } from './styling';

const HomeScreen = ({ props }) => {
    const [Gender, setGender] = useState('');

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
                                { label: 'Allergists', value: 'Allergists' },
                                { label: 'Dermatologists', value: 'Dermatologists' },
                                { label: 'Cardiologists', value: 'Cardiologists' },
                                { label: 'Gastroenterologists', value: 'Gastroenterologists' },
                            ]}
                            defaultValue={Special}
                            placeholder='Select Specialist'
                            labelStyle={styling.dropdownLabel}
                            style={styling.dropDown}
                            containerStyle={styling.containerStyle}
                            dropDownStyle={styling.dropdownStyle}
                            showArrow={true}
                            onChangeItem={(special) => {
                                console.log('ee')
                                setSpecial(special.value)
                            }}

                        />
                    </View>
                    <View style={styling.headersView}>
                        <DropDownPicker
                            items={[
                                { label: 'Algiers', value: 'Algiers' },
                                { label: 'Djelfa', value: 'Djelfa' },
                                { label: 'Sétif', value: 'Sétif' },
                                { label: 'Annaba', value: 'Annaba' },
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
                <View style={styling.innerView}>

                    <View style={styling.headersView}>
                        <DropDownPicker
                            items={[
                                { label: 'Male', value: 'Male' },
                                { label: 'Female', value: 'Female' },
                            ]}
                            defaultValue={Special}
                            placeholder='Select Gender'
                            labelStyle={styling.dropdownLabel}
                            style={styling.dropDown}
                            containerStyle={styling.containerStyle}
                            dropDownStyle={styling.dropdownStyle}
                            showArrow={true}
                            onChangeItem={(special) => {
                                console.log('ee')
                                setSpecial(special.value)
                            }}

                        />
                    </View>
                    <View style={styling.headersView}>
                        <DropDownPicker
                            items={[
                                { label: 'Today', value: 'Today' },
                                { label: 'Tomorrow', value: 'Tomorrow' },

                            ]}
                            defaultValue={City}
                            placeholder='Availablity'
                            labelStyle={styling.dropdownLabel}
                            style={styling.dropDown}
                            containerStyle={styling.containerStyle}
                            dropDownStyle={styling.dropdownStyle}
                            showArrow={true}
                            onChangeItem={(city) => { setCity(city.value) }}
                        />
                    </View>

                </View>
                <TouchableOpacity style={styling.OpacityLog} onPress={() => props.navigation.navigate('ListDoctor')}  >
                    <Text style={styling.Opacitytxt}>Search</Text>
                </TouchableOpacity>
            </View>


        </SafeAreaView >
    )
}

export default HomeScreen;