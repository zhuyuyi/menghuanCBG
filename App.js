import React, { Component } from 'react';
// import { Provider } from '@ant-design/react-native';
import { createAppContainer, createStackNavigator } from 'react-navigation';
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';
import indexPageReducer from './reducers/listPage.js';

const allReducers = combineReducers({
    indexPageReducer
});

const store = createStore(allReducers)

import LongList from './src/LongListPage';
import Tab from './src/BottomTabBar';

const MyRouter = createAppContainer(createStackNavigator({
    Homes: {
        screen: Tab,
        navigationOptions: {
            // 顶部导航很多都会自己自定义，这里就为空
            header: null
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