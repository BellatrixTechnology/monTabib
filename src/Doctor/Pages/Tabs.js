import React, { Component } from 'react';
import { View } from 'react-native';
import { Text } from 'react-native-elements';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import ProfileScreen from './Profile/ProfileScreen';

const Tab = createBottomTabNavigator();

const Home = () => {
    return <Text>world</Text>
}
const Agenda = () => {
    return <Text> jhjh</Text>
}

const MyProfile = () => {
    return <ProfileScreen />
}

const Tabs = () => {
    return (
        <NavigationContainer independent={true}>
            <Tab.Navigator
                tabBarOptions={{

                    activeTintColor: '#ff7e00',
                    inactiveTintColor: 'gray',
                }}
            >
                <Tab.Screen name="Home" component={Home}



                />
                < Tab.Screen name="Agenda" component={Agenda}

                />
                <Tab.Screen name="My Profile" component={MyProfile}

                />

            </Tab.Navigator>
        </NavigationContainer>
    );
}

export default Tabs;
