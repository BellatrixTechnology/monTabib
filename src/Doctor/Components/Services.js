import React, { useState } from 'react';
import { View, TouchableWithoutFeedback, Keyboard, SafeAreaView, TextInput } from 'react-native';
import { Text } from 'react-native-elements';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { GlobalStyle } from '../StyleSheet/GlobalStyle';


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
        <SafeAreaView>
            <TouchableWithoutFeedback
                onPress={() => {
                    Keyboard.dismiss();
                }}  >
                <View style={GlobalStyle.containerView}>
                    <View style={GlobalStyle.innerContainerView}>
                        <Text style={GlobalStyle.headerText}>Consultation In</Text>
                        <TextInput
                            multiline={true}
                            numberOfLines={10}
                            placeholder=' Consultation'
                            value={Consult}
                            onChangeText={(text) => { setConsult(text) }}
                            style={GlobalStyle.servicetextinput}
                        />
                        <Text style={GlobalStyle.headerText}>Services</Text>
                        <TextInput
                            multiline={true}
                            numberOfLines={10}
                            placeholder='  Services'
                            value={Service}
                            onChangeText={(text) => { setService(text) }}
                            style={GlobalStyle.servicetextinput}
                        />
                        {Consult != '' && Service != '' ? SaveData() : console.log('empty')}
                    </View>
                </View>

            </TouchableWithoutFeedback>
        </SafeAreaView>
    )
}
export default Services;