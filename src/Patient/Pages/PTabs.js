import React, { Component } from 'react';
import { Text, Input, colors } from 'react-native-elements';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Icons from 'react-native-vector-icons/FontAwesome5';
import Profile from './Profile/Profile';
import ListConsultation from './ListConsultation/ListConsultation';
import { createStackNavigator } from '@react-navigation/stack';
import ListDoctor from './ListDoctor.js/ListDoctor';
import EditProfile from './EditProfile/EditProfile';

const Stack = createStackNavigator();
import HomeScreen from './HomeScreen/HomeScreen';
import SwiperTime from './ListDoctor.js/SwiperTime';

const Tab = createBottomTabNavigator();


const HomeScrn = () => {
    return (
        <Tab.Navigator
            initialRouteName='HomeScreen'
            backBehavior='none'
            tabBarOptions={{
                activeTintColor: '#45347a',
                inactiveTintColor: 'gray',
            }}
        >
            < Tab.Screen name="HomeScreen" component={HomeScreen}
                options={{
                    tabBarIcon: ({ color }) => (
                        <Icons name="search" color={color} size={22} />
                    ),
                }}
            />
            < Tab.Screen name="Consultation" component={ListConsultation}
                options={{
                    tabBarIcon: ({ color }) => (
                        <Icon name="view-agenda-outline" color={color} size={22} />
                    ),
                }}
            />
            <Tab.Screen name="Profile" component={Profile}
                options={{
                    tabBarIcon: ({ color }) => (
                        <Icons name="user-alt" color={color} size={22} />
                    ),
                }}
            />
        </Tab.Navigator>
    );
}




export default function PTabs() {
    return (
        <NavigationContainer independent={true}>
            <Stack.Navigator headerMode={null} initialRouteName='HomeScrn'>
                <Stack.Screen name="Home" component={HomeScrn} />
                <Stack.Screen name='EProfile' component={EditProfile} />
                <Stack.Screen name='ListDoctor' component={ListDoctor} />
                <Stack.Screen name='SwiperTime' component={SwiperTime} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}
