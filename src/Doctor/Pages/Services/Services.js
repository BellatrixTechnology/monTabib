import React, { useState } from 'react';
import { View, TouchableWithoutFeedback, TouchableOpacity, Keyboard, SafeAreaView, TextInput, ScrollView } from 'react-native';
import { Text } from 'react-native-elements';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { styling } from './styling';
import Icon from 'react-native-vector-icons/AntDesign';
import { hp, wp } from '../../../Global/Styles/Scalling';

const Services = (props) => {
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
                            <Text style={styling.headerText}>My Services</Text>
                            <View style={{ width: wp(12) }} />
                        </View>

                        <View style={styling.innerContainerView}>
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
                                                onChangeText={(text) => { setConsult(text) }}
                                                style={styling.servicetextinput}
                                            />
                                            <TextInput
                                                multiline={true}
                                                // numberOfLines={10}
                                                placeholder='Duration'
                                                value={Consult}
                                                onChangeText={(text) => { setConsult(text) }}
                                                style={styling.servicePriceinput}
                                            />
                                        </View>
                                        {cons.length - 1 == i ?
                                            <View style={styling.addButton}>
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
                                                onChangeText={(text) => { setService(text) }}
                                                style={styling.servicetextinput}
                                            />
                                            <TextInput
                                                multiline={true}
                                                // numberOfLines={10}
                                                placeholder='Price'
                                                value={Consult}
                                                onChangeText={(text) => { setService(text) }}
                                                style={styling.servicePriceinput}
                                            />

                                        </View>
                                        {ser.length - 1 == i ?
                                            <View style={styling.addButton}>
                                                <TouchableOpacity style={{ height: hp('4'), alignItems: 'center' }} onPress={() => { removeInputSer(i) }}><Icon name='delete' size={20} color='red' /></TouchableOpacity>
                                                <TouchableOpacity onPress={() => { addInputSer() }}><Icon name='plus' size={20} color='red' /></TouchableOpacity>
                                            </View> : console.log('wait')}
                                    </View>
                                )

                            })}
                            <View style={styling.opacityView}>
                                <TouchableOpacity style={styling.OpacityLog}
                                >
                                    <Text style={styling.Opacitytxt}>Save</Text>
                                </TouchableOpacity>
                            </View>
                        </View>


                    </View>
                </ScrollView>
            </TouchableWithoutFeedback>
        </SafeAreaView>
    )
}
export default Services;