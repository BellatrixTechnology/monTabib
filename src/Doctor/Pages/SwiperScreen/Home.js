import React, { useState } from 'react';
import { StatusBar, View, TouchableOpacity, Text, ToastAndroid, ScrollView, SafeAreaView } from 'react-native';
import Swiper from 'react-native-swiper';
import OpenningHour from './Openninghour';
import Register from './Register';
import Services from './Services';
import Subscription from './Subscription';
import AsyncStorage from '@react-native-async-storage/async-storage';
import firebase from '../../../db/config';

import { styling } from './styling';


const Home = (props) => {
    const [obj, setobj] = useState({});
    const [obj1, setobj1] = useState({});
    const [obj2, setobj2] = useState({});

    const [id, setid] = useState(0);
    const swipe = (a) => {
        setid(a)
    }

    const registerdata = async () => {
        try {
            let user = await AsyncStorage.getItem('user');
            let parsed1 = JSON.parse(user);
            setobj(parsed1);
        }
        catch (error) {
            console.log(error)
        }
    }
    const openning = async () => {
        try {
            let useropen = await AsyncStorage.getItem('useropenning');
            let parsed2 = JSON.parse(useropen);
            setobj1(parsed2);
        }
        catch (error) {
            console.log(error)
        }

    }
    const Service = async () => {
        try {
            let userservice = await AsyncStorage.getItem('userservice');
            let parsed3 = JSON.parse(userservice);
            setobj2(parsed3);
        }
        catch (error) {
            console.log(error)
        }
        console.log(obj1)
    }


    const upload = () => {
        console.log(obj)
        console.log(obj1)
        console.log(obj2)
        const db = firebase.firestore().collection('Doctor');
        db.add({
            Name: obj.Name,
            Email: obj.Email,
            SurName: obj.SurName,
            Gender: obj.Gender,
            Address: obj.Address,
            Telephone: obj.Telephone,
            UI: obj.UI,
            Specialist: obj.Specialist,
            Consult: obj2.Consult,
            Service: obj2.Service,
            Days: {
                Monday: {
                    Morning: {
                        Start: obj1.Monday.Morning.Start,
                        End: obj1.Monday.Morning.End
                    },
                    Afternoon: {
                        Start: obj1.Monday.Afternoon.Start,
                        End: obj1.Monday.Afternoon.End
                    }
                },
                Tuesday: {
                    Morning: {
                        Start: obj1.Tuesday.Morning.Start,
                        End: obj1.Tuesday.Morning.End
                    },
                    Afternoon: {
                        Start: obj1.Tuesday.Afternoon.Start,
                        End: obj1.Tuesday.Afternoon.End
                    }
                },
                Wednesday: {
                    Morning: {
                        Start: obj1.Wednesday.Morning.Start,
                        End: obj1.Wednesday.Morning.End
                    },
                    Afternoon: {
                        Start: obj1.Wednesday.Afternoon.Start,
                        End: obj1.Wednesday.Afternoon.End
                    }
                },
                Thursday: {
                    Morning: {
                        Start: obj1.Thursday.Morning.Start,
                        End: obj1.Thursday.Morning.End
                    },
                    Afternoon: {
                        Start: obj1.Thursday.Afternoon.Start,
                        End: obj1.Thursday.Afternoon.End
                    }
                },
                Friday: {
                    Morning: {
                        Start: obj1.Friday.Morning.Start,
                        End: obj1.Friday.Morning.End
                    },
                    Afternoon: {
                        Start: obj1.Friday.Afternoon.Start,
                        End: obj1.Friday.Afternoon.End
                    }
                },
                Saturday: {
                    Morning: {
                        Start: obj1.Saturday.Morning.Start,
                        End: obj1.Saturday.Morning.End
                    },
                    Afternoon: {
                        Start: obj1.Saturday.Afternoon.Start,
                        End: obj1.Saturday.Afternoon.End
                    }
                },
                Sunday: {
                    Morning: {
                        Start: obj1.Sunday.Morning.Start,
                        End: obj1.Sunday.Morning.End
                    },
                    Afternoon: {
                        Start: obj1.Sunday.Afternoon.Start,
                        End: obj1.Sunday.Afternoon.End
                    }
                },
            },
        })
        ToastAndroid.show("Registered Successfully!", ToastAndroid.SHORT);

    }

    return (
        <SafeAreaView style={styling.safeContainer}>
            <StatusBar barStyle="dark-content" hidden={false} backgroundColor="white" translucent={false} />

            <ScrollView>
                <View style={styling.mainContainer}>
                    <Swiper showsButtons={false} showsPagination={false} loop={false} index={id}>

                        <View style={styling.slide1}>
                            <Register />
                            <View style={styling.nextButtonView}>
                                <TouchableOpacity style={styling.nextButton}
                                    onPress={() => {
                                        swipe(1)
                                        registerdata()
                                    }}
                                >
                                    <Text style={styling.nextbuttonText}>Next</Text>
                                </TouchableOpacity >
                            </View>
                        </View>

                        <View style={styling.slide1}>
                            <OpenningHour />

                            <View style={styling.nextButtonView}>
                                <TouchableOpacity style={styling.nextButton}
                                    onPress={() => {
                                        swipe(2)
                                        openning()
                                    }}
                                >
                                    <Text style={styling.nextbuttonText}>Next</Text>
                                </TouchableOpacity >
                            </View>
                        </View>
                        <View style={styling.slide1}>
                            <Services />
                            <View style={styling.nextButtonView}>
                                <TouchableOpacity style={styling.nextButton}
                                    onPress={() => {
                                        swipe(3)
                                        Service()
                                    }}
                                >
                                    <Text style={styling.nextbuttonText}>Next</Text>
                                </TouchableOpacity >
                            </View>
                        </View>
                        <View style={styling.slide1}>
                            <Subscription />
                            <View style={styling.nextButtonView}>
                                <TouchableOpacity style={styling.nextButton} onPress={() => {
                                    upload()
                                    props.navigation.navigate('Tab')

                                }} >
                                    <Text style={styling.nextbuttonText}>Done</Text>
                                </TouchableOpacity >
                            </View>


                        </View>
                    </Swiper>


                </View >
            </ScrollView>
        </SafeAreaView>
    )
}

export default Home;