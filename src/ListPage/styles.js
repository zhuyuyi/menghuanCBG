import {
    StyleSheet,
} from 'react-native';

import {
    setSpText,
    scaleSize,
    deviceWidth,
    deviceHeight
} from './../../utils/utils';


const styles = StyleSheet.create({
    // 轮播图
    swiperImg: {
        height: deviceHeight / 4,
        width: deviceWidth
    },
    // 专题推荐
    recommendBox: {
        backgroundColor: 'white',
        marginTop: scaleSize(-30),
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
    },
    recommendTitle: {
        paddingTop: scaleSize(12),
        paddingBottom: scaleSize(8),
        fontSize: setSpText(18),
        textAlign: 'center',
    },
    recommendTitleImage: {
        width: scaleSize(80),
    },
    // 底部标题
    recommendTextTitle: {
        fontSize: setSpText(18),
    },
    recommendTextTitleColor_1: {
        color: 'rgb(112, 151, 146)'
    },
    recommendTextTitleColor_2: {
        color: 'rgb(206, 124, 40)'
    },
    recommendTextTitleColor_3: {
        color: 'rgb(244, 147, 147)'
    },
    recommendTextTitleColor_4: {
        color: 'rgb(125, 181, 202)'
    },
    // 盒子
    recommendItemBox: {
        flexWrap: 'wrap',
        flexDirection: 'row',
        justifyContent: 'center',
    },
    // 4个元素
    recommendItem: {
        margin: scaleSize(6),
        paddingLeft: scaleSize(16),
        paddingTop: scaleSize(16),
        width: deviceWidth / 2.1,
        height: scaleSize(120),
        borderRadius: 10,
    },
    recommendItemBgc_1: {
        backgroundColor: 'rgb(203, 239, 233)',
    },
    recommendItemBgc_2: {
        backgroundColor: 'rgb(245, 229, 210)'
    },
    recommendItemBgc_3: {
        backgroundColor: 'rgb(247, 215, 215)'
    },
    recommendItemBgc_4: {
        backgroundColor: 'rgb(199, 224, 234)'
    },
    // 专题推荐背景图
    recommendItemImage: {
        marginLeft: deviceWidth / 3.5,
        width: deviceWidth / 6.5,
    },
    _newPutAwayOutBox: {
        marginTop: scaleSize(14),
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10
    },
    newPutAwayOutBox: {
        marginLeft: scaleSize(14),
        width: deviceWidth / 1.05,
        backgroundColor: '#fff',
    },
    // 最新上架 box
    newPutAwayBox: {
        width: deviceWidth / 1.05,
        flexWrap: 'wrap',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'stretch',
    },
    // item
    newPutAwayItem: {
        width: deviceWidth / 1.09,
        borderTopColor: '#f0f0f0',
        borderTopWidth: scaleSize(1),
        flexWrap: 'wrap',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingTop: scaleSize(20),
        paddingBottom: scaleSize(20),
        marginLeft: scaleSize(14),
    },
    middle: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
    },
    newPutAwayItemHeader: {
        borderRadius: 10,
        width: scaleSize(120),
        height: scaleSize(120),
    },
    // item 中部
    newPutAwayItemMiddle: {
        flexDirection: 'column',
        justifyContent: 'space-between',
        paddingLeft: scaleSize(20),
    },
    newPutAwayItemMiddleItem: {
        flexWrap: 'wrap',
        flexDirection: 'row',
        justifyContent: 'flex-start',
    },
    schoolText: {
        paddingRight: scaleSize(10),
        color: '#555',
        fontSize: setSpText(16)
    },
    line: {
        color: '#ddd',
    },
    text: {
        color: '#888',
        fontSize: setSpText(12),
    },
    subText: {
        paddingTop: scaleSize(2),
        paddingLeft: scaleSize(10),
    },
    subTextRed: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
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
    // 右侧
    newPutAwayItemRight: {
        flexWrap: 'wrap',
        flexDirection: 'column',
        justifyContent: 'flex-start',
    },
    deviceIcon: {
        width: scaleSize(25),
        height: scaleSize(25),
    },
    serverText: {
        paddingRight: scaleSize(10)
    },
    money: {
        color: '#e74e4b',
        fontWeight: '700',
        fontSize: setSpText(20),
    },
    // 查看全部
    lookMoreBox: {
        marginTop: scaleSize(25),
        justifyContent: 'center',
        flexDirection: 'row',
    },
    lookMore: {
        lineHeight: scaleSize(40),
        width: scaleSize(160),
        fontSize: setSpText(12),
        backgroundColor: '#fff',
        textAlign: 'center',
        borderWidth: 1,
        borderColor: '#ddd',
        color: '#333',
        paddingTop: scaleSize(4),
        paddingBottom: scaleSize(4),
        borderRadius: 20,
    }
})

export default styles;