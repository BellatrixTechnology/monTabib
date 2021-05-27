import React, { useState } from 'react';
import { View, StatusBar, TouchableWithoutFeedback, Keyboard, SafeAreaView, KeyboardAvoidingView } from 'react-native';
import { Input } from 'react-native-elements';
import DropDownPicker from 'react-native-dropdown-picker';
import AsyncStorage from '@react-native-community/async-storage';

import { styling } from './styling';
import { ScrollView } from 'react-native';
import { hp } from '../../../Global/Styles/Scalling';

const Register = () => {
    const [Name, setName] = useState('');
    const [Surname, setSurName] = useState('');
    const [Gender, setGender] = useState('');
    const [Address, setAddress] = useState('');
    const [Telephone, setTelephone] = useState('');
    const [Email, setEmail] = useState('');
    const [UI, setUI] = useState('');
    const [Special, setSpecial] = useState('');
    const [errorName, seterrorName] = useState('');
    const [errorSurname, seterrorSurName] = useState('');
    const [errorGender, seterrorGender] = useState('');
    const [errorAddress, seterrorAddress] = useState('');
    const [errorTelephone, seterrorTelephone] = useState('');
    const [errorEmail, seterrorEmail] = useState('');
    const [errorUI, seterrorUI] = useState('');
    const [errorSpecial, seterrorSpecial] = useState('');
    let reg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
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
        <SafeAreaView style={styling.safeContainer}>

            <TouchableWithoutFeedback
                onPress={() => {
                    Keyboard.dismiss();
                }}  >

                <View style={styling.containerView}>
                    <View style={{ height: hp(80) }}>
                        {/* <ScrollView> */}

                        <View style={styling.nameFieldView}>

                            <Input
                                label='Name'
                                placeholder='Name'
                                value={Name}
                                onChangeText={(name) => {
                                    setName(name)

                                }}
                                errorMessage={(Name.length < 4 && Name.length != '') && 'Name must be 4 character long'}
                            />
                            <Input
                                label='Sur Name'
                                placeholder='Sur-Name'
                                value={Surname}
                                onChangeText={(Sname) => {
                                    setSurName(Sname)
                                }}
                                errorMessage={(Surname.length < 4 && Surname.length != '') && 'SurName must be 4 character long'}
                            />
                        </View>

                        <View style={styling.dropdownsView}>
                            <DropDownPicker
                                items={[
                                    { label: 'Male', value: '1' },
                                    { label: 'Female', value: '0' },]}
                                defaultValue={Gender}
                                placeholder='Select Gender'
                                labelStyle={styling.dropdownLabel}
                                style={styling.dropDown}
                                containerStyle={styling.containerStyle}
                                dropDownStyle={styling.dropdownStyle}
                                showArrow={true}
                                onChangeItem={(gender) => {
                                    setGender(gender.value)
                                }}

                            />
                        </View>
                        <View style={styling.dropdownsView}>
                            <DropDownPicker
                                items={[
                                    { label: 'Acupuncture', value: '1' },
                                    { label: 'Surgeon', value: '2' },]}
                                defaultValue={Special}
                                placeholder='Your Specialization'
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
                        <KeyboardAvoidingView
                            behavior='height'
                        >
                            <View style={styling.innerFieldView}>
                                <Input
                                    label='Address'
                                    placeholder='Address'
                                    value={Address}
                                    onChangeText={(address) => {
                                        setAddress(address)
                                    }}
                                    errorMessage={(Address.length < 4 && Address.length != '') && 'Address must be 4 character long & must be from France'}

                                />
                                <Input
                                    label='Telephone'
                                    placeholder='Telephone'
                                    keyboardType='phone-pad'
                                    value={Telephone}
                                    maxLength={10}
                                    onChangeText={(Tphone) => {
                                        setTelephone(Tphone)
                                    }}
                                    errorMessage={(Telephone.length < 10 && Telephone.length != '') && 'Phone must be 10 Digits'}

                                />
                                <Input
                                    label='Email'
                                    placeholder='Email'
                                    autoCapitalize='none'
                                    value={Email}
                                    keyboardType='email-address'
                                    onChangeText={(email) => {
                                        setEmail(email)
                                    }}
                                    errorMessage={(!reg.test(Email) && Email != '') && 'Invalid Email format'}

                                />

                                <Input
                                    label='Unique Identifier (RPPS)'
                                    placeholder='Unique Identifier (RPPS)'
                                    keyboardType='phone-pad'
                                    value={UI}
                                    maxLength={10}
                                    onChangeText={(ui) => {
                                        setUI(ui)
                                    }}
                                    errorMessage={(UI.length < 5 && UI.length != '') && 'UI must be  6 digit or greater '}

                                />


                            </View>
                        </KeyboardAvoidingView>
                        {Name != '' && Surname != '' && Email != '' && Gender != '' && Address != '' && UI != '' && Special != '' && Telephone != '' ? SaveData() : console.log('empty')}
                        {/* </ScrollView> */}

                    </View>
                </View>



            </TouchableWithoutFeedback>
        </SafeAreaView>
    )
}

export default Register;