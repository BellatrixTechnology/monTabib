import React, { useState } from 'react';
import { StyleSheet, View, TouchableOpacity, SafeAreaView, ScrollView, Image } from 'react-native';
import { Text, Input } from 'react-native-elements';
import { Avatar } from 'react-native-elements';
import Icon from 'react-native-vector-icons/AntDesign';
import { styling } from './styling';

const EditProfile = (props) => {
    // const myIcon = (<Icon name="rocket" size={30} color="#900" />)

    return (
        <SafeAreaView style={styling.safeContainer}>
            <View style={styling.innerView}>
                <Icon.Button name="left" style={styling.IconButton} color='black' size={30}
                    onPress={() => {
                        props.navigation.push('ProfileScreen')
                    }}
                >

                </Icon.Button>

                <Text style={styling.label}> Edit Profile</Text>

            </View>
            <View style={styling.mainContainer}>

                <View style={styling.avatarView}>
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
                <View style={styling.dataView}>
                    <Input
                        placeholder='Name'
                    />
                    <Input
                        placeholder='Email'
                    />
                </View>

                <TouchableOpacity style={styling.buttonView}>
                    <Text style={styling.buttonTXT}>Update</Text>
                </TouchableOpacity>

            </View>
        </SafeAreaView>
    )

}




export default EditProfile; 