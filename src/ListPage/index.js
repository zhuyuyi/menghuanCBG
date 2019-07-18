import React, { Component } from 'react';
import { View } from 'react-native';
import MySwiper from './compoments/mySwiper.js';
import Recommend from './compoments/recommend.js';
import NewPutAway from './compoments/newPutAway.js';
import { connect } from 'react-redux';

import { deviceHeight } from './../../utils/utils';

class ListPage extends Component {

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

const mapStateToProps = (state) => {
    console.log(state, '111')
    return {
        zyy: state.zyy
    }
}

export default connect(mapStateToProps)(ListPage)