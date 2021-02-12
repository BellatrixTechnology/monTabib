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
    blankView: {
        height: hp(35),
        fontFamily: 'SFUIText-Regular',

    },
    dataView: {
        marginTop: 10,
        height: hp(25),
        width: wp(80),
        padding: 20,

    },
    buttonView: {
        backgroundColor: 'white',
        height: hp(7),
        borderRadius: 5,
        alignSelf: 'center',
        width: wp(60),
        alignItems: 'center',
        elevation: 10,
        marginTop: 20,
        flexDirection: 'row',
        justifyContent: 'center'
    },

    tagLabel: {
        fontSize: fontSize.button,
    },
    continueView: {
        backgroundColor: 'white',
        height: 50,
        borderRadius: 50,
        width: wp('40%'),
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 5,
        marginTop: 20,


    },
    innerView2: {
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        height: hp('55%'),
        width: wp('100%'),
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 10
    },
    buttonTXT: {
        fontSize: fontSize.button,
        fontFamily: 'SFUIText-Regular',
    },

})