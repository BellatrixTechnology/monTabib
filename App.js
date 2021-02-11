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
import Consultation from './src/Doctor/Pages/Consultation/Consultation';
import Prescribe from './src/Doctor/Pages/Consultation/Prescribe';
import Agenda from './src/Doctor/Pages/Agenda/Agenda';
import Absences from './src/Doctor/Pages/Absences/Absences';
import Profile from './src/Patient/Pages/Profile/Profile';
import EProfile from './src/Patient/EditProfile/EditProfile';
import SignUp from './src/Patient/Pages/Signup/Signup';
import ListConsultation from './src/Patient/ListConsultation/ListConsultation';
import LoginIn from './src/Patient/Pages/LoginIn/LoginIn';


const { Navigator, Screen } = createStackNavigator();

const AuthStack = () => (
  <Navigator headerMode='none'>
    <Screen name='Profile' component={Profile} />

    <Screen name='LoginIn' component={LoginIn} />

    <Screen name='Signup' component={SignUp} />

    <Screen name='ListConsultation' component={ListConsultation} />
    <Screen name='EProfile' component={EProfile} />


    <Screen name="ProfileScreen" component={ProfileScreen} />

    <Screen name="Prescribe" component={Prescribe} />

    <Screen name='Agenda' component={Agenda} />

    <Screen name="Consultation" component={Consultation} />

    <Screen name='Absences' component={Absences} />

    <Screen name="Home" component={Home} />

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