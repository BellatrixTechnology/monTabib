import React, { useState, useEffect } from 'react';
import { View, TouchableWithoutFeedback, TouchableOpacity, ScrollView, Keyboard, SafeAreaView, TextInput, ToastAndroid } from 'react-native';
import { Text } from 'react-native-elements';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { styling } from './styling';
import Icon from 'react-native-vector-icons/AntDesign';
import { hp, wp } from '../../../Global/Styles/Scalling';
import AlertModal from '../../Components/AlertModal/index';

const Experience = (props) => {
    const [isVisible, setIsVisble] = useState(false)
    const [Train, setsetTrain] = useState([{ Train: "", year: "" }]);
    const [experience, seteExperience] = useState([{ experience: "", year: "", end: "" }]);
    const [Training, setTraining] = useState([])
    const [experienceData, setexperinceData] = useState([])
    const [Tyear, setTyear] = useState('')
    const [TEyear, setTEyear] = useState('')
    const [Eyear, setEyear] = useState('')
    const [EEyear, setTEEyear] = useState('')
    const [Traintemp, setTraintemp] = useState('')
    const [Experincetemp, setExperincetemp] = useState('')
    const [userData, setUserData] = useState('')

    useEffect(() => {
        getUser()
    }, [])
    async function getUser() {
        try {
            let user = await AsyncStorage.getItem('UserData');
            let parsed1 = JSON.parse(user);
            setUserData(parsed1);
        }
        catch (error) {
            console.log(error)
        }
    }
    const training = () => {
        setTraining([...Training, { Train: Traintemp, year: Tyear }])
        setTraintemp('')
        setTyear('')
        setTEyear('')
        console.log(Training)
    }
    const ExperienceData = () => {
        setexperinceData([...experienceData, { experience: Experincetemp, year: Eyear, end: EEyear }])
        setExperincetemp('')
        setEyear('')
        setTEEyear('')
        console.log(experienceData)
    }
    const addInputConst = () => {
        setsetTrain([...Train, { Train: "", year: "" }]);

    }
    const removeInputConst = (i) => {
        const list = [...Train];
        list.splice(i, 1);
        setsetTrain(list);
    }
    const addInputSer = () => {
        seteExperience([...experience, { experience: "", year: "", end: "" }]);

    }
    const removeInputSer = (i) => {
        const list = [...experience];
        list.splice(i, 1);
        seteExperience(list);
    }
    function StoreData() {
        fetch('https://www.montabib.com/loginApp', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                "username": userData.username,
                "password": userData.password
            })
        }).then((response) => response.json())
            .then((responseJson) => {
                console.log(responseJson, 'res JSON');
                if (responseJson.error == 'Invalid credentials.') {
                    ToastAndroid.show('check', ToastAndroid.SHORT);
                }
                else {
                    {
                        experienceData.forEach(element => {
                            console.log(element.experience)
                            let years = Number(element.year)
                            let end = Number(element.end)
                            fetch('https://montabib.com/api/experiences', {
                                method: 'POST',
                                headers: {
                                    'Accept': 'application/json',
                                    'Content-Type': 'application/json',
                                },
                                body: JSON.stringify({
                                    "libelle": element.experience,
                                    "anneeDebut": years,
                                    "anneeFin": end
                                })
                            }).then((response) => {
                                if (response.ok == true) {
                                    console.log(response)
                                    response.json().then((data) => { console.log(data) }).catch((error) => { console.log(error) })
                                } else {
                                }
                            })
                                .catch((error) => {
                                    console.log(error)
                                });
                        })
                    }

                    {
                        Training.forEach(element => {
                            console.log(element.Train)
                            let years = Number(element.year)
                            fetch('https://montabib.com/api/formations', {
                                method: 'POST',
                                headers: {
                                    'Accept': 'application/json',
                                    'Content-Type': 'application/json',
                                },
                                body: JSON.stringify({
                                    "libelle": element.Train,
                                    "annee": years
                                })
                            }).then((response) => {
                                if (response.ok == true) {
                                    console.log(response)
                                    response.json().then((data) => {
                                        setIsVisble(false)
                                        console.log(data)
                                        ToastAndroid.show('Uploaded', ToastAndroid.SHORT);

                                    }).catch((error) => { console.log(error) })
                                } else {
                                }
                            })
                                .catch((error) => {
                                    console.log(error)
                                });
                        })
                    }

                }
            })
            .catch((error) => {
                console.error('asdasd', error);
            });
    }
    return (
        <SafeAreaView style={styling.safeContainer}>

            <TouchableWithoutFeedback
                onPress={() => {
                    Keyboard.dismiss();
                }}  >
                <ScrollView
                >

                    <View style={styling.containerView}>

                        <View style={styling.headerView}>
                            <TouchableOpacity onPress={() => props.navigation.goBack()}>
                                <Icon name='left' size={30} />
                            </TouchableOpacity>
                            <Text style={styling.headerText}>My Journey</Text>
                            <View style={{ width: wp(12) }} />
                        </View>

                        <View style={styling.innerContainerView}>
                            <Text style={styling.serviceText}>Academic background</Text>


                            {Train.map((x, i) => {
                                return (
                                    <View>
                                        <View style={styling.txtInputView}>
                                            <TextInput
                                                multiline={true}
                                                placeholder=' Background'
                                                value={Training}
                                                onChangeText={(text) => { setTraintemp(text) }}
                                                style={styling.servicetextinput}
                                            />
                                            <TextInput
                                                multiline={true}
                                                // numberOfLines={10}
                                                placeholder='Year'
                                                value={Training}
                                                onChangeText={(text) => { setTyear(text) }}
                                                style={styling.servicePriceinput}
                                            />

                                        </View>
                                        {Train.length - 1 == i ?
                                            <View style={styling.addButton}>
                                                <TouchableOpacity><Text style={{ color: 'blue' }} onPress={() => training()}>Add Record</Text></TouchableOpacity>
                                                <TouchableOpacity style={{ height: hp('4'), alignItems: 'center' }} onPress={() => { removeInputConst(i) }}><Icon name='delete' size={20} color='red' /></TouchableOpacity>
                                                <TouchableOpacity onPress={() => { addInputConst() }}><Icon name='plus' size={20} color='red' /></TouchableOpacity>
                                            </View> : console.log('da')}
                                    </View>
                                )

                            })}

                            <Text style={styling.serviceText}>Experiences</Text>
                            {experience.map((x, i) => {
                                return (
                                    <View>
                                        <View style={styling.txtInputView}>

                                            <TextInput
                                                multiline={true}
                                                // numberOfLines={10}
                                                placeholder='Experiences'
                                                value={experience}
                                                onChangeText={(text) => { setExperincetemp(text) }}
                                                style={styling.servicetextinput}
                                            />
                                            <TextInput
                                                multiline={true}
                                                // numberOfLines={10}
                                                placeholder='Years'
                                                value={experience}
                                                onChangeText={(text) => { setEyear(text) }}
                                                style={styling.servicePriceinput}
                                            />
                                            <TextInput
                                                multiline={true}
                                                // numberOfLines={10}
                                                placeholder='End'
                                                value={Training}
                                                onChangeText={(text) => { setTEEyear(text) }}
                                                style={styling.servicePriceinput}
                                            />
                                        </View>
                                        {experience.length - 1 == i ?
                                            <View style={styling.addButton}>
                                                <TouchableOpacity><Text style={{ color: 'blue' }} onPress={() => ExperienceData()}>Add Experience</Text></TouchableOpacity>
                                                <TouchableOpacity style={{ height: hp('4'), alignItems: 'center' }} onPress={() => { removeInputSer(i) }}><Icon name='delete' size={20} color='red' /></TouchableOpacity>
                                                <TouchableOpacity onPress={() => { addInputSer() }}><Icon name='plus' size={20} color='red' /></TouchableOpacity>
                                            </View> : console.log('wait')}
                                    </View>
                                )

                            })}
                            <View style={styling.opacityView}>
                                <TouchableOpacity style={styling.OpacityLog}
                                    onPress={() => {
                                        StoreData()
                                        setIsVisble(true)
                                    }}
                                >
                                    <Text style={styling.Opacitytxt}>Save</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                        <AlertModal
                            isVisible={isVisible}
                        />

                    </View>

                </ScrollView>

            </TouchableWithoutFeedback>
        </SafeAreaView>
    )
}
export default Experience;