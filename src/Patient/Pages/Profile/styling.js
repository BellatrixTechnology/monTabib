import { hp, wp } from '../../../Global/Styles/Scalling';
import { StyleSheet } from 'react-native';
import { fontSize } from '../../../Constant/Constant';

export const styling = StyleSheet.create({
    safeContainer: {
        flex: 1,
        backgroundColor: 'white'

    },
    mainContainer: {
        height: hp('100%'),
        width: wp('100%'),
        padding: 20,
        // backgroundColor: 'red'
    },
    headView: {
        // backgroundColor: 'pink',
        height: hp('20%'),
        width: wp('70%'),
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    avatarView: {
        backgroundColor: '#cccccc',
        height: wp(30),
        width: wp(30),
        borderRadius: wp(20),
        alignItems: 'center',
        justifyContent: 'center',
    },
    editOpacity: {
        backgroundColor: '#3f4079',
        width: wp('27%'),
        height: hp('4%'),
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center'
    },
    editTXT: {
        fontSize: fontSize.label,
        fontFamily: 'SFUIText-Bold',
        color: 'white'
    },
    innerView: {
        marginTop: 40,
        height: hp('50%'),
    },
    nameView: {
        width: wp(65),
        alignSelf: 'center',
        alignItems: 'flex-start',
        justifyContent: 'center',
    },
    nameTXT: {
        fontSize: fontSize.button,
        fontFamily: 'SFUIText-Bold',
    },
    headTXT: {
        fontSize: fontSize.label,
        fontFamily: 'SFUIText-Medium'
    },
    labelTXT: {
        fontSize: fontSize.label,
        fontFamily: 'SFUIText-Bold'
    },
    emailView: {
        padding: 10,
        // backgroundColor: 'pink',
        width: wp('70%'),
        height: hp('15%'),
        justifyContent: 'space-evenly'
    }

})