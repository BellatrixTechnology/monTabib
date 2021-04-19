import React, { useState } from 'react';
import { StatusBar, View, TouchableOpacity, Text, ToastAndroid, ScrollView, SafeAreaView } from 'react-native';
import Swiper from 'react-native-swiper';
import OpenningHour from './Openninghour';
import Register from './Register';
import Services from './Services';
import Subscription from './Subscription';
import AsyncStorage from '@react-native-async-storage/async-storage';
import firebase from '../../../db/config';
import AlertModal from '../../Components/AlertModal/index';

import { styling } from './styling';


const Home = (props) => {
    const [isVisible, setIsVisble] = useState(false)
    const [obj, setobj] = useState({});
    const [obj1, setobj1] = useState({});
    const [obj2, setobj2] = useState([]);
    const [medicineId, setMedicineId] = useState('');
    const [mondayId, setMondayId] = useState('');
    const [tuesdayId, setTuesdayId] = useState('');
    const [wedId, setWedId] = useState('');
    const [ThursId, setThursId] = useState('');
    const [friId, setFriId] = useState('');
    const [satId, setsatId] = useState('');
    const [sunId, setsunId] = useState('');

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
            console.log(parsed2)
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
        console.log(obj2)


    }


    const upload = () => {
        let objs = {
            username: obj.Email,
            password: obj.Name
        }
        AsyncStorage.setItem('UserData', JSON.stringify(objs));
        fetch('https://www.montabib.com/api/users', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                // 'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "username": obj.Email,
                "password": obj.Name,
                "rank": true
            })
        }).then((res) => {
            console.log('register', res);
            if (res.ok == true) {
                res.json().then((data) => {
                    saveDATA(data.id)
                    console.log(data)
                    setIsVisble(true)

                })
            } else {
                console.log('ad')
            }
        }).catch((error) => {
            console.error(error);
        });

    }
    const saveDATA = (userId) => {
        console.log(obj)
        console.log(userId)
        console.log("/api/users/" + userId)
        fetch('https://www.montabib.com/api/medecins', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                "nom": obj.SurName,
                "prenom": obj.Name,
                "sexe": obj.Gender,
                "adresse": obj.Address,
                "email": obj.Email,
                "telephone": obj.Telephone,
                "description": "medecin de tizi ouzou",
                "specialisation": [
                    "/api/specialisations/" + obj.Specialist
                ],
                "lat": 0.64077229268898,
                "lon": 0.07063884171566,
                "latDegree": 36.713548,
                "lonDegree": 4.0473075,
                "identifiantUnique": obj.UI,
                "user": "/api/users/" + userId
            })
        }).then((ress) => {
            console.log(ress.headers.map.location)
            console.log('jnjn', ress.error)
            if (ress.ok == true) {
                console.log(ress)
                ress.json().then((data) => {
                    SaveTime(ress.headers.map.location)
                    setMedicineId(ress.headers.map.location)
                });
            } else {
            }
        })
            .catch((error) => {
                console.log(error)
            });
    }
    const SaveTime = (uid) => {
        console.log(uid)
        console.log(obj1.Monday.Morning.Start)
        fetch('https://montabib.com/loginApp', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                "username": obj.Email,
                "password": obj.Name
            })
        }).then((response) => response.json())
            .then((responseJson) => {
                console.log(responseJson, 'res JSON');
                if (responseJson.error == 'Invalid credentials.') {

                }
                else {
                    {
                        fetch('https://montabib.com/api/heure_ouvertures', {
                            method: 'POST',
                            headers: {
                                'Accept': 'application/json',
                                'Content-Type': 'application/json',
                            },
                            body: JSON.stringify({
                                "jour": "lundi",
                                "heureOuvertureMatin": "2021-03-13T" + obj1.Monday.Morning.Start + ":40.253Z",
                                "heureFermetureApresMidi": "2021-03-13T" + obj1.Monday.Afternoon.End + ":40.253Z",
                                "medecin": uid,
                                "heureFermetureMatin": "2021-03-13T" + obj1.Monday.Morning.End + ":40.253Z",
                                "heureOuvertureApresMidi": "2021-03-13T" + obj1.Monday.Afternoon.Start + ":40.253Z",
                                "jourRepos": obj1.Monday.status
                            })
                        }).then((response) => {
                            console.log(response)
                            if (response.ok == true) {


                            } else {
                            }
                        })
                            .catch((error) => {
                                console.log(error)
                            });
                    }
                    {
                        fetch('https://montabib.com/api/heure_ouvertures', {
                            method: 'POST',
                            headers: {
                                'Accept': 'application/json',
                                'Content-Type': 'application/json',
                            },
                            body: JSON.stringify({
                                "jour": "mardi",
                                "heureOuvertureMatin": "2021-03-13T" + obj1.Tuesday.Morning.Start + ":40.253Z",
                                "heureFermetureApresMidi": "2021-03-13T" + obj1.Tuesday.Afternoon.End + ":40.253Z",
                                "medecin": uid,
                                "heureFermetureMatin": "2021-03-13T" + obj1.Tuesday.Morning.End + ":40.253Z",
                                "heureOuvertureApresMidi": "2021-03-13T" + obj1.Tuesday.Afternoon.Start + ":40.253Z",
                                "jourRepos": obj1.Monday.status
                            })
                        }).then((response) => {
                            console.log(response)
                            if (response.ok == true) {
                                response.json().then((data) => { console.log(data) }).catch((error) => { console.log(error) })
                            } else {
                            }
                        })
                            .catch((error) => {
                                console.log(error)
                            });
                    }

                    {
                        fetch('https://montabib.com/api/heure_ouvertures', {
                            method: 'POST',
                            headers: {
                                'Accept': 'application/json',
                                'Content-Type': 'application/json',
                            },
                            body: JSON.stringify({
                                "jour": "mercredi",
                                "heureOuvertureMatin": "2021-03-13T" + obj1.Wednesday.Morning.Start + ":40.253Z",
                                "heureFermetureApresMidi": "2021-03-13T" + obj1.Wednesday.Afternoon.End + ":40.253Z",
                                "medecin": uid,
                                "heureFermetureMatin": "2021-03-13T" + obj1.Wednesday.Morning.End + ":40.253Z",
                                "heureOuvertureApresMidi": "2021-03-13T" + obj1.Wednesday.Afternoon.Start + ":40.253Z",
                                "jourRepos": obj1.Wednesday.status
                            })
                        }).then((response) => {
                            console.log(response)
                            if (response.ok == true) {
                                response.json().then((data) => { console.log(data) }).catch((error) => { console.log(error) })
                            } else {
                            }
                        })
                            .catch((error) => {
                                console.log(error)
                            });
                    }
                    {
                        fetch('https://montabib.com/api/heure_ouvertures', {
                            method: 'POST',
                            headers: {
                                'Accept': 'application/json',
                                'Content-Type': 'application/json',
                            },
                            body: JSON.stringify({
                                "jour": "jeudi",
                                "heureOuvertureMatin": "2021-03-13T" + obj1.Thursday.Morning.Start + ":40.253Z",
                                "heureFermetureApresMidi": "2021-03-13T" + obj1.Thursday.Afternoon.End + ":40.253Z",
                                "medecin": uid,
                                "heureFermetureMatin": "2021-03-13T" + obj1.Thursday.Morning.End + ":40.253Z",
                                "heureOuvertureApresMidi": "2021-03-13T" + obj1.Thursday.Afternoon.Start + ":40.253Z",
                                "jourRepos": obj1.Thursday.status
                            })
                        }).then((response) => {
                            console.log(response)
                            if (response.ok == true) {
                                response.json().then((data) => { console.log(data) }).catch((error) => { console.log(error) })
                            } else {
                            }
                        })
                            .catch((error) => {
                                console.log(error)
                            });
                    }
                    {
                        fetch('https://montabib.com/api/heure_ouvertures', {
                            method: 'POST',
                            headers: {
                                'Accept': 'application/json',
                                'Content-Type': 'application/json',
                            },
                            body: JSON.stringify({
                                "jour": "vendredi",
                                "heureOuvertureMatin": "2021-03-13T" + obj1.Friday.Morning.Start + ":40.253Z",
                                "heureFermetureApresMidi": "2021-03-13T" + obj1.Friday.Afternoon.End + ":40.253Z",
                                "medecin": uid,
                                "heureFermetureMatin": "2021-03-13T" + obj1.Friday.Morning.End + ":40.253Z",
                                "heureOuvertureApresMidi": "2021-03-13T" + obj1.Friday.Afternoon.Start + ":40.253Z",
                                "jourRepos": obj1.Friday.status
                            })
                        }).then((response) => {
                            console.log(response)
                            if (response.ok == true) {
                                response.json().then((data) => { console.log(data) }).catch((error) => { console.log(error) })
                            } else {
                            }
                        })
                            .catch((error) => {
                                console.log(error)
                            });
                    }
                    {
                        fetch('https://montabib.com/api/heure_ouvertures', {
                            method: 'POST',
                            headers: {
                                'Accept': 'application/json',
                                'Content-Type': 'application/json',
                            },
                            body: JSON.stringify({
                                "jour": "samedi",
                                "heureOuvertureMatin": "2021-03-13T" + obj1.Saturday.Morning.Start + ":40.253Z",
                                "heureFermetureApresMidi": "2021-03-13T" + obj1.Saturday.Afternoon.End + ":40.253Z",
                                "medecin": uid,
                                "heureFermetureMatin": "2021-03-13T" + obj1.Saturday.Morning.End + ":40.253Z",
                                "heureOuvertureApresMidi": "2021-03-13T" + obj1.Saturday.Afternoon.Start + ":40.253Z",
                                "jourRepos": obj1.Saturday.status
                            })
                        }).then((response) => {
                            console.log(response)
                            if (response.ok == true) {
                                response.json().then((data) => { console.log(data) }).catch((error) => { console.log(error) })
                            } else {
                            }
                        })
                            .catch((error) => {
                                console.log(error)
                            });
                    }
                    {
                        fetch('https://montabib.com/api/heure_ouvertures', {
                            method: 'POST',
                            headers: {
                                'Accept': 'application/json',
                                'Content-Type': 'application/json',
                            },
                            body: JSON.stringify({
                                "jour": "dimanche",
                                "heureOuvertureMatin": "2021-03-13T" + obj1.Sunday.Morning.Start + ":40.253Z",
                                "heureFermetureApresMidi": "2021-03-13T" + obj1.Sunday.Afternoon.End + ":40.253Z",
                                "medecin": uid,
                                "heureFermetureMatin": "2021-03-13T" + obj1.Sunday.Morning.End + ":40.253Z",
                                "heureOuvertureApresMidi": "2021-03-13T" + obj1.Sunday.Afternoon.Start + ":40.253Z",
                                "jourRepos": obj1.Sunday.status
                            })
                        }).then((response) => {
                            console.log(response)
                            if (response.ok == true) {
                                response.json().then((data) => { console.log(data) }).catch((error) => { console.log(error) })
                            } else {
                            }
                        })
                            .catch((error) => {
                                console.log(error)
                            });
                    }
                }
            }).then(() => {
                SaveConsultation()
            }).then(() => {
                SaveServie()


            }).then(() => {
                setIsVisble(false)
                props.navigation.navigate('Tab')
            }).catch((error) => {
                console.error(error);
            });
    }
    const SaveServie = () => {
        console.log(obj2.Service)
        obj2.Service.forEach(element => {
            fetch('https://montabib.com/api/services', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({

                    "libelle": element.Service,
                    "prix": Number(element.Price)

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
    const SaveConsultation = () => {
        console.log(obj2.Consult)
        obj2.Consult.forEach(element => {
            fetch('https://montabib.com/api/motifs', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({

                    "libelle": element.Consult,
                    "duree": element.Duration

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
    return (
        <SafeAreaView style={styling.safeContainer}>
            <StatusBar barStyle="dark-content" hidden={false} backgroundColor="white" translucent={false} />

            <View style={styling.mainContainer}>
                <Swiper showsButtons={false} showsPagination={false} loop={false} index={id}>

                    <View style={styling.slide1}>
                        <ScrollView>

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
                        </ScrollView>

                    </View>

                    <View style={styling.slide1}>
                        <OpenningHour />

                        <View style={styling.nextPButtonView}>
                            <TouchableOpacity style={styling.nextButton}
                                onPress={() => {
                                    swipe(0)
                                }}
                            >
                                <Text style={styling.nextbuttonText}>Previous</Text>
                            </TouchableOpacity >
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
                        <View style={styling.nextPButtonView}>
                            <TouchableOpacity style={styling.nextButton}
                                onPress={() => {
                                    swipe(1)
                                }}
                            >
                                <Text style={styling.nextbuttonText}>Previous</Text>
                            </TouchableOpacity >
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
                        <View style={styling.nextPButtonView}>
                            <TouchableOpacity style={styling.nextButton}
                                onPress={() => {
                                    swipe(2)
                                }}
                            >
                                <Text style={styling.nextbuttonText}>Previous</Text>
                            </TouchableOpacity >
                            <TouchableOpacity style={styling.nextButton} onPress={() => {
                                upload()
                            }} >
                                <Text style={styling.nextbuttonText}>Done</Text>
                            </TouchableOpacity >
                        </View>


                    </View>
                </Swiper>

                <AlertModal
                    isVisible={isVisible}
                />

            </View >

        </SafeAreaView>
    )
}

export default Home;