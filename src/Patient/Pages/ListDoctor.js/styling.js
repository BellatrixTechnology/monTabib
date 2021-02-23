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
        flexDirection: 'row',
        alignItems: 'center',
        height: hp(10),
        width: wp(90),
        justifyContent: 'space-between'
    },
    innerView: {
        height: hp(80),
        width: wp(90),
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white'
    },
    nameView: {
        height: hp(13),
        alignItems: 'center'
    },
    headTXT: {
        fontSize: fontSize.header,
        fontFamily: 'SFUIText-Bold',
        color: 'white'
    },
    DRTXT: {
        fontSize: fontSize.header,
        fontFamily: 'SFUIText-Bold',
        color: '#e74e84',
        lineHeight: 60
    },
    headDRTXT: {
        fontSize: fontSize.head,
        fontFamily: 'SFUIText-Bold',
        color: 'black',
        lineHeight: 60
    },
    labelTXT: {
        fontSize: fontSize.line,
        fontFamily: 'SFUIText-Bold',
        color: 'black',
        lineHeight: 20
    },
    labelDRTXT: {
        fontSize: fontSize.label,
        fontFamily: 'SFUIText-Bold',
        color: 'black',
        lineHeight: 28
    },
    dayView: {
        height: hp(3),
        width: wp(70),
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center',
    },
    selecttimeView: {
        height: hp(5),
        width: wp(80),
        alignSelf: 'center',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    timeOpacity: {
        width: wp(20),
        alignItems: 'center',
        borderColor: '#3f4079',
        height: hp(4),
        borderWidth: 1,
        justifyContent: 'center',
        marginRight: 10,
        borderRadius: 10
    },
    selecttimeOpacity: {
        width: wp(20),
        alignItems: 'center',
        backgroundColor: '#3f4079',
        height: hp(4),
        justifyContent: 'center',
        marginRight: 10,
        borderRadius: 10
    },
    selecttimeTxt: {
        fontSize: fontSize.button,
        fontFamily: 'SFUIText',
        color: 'white'
    },
    timeTxt: {
        fontSize: fontSize.button,
        fontFamily: 'SFUIText',
        color: '#3f4079'
    },
    OpacityLog: {
        marginTop: hp(5),
        height: hp('6%'),
        width: wp('80%'),
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 15,
        borderWidth: 1,
        borderColor: '#e74e84',
        marginBottom: hp(3),
        elevation: 4
    },
    Opacitytxt: {
        fontFamily: 'SFUIText-Bold',
        fontSize: fontSize.button,
        color: '#e74e84'
    },
})