import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'
import Home from './src/Doctor/Pages/Home';
import Tabs from './src/Doctor/Pages/Tabs'
import ProfileScreen from './src/Doctor/Components/ProfileScreen';
import EditProfile from './src/Doctor/Components/EditProfile';
import SubscribeScreen from './src/Doctor/Pages/SubscribeScreen';
import Prescription from './src/Doctor/Pages/Prescription';
import PatientFile from './src/Doctor/Pages/PatientFile';
import Practice from './src/Doctor/Pages/Practice';
const { Navigator, Screen } = createStackNavigator();

const AuthStack = () => (
  <Navigator headerMode='none'>

    <Screen name="Home" component={Home} />
    <Screen name="Profile" component={ProfileScreen} />

    <Screen name="Prescription" component={Prescription} />
    <Screen name='Practice' component={Practice} />
    <Screen name='PatientFile' component={PatientFile} />
    <Screen name="Subscribe" component={SubscribeScreen} />
    <Screen name="Tab" component={Tabs} />
    <Screen name="Edit" component={EditProfile} />


  </Navigator>
);

const App = () => (
  <NavigationContainer>
    <AuthStack />
  </NavigationContainer>
);

export default App;