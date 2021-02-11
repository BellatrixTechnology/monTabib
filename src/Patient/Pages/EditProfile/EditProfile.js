import React from 'react';
import { StyleSheet, View, Text, SafeAreaView, TouchableOpacity } from 'react-native';
import { Avatar, Input } from 'react-native-elements';
import { styling } from './styling';

import Icon from 'react-native-vector-icons/AntDesign';

const EditProfile = (props) => {

    return (
        <SafeAreaView style={styling.safeContainer}>
            <View style={styling.heading}>
                <Icon name='left' size={28} />
                <View style={styling.headingTXTView}>
                    <Text style={styling.headingTXT}>Edit Profile</Text>
                </View>
            </View>

            <View style={styling.mainContainer}>
                <View style={styling.headView}>

                    <Avatar
                        size="large"
                        source={{
                            uri:
                                'https://www.tm-town.com/assets/default_male600x600-79218392a28f78af249216e097aaf683.png',
                        }}
                        activeOpacity={0.7}
                        rounded
                        containerStyle={styling.avatarStyles}
                        titleStyle={{ color: 'black' }}

                    >
                        <Avatar.Accessory size={40} />
                    </Avatar>


                </View>
                <View style={styling.innerView}>
                    {/* <View style={styling.emailView}> */}
                    <Input
                        label='Name'
                        placeholder='Name'
                        value='Daniyal'
                    />
                    <Input
                        label='Email'
                        placeholder='Email'
                        value='daniyalrathore14@gmail.com'
                    />
                    <Input
                        label='Mobile'
                        placeholder='Mobile Number'
                        value='03446021955'
                    />


                </View>

                <View style={styling.signupView}>
                    <TouchableOpacity style={styling.signupOpacity}>
                        <Text style={styling.signupText}>Update</Text>
                    </TouchableOpacity>
                </View>


            </View>

        </SafeAreaView >
    )
}
export default EditProfile; 