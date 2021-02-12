import { StyleSheet } from 'react-native'
import { hp, wp } from '../../../Global/Styles/Scalling';
import { fontSize } from '../../../Constant/Constant';

export const styling = StyleSheet.create({
    safeContainer: {
        flex: 1
    },
    mainContainer: {
        width: wp(100),
        height: hp(100),
        padding: 20,
        alignItems: 'center'

    },
    innerView: {
        padding: 10,
        height: hp(10),
        width: wp(100),
        alignItems: 'center',
        flexDirection: 'row',
        elevation: 2,
        backgroundColor: 'white',

    },
    IconButton: {
        backgroundColor: 'white',
        color: 'black'
    },
    label: {
        fontSize: fontSize.head,
        fontFamily: 'SFUIText-Regular',
    },
    avatarView: {
        height: hp(25),
        width: wp(50),
        flexDirection: 'row',
    },
    dataView: {
        marginTop: 10,
        height: hp(25),
        width: wp(80),

    },
    buttonView: {
        backgroundColor: 'white',
        height: 50,
        borderRadius: 15,
        width: wp(30),
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 10,
        marginTop: 20
    },
    avatarStyles: {
        backgroundColor: 'grey',
        height: 150,
        width: 150,
        borderRadius: 500
    },
    buttonTXT: {

        fontSize: fontSize.button,
        fontFamily: 'SFUIText-Regular',

    }

})