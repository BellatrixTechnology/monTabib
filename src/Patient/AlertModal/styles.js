
import { StyleSheet } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { fontSize } from '../../Constant/Constant';

const styles = StyleSheet.create({

    loginModalContainer: {
        backgroundColor: 'white',
        width: wp(80),
        alignSelf: 'center',
        borderRadius: wp(5),
        alignItems: 'center',
        paddingVertical: hp(6)
    },
    headersView: {
        height: hp(6),
        alignItems: 'center',
        alignSelf: 'center',
        marginTop: hp(2),
        marginBottom: hp(6)
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
        width: wp(70),
    },
    dropdownLabel: {
        color: 'grey'
    },
    dropdownStyle: {
        width: wp(70),
    },
    dropdowncontainerStyle: {
        width: wp(40),
    },
    OpacityLog: {
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
    headText: {
        fontFamily: 'SFUIText-Bold',
        fontSize: fontSize.button,
        color: 'black',
        lineHeight: hp(8)
    },
    DoctorNameStyle: {
        fontFamily: 'SFUIText-Bold',
        fontSize: fontSize.button,
        color: 'black',
    },
    DoctorStyle: {
        fontFamily: 'SFUIText-Bold',
        fontSize: fontSize.label,
        color: 'grey',
    }
})
export default styles