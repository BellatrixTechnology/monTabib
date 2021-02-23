import React, { useState } from 'react';
import { View, TouchableWithoutFeedback, TouchableOpacity, Keyboard, SafeAreaView, TextInput, ScrollView } from 'react-native';
import { Text } from 'react-native-elements';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { styling } from './styling';
import Icon from 'react-native-vector-icons/AntDesign';
import { hp, wp } from '../../../Global/Styles/Scalling';

const Opennings = (props) => {
    const [Consult, setConsult] = useState('');
    const [Service, setService] = useState('');
    const [cons, setCons] = useState([{ Consult: "", Duration: "" }]);

    const [ser, setSer] = useState([{ Service: "", Price: "" }]);


    const addInputConst = () => {
        setCons([...cons, { Consult: "", Duration: "" }]);

    }
    const removeInputConst = (i) => {
        const list = [...cons];
        list.splice(i, 1);
        setCons(list);
    }
    const addInputSer = () => {
        setSer([...ser, { Service: "", Price: "" }]);

    }
    const removeInputSer = (i) => {
        const list = [...ser];
        list.splice(i, 1);
        setSer(list);
    }

    return (
        <SafeAreaView style={styling.safeContainer}>

            <TouchableWithoutFeedback
                onPress={() => {
                    Keyboard.dismiss();
                }}  >
                <ScrollView>
                    <View style={styling.containerView}>
                        <View style={styling.headerView}>
                            <TouchableOpacity onPress={() => props.navigation.goBack()}>
                                <Icon name='left' size={30} />
                            </TouchableOpacity>
                            <Text style={styling.headerText}>Openning Hour</Text>
                            <View style={{ width: wp(12) }} />
                        </View>

                        <View style={styling.innerContainerView}>
                            <View style={styling.dayView}>
                                <Text style={styling.dayTXT}>Monday</Text>
                                <View>
                                    <Text>Morning</Text>
                                </View>
                            </View>
                        </View>

                    </View>
                </ScrollView>
            </TouchableWithoutFeedback>
        </SafeAreaView>
    )
}
export default Opennings;