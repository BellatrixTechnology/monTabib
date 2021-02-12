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
        height: hp('40%'),
        // width: wp('70%'),
    },
    headerTXT: {
        fontSize: fontSize.head,
        fontFamily: 'SFUIText-bold',
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
    },
    labelView: {
        paddingTop: 20,
        height: hp('8%'),
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderBottomWidth: 0.5
    },
    labelTXT: {
        fontSize: fontSize.label,
        fontFamily: 'SFUIText-bold',
        fontWeight: '700'
    }
})