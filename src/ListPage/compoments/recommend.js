import React, { Component } from 'react';
import { View, Text, ImageBackground, Image } from 'react-native';
import styles from './../styles.js';

export default class Recommend extends Component {

    render() {
        return (
            <View style={styles.recommendBox}>
                <View>
                    <Text style={styles.recommendTitle}>
                        <Image
                            style={styles.recommendTitleImage}
                            source={require('./../../../libs/imgs/left.png')}
                        />
                        专题推荐
                        <Image
                            style={styles.recommendTitleImage}
                            source={require('./../../../libs/imgs/right.png')}
                        />
                    </Text>
                </View>
                <View style={styles.recommendItemBox}>
                    <ImageBackground
                        source={{ uri: 'https://s2.ax1x.com/2019/07/12/ZWXN59.png' }}
                        imageStyle={styles.recommendItemImage}
                        style={{ ...styles.recommendItem, ...styles.recommendItemBgc_1 }}

                    >
                        <Text
                            style={{ ...styles.recommendTextTitle, ...styles.recommendTextTitleColor_1, }}
                        >
                            经脉
                        </Text>
                        <Text
                            style={styles.recommendTextTitleColor_1}
                        >打通任督二脉</Text>
                    </ImageBackground>
                    <ImageBackground
                        source={{ uri: 'https://s2.ax1x.com/2019/07/12/ZWzqmV.png' }}
                        imageStyle={styles.recommendItemImage}
                        style={{ ...styles.recommendItem, ...styles.recommendItemBgc_2 }}
                    >
                        <Text
                            style={{ ...styles.recommendTextTitle, ...styles.recommendTextTitleColor_2, }}
                        >
                            排兵布阵
                        </Text>
                        <Text
                            style={styles.recommendTextTitleColor_2}
                        >
                            天覆地载阵了解下
                        </Text>
                    </ImageBackground>
                    <ImageBackground
                        source={{ uri: 'https://s2.ax1x.com/2019/07/12/ZWXtUJ.png' }}
                        imageStyle={styles.recommendItemImage}
                        style={{ ...styles.recommendItem, ...styles.recommendItemBgc_3 }}
                    >
                        <Text
                            style={{ ...styles.recommendTextTitle, ...styles.recommendTextTitleColor_3, }}
                        >
                            成就达人
                        </Text>
                        <Text
                            style={styles.recommendTextTitleColor_3}
                        >
                            走在时尚前沿
                        </Text>
                    </ImageBackground>
                    <ImageBackground
                        source={{ uri: 'https://s2.ax1x.com/2019/07/12/ZWzvY4.png' }}
                        imageStyle={styles.recommendItemImage}
                        style={{ ...styles.recommendItem, ...styles.recommendItemBgc_4 }}
                    >
                        <Text
                            style={{ ...styles.recommendTextTitle, ...styles.recommendTextTitleColor_4, }}
                        >
                            骠骑达人
                        </Text>
                        <Text
                            style={styles.recommendTextTitleColor_4}
                        >
                            我有一只小坐骑
                        </Text>
                    </ImageBackground>
                </View>
            </View>
        )
    }
}