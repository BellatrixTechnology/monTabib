import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Avatar } from 'react-native-elements';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

import Icon from 'react-native-vector-icons/AntDesign';

const ProfileScreen = (props) => {
    // const myIcon = (<Icon name="rocket" size={30} color="#900" />)

    return (
        <View style={styles.container}>
            <View style={styles.innerView}>
                <Icon.Button name="left" style={styles.IconButton} color='black' size={30}>

                </Icon.Button>

                <Text style={styles.label}> My Profile</Text>
                <Icon.Button name="edit" style={styles.IconButton} color='black' size={30} onPress={() => {
                    props.navigation.navigate('Edit')
                }}>

                </Icon.Button>
            </View>
            <View style={styles.avatarView}>
                <Avatar
                    size="large"
                    source={{
                        uri:
                            'https://www.tm-town.com/assets/default_male600x600-79218392a28f78af249216e097aaf683.png',
                    }}
                    activeOpacity={0.7}
                    rounded
                    containerStyle={styles.avatarStyles}
                    titleStyle={{ color: 'black' }}
                />
                <View style={styles.labelView}>
                    <Text>Name</Text>
                    <Text>Email</Text>
                </View>

            </View>
            <View style={styles.openView}>
                <Text style={styles.label} >Opening Hour</Text>
                <Text>Monday:            10:00  -  21:00</Text>
                <Text>Tuesday:           10:00  -  21:00</Text>
                <Text>Wednesday:     10:00  -  21:00</Text>
                <Text>Thursday:         10:00  -  21:00</Text>
                <Text>Friday:              10:00  -  21:00</Text>
                <Text>Saturday:         10:00  -  21:00</Text>
                <Text>Sunday:           10:00  -  21:00</Text>

            </View>
            <View style={styles.fieldView}>
                <View style={styles.buttonView}>
                    <Text>Services</Text>
                    <Icon.Button name="right" color='black' size={25} style={styles.arrowButton}>

                    </Icon.Button>
                </View>
                <View style={styles.buttonView}>
                    <Text>Courses</Text>
                    <Icon.Button name="right" color='black' size={25} style={styles.arrowButton}>

                    </Icon.Button>
                </View>
            </View>
        </View>
    )

}



const styles = StyleSheet.create({
    container: {
        width: wp('100%'),
        height: hp('100%'),
        // backgroundColor: 'red',
        alignItems: 'center',

    },
    innerView: {
        padding: 10,
        height: hp('10%'),
        width: wp('100%'),
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        elevation: 2,
        backgroundColor: 'white',
        borderBottomEndRadius: 10,
        borderBottomStartRadius: 10,
    },
    IconButton: {
        backgroundColor: 'white',
        color: 'black'
    },
    label: {
        fontSize: 26
    },
    avatarView: {
        height: hp('25%'),
        width: wp('90%'),
        padding: 20,
        flexDirection: 'row',
    },
    openView: {
        height: hp('25%'),
        width: wp('90%'),
        padding: 20,

    },
    buttonView: {
        backgroundColor: 'white',
        height: 50,
        borderRadius: 15,
        width: wp('80%'),
        padding: 10,
        flexDirection: 'row',
        alignContent: 'center',
        alignItems: 'center',
        justifyContent: 'space-between',
        elevation: 10,
        marginTop: 20
    },
    fieldView: {
        height: hp('25%'),
        width: wp('90%'),
        padding: 20,

    },
    avatarStyles: {
        backgroundColor: 'grey',
        height: 150,
        width: 150,
        borderRadius: 500
    },
    arrowButton: {
        backgroundColor: 'white'
    },
    labelView: {
        height: 150,
        width: 200,
        margin: 10,
        justifyContent: 'center',
        padding: 10
    }
})
export default ProfileScreen; 