import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
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
        paddingRight: 20,
        paddingLeft: 20,
        paddingBottom: 20,
        backgroundColor: 'white'
    },
    headerView: {
        height: hp('10%'),
        alignItems: 'center',
        justifyContent: 'center',

    },

    calendarView: {
        marginTop: 20,
        height: hp('80%'),
        width: wp('90%'),
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center'

    },
    headerTXT: {
        fontSize: fontSize.head,
        fontFamily: 'SFUIText-bold',
    },
    opcaityView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 20,
    },
    consultationOpacity: {
        flexDirection: 'row',
        width: wp('42%'),
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
    absenceOpacity: {
        backgroundColor: '#dc3545',
        flexDirection: 'row',
        width: wp('42%'),
        height: hp('7%'),
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        alignSelf: 'flex-end'
    }
})