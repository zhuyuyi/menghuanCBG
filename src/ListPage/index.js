import React, { Component } from 'react';
import { Image, View, Text } from 'react-native';
import styles from './styles';
import { Button, Toast, Carousel } from '@ant-design/react-native';

import MySwiper from './compoments/mySwiper.js';


export default class ListPage extends Component {

    componentDidMount() {

    }

    onEndReached = (params) => {

    }

    render() {
        return (
            <View>
                <MySwiper />
                <Text>专题推荐</Text>

            </View>
        );
    }
}