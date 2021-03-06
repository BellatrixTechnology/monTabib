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
    IconButton: {

        backgroundColor: 'white',
        color: 'black'
    },
    label: {
        fontSize: fontSize.head,
        fontFamily: 'SFUIText-Regular',
    },
    detailView: {
        height: hp(70),
        width: wp(90),
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