import React, { Component } from 'react';
import { View } from 'react-native';
import MySwiper from './compoments/mySwiper.js';
import Recommend from './compoments/recommend.js';
import NewPutAway from './compoments/newPutAway.js';

import { deviceHeight } from './../../utils/utils';

export default class ListPage extends Component {

    render() {
        return (
            <View style={{ minHeight: deviceHeight, backgroundColor: '#f1f1f1' }}>
                <MySwiper />
                <Recommend />
                <NewPutAway

                    navigation={this.props.navigation}
                />
            </View>
        );
    }
}