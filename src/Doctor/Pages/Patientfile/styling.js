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
    patientView: {
        height: hp(70),
    },
    labeltag: {
        fontSize: fontSize.tag,
        fontFamily: 'SFUIText-Bold'
    },
    labeltext: {
        fontSize: fontSize.label,
        fontFamily: 'SFUIText-Regular',
        textAlign: 'justify'
    },



})