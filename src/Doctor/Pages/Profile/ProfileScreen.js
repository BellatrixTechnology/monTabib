import React from 'react';
import { StyleSheet, View, Text, SafeAreaView } from 'react-native';
import { Avatar } from 'react-native-elements';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/AntDesign';
import { styling } from './styling';

const ProfileScreen = ({ props }) => {

    return (
        <SafeAreaView style={styling.safeContainer}>
            <View style={styling.innerView}>
                <Icon.Button name="left" style={styling.IconButton} color='black' size={30}>

                </Icon.Button>

                <Text style={styling.label}> My Profile</Text>
                <Icon.Button name="edit" style={styling.IconButton} color='black' size={30} onPress={() => {
                    props.navigation.navigate('Edit')
                }}>

                </Icon.Button>
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
                    />


                </View>

                <View style={styling.fieldView}>
                    <TouchableOpacity style={styling.buttonView} >
                        <Text style={styling.buttonTXT}>Opening Hour</Text>
                        <Icon.Button name="right" color='black' size={25} style={styling.arrowButton} activeOpacity={1}>

                        </Icon.Button>
                    </TouchableOpacity>
                    <TouchableOpacity style={styling.buttonView} onPress={() => props.navigation.navigate('Experience')}>
                        <Text style={styling.buttonTXT}>Curriculum</Text>
                        <Icon.Button name="right" color='black' size={25} style={styling.arrowButton}>

                        </Icon.Button>
                    </TouchableOpacity>
                    <TouchableOpacity style={styling.buttonView} onPress={() => props.navigation.navigate('Services')}>
                        <Text style={styling.buttonTXT}>Services</Text>
                        <Icon.Button name="right" color='black' size={25} style={styling.arrowButton} activeOpacity={1}>

                        </Icon.Button>
                    </TouchableOpacity>
                    <View style={styling.buttonView}>
                        <Text style={styling.buttonTXT}>Subscription</Text>
                        <Icon.Button name="right" color='black' size={25} style={styling.arrowButton}>

                        </Icon.Button>
                    </View>
                </View>
            </View>
        </SafeAreaView >
    )

}




export default ProfileScreen; 