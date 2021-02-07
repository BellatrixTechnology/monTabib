import React, { useState } from 'react';
import { View, TouchableWithoutFeedback, Keyboard, SafeAreaView, KeyboardAvoidingView } from 'react-native';
import { Input } from 'react-native-elements';
import DropDownPicker from 'react-native-dropdown-picker';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { GlobalStyle } from '../StyleSheet/GlobalStyle';

const Register = () => {
    const [Name, setName] = useState('');
    const [Surname, setSurName] = useState('');
    const [Gender, setGender] = useState('');
    const [Address, setAddress] = useState('');
    const [Telephone, setTelephone] = useState('');
    const [Email, setEmail] = useState('');
    const [UI, setUI] = useState('');
    const [Special, setSpecial] = useState('');

    const SaveData = () => {
        let obj = {
            Name: Name,
            SurName: Surname,
            Gender: Gender,
            Address: Address,
            Telephone: Telephone,
            Email: Email,
            UI: UI,
            Specialist: Special
        }
        AsyncStorage.setItem('user', JSON.stringify(obj));


    }


    return (
        <SafeAreaView>
            <TouchableWithoutFeedback
                onPress={() => {
                    Keyboard.dismiss();
                }}  >

                <View style={GlobalStyle.containerView}>
                    <View style={GlobalStyle.nameFieldView}>
                        <Input
                            label='Name'
                            placeholder='Name'
                            value={Name}
                            onChangeText={(name) => {
                                setName(name)

                            }}
                        />
                        <Input
                            label='Sur Name'
                            placeholder='Sur-Name'
                            value={Surname}
                            onChangeText={(Sname) => {
                                setSurName(Sname)
                            }}
                        />
                    </View>

                    <View style={GlobalStyle.headerView}>
                        <DropDownPicker
                            items={[
                                { label: 'Male', value: 'Male' },
                                { label: 'Female', value: 'Female' },]}
                            defaultValue={Gender}
                            placeholder='Select Gender'
                            labelStyle={GlobalStyle.dropdownLabel}
                            style={GlobalStyle.dropDown}
                            containerStyle={GlobalStyle.containerStyle}
                            dropDownStyle={GlobalStyle.dropdownStyle}
                            showArrow={true}
                            onChangeItem={(gender) => {
                                setGender(gender.value)
                            }}

                        />
                    </View>
                    <KeyboardAvoidingView
                        behavior='height'
                    >
                        <View style={GlobalStyle.innerFieldView}>
                            <Input
                                label='Address'
                                placeholder='Address'
                                value={Address}
                                onChangeText={(address) => {
                                    setAddress(address)
                                }}
                            />
                            <Input
                                label='Telephone'
                                placeholder='Telephone'
                                keyboardType='phone-pad'
                                value={Telephone}
                                onChangeText={(Tphone) => {
                                    setTelephone(Tphone)
                                }}
                            />
                            <Input
                                label='Email'
                                placeholder='Email'
                                autoCapitalize='none'
                                value={Email}
                                onChangeText={(email) => {
                                    setEmail(email)
                                }}
                            />
                            <Input
                                label='Unique Identifier (RPPS)'
                                placeholder='Unique Identifier (RPPS)'
                                keyboardType='phone-pad'
                                value={UI}
                                onChangeText={(ui) => {
                                    setUI(ui)
                                }}
                            />
                            <Input
                                label='Specialization'
                                placeholder='Your Specialization'
                                value={Special}
                                onChangeText={(special) => {
                                    setSpecial(special)
                                }}
                            />
                        </View>
                    </KeyboardAvoidingView>
                    {Name != '' && Surname != '' && Email != '' && Gender != '' && Address != '' && UI != '' && Special != '' && Telephone != '' ? SaveData() : console.log('empty')}

                </View>



            </TouchableWithoutFeedback>
        </SafeAreaView>
    )
}

export default Register;