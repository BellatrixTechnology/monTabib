import React, { Component } from 'react';
import { Text, Input, colors } from 'react-native-elements';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Icons from 'react-native-vector-icons/FontAwesome5';
import Profile from './Profile/Profile';
import ListConsultation from './ListConsultation/ListConsultation';

const Tab = createBottomTabNavigator();


const PTabs = (props) => {

    const Home = () => {
        return <ListConsultation />
    }
    const Pro = () => {
        return <Profile props={props} />
    }

    return (
        <NavigationContainer independent={true}>
            <Tab.Navigator
                initialRouteName='Home'
                backBehavior='none'
                tabBarOptions={{
                    activeTintColor: '#ff7e00',
                    inactiveTintColor: 'gray',
                }}
            >
                < Tab.Screen name="Home" component={Home}
                    options={{
                        // tabBarColor: '#6bfaf3',
                        tabBarIcon: () => (
                            <Icon name="view-agenda-outline" color="black" size={22} />
                        ),
                    }}
                />
                <Tab.Screen name="Profile" component={Pro}
                    options={{
                        // tabBarColor: '#6bfaf3',
                        tabBarIcon: () => (
                            <Icons name="user-alt" color="black" size={22} />
                        ),
                    }}
                />


            </Tab.Navigator>
        </NavigationContainer>
    );
}

export default PTabs;
