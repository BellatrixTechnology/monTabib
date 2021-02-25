import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { StyleSheet } from 'react-native';
import { fontSize } from '../../../Constant/Constant';
export const styling = StyleSheet.create({
    safeContainer: {
        // backgroundColor: 'red',
        flex: 1
    },
    mainContainer: {
        paddingRight: 20,
        paddingLeft: 20,
        paddingBottom: 20,
        width: wp('100%'),
        height: hp('90%'),
    },
    headView: {
        height: hp(6),
        
    },
    headerView: {
        height: hp('10%'),
        alignItems: 'center',
        justifyContent: 'center',

    },
    headerTXT: {
        fontSize: fontSize.head,
        fontFamily: 'SFUIText-bold',
    },
    consultationOpacity: {
        backgroundColor: 'red',
        flexDirection: 'row',
        width: wp('15%'),
        height: hp('7%'),
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        backgroundColor: '#0069da',
        alignSelf: 'flex-end'
    },
    consultTXT: {
        fontSize: fontSize.button,
        fontFamily: 'SFUIText',
        color: 'white'
    },

    patientView: {
        marginTop: 10,
        height: hp('24%'),
        padding: 10,
    },
    patientTXT: {
        fontSize: fontSize.button,
        fontFamily: 'SFUIText-bold',
        fontWeight: 'bold'

    },
    detailView: {
        flexDirection: 'row',
        width: wp('80%'),
        height: hp('5%'),
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    headTXT: {
        fontSize: fontSize.label,
        fontWeight: 'bold'
    },
    labelTXT: {
        fontSize: fontSize.label,

    },
    opacityButton: {
        flexDirection: 'row',
        height: hp('8%'),
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    prescriptOpacity: {
        width: wp('45%'),
        height: hp('5%'),
        backgroundColor: '#0069da',
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 10
    },
    removeOpacity: {
        width: wp('35%'),
        height: hp('5%'),
        backgroundColor: '#e9ecef',
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 10

    },
    opacityTXT: {
        fontSize: fontSize.label,
        color: 'white'
    },
    removeTXT: {
        fontSize: fontSize.label,

    },
    reportView: {
        height: hp('23%'),
        padding: 10,
        borderBottomWidth: 0.5
    },
    PrecribeView: {
        height: hp('25%'),
        padding: 10,
        // borderBottomWidth: 0.5
    },
    servicetextinput: {
        marginTop: 10,
        height: hp('15%'),
        borderWidth: 1,
        borderRadius: 10,
        borderColor: 'grey',
        textAlignVertical: 'top'

    },
    SaveView: {
        height: hp('25'),
        alignItems: 'center',
        justifyContent: 'center'
    },
    SaveOpacity: {
        width: wp('35%'),
        height: hp('7%'),
        backgroundColor: '#007bff',
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 10
    },
    txtInputView: {
        flexDirection: 'row',
        justifyContent: 'space-between',

    },
    stextinput: {
        width: wp(55),
        borderWidth: 1,
        borderRadius: 10,
        borderColor: 'grey',
        textAlignVertical: 'center',
        marginBottom: 4,
    },
    sPriceinput: {
        width: wp(25),
        borderWidth: 1,
        borderRadius: 10,
        borderColor: 'grey',
        textAlignVertical: 'center',
        marginBottom: 10
    },
    addButton: {
        height: hp('5%'),
        flexDirection: 'row',
        width: wp('30%'),
    },
    mainAddView: {
        height: hp(100),
        width: wp(100),
        padding: 20,
        backgroundColor: '#3f4079',
        // justifyContent: 'center'
    },
    swiperView: {
        height: hp(80),
        alignSelf: 'center',
        backgroundColor: 'white'

    },
    addPatientView: {
        height: hp(80),
        backgroundColor: 'white',

    },
    checkView: {
        width: wp(90),
        height: hp(6),
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 10,

    },
    patientDataView: {
        height: hp(70),
        width: wp(80),
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center',
    },
    dropdownView: {
        alignItems: 'center',
        height: hp(7),
        justifyContent: 'center',
        alignSelf: 'center',
        marginBottom: hp(10)
    },
    dropDown: {
        width: wp(80),
    },
    dropdownLabel: {
        color: 'grey'
    },
    dropdownStyle: {
        width: wp(80),
    },
    dropdowncontainerStyle: {
        width: wp(80),
    },
    opacityView: {
        height: hp(15),
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
    patientDropView: {
        marginTop: hp(20),
        height: hp(30),
        justifyContent: 'space-evenly'
    },
    timeView: {
        height: hp(80),
        width: wp(80),
        alignSelf: 'center',
    },
    dayView: {
        height: hp(5),
        width: wp(70),
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center'
    },
    selecttimeView: {
        height: hp(10),
        width: wp(70),
        alignSelf: 'center',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'

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
    detailsView: {
        height: hp(80),
        width: wp(80),
        alignSelf: 'center',
    },
    innerDetail: {
        height: hp(50),
        width: wp(70),
        alignSelf: 'center',
        justifyContent: 'center',
    },
    opacityPView: {
        height: hp(20),
        alignSelf: 'center'
    }
})