import React, { Component } from 'react';
import { Provider } from '@ant-design/react-native';
import ListPage from './src/ListPage'

export default class MyAndroid extends Component {

    render() {
        return (
            <Provider>
                <ListPage />
            </Provider>
        );
    }
}