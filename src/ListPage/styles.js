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
    view: {
        marginBottom: scaleSize(50)
    },
    swiperImg: {
        height: deviceHeight / 4,
        width: deviceWidth
    },
    zyy: {
        color: 'red',
        fontSize: setSpText(30)
    },
    zyy1: {
        fontSize: setSpText(160)
    }
})

export default styles;