import React, { useState } from 'react';
import { View, TouchableWithoutFeedback, Keyboard, SafeAreaView, TextInput } from 'react-native';
import { Text } from 'react-native-elements';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { styling } from './styling';

const Services = () => {
    const [Consult, setConsult] = useState('');
    const [Service, setService] = useState('');


    const SaveData = () => {

        let data = {
            Consult: Consult,
            Service: Service,
        }
        AsyncStorage.setItem('userservice', JSON.stringify(data));

    }

    return (
        <SafeAreaView style={styling.safeContainer}>

            <TouchableWithoutFeedback
                onPress={() => {
                    Keyboard.dismiss();
                }}  >
                <View style={styling.containerView}>
                    <View style={styling.innerContainerView}>
                        <Text style={styling.serviceText}>Consultation In</Text>
                        <TextInput
                            multiline={true}
                            numberOfLines={10}
                            placeholder=' Consultation'
                            value={Consult}
                            onChangeText={(text) => { setConsult(text) }}
                            style={styling.servicetextinput}
                        />
                        <Text style={styling.serviceText}>Services</Text>
                        <TextInput
                            multiline={true}
                            numberOfLines={10}
                            placeholder='  Services'
                            value={Service}
                            onChangeText={(text) => { setService(text) }}
                            style={styling.servicetextinput}
                        />
                        {Consult != '' && Service != '' ? SaveData() : console.log('empty')}
                    </View>
                </View>

            </TouchableWithoutFeedback>
        </SafeAreaView>
    )
}
export default Services;