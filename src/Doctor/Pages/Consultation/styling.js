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
        height: hp('100%')
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
        width: wp('50%'),
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

    PrecribeView: {
        height: hp('23%'),
        padding: 10,
        borderBottomWidth: 0.5
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
    }
})