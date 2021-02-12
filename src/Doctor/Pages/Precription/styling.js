import { StyleSheet } from 'react-native'
import { hp, wp } from '../../../Global/Styles/Scalling';
import { fontSize } from '../../../Constant/Constant';

export const styling = StyleSheet.create({
    safeContainer: {
        flex: 1
    },
    mainContainer: {
        width: wp(100),
        height: hp(100),
        padding: 20
    },
    innerView: {
        padding: 10,
        height: hp(10),
        width: wp(100),
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 2,
        backgroundColor: 'white',

    },

    label: {
        fontSize: fontSize.head,
        fontFamily: 'SFUIText-Regular',
    },
    PreView: {
        height: hp(70),
        width: wp(90),
        padding: 10,
        flexDirection: 'row',
    },
    dataView: {
        marginTop: 10,
        height: hp(25),
        width: wp(80),
    },

    textView: {
        flexDirection: 'row',
        alignContent: 'center'
    },
    buttonTXT: {
        fontSize: fontSize.button,
        fontFamily: 'SFUIText-Regular',
    },
    labeltag: {
        fontSize: fontSize.label,
        fontFamily: 'SFUIText-Regular',
    },
    addView: {
        backgroundColor: 'white',
        height: 50,
        borderRadius: 20,
        width: wp(40),
        alignItems: 'center',
        elevation: 5,
        flexDirection: 'row',
        justifyContent: 'space-evenly',

    },
    innerView2: {
        height: hp('10%'),
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',

    },


})