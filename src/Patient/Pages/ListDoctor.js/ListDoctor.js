import React, { useState, useEffect } from 'react';
import { ScrollView, View, Text, SafeAreaView, TouchableOpacity, FlatList } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import DropDownPicker from 'react-native-dropdown-picker';

import Icon from 'react-native-vector-icons/AntDesign';
import { styling } from './styling';
import moment from 'moment'
const ListDoctor = ({ navigation, route }) => {
    const city = route.params.city
    const special = route.params.Special
    const [status, setStatus] = useState('List')
    const [detailData, setDetailData] = useState('')
    const [data, setData] = useState('')
    const [pages, setPage] = useState('1')
    const [consult, setConsult] = useState([])

    const today = moment().format('YYYY-MM-DD')
    const [next, setNext] = useState([])
    console.log(today,)
    useEffect(() => {
        getDoctor('1')
        getdates()
    }, [])
    function getdates() {
        let list = []
        list.push({ date: today })
        list.push({ date: moment().add(1, 'day').format('YYYY-MM-DD') })
        list.push({ date: moment().add(2, 'day').format('YYYY-MM-DD') })
        list.push({ date: moment().add(3, 'day').format('YYYY-MM-DD') })
        list.push({ date: moment().add(4, 'day').format('YYYY-MM-DD') })
        list.push({ date: moment().add(5, 'day').format('YYYY-MM-DD') })
        list.push({ date: moment().add(6, 'day').format('YYYY-MM-DD') })
        setNext(list)
    }
    function motif(item) {
        let list = []
        item.motifs.forEach(element => {
            console.log(element)
            list.push({ label: element.libelle, value: element.id })
        });
        setConsult(list)
    }

    async function getDoctor(page) {
        // let temp = []
        fetch('https://montabib.com/api/searchDoctors/' + special + '/' + city + '/' + page,
            {
                method: "GET",
            }).then((res) => {
                if (res.ok == true) {
                    res.json().then((dat) => {
                        setData(dat.medecins)
                    }).catch((error) => { console.log(error) })
                } else {
                    console.log('err')
                }
            })
            .catch((error) => {
                console.log(error)
            });
    }
    async function getDoctorFilter(gen, page) {
        console.log(gen)
        if (gen != 'All') {
            // let temp = []
            fetch('https://montabib.com/api/searchDoctors/' + special + '/' + city + '/' + page + '?sexe=' + gen,
                {
                    method: "GET",
                }).then((res) => {
                    if (res.ok == true) {
                        res.json().then((dat) => {
                            setData(dat.medecins)
                        }).catch((error) => { console.log(error) })
                    } else {
                        console.log('err')
                    }
                })
                .catch((error) => {
                    console.log(error)
                });
        }
        else {
            getDoctor(pages)
        }
    }
    async function getDoctorFilteravail(avl, page) {

        fetch('https://montabib.com/api/searchDoctors/' + special + '/' + city + '/' + page + '?sexe=' + gender + '&?disponibilite=' + avl,
            {
                method: "GET",
            }).then((res) => {
                if (res.ok == true) {
                    res.json().then((dat) => {
                        console.log(dat)
                        setData(dat.medecins)
                    }).catch((error) => { console.log(error) })
                } else {
                    console.log('err')
                }
            })
            .catch((error) => {
                console.log(error)
            });
    }


    const [selectMon, setMonSelect] = useState(null);
    const [time, setTime] = useState('');
    const [gender, setGender] = useState('');
    const [avail, setAvail] = useState('')
    return (
        <SafeAreaView style={styling.safeContainer}>

            <View style={styling.mainContainer}>
                <View style={styling.headView}>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <Icon name='left' color='white' size={30} />
                    </TouchableOpacity>
                    <Text style={styling.headTXT}>Doctors</Text>
                    <View style={{ width: wp(12) }} />
                </View>
                {status == 'List' && <View style={styling.innerView}>
                    <View style={styling.drView}>

                        <View style={styling.headersView}>
                            <DropDownPicker
                                items={[
                                    { label: 'Male', value: '1' },
                                    { label: 'Female', value: '0' },
                                    { label: 'All', value: 'All' },
                                ]}
                                defaultValue={gender}
                                placeholder='Select Gender'
                                labelStyle={styling.dropdownLabel}
                                style={styling.dropDown}
                                containerStyle={styling.containerStyle}
                                dropDownStyle={styling.dropdownStyle}
                                showArrow={true}
                                onChangeItem={(val) => {
                                    let gen = val.value
                                    getDoctorFilter(gen, 1)
                                    setGender(val.value)
                                    setPage('1')
                                }}
                            />
                        </View>

                        <View style={styling.headersView}>
                            <DropDownPicker
                                items={[
                                    { label: 'Today', value: 'today' },
                                    { label: 'All', value: 'All' },

                                ]}
                                defaultValue={avail}
                                placeholder='Availablity'
                                labelStyle={styling.dropdownLabel}
                                style={styling.dropDown}
                                containerStyle={styling.containerStyle}
                                dropDownStyle={styling.dropdownStyle}
                                showArrow={true}
                                onChangeItem={(val) => {
                                    setAvail(val.value)
                                    let avl = val.value
                                    getDoctorFilteravail(avl, 1)
                                }}
                            />
                        </View>

                    </View>
                    <FlatList
                        data={data}
                        showsVerticalScrollIndicator={false}
                        renderItem={({ item }) => {
                            return (
                                <View>
                                    <TouchableOpacity style={styling.nameView} onPress={() => {
                                        setDetailData(item)
                                        motif(item)
                                        setStatus('detail')
                                    }}>
                                        <Text style={styling.DRTXT}>{item.prenom} {item.nom}</Text>
                                        <Text style={styling.labelTXT}>ACUPUNCTURIST</Text>
                                        <Text style={styling.labelTXT}>{item.telephone}</Text>
                                    </TouchableOpacity >
                                </View>
                            )
                        }}
                        ListFooterComponent={() => {
                            let size = data.length
                            return (


                                <View style={{ flexDirection: 'row', alignSelf: 'center' }}>
                                    {pages > 1 &&
                                        <TouchableOpacity style={[styling.loadMore, { marginRight: 2 }]} onPress={() => {
                                            let Temp = Number(pages) - 1
                                            setPage(Temp)
                                            if (gender) {
                                                getDoctorFilter(gender, Temp)
                                            }
                                            else
                                                getDoctor(Temp)

                                        }}>
                                            <Text style={styling.loadMoreText}>Previous</Text>
                                        </TouchableOpacity>
                                    }
                                    {size > 5 &&
                                        <TouchableOpacity style={styling.loadMore} onPress={() => {
                                            let Temp = Number(pages) + 1
                                            setPage(Temp)
                                            if (gender) {
                                                getDoctorFilter(gender, Temp)
                                            }
                                            else
                                                getDoctor(Temp)

                                        }}>
                                            <Text style={styling.loadMoreText}>Next</Text>
                                        </TouchableOpacity>
                                    }
                                </View>

                            )

                        }}

                    />

                </View>
                }
                {status == 'detail' &&
                    <View style={styling.innerView}>
                        <View style={styling.nameView} >
                            <Text style={styling.DRTXT}>{detailData.prenom} {detailData.nom}</Text>
                            <Text style={styling.labelTXT}>ACUPUNCTURIST</Text>
                            <Text style={styling.labelTXT}>{detailData.telephone}</Text>
                            <Text style={styling.labelTXT}>{detailData.adresse}</Text>

                        </View >
                        {
                            detailData.experiences != '' &&
                            <View style={styling.nameView} >
                                <Text style={styling.headDRTXT}>Experiences and Training</Text>
                                <Text style={styling.labelDRTXT}>2000 - 2010 - Surgeon</Text>
                            </View >

                        }

                        <View style={styling.nameView}>
                            <Text style={styling.headDRTXT}>Rates & Payment methods</Text>
                            <View>
                                <FlatList
                                    data={detailData.services}
                                    renderItem={({ item }) => {
                                        return (

                                            <View>
                                                < Text style={styling.labelDRTXT} >
                                                    {item.libelle}	{item.prix} da</Text>

                                            </View>


                                        )
                                    }
                                    }
                                />
                            </View>
                        </View >
                        <TouchableOpacity style={styling.OpacityLog} onPress={() => {
                            navigation.navigate('SwiperTime', { next, detailData, consult })
                        }}>
                            <Text style={styling.Opacitytxt}>Next</Text>
                        </TouchableOpacity>
                    </View>
                }



            </View>

        </SafeAreaView >
    )
}

export default ListDoctor;