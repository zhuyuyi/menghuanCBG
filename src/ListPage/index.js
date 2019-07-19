import React, { Component } from 'react';
import { View } from 'react-native';
import MySwiper from './compoments/mySwiper.js';
import Recommend from './compoments/recommend.js';
import NewPutAway from './compoments/newPutAway.js';
import { connect } from 'react-redux';

import { deviceHeight } from './../../utils/utils';
// actions
import { apiToProps } from './../../actions/api.js'

class ListPage extends Component {

    componentDidMount() {
        const {
            dispatch
        } = this.props;
        apiToProps(dispatch)
    }

    render() {
        console.log(this.props)
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

export default connect((state) => {
    return {
        listPage: state.listPage
    }
})(ListPage)