import React from 'react';
import { StyleSheet, View, Text, SafeAreaView, TouchableOpacity } from 'react-native';
import { Avatar } from 'react-native-elements';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { styling } from './styling';

import Icon from 'react-native-vector-icons/AntDesign';

const Profile = (props) => {

    return (
        <SafeAreaView style={styling.safeContainer}>
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
                    />

                    <TouchableOpacity style={styling.editOpacity}>
                        <Text style={styling.editTXT}>Edit profile</Text>
                    </TouchableOpacity>

                </View>


                <View style={styling.nameView}>

                    <Text style={styling.nameTXT}>Daniyal Rauf</Text>

                </View>
                <View style={styling.innerView}>
                    <View style={styling.emailView}>
                        <Text style={styling.headTXT}>Email</Text>
                        <Text style={styling.labelTXT}>daniyalrathore14@gmail.com</Text>
                    </View>
                    <View style={styling.emailView}>
                        <Text style={styling.headTXT}>Number</Text>
                        <Text style={styling.labelTXT}>0344-6021955</Text>
                    </View>

                </View>


            </View>

        </SafeAreaView>
    )
}
export default Profile; 