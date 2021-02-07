import { StyleSheet } from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

export const GlobalStyle = StyleSheet.create({
    backgroudView: {
        flex: 1,
        alignItems: 'center',
    },
    slide1: {
        padding: 10,
        height: hp('90%'),
        width: wp('95%'),
        marginTop: hp('2%'),
        backgroundColor: 'white',
        alignContent: 'center',
        alignSelf: 'center',
        borderRadius: 10,
        elevation: 10,
        alignItems: 'center',

    },
    nextButtonView: {
        width: wp('90%'),
        alignItems: 'flex-end',
        justifyContent: 'flex-end',
        alignSelf: 'flex-end',
    },
    nextButton: {
        width: wp('20%'),
        borderRadius: 8,
        paddingVertical: 14,
        paddingHorizontal: 10,
        backgroundColor: '#ff7e00',
    },
    nextbuttonText: {
        color: 'white',
        fontWeight: 'bold',
        textTransform: 'uppercase',
        fontSize: 16,
        textAlign: 'center',
    },

    containerView: {
        width: wp('95%'),
        alignContent: 'center',
        height: hp('81.5'),
    },
    headerView: {
        height: hp('5%'),
        width: wp('80%'),
        alignItems: 'center',
        alignSelf: 'center',
        marginBottom: 5,
    },
    headerText: {
        fontSize: 30,
    },
    nameFieldView: {
        width: wp('47%'),
        flexDirection: 'row'
    },
    dropdownView: {
        alignItems: 'center'
    },
    dropDown: {
        width: wp('90%'),
        height: 40,
    },
    dropdownLabel: {
        color: 'grey'
    },
    dropdownStyle: {
        width: wp('90%')
    },
    dropdowncontainerStyle: {
        width: wp('90%'),
        height: 40,
    },
    innerFieldView: {
        marginTop: 10
    },
    dayView: {
        height: hp('10.9%'),
        width: wp('88%'),
        alignItems: 'center',
        alignSelf: 'center',
    },
    daypickerView: {
        flexDirection: 'row',
        height: hp('4%'),
        width: wp('90%'),
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
    },
    daytagLabel: {
        fontSize: 22,
        color: 'grey'
    },

    innerContainerView: {
        width: wp('90%'),
        height: hp('81.5%'),
        alignSelf: 'center',
    },
    servicetextinput: {
        height: hp('20%'),
        width: wp('90%'),
        borderWidth: 1,
        borderRadius: 15,
        borderColor: 'grey',
        textAlignVertical: 'top'

    },
    diamondCard: {
        padding: 20,
        height: hp('20%'),
        width: wp('90%'),
        borderRadius: 20,
        marginBottom: 10,
        justifyContent: 'space-evenly',
        backgroundColor: '#e5e5e5',
        alignItems: 'center',
        alignSelf: 'center'
    },
    goldCard: {
        padding: 20,
        height: hp('20%'),
        width: wp('90%'),
        borderRadius: 20,
        marginBottom: 10,
        justifyContent: 'space-evenly',
        backgroundColor: '#f3dd77',
        alignItems: 'center',
        alignSelf: 'center'
    },
    silverCard: {
        padding: 20,
        height: hp('20%'),
        width: wp('90%'),
        borderRadius: 20,
        marginBottom: 10,
        justifyContent: 'space-evenly',
        backgroundColor: '#9f9f9f',
        alignItems: 'center',
        alignSelf: 'center'
    },
    cardinnerView: {
        flexDirection: 'row',
    },
    cardLabel: {
        fontSize: 26,
        color: 'white'
    },
})
