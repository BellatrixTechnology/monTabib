import React, { useState } from 'react';
import { StyleSheet, View, TouchableOpacity, ScrollView, TextInput, StatusBar, SafeAreaView } from 'react-native';
import { Text, Input, colors } from 'react-native-elements';
import Icons from 'react-native-vector-icons/AntDesign';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { styling } from './styling'
const SignUp = (props) => {
    const [namefocus, setnamefocus] = useState(false);
    const [emailfocus, setemailfocus] = useState(false);
    const [phonefocus, setphonefocus] = useState(false);
    const [passfocus, setpassfocus] = useState(false);
    const [cpassfocus, setcpassfocus] = useState(false);

    return (
        <SafeAreaView style={styling.safeContainer}>
            <StatusBar barStyle="dark-content" hidden={false} backgroundColor="white" translucent={false} />
            <ScrollView>
                <View style={styling.headerView}>
                    <Icons name='arrowleft' size={30} color='#3f4079' />
                </View>
                <View style={styling.mainContainer}>
                    <View style={styling.labelView}>
                        <Text style={styling.welcomeText}>Sign Up</Text>
                    </View>
                    <View style={styling.innerView}>
                        <View style={namefocus ? styling.fieldfocus : styling.fieldnotfocus}>
                            <Icons name='user' size={18} style={namefocus ? { color: '#3f4079' } : { color: 'grey' }} />

                            <TextInput
                                placeholder='First Name'
                                onFocus={() => setnamefocus(true)}
                            />
                        </View>
                        <View style={namefocus ? styling.fieldfocus : styling.fieldnotfocus}>
                            <Icons name='user' size={18} style={namefocus ? { color: '#3f4079' } : { color: 'grey' }} />

                            <TextInput
                                placeholder='Last Name'
                                onFocus={() => setnamefocus(true)}
                            />
                        </View>
                        <View style={namefocus ? styling.fieldfocus : styling.fieldnotfocus}>
                            <Icon name='gender-male-female' size={18} style={namefocus ? { color: '#3f4079' } : { color: 'grey' }} />

                            <TextInput
                                placeholder='Gender'
                                onFocus={() => setnamefocus(true)}
                            />
                        </View>
                        <View style={namefocus ? styling.fieldfocus : styling.fieldnotfocus}>
                            <Icon name='calendar' size={18} style={namefocus ? { color: '#3f4079' } : { color: 'grey' }} />

                            <TextInput
                                placeholder='DOB'
                                onFocus={() => setnamefocus(true)}
                            />
                        </View>

                        <View style={phonefocus ? styling.fieldfocus : styling.fieldnotfocus}>
                            <Icon name='cellphone' size={18} style={phonefocus ? { color: '#3f4079' } : { color: 'grey' }} />

                            <TextInput
                                placeholder='Phone'
                                onFocus={() => setphonefocus(true)}
                                keyboardType='number-pad'
                            />
                        </View>

                        <View style={passfocus ? styling.fieldfocus : styling.fieldnotfocus}>
                            <Icon name='lock-outline' size={18} style={passfocus ? { color: '#3f4079' } : { color: 'grey' }} />

                            <TextInput
                                placeholder='Password'
                                onFocus={() => setpassfocus(true)}
                            />
                        </View>
                        <View style={passfocus ? styling.fieldfocus : styling.fieldnotfocus}>
                            <Icon name='lock-outline' size={18} style={passfocus ? { color: '#3f4079' } : { color: 'grey' }} />

                            <TextInput
                                placeholder='Confirm Password'
                                onFocus={() => setpassfocus(true)}
                            />
                        </View>

                    </View>
                    <View style={styling.OpacityView}>
                        <TouchableOpacity style={styling.OpacityLog}>
                            <Text style={styling.Opacitytxt}>Sign Up</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styling.Opacitycreate} onPress={() => { props.navigation.navigate('LoginIn') }}>
                            <Text style={styling.labeltag}>Already Have Account? </Text>
                            <Text style={styling.forgetlabel}>LOG IN</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )

}




export default SignUp; 