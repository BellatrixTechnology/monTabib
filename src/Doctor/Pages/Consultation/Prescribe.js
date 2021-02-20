import React, { useState } from 'react';
import { StyleSheet, View, TouchableOpacity, TextInput, ScrollView, SafeAreaView } from 'react-native';
import { Text, Input } from 'react-native-elements';
import Icon from 'react-native-vector-icons/AntDesign';
import Icons from 'react-native-vector-icons/FontAwesome';
import { styling } from './styling';
import Dialog from "react-native-dialog";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';


const Prescribe = () => {

    const [inputList, setInputList] = useState([{ Wording: "", EndDate: "" }])

    const addInputConst = () => {
        setInputList([...inputList, { Wording: "", EndDate: "" }]);

    }
    const removeInputConst = (i) => {
        const list = [...inputList];
        list.splice(i, 1);
        setInputList(list);
    }
    return (
        <SafeAreaView style={styling.safeContainer}>

            <View style={styling.mainContainer}>
                <View style={styling.PrecribeView}>
                    <Text style={styling.patientTXT}>General Information</Text>
                    <View style={styling.detailView}>
                        <Text style={styling.headTXT}>Patient:</Text>
                        <Text style={styling.labelTXT}>Daniyal</Text>
                    </View>
                    <View style={styling.detailView}>
                        <Text style={styling.headTXT}>Phone #:</Text>
                        <Text style={styling.labelTXT}>03446021955</Text>
                    </View>
                    <View style={styling.detailView}>
                        <Text style={styling.headTXT}>Date of Consultation:</Text>
                        <Text style={styling.labelTXT}>02-02-2021</Text>
                    </View>

                </View>

                <View style={styling.reportView}>
                    <Text style={styling.patientTXT}>Report</Text>
                    <TextInput
                        multiline={true}
                        numberOfLines={10}
                        placeholder='Note of Your Report'
                        // value={Consult}

                        style={styling.servicetextinput}
                    />
                </View>
                <View style={styling.PrecribeView}>
                    <ScrollView showsVerticalScrollIndicator={false}>

                        <Text style={styling.patientTXT}>Prescription</Text>
                        {/* <TextInput
                            multiline={true}
                            numberOfLines={10}
                            placeholder='Prescription'
                            // value={Consult}

                            style={styling.servicetextinput}
                        /> */}
                        {inputList.map((x, i) => {
                            return (
                                <View>
                                    <View style={styling.txtInputView}>
                                        <TextInput
                                            multiline={true}
                                            // numberOfLines={10}
                                            placeholder=' Consultation'
                                            // value={Consult}
                                            onChangeText={(text) => { setConsult(text) }}
                                            style={styling.stextinput}
                                        />
                                        <TextInput
                                            multiline={true}
                                            // numberOfLines={10}
                                            placeholder='End Date'
                                            // value={Consult}
                                            onChangeText={(text) => { setConsult(text) }}
                                            style={styling.sPriceinput}
                                        />
                                    </View>
                                    {inputList.length - 1 == i ?
                                        <View style={styling.addButton}>
                                            <TouchableOpacity style={{ height: hp('4'), alignItems: 'center' }} onPress={() => { removeInputConst(i) }}><Icon name='delete' size={20} color='red' /></TouchableOpacity>
                                            <TouchableOpacity onPress={() => { addInputConst() }}><Icon name='plus' size={20} color='red' /></TouchableOpacity>
                                        </View> : console.log('da')}
                                </View>
                            )

                        })}
                    </ScrollView>

                </View>
                <View style={styling.SaveView}>
                    <TouchableOpacity style={styling.SaveOpacity}>
                        <Text style={styling.opacityTXT}>Save</Text>
                    </TouchableOpacity>
                </View>
            </View>

        </SafeAreaView >
    )
}
export default Prescribe;