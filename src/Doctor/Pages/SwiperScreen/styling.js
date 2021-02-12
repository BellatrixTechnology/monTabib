import { StyleSheet } from 'react-native'
import { hp, wp } from '../../../Global/Styles/Scalling';
import { fontSize } from '../../../Constant/Constant';

export const styling = StyleSheet.create({
    safeContainer: {
        flex: 1
    },
    mainContainer: {
        height: hp(100),
        width: wp(100),
    },
    slide1: {
        padding: 10,
        height: hp(92),
        width: wp(95),
        marginTop: hp(2),
        backgroundColor: 'white',
        alignContent: 'center',
        alignSelf: 'center',
        borderRadius: 10,
        elevation: 10,
        alignItems: 'center',

    },
    nextButtonView: {
        width: wp(80),
        alignItems: 'flex-end',
        justifyContent: 'flex-end',
        alignSelf: 'flex-end',
    },
    nextButton: {
        width: wp(20),
        borderRadius: 8,
        paddingVertical: 14,
        paddingHorizontal: 10,
        backgroundColor: '#3f4079',
    },
    nextbuttonText: {
        fontFamily: 'SFUIText-Bold',
        fontSize: fontSize.button,
        color: 'white',
        textAlign: 'center',
    },
    containerView: {
        width: wp(95),
        alignContent: 'center',
        height: hp(81),
    },
    headerView: {
        height: hp(5),
        alignItems: 'center',
        alignSelf: 'center',
        marginBottom: 5,
    },
    headerText: {
        fontSize: fontSize.header,
        fontFamily: 'SFUIText-Bold',
    },
    nameFieldView: {
        width: wp(47),
        flexDirection: 'row'
    },
    dropdownView: {
        alignItems: 'center'
    },
    dropDown: {
        width: wp(90),
    },
    dropdownLabel: {
        color: 'grey'
    },
    dropdownStyle: {
        width: wp(90),
        backgroundColor: 'red'
    },
    dropdowncontainerStyle: {
        width: wp(90),
    },
    innerFieldView: {
        marginTop: 10
    },
    dayView: {
        height: hp(11),
        alignItems: 'center',
        alignSelf: 'center',
    },
    daypickerView: {
        flexDirection: 'row',
        height: hp(4),
        width: wp(90),
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
    },
    daytagLabel: {
        fontSize: fontSize.tag,
        color: 'grey',
        fontFamily: 'SFUIText-Regular',

    },

    innerContainerView: {
        width: wp(90),
        height: hp(81.5),
        alignSelf: 'center',
    },
    servicetextinput: {
        height: hp(20),
        width: wp(90),
        borderWidth: 1,
        borderRadius: 15,
        borderColor: 'grey',
        textAlignVertical: 'top'

    },
    diamondCard: {
        padding: 20,
        height: hp(20),
        width: wp(90),
        borderRadius: 20,
        marginBottom: 10,
        justifyContent: 'space-evenly',
        backgroundColor: '#e5e5e5',
        alignItems: 'center',
        alignSelf: 'center'
    },
    goldCard: {
        padding: 20,
        height: hp(20),
        width: wp(90),
        borderRadius: 20,
        marginBottom: 10,
        justifyContent: 'space-evenly',
        backgroundColor: '#f3dd77',
        alignItems: 'center',
        alignSelf: 'center'
    },
    silverCard: {
        padding: 20,
        height: hp(20),
        width: wp(90),
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
        fontSize: fontSize.head,
        fontFamily: 'SFUIText-Bold',
        color: 'white'
    },
    serviceText: {
        fontSize: fontSize.tag,
        fontFamily: 'SFUIText-Bold',
    }

})