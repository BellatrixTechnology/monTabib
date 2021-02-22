import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { StyleSheet } from 'react-native';
import { fontSize } from '../../../Constant/Constant';
export const styling = StyleSheet.create({
    safeContainer: {
        flex: 1
    },
    mainContainer: {
        paddingRight: 20,
        paddingLeft: 20,
        paddingBottom: 20,
        width: wp('100%'),
        height: hp('100%'),
        alignItems: 'center',
        backgroundColor: '#45347a'

    },
    headView: {
        height: hp(10),
        justifyContent: 'center'
    },
    innerView: {
        height: hp(50),
        flexDirection: 'row',
        width: wp(90),
        alignItems: 'center',
        justifyContent: 'center',
        justifyContent: 'space-evenly'
    },
    headTXT: {
        fontSize: fontSize.header,
        fontFamily: 'SFUIText-Bold',
        color: 'white'
    },
    dropdownView: {
        alignItems: 'center',
        height: hp(8),
        width: wp(40),
        marginBottom: 30,
        elevation: 3
    },
    dropDown: {
        width: wp(40),
    },
    dropdownLabel: {
        color: 'grey'
    },
    dropdownStyle: {
        width: wp(40),
    },
    dropdowncontainerStyle: {
        width: wp(40),
    },
    OpacityLog: {
        height: hp('8%'),
        width: wp('80%'),
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10
    },
    Opacitytxt: {
        fontFamily: 'SFUIText-Bold',
        fontSize: fontSize.button,
        color: '#e74e84'
    },
})