import React, { useState } from 'react';
import { View, TouchableWithoutFeedback, TouchableOpacity, Keyboard, SafeAreaView, TextInput, ScrollView } from 'react-native';
import { Text } from 'react-native-elements';
import AsyncStorage from '@react-native-community/async-storage';
import { styling } from './styling';
import Icon from 'react-native-vector-icons/AntDesign';
import { hp, wp } from '../../../Global/Styles/Scalling';
import { cos } from 'react-native-reanimated';

const Services = () => {
    const [Consult, setConsult] = useState([]);
    const [Service, setService] = useState([]);
    const [cons, setCons] = useState([{ Consult: "", Duration: "" }]);
    const [conTemp, setconTemp] = useState('');
    const [conDura, setconDua] = useState('');
    const [serTemp, setserTemp] = useState('')
    const [serPrice, setserPrice] = useState('');
    const [ser, setSer] = useState([{ Service: "", Price: "" }]);
    const addconsult = () => {
        setConsult([...Consult, { Consult: conTemp, Duration: conDura }])
        setconDua('')
        setconTemp('')
        console.log(Consult)
    }
    const addServie = () => {
        setService([...Service, { Service: serTemp, Price: serPrice }])
        setserTemp('')
        setserPrice('')
        console.log(Service)
    }

    const SaveData = () => {

        let data = {
            Consult: Consult,
            Service: Service,
        }
        AsyncStorage.setItem('userservice', JSON.stringify(data));

    }
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
                <View style={styling.containerView}>
                    <View style={styling.innerContainerView}>
                        <ScrollView>

                            <Text style={styling.serviceText}>Consultation In</Text>

                            {cons.map((x, i) => {
                                return (
                                    <View>
                                        <View style={styling.txtInputView}>
                                            <TextInput
                                                multiline={true}
                                                // numberOfLines={10}
                                                placeholder=' Consultation'
                                                value={Consult}
                                                onChangeText={(text) => { setconTemp(text) }}
                                                style={styling.servicetextinput}
                                            />
                                            <TextInput
                                                multiline={true}
                                                // numberOfLines={10}
                                                placeholder='Duration'
                                                value={Consult}
                                                onChangeText={(text) => setconDua(text)}
                                                style={styling.servicePriceinput}
                                                keyboardType='number-pad'
                                                maxLength={3}
                                            />
                                        </View>
                                        {cons.length - 1 == i ?
                                            <View style={styling.addButton}>
                                                <TouchableOpacity><Text style={{ color: 'blue' }} onPress={() => addconsult()}>Add Consultation</Text></TouchableOpacity>
                                                <TouchableOpacity style={{ height: hp('4'), alignItems: 'center' }} onPress={() => { removeInputConst(i) }}><Icon name='delete' size={20} color='red' /></TouchableOpacity>
                                                <TouchableOpacity onPress={() => { addInputConst() }}><Icon name='plus' size={20} color='red' /></TouchableOpacity>
                                            </View> : console.log('da')}
                                    </View>
                                )

                            })}

                            <Text style={styling.serviceText}>Services</Text>
                            {ser.map((x, i) => {
                                return (
                                    <View>
                                        <View style={styling.txtInputView}>

                                            <TextInput
                                                multiline={true}
                                                // numberOfLines={10}
                                                placeholder=' Service'
                                                value={Consult}
                                                onChangeText={(text) => { setserTemp(text) }}
                                                style={styling.servicetextinput}
                                            />
                                            <TextInput
                                                multiline={true}
                                                // numberOfLines={10}
                                                placeholder='Price'
                                                value={Consult}
                                                onChangeText={(text) => { setserPrice(text) }}
                                                style={styling.servicePriceinput}
                                                keyboardType='number-pad'
                                            />

                                        </View>
                                        {ser.length - 1 == i ?
                                            <View style={styling.addButton}>
                                                <TouchableOpacity><Text style={{ color: 'blue' }} onPress={() => addServie()}>Add Services</Text></TouchableOpacity>
                                                <TouchableOpacity style={{ height: hp('4'), alignItems: 'center' }} onPress={() => { removeInputSer(i) }}><Icon name='delete' size={20} color='red' /></TouchableOpacity>
                                                <TouchableOpacity onPress={() => { addInputSer() }}><Icon name='plus' size={20} color='red' /></TouchableOpacity>
                                            </View> : console.log('wait')}
                                    </View>
                                )

                            })}

                        </ScrollView>

                    </View>
                    <TouchableOpacity style={styling.saveOpcatiy} onPress={() => SaveData()}>
                        <Text style={{ color: 'white', fontSize: 20 }}>Save</Text>
                    </TouchableOpacity>
                </View>
            </TouchableWithoutFeedback>
        </SafeAreaView>
    )
}
export default Services;