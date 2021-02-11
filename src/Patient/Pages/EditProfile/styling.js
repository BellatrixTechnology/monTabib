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
    heading: {
        height: hp('8%'),
        backgroundColor: 'white',
        justifyContent: 'center',
        flexDirection: 'row',
        alignItems: 'center',
        elevation: 2
    },
    headingTXTView: {
        width: wp('85%'),
        alignItems: 'center',
    },
    headingTXT: {
        fontSize: fontSize.head,
        color: 'black'
    },
    headView: {
        height: hp('20%'),
        alignItems: 'center',
        justifyContent: 'center',
    },
    avatarStyles: {
        backgroundColor: '#cccccc',
        height: 150,
        width: 150,
        borderRadius: 500
    },
    innerView: {
        marginTop: 50,
        // width: wp('80%'),
        height: hp('40%'),
        alignItems: 'center',
        // justifyContent: 'center',
    },
    signupView: {
        width: wp('90%'),
        height: hp('16%'),
        justifyContent: 'center',
    },
    signupOpacity: {
        width: wp('85%'),
        height: hp('8%'),
        borderRadius: 8,
        backgroundColor: '#007bff',
        alignItems: 'center',
        alignSelf: 'center',
        justifyContent: 'center'
    },

    signupText: {
        fontSize: fontSize.button,
        color: 'white',
        fontFamily: 'SFUIText-Bold'

    },

})