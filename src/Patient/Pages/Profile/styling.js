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
    avatarStyles: {
        backgroundColor: '#cccccc',
        height: 150,
        width: 150,
        borderRadius: 500
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
        width: wp('60%'),
        height: hp('7%'),
        alignItems: 'center',
        justifyContent: 'center',
    },
    nameTXT: {
        fontSize: fontSize.button,
        fontFamily: 'SFUIText-Regular'
    },
    headTXT: {
        fontSize: fontSize.label,
        fontFamily: 'SFUIText-Bold'
    },
    labelTXT: {
        fontSize: fontSize.label,
        fontFamily: 'SFUIText-Regular'
    },
    emailView: {
        padding: 10,
        // backgroundColor: 'pink',
        width: wp('70%'),
        height: hp('15%'),
        justifyContent: 'space-evenly'
    }

})