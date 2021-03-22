import { StyleSheet } from 'react-native'
import { hp, wp } from '../../../Global/Styles/Scalling';
import { fontSize } from '../../../Constant/Constant';

export const styling = StyleSheet.create({
    safeContainer: {
        flex: 1,
        backgroundColor: 'white'
    },


    containerView: {
        padding: 20,
        alignContent: 'center',
        height: hp(100),
        width: wp(100)
    },
    headerView: {
        width: wp(100),
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 10,
        flexDirection: 'row',

    },
    headerText: {
        fontSize: fontSize.header,
        fontFamily: 'SFUIText-Bold',
    },
    innerContainerView: {
        width: wp(90),
        height: hp(85),
        alignSelf: 'center',
    },
    servicetextinput: {
        width: wp(45),
        borderWidth: 1,
        borderRadius: 10,
        borderColor: 'grey',
        textAlignVertical: 'center',
        marginBottom: 4,



    },
    servicePriceinput: {
        width: wp(20),
        borderWidth: 1,
        borderRadius: 10,
        borderColor: 'grey',
        textAlignVertical: 'center',
        marginBottom: 10
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
    },
    txtInputView: {
        flexDirection: 'row',
        justifyContent: 'space-between',

    },
    opacityView: {
        height: hp(10),
        alignItems: 'center',
        justifyContent: 'center',
    },
    OpacityLog: {
        height: hp('6%'),
        width: wp('30%'),
        backgroundColor: '#3f4079',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10
    },
    Opacitytxt: {
        fontFamily: 'SFUIText-Bold',
        fontSize: fontSize.button,
        color: 'white'
    },
})
