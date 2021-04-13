import { hp, wp } from '../../../Global/Styles/Scalling';
import { StyleSheet } from 'react-native';
import { fontSize } from '../../../Constant/Constant';

export const styling = StyleSheet.create({
    safeContainer: {
        flex: 1,
        backgroundColor: 'white'

    },
    mainContainer: {
        flex: 1,
        paddingHorizontal: wp(2),
        paddingTop: hp(1)
        // backgroundColor: 'red'
    },
    heading: {
        paddingLeft: wp(2),
        height: hp('8%'),
        width: wp(100),
        backgroundColor: 'white',
        flexDirection: 'row',
        alignItems: 'center',
        elevation: 2,
        paddingRight: wp(7),
        justifyContent: 'space-between'
    },

    headingTXT: {
        fontSize: fontSize.head,
        color: 'black',
    },
    headView: {
        marginVertical: hp(1),
        alignItems: 'center',
        justifyContent: 'center',
    },
    avatarView: {
        backgroundColor: '#cccccc',
        height: wp(30),
        width: wp(30),
        borderRadius: wp(20),
        alignItems: 'center',
        justifyContent: 'center'
    },
    innerView: {
        marginTop: hp(2),
        width: wp('80%'),
        alignItems: 'center',
        alignSelf: 'center'
        // justifyContent: 'center',
    },
    signupView: {
        height: hp('20%'),
        width: wp('90%'),
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center'
    },
    signupOpacity: {

        backgroundColor: '#3f4079',
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