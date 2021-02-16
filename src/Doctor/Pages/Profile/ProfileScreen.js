import React from 'react';
import { StyleSheet, View, Text, SafeAreaView } from 'react-native';
import { Avatar } from 'react-native-elements';
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
                {/* <View style={styling.openView}>
                    <Text style={styling.tagTXT} >Opening Hour</Text>
                    <Text style={styling.tagTXT} >Monday:            10:00  -  21:00</Text>
                    <Text style={styling.tagTXT} >Tuesday:           10:00  -  21:00</Text>
                    <Text style={styling.tagTXT} >Wednesday:     10:00  -  21:00</Text>
                    <Text style={styling.tagTXT} >Thursday:         10:00  -  21:00</Text>
                    <Text style={styling.tagTXT} >Friday:              10:00  -  21:00</Text>
                    <Text style={styling.tagTXT} >Saturday:         10:00  -  21:00</Text>
                    <Text style={styling.tagTXT} >Sunday:           10:00  -  21:00</Text>

                </View> */}
                <View style={styling.fieldView}>
                    <View style={styling.buttonView}>
                        <Text style={styling.buttonTXT}>Opening Hour</Text>
                        <Icon.Button name="right" color='black' size={25} style={styling.arrowButton}>

                        </Icon.Button>
                    </View>
                    <View style={styling.buttonView}>
                        <Text style={styling.buttonTXT}>Curriculum</Text>
                        <Icon.Button name="right" color='black' size={25} style={styling.arrowButton}>

                        </Icon.Button>
                    </View>
                    <View style={styling.buttonView}>
                        <Text style={styling.buttonTXT}>Services</Text>
                        <Icon.Button name="right" color='black' size={25} style={styling.arrowButton}>

                        </Icon.Button>
                    </View>
                    <View style={styling.buttonView}>
                        <Text style={styling.buttonTXT}>Subscription</Text>
                        <Icon.Button name="right" color='black' size={25} style={styling.arrowButton}>

                        </Icon.Button>
                    </View>
                </View>
            </View>
        </SafeAreaView>
    )

}




export default ProfileScreen; 