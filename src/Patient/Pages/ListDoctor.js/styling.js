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
        // justifyContent: 'center',
        backgroundColor: 'white'
    },
    inner2View: {
        height: hp(80),
        width: wp(90),
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white'

    },
    headersView: {
        height: hp(6),
        alignItems: 'center',
        alignSelf: 'center',
        marginBottom: 5,
    },
    drView: {
        height: hp(20),
        flexDirection: 'row',
        width: wp(90),
        alignItems: 'center',
        justifyContent: 'center',
        justifyContent: 'space-evenly'
    },
    dropdownView: {
        alignItems: 'center'
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
    swiperContainer: {
        height: hp(100),
        width: wp(100),
        backgroundColor: '#45347a',
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center'
    },
    slide1: {
        height: hp(90),
        width: wp(80),
        borderRadius: 10,
        padding: 10,
        alignContent: 'center',
        alignSelf: 'center',
        alignItems: 'center',
        backgroundColor: 'white'
    },
    timeOpacity: {
        width: wp(70),
        alignItems: 'center',
        borderColor: '#3f4079',
        height: hp(4),
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        borderWidth: 1,
        // justifyContent: 'center',
        marginTop: hp(1),
        marginBottom: hp(2),
        borderRadius: 10
    },
    selecttimeOpacity: {
        width: wp(70),
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        backgroundColor: '#3f4079',
        height: hp(4),
        borderWidth: 1,
        // justifyContent: 'center',
        marginTop: hp(1),
        marginBottom: hp(2),
        borderRadius: 10
    },
    selecttimeTxt: {
        fontSize: fontSize.button,
        fontFamily: 'SFUIText',
        color: 'white'
    },
    nextbutton: {
        fontSize: hp(5),
        fontFamily: 'SFUIText-Bold',
        color: 'white'
    },
    timeView: {
        backgroundColor: '#45347a',
        width: wp(30),
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: hp(2),
        borderRadius: wp(6),
    },
    timeTxt: {
        fontSize: fontSize.button,
        fontFamily: 'SFUIText',
        color: 'white'
    },
    unselecttimeTxt: {
        fontSize: fontSize.button,
        fontFamily: 'SFUIText',
        color: '#3f4079'
    },
    FlatListView: {
        // backgroundColor: 'red',
        height: hp(75),
        marginVertical: hp(2),
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center'
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
    OpacityLogconfirm: {
        marginTop: hp(5),
        height: hp('6%'),
        width: wp('70%'),
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
    sucesssView: {
        height: hp(20),
        alignItems: 'center',
        padding: 10
    },
    sucessTxT: {
        fontFamily: 'SFUIText',
        fontSize: fontSize.line,
        textAlign: 'center',
        lineHeight: 30
    },
    msgTxT: {
        fontFamily: 'SFUIText',
        fontSize: fontSize.line,
        textAlign: 'center',
        lineHeight: 30,
        color: '#e74e84'
    },
    loadMore: {
        backgroundColor: '#d3d3d3',
        alignItems: 'center',
        paddingVertical: hp(1),
        width: wp(30),
        alignSelf: 'center',
        borderRadius: wp(6),
        marginBottom: hp(2),


    },
    loadMoreText: {
        color: 'white',
        fontSize: hp(3)
    }
})