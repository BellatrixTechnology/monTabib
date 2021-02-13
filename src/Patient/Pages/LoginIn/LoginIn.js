import React, { useState } from 'react';
import { StyleSheet, View, TouchableOpacity, ScrollView, TextInput, StatusBar, SafeAreaView } from 'react-native';
import { Text, Input, colors } from 'react-native-elements';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Icons from 'react-native-vector-icons/FontAwesome';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { styling } from './styling';
const LoginIn = (props) => {
    const [focuspass, setpassfocus] = useState(false);
    const [emailfocus, setemailfocus] = useState(false);

    return (
        <SafeAreaView style={styling.safeContainer}>
            <View style={styling.mainContainer}>
                <StatusBar barStyle="dark-content" hidden={false} backgroundColor="white" translucent={false} />

                <View style={styling.profileView}>
                    {/* <Icons name='user-circle-o' size={100} color='#f0f0f0' /> */}
                    <View style={styling.headerView}>
                        <Text style={styling.welcomeText}>Welcome</Text>
                        <Text style={styling.signText}>Sign in to Continue</Text>
                    </View>
                </View>
                <View style={styling.innerView}>
                    <View style={emailfocus ? styling.fieldfocus : styling.fieldnotfocus}>
                        <Icon name='email-outline' size={18} style={emailfocus ? { color: '#3f4079' } : { color: 'grey' }} />

                        <TextInput
                            placeholder='Email'
                            onFocus={() => setemailfocus(true)}
                        />
                    </View>
                    <View style={focuspass ? styling.fieldfocus : styling.fieldnotfocus}>
                        <Icon name='lock-outline' size={18} style={emailfocus ? { color: '#3f4079' } : { color: 'grey' }} />

                        <TextInput
                            placeholder='Password'
                            onFocus={() => setpassfocus(true)}
                        />
                    </View>
                </View>
                <View style={styling.forgetView}>
                    <Text style={styling.forgetlabel}>Foregt Password?</Text>
                </View>
                <View style={styling.OpacityView}>
                    <TouchableOpacity style={styling.OpacityLog} onPress={() => { props.navigation.navigate('PTabs') }}>
                        <Text style={styling.Opacitytxt}>LOGIN</Text>
                    </TouchableOpacity>
                    <View style={styling.createv}>
                        <Text style={styling.labeltag}>Don't have account? </Text>
                        <TouchableOpacity style={styling.Opacitycreate} onPress={() => { props.navigation.navigate('Signup') }}>

                            <Text style={styling.forgetlabel}>Sign Up</Text>
                        </TouchableOpacity>

                    </View>
                </View>
            </View>
        </SafeAreaView>
    )

}




export default LoginIn; 