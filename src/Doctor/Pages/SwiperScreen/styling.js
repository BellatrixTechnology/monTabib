import { StyleSheet } from 'react-native'
import { hp, wp } from '../../../Global/Styles/Scalling';
import { fontSize } from '../../../Constant/Constant';

export const styling = StyleSheet.create({
    safeContainer: {
        flex: 1
    },
    mainContainer: {
        flex: 1,
        backgroundColor: 'white'
    },
    TimeontainerView: {
        width: wp(90),
        height: hp(85)
    },
    autocompleteContainer: {
        flex: 1,
        left: 0,
        position: 'absolute',
        right: 0,
        top: 0,
        zIndex: 1
    },
    slide1: {
        padding: 10,
        flex: 1,
        alignContent: 'center',
        alignSelf: 'center',
        borderRadius: 10,
        alignItems: 'center',

    },
    nextButtonView: {
        width: wp(25),
        alignItems: 'center',
        justifyContent: 'flex-end',
        alignSelf: 'flex-end',
    },
    nextPButtonView: {
        width: wp(90),
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row'
    },
    nextButton: {
        width: wp(25),
        borderRadius: 8,
        paddingVertical: 14,
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
        height: hp(84),
    },
    headerView: {
        width: wp(80),
        alignSelf: 'center',
        alignItems: 'center'
    },
    dropdownsView: {
        width: wp(90),
        height: hp(5),
        alignItems: 'center',
        alignSelf: 'center',
        marginBottom: 5,
        marginTop: hp(2),
    },
    PickerdownsView: {
        height: hp(5),
        alignItems: 'center',
        alignSelf: 'center',
        marginBottom: 5,
        marginTop: hp(2)
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
        width: wp(42),
    },
    dropdownLabel: {
        color: 'grey'
    },
    dropdownStyle: {
        width: wp(42),
    },
    dropdowncontainerStyle: {
        width: wp(42),
    },
    innerFieldView: {
        marginTop: 10
    },
    dayView: {
        alignItems: 'center',
        alignSelf: 'center',
        marginVertical: hp(1),
    },
    dayheadingView: {
        flexDirection: 'row',
        width: wp(85),
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        alignSelf: 'center'
    },
    dayPickrView: {
        width: wp(90),
        flexDirection: 'row'
    },
    maindaytagView: {
        marginBottom: hp(1),
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: wp(40)
    },
    daytagLabel: {
        fontSize: fontSize.tag,
        color: 'grey',
        fontFamily: 'SFUIText-Regular',

    },

    innerContainerView: {
        width: wp(90),
        height: hp(70),
        alignSelf: 'center',
    },
    servicetextinput: {
        width: wp(55),
        borderWidth: 1,
        borderRadius: 10,
        borderColor: 'grey',
        textAlignVertical: 'center',
        marginBottom: 4,
    },
    servicePriceinput: {
        width: wp(25),
        borderWidth: 1,
        borderRadius: 10,
        borderColor: 'grey',
        textAlignVertical: 'center',
        marginBottom: 10
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
    },
    addButton: {
        marginVertical: hp(1),
        height: hp('5%'),
        flexDirection: 'row',
        width: wp('80%'),
        alignSelf: 'center',
        justifyContent: 'space-evenly',
        // backgroundColor: 'red'
    },
    saveOpcatiy: {
        backgroundColor: '#3f4079',
        height: hp(6),
        width: wp(40),
        alignSelf: 'center',
        marginVertical: hp(2),
        alignItems: 'center', justifyContent: 'center',
        borderRadius: 10
    },
    txtInputView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    mainTimePickerView: {
        borderWidth: 0.5,
        paddingHorizontal: wp(2),
    }

})
