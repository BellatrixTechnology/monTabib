import React, { Component } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import ProfileScreen from './Profile/ProfileScreen';
import Consultation from './Consultation/Consultation';
import Agenda from './Agenda/Agenda';
import Absences from './Absences/Absences';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Icons from 'react-native-vector-icons/FontAwesome5'

const Tab = createBottomTabNavigator();


const Tabs = (props) => {

    const Consult = () => {
        return <Consultation props={props} />
    }
    const Home = () => {
        return <Agenda />
    }
    const Absence = () => {
        return <Absences props={props} />
    }
    const MyProfile = () => {
        return <ProfileScreen props={props} />
    }
    return (
        <NavigationContainer independent={true}>
            <Tab.Navigator
                initialRouteName='Home'
                backBehavior='none'
                tabBarOptions={{
                    activeTintColor: '#45347a',
                    inactiveTintColor: 'gray',
                }}
            >
                < Tab.Screen name="Agenda" component={Home}
                    options={{
                        // tabBarColor: '#6bfaf3',
                        tabBarIcon: ({ color }) => (
                            <Icon name="view-agenda-outline" color={color} size={22} />
                        ),
                    }}
                />
                <Tab.Screen name="Consultation" component={Consult}
                    options={{
                        // tabBarColor: '#6bfaf3',
                        tabBarIcon: ({ color }) => (
                            <Icon name="calendar-multiple-check" color={color} size={22} />
                        ),
                    }}
                />
                <Tab.Screen name="Absence" component={Absence}
                    options={{
                        // tabBarColor: '#6bfaf3',
                        tabBarIcon: ({ color }) => (
                            <Icon name="application" color={color} size={22} />

                        ),
                    }}
                />
                <Tab.Screen name="My Profile" component={MyProfile}
                    options={{
                        // tabBarColor: '#6bfaf3',
                        tabBarIcon: ({ color }) => (
                            <Icons name="user-alt" color={color} size={22} />

                        ),
                    }}
                />

            </Tab.Navigator>
        </NavigationContainer>
    );
}

export default Tabs;
