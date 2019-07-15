import {
    StyleSheet,
} from 'react-native';

import {
    setSpText,
    scaleSize,
    deviceWidth,
    deviceHeight
} from './../../utils/utils';

export default styles = StyleSheet.create({
    box: {
        height: deviceHeight,
        backgroundColor: '#efefef'
    },
    picBox: {
        width: deviceWidth,
        height: deviceHeight / 3,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    imgBgpic: {
        width: deviceWidth,
        height: deviceHeight / 3
    },
    title: {
        textAlign: 'center',
        padding: scaleSize(10),
        fontSize: setSpText(16)
    },
    header: {
        width: scaleSize(150),
        height: scaleSize(150),
        borderRadius: 150
    },
    button: {
        marginTop: scaleSize(30),
        width: scaleSize(130),
        borderRadius: 50,
        height: scaleSize(60),
        backgroundColor: '#e74e4b',
        borderWidth: 0
    },
    activeStyle: {
        backgroundColor: '#e74e4b',
        opacity: 0.8
    },
    white: {
        color: '#fff',
    },
    text: {
        lineHeight: scaleSize(60),
        fontSize: setSpText(14),
        marginLeft: scaleSize(20),
    },
    listBox: {
        height: scaleSize(80),
        backgroundColor: '#fff',
        width: deviceWidth,
        borderBottomColor: '#efefef',
        borderBottomWidth: 1,
        paddingLeft: scaleSize(20),
        paddingRight: scaleSize(20),
    },
})