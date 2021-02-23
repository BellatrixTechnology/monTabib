import { StyleSheet } from 'react-native'
import { hp, wp } from '../../../Global/Styles/Scalling';
import { fontSize } from '../../../Constant/Constant';

export const styling = StyleSheet.create({
    safeContainer: {
        flex: 1
    },


    containerView: {
        padding: 20,
        alignContent: 'center',
        height: hp(95),
    },
    headerView: {
        height: hp(5),
        width: wp(100),
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 10,
        flexDirection: 'row',

    },
    headerText: {
        fontSize: fontSize.header,
        fontFamily: 'SFUIText-Bold',
    },
    innerContainerView: {
        width: wp(90),
        height: hp(81.5),
        alignSelf: 'center',
        backgroundColor: 'red',
        alignItems: 'center'
    },
    dayView: {
        height: hp(10),
        width: wp(80),
        alignItems: 'center',
        justifyContent: 'center'
    },
    dayTXT: {
        fontSize: fontSize.label,
        fontFamily: 'SFUIText-Bold',
    }
})
