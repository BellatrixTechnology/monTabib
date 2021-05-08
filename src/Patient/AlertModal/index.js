import React, { useState } from 'react';
import { View, Text, ActivityIndicator, TouchableOpacity } from 'react-native';
import Modal from 'react-native-modal';
import styles from './styles';
import DropDownPicker from 'react-native-dropdown-picker';
import Awesome from 'react-native-vector-icons/FontAwesome'
import { styling } from '../Pages/ListDoctor.js/styling';
import moment from 'moment';
import { wp } from '../../Global/Styles/Scalling';

const ISModal = ({ isVisible, itemData, onPress, onBackdropPress, onChangeItem, value, Date, DoctorName, type, address }) => {
    const [gender, setGender] = useState('');
    console.log(itemData)
    return (<Modal isVisible={isVisible}
        onBackdropPress={onBackdropPress}
        backdropOpacity={0.4}

    >
        <View style={styles.loginModalContainer}>
            <Text style={styles.headText}>Confirm Reservation</Text>
            <View style={styles.headersView}>
                <DropDownPicker
                    items={itemData}
                    defaultValue={value}
                    placeholder='Select Reason of Consultation'
                    labelStyle={styles.dropdownLabel}
                    style={styles.dropDown}
                    containerStyle={styles.containerStyle}
                    dropDownStyle={styles.dropdownStyle}
                    showArrow={true}
                    onChangeItem={onChangeItem}

                />
            </View>
            <View>
                <Text style={styles.DoctorNameStyle}>Dr. {DoctorName}</Text>
                <Text style={styles.DoctorStyle}>{type}</Text>

                <Text style={styles.DoctorStyle}>{address}</Text>
                <Text style={styles.DoctorNameStyle}>{Date}</Text>
            </View>
            <TouchableOpacity style={styles.OpacityLog} onPress={onPress}
                disabled={value ? false : true}
            >
                <Text style={styles.Opacitytxt}>Reserve</Text>
            </TouchableOpacity>
        </View>
    </Modal>)
};
const ReserveSucesss = ({ isVisible, onBackdropPress, onPress }) => {

    return (<Modal isVisible={isVisible}
        onBackdropPress={onBackdropPress}
        backdropOpacity={0.4}

    >
        <View style={styles.loginModalContainer}>
            <View style={{ flexDirection: 'row', alignItems: 'center', marginVertical: 20 }}>
                <Text style={styling.labelDRTXT}>Your consultation is confirmed </Text>
                <Awesome name='check-circle-o' color='green' size={30} />
            </View>

            <View style={styling.sucesssView}>
                <Text style={styling.sucessTxT}>We have sent you a confirmation email.</Text>
                <Text style={styling.sucessTxT}>  You will also receive a reminder text message the day before the consultation.</Text>
                <Text style={styling.sucessTxT}>   If you wish to cancel this consultation, please go to your personal space, Consultations tab.</Text>

                <Text style={styling.msgTxT}> The monTabib team thanks you!</Text>
            </View>

            <TouchableOpacity style={styles.OpacityLog} onPress={onPress}
            // disabled={value ? false : true}
            >
                <Text style={styles.Opacitytxt}>Go To Home Page</Text>
            </TouchableOpacity>
        </View>
    </Modal>)
};
const ConfirmAlert = ({ isVisible, onBackdropPress, onPress, Name, Motif, date }) => {

    return (<Modal isVisible={isVisible}
        onBackdropPress={onBackdropPress}
        backdropOpacity={0.4}

    >
        <View style={styles.loginModalContainer}>
            <View style={{ flexDirection: 'row', alignItems: 'center', marginVertical: 20 }}>
                <Text style={styling.labelDRTXT}>Consultation is confirmed </Text>
                <Awesome name='check-circle-o' color='green' size={30} />
            </View>

            <View style={styling.sucesssView}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignSelf: 'center', width: wp(50) }}>
                    <Text style={styling.sucessTxT}>Patient Name:</Text>
                    <Text style={styling.sucessTxT1}>{Name}</Text>
                </View>


                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignSelf: 'center', width: wp(50) }}>
                    <Text style={styling.sucessTxT}>Reason Of Consultation:</Text>
                    <Text style={styling.sucessTxT1}>{Motif}</Text>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignSelf: 'center', width: wp(50) }}>
                    <Text style={styling.sucessTxT}>Date:</Text>
                    <Text style={styling.sucessTxT1}>{date}</Text>
                </View>
                <Text style={styling.msgTxT}> The monTabib team thanks you!</Text>
            </View>

            <TouchableOpacity style={styles.OpacityLog} onPress={onPress}
            >
                <Text style={styles.Opacitytxt}>Go To Home Page</Text>
            </TouchableOpacity>
        </View>
    </Modal>)
};
export { ISModal, ReserveSucesss, ConfirmAlert };