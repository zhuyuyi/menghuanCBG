import React, { Component } from 'react';
import { View, Text } from 'react-native';

import MySwiper from './compoments/mySwiper.js';
import Recommend from './compoments/recommend.js';
import NewPutAway from './compoments/newPutAway.js'

export default class ListPage extends Component {

    render() {
        return (
            <View>
                <MySwiper />
                <Recommend />
                <NewPutAway />
            </View>
        );
    }
}