import React, { useState } from 'react';
import { StyleSheet, View, TouchableOpacity, Text, ToastAndroid, ScrollView } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Swiper from 'react-native-swiper';
import OpenningHour from '../Components/Openninghour';
import Register from '../Components/Register';
import Services from '../Components/Services';
import Subscription from '../Components/Subscription';
import AsyncStorage from '@react-native-async-storage/async-storage';
import firebase from '../../db/config';
import { GlobalStyle } from '../StyleSheet/GlobalStyle';



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
        <View style={GlobalStyle.backgroudView}>
            <Swiper showsButtons={false} showsPagination={false} loop={false} index={id}>
                <ScrollView style={{ height: 10 }}>
                    <View style={GlobalStyle.slide1}>
                        <Register />
                        <View style={GlobalStyle.nextButtonView}>
                            <TouchableOpacity style={GlobalStyle.nextButton}
                                onPress={() => {
                                    swipe(1)
                                    registerdata()
                                }}
                            >
                                <Text style={GlobalStyle.nextbuttonText}>Next</Text>
                            </TouchableOpacity >
                        </View>
                    </View>
                </ScrollView>
                <View style={GlobalStyle.slide1}>
                    <OpenningHour />

                    <View style={GlobalStyle.nextButtonView}>
                        <TouchableOpacity style={GlobalStyle.nextButton}
                            onPress={() => {
                                swipe(2)
                                openning()
                            }}
                        >
                            <Text style={GlobalStyle.nextbuttonText}>Next</Text>
                        </TouchableOpacity >
                    </View>
                </View>
                <View style={GlobalStyle.slide1}>
                    <Services />
                    <View style={GlobalStyle.nextButtonView}>
                        <TouchableOpacity style={GlobalStyle.nextButton}
                            onPress={() => {
                                swipe(3)
                                Service()
                            }}
                        >
                            <Text style={GlobalStyle.nextbuttonText}>Next</Text>
                        </TouchableOpacity >
                    </View>
                </View>
                <View style={GlobalStyle.slide1}>
                    <Subscription />
                    <View style={GlobalStyle.nextButtonView}>
                        <TouchableOpacity style={GlobalStyle.nextButton} onPress={() => {
                            upload()
                            props.navigation.navigate('Tab')

                        }} >
                            <Text style={GlobalStyle.nextbuttonText}>Done</Text>
                        </TouchableOpacity >
                    </View>


                </View>
            </Swiper>


        </View >
    )
}

export default Home;