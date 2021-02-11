import React, { useState } from 'react';
import { StyleSheet, View, TouchableOpacity, TextInput, ScrollView, SafeAreaView } from 'react-native';
import { Text, Input } from 'react-native-elements';
import Icon from 'react-native-vector-icons/AntDesign';
import Icons from 'react-native-vector-icons/FontAwesome';
import { styling } from './styling';
import Dialog from "react-native-dialog";

const Prescribe = () => {

    const [inputList, setInputList] = useState([{ Wording: "", EndDate: "" }])
    const handleAddClick = () => {
        setInputList([...inputList, { Wording: "", EndDate: "" }]);
    };
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

                <View style={styling.PrecribeView}>
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
                    <Text style={styling.patientTXT}>Prescription</Text>
                    <TextInput
                        multiline={true}
                        numberOfLines={10}
                        placeholder='Prescription'
                        // value={Consult}

                        style={styling.servicetextinput}
                    />
                    {/* <View>
                        {inputList.map((value, index) => {
                            return <Input
                                placeholder='hello'
                            />
                        })}
                    </View>
                    <TouchableOpacity onPress={() => {
                        handleAddClick()
                    }}>
                        <Text>Add</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => {
                            handleRemoveClick()
                        }}>

                        <Text>delete</Text>
                    </TouchableOpacity> */}
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