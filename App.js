import React, { Component } from 'react';
import { Provider } from '@ant-design/react-native';
import { createAppContainer, createStackNavigator } from 'react-navigation';

import LongList from './src/LongListPage'
import Tab from './src/BottomTabBar'

const MyRouter = createAppContainer(createStackNavigator({
    Homes: {
        screen: Tab,
        navigationOptions: {
            header: null  //顶部导航很多都会自己自定义，这里就为空
        }
    },
    LongList: {
        screen: LongList,
        navigationOptions: () => {
            return {
                title: '商品列表'
            }
        }
    },
}, {
        initialRouteName: 'Homes'
    }
))

export default class MyAndroid extends Component {

    render() {
        return (
            <Provider>
                <MyRouter />
            </Provider>
        );
    }
}