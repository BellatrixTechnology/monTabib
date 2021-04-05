import { fontSize } from '../../../Constant/Constant';
import { hp, wp } from '../../../Global/Styles/Scalling';
import { StyleSheet } from 'react-native';
const styling = StyleSheet.create({
    safeContainer: {
        flex: 1
    },
    mainContainer: {
        width: wp('100%'),
        paddingLeft: 20,
        paddingRight: 20,
        paddingBottom: 20,
        alignItems: 'center',
        backgroundColor: 'white',

    },
    headerView: {
        width: wp('100%'),
        paddingLeft: 20,
        paddingRight: 20,
        backgroundColor: 'white',

    },
    labelView: {
        height: hp('12%'),
        justifyContent: 'center',
        alignItems: 'center'
    },
    innerView: {
        width: wp('80%'),
        alignItems: 'center',
        justifyContent: 'center',
    },
    welcomeText: {
        fontFamily: 'SFUIText-Bold',
        fontSize: fontSize.header,
        color: '#3f4079'
    },
    signText: {
        fontFamily: 'SFUIText-Regular',
        fontSize: fontSize.label,
        color: '#d1d3d2'
    },
    fieldfocus: {
        width: wp('80%'),
        height: hp('7%'),
        borderRadius: 10,
        backgroundColor: 'white',
        color: '#3f4079',
        marginBottom: 20,
        elevation: 6,
        flexDirection: 'row',
        alignItems: 'center',
        padding: 8,
        borderColor: '#3f4079',
        borderWidth: 1
    },
    fieldnotfocus: {
        width: wp('80%'),
        height: hp('7%'),
        backgroundColor: 'white',
        color: '#3f4079',
        marginBottom: 20,
        flexDirection: 'row',
        alignItems: 'center',
        padding: 8,
        borderBottomWidth: 1,
        borderBottomColor: '#3f4079'

    },
    forgetView: {
        width: wp('80%'),
        alignItems: 'flex-end'
    },
    forgetlabel: {
        fontFamily: 'SFUIText-Bold',
        fontSize: fontSize.txt,
        color: '#3f4079'
    },
    labeltag: {
        fontFamily: 'SFUIText-Bold',
        fontSize: fontSize.txt,
        color: 'black'
    },
    OpacityView: {
        height: hp('10%'),
        width: wp('90%'),
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    OpacityLog: {
        height: hp('6%'),
        width: wp('80%'),
        backgroundColor: '#3f4079',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,

    },
    Opacitytxt: {
        fontFamily: 'SFUIText-Bold',
        fontSize: fontSize.button,
        color: 'white'
    },
    Opacitycreate: {
        marginTop: 10,
        height: hp('6%'),
        width: wp('80%'),
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row'
    }

})
export { styling };