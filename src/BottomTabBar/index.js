import React from 'react';
import { createAppContainer, createBottomTabNavigator, createStackNavigator } from 'react-navigation';
import { Image } from 'react-native';
import { scaleSize } from './../../utils/utils';
import ListPage from './../ListPage';
import Users from './../Users';

export default MyTabBar = createAppContainer(createBottomTabNavigator({
    Home: {
        screen: ListPage,
        navigationOptions: {
            tabBarLabel: '首页',
            tabBarIcon: ({ focused }) => (
                <Image
                    style={{ width: scaleSize(40), height: scaleSize(40) }}
                    source={focused ? require('./../../libs/imgs/tab1.png') : require('./../../libs/imgs/tab1_.png')}
                />
            )
        }
    },
    Users: {
        screen: Users,
        navigationOptions: {
            tabBarLabel: '我的',
            tabBarIcon: ({ focused }) => (
                <Image
                    style={{ width: scaleSize(40), height: scaleSize(40) }}
                    source={focused ? require('./../../libs/imgs/tab2.png') : require('./../../libs/imgs/tab2_.png')}
                />
            )
        }
    }
}, {
        initialRouteName: 'Home',
        tabBarOptions: {
            showIcon: true,
            activeTintColor: '#e74e4b',
            inactiveTintColor: '#aaa'
        }
    }
))