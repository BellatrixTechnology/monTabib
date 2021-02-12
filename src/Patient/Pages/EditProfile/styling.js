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
        width: wp('80%'),
        height: hp('40%'),
        alignItems: 'center',
        alignSelf: 'center'
        // justifyContent: 'center',
    },
    signupView: {
        height: hp('20%'),
        width: wp('90%'),
        alignItems: 'center',
        justifyContent: 'center'
    },
    signupOpacity: {

        backgroundColor: '#007bff',
        height: hp('6%'),
        width: wp('80%'),
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10
    },

    signupText: {
        fontFamily: 'SFUIText-Bold',
        fontSize: fontSize.button,
        color: 'white'

    },

})