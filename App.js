import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'
import Home from './src/Doctor/Pages/SwiperScreen/Home';
import Tabs from './src/Doctor/Pages/Tabs'
import ProfileScreen from './src/Doctor/Pages/Profile/ProfileScreen';
import EditProfile from './src/Doctor/Pages/EditProfile/EditProfile';
import SubscribeScreen from './src/Doctor/Pages/Subscribe/SubscribeScreen';
import Prescription from './src/Doctor/Pages/Precription/Prescription';
import PatientFile from './src/Doctor/Pages/Patientfile/PatientFile';
import Practice from './src/Doctor/Pages/Practice/Practice';
import Consultation from './src/Doctor/Pages/Consultation/Consultation';
import Prescribe from './src/Doctor/Pages/Consultation/Prescribe';
import Agenda from './src/Doctor/Pages/Agenda/Agenda';
import Absences from './src/Doctor/Pages/Absences/Absences';
import Profile from './src/Patient/Pages/Profile/Profile';
import EProfile from './src/Patient/Pages/EditProfile/EditProfile';
import SignUp from './src/Patient/Pages/Signup/Signup';
import ListConsultation from './src/Patient/Pages/ListConsultation/ListConsultation';
import LoginIn from './src/Patient/Pages/LoginIn/LoginIn';
import Main from './src/MainScreen/Main';
import PTabs from './src/Patient/Pages/PTabs';
import LoginScreen from './src/Doctor/Pages/LoginScreen/LoginScreen';
import addPatient from './src/Doctor/Pages/Consultation/addPatient';
import HomeScreen from './src/Patient/Pages/HomeScreen/HomeScreen';
import ListDoctor from './src/Patient/Pages/ListDoctor.js/ListDoctor';
import Services from './src/Doctor/Pages/Services/Services';
import Experience from './src/Doctor/Pages/Experience/Experience';
import Opennings from './src/Doctor/Pages/Opennings/Opennings';
import DoctorSwiperTime from './src/Doctor/Pages/Consultation/DoctorSwiperTime';

console.disableYellowBox = true;

const { Navigator, Screen } = createStackNavigator();

const AuthStack = () => (

  <Navigator headerMode='none'>
    <Screen name='Main' component={Main} />
    <Screen name="Tab" component={Tabs} />
    <Screen name="Consultation" component={Consultation} />
    <Screen name='LoginScreen' component={LoginScreen} />
    <Screen name="Home" component={Home} />

    <Screen name='PTabs' component={PTabs} />

    <Screen name='Signup' component={SignUp} />

    <Screen name='LoginIn' component={LoginIn} />

    <Screen name='ListConsultation' component={ListConsultation} />
    <Screen name='Profile' component={Profile} />
    <Screen name='addPatient' component={addPatient} />

    <Screen name='Agenda' component={Agenda} />

    <Screen name="Prescribe" component={Prescribe} />

    <Screen name='Absences' component={Absences} />

    <Screen name='PatientFile' component={PatientFile} />

    <Screen name="Prescription" component={Prescription} />

    <Screen name="Subscribe" component={SubscribeScreen} />

    <Screen name='Practice' component={Practice} />

    <Screen name="Edit" component={EditProfile} />

    <Screen name="ProfileScreen" component={ProfileScreen} />
    {/* <Screen name='EProfile' component={EProfile} /> */}

    <Screen name='Services' component={Services} />
    <Screen name='Experience' component={Experience} />
    <Screen name='Opennings' component={Opennings} />
    <Screen name='DoctorSwiperTime' component={DoctorSwiperTime} />
  </Navigator>
);

const App = () => (
  <NavigationContainer>
    <AuthStack />
  </NavigationContainer>
);

export default App;