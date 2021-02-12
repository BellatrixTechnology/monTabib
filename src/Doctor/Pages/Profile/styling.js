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
        padding: 20

    },
    innerView: {
        padding: 10,
        height: hp(10),
        width: wp(100),
        justifyContent: 'space-between',
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
        width: wp(90),
        flexDirection: 'row',
    },
    openView: {
        height: hp(25),
        width: wp(90),
        padding: 20
    },
    buttonView: {
        backgroundColor: 'white',
        height: 50,
        borderRadius: 15,
        width: wp(80),
        padding: 10,
        flexDirection: 'row',
        alignContent: 'center',
        alignItems: 'center',
        justifyContent: 'space-between',
        elevation: 10,
        marginTop: 20
    },
    fieldView: {
        height: hp(25),
        alignSelf: 'center'
    },
    avatarStyles: {
        backgroundColor: 'grey',
        height: 150,
        width: 150,
        borderRadius: 500
    },
    arrowButton: {
        backgroundColor: 'white'
    },
    labelView: {
        height: 150,
        width: 200,
        margin: 10,
        justifyContent: 'center',
        padding: 10
    },
    openTXT: {
        fontSize: fontSize.label,
        fontFamily: 'SFUIText-Bold',
    },
    tagTXT: {
        fontSize: fontSize.label,
        fontFamily: 'SFUIText-Regular',
    },
    buttonTXT: {

        fontSize: fontSize.button,
        fontFamily: 'SFUIText-Regular',

    }
})