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
    layout: {
        minHeight: deviceHeight,
        backgroundColor: '#eee'
    },
    myFont: {
        color: '#888',
        fontSize: setSpText(12),
    },
    myPadding: {
        padding: scaleSize(4)
    },
    myPaddingLeft: {
        paddingLeft: scaleSize(4)
    },
    myPaddingTopBottom: {
        padding: scaleSize(10),
    },
    myBorderTop: {
        borderTopColor: '#efefef',
        borderTopWidth: 1
    },
    itemBgc: {
        backgroundColor: '#fff',
        borderRadius: 8,
    },
    imgBox: {
        paddingRight: scaleSize(20)
    },
    newPutAwayItemHeader: {
        borderRadius: 10,
        width: scaleSize(120),
        height: scaleSize(120),
    },
    textRed: {
        fontSize: setSpText(12),
        paddingLeft: scaleSize(4),
        paddingRight: scaleSize(4),
        marginRight: scaleSize(4),
        color: '#ee8381',
        borderColor: '#ee8381',
        borderRadius: 3,
        borderWidth: 1,
    },
    deviceIcon: {
        width: scaleSize(25),
        height: scaleSize(25),
    },
    money: {
        color: '#e74e4b',
        fontWeight: '700',
        fontSize: setSpText(20),
    },
})