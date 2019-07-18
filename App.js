import React, { Component } from 'react';
// import { Provider } from '@ant-design/react-native';
import { createAppContainer, createStackNavigator } from 'react-navigation';
import { create } from 'dva-core';
import { Provider } from 'react-redux';

import ListPage from './src/ListPage/models/api.js'

import LongList from './src/LongListPage';
import Tab from './src/BottomTabBar';

const app = create();

const models = [ListPage];

models.forEach((o) => {
    // 装载models对象
    app.model(o);
});

app.start();

const store = app._store


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
            <Provider store={store}>
                <MyRouter />
            </Provider>
        );
    }
}