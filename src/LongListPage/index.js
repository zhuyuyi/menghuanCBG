import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import { WingBlank, WhiteSpace, Flex } from '@ant-design/react-native';

import styles from './styles.js';


export default class LongListPage extends Component {

    render() {
        return (
            <View style={styles.layout}>
                <WhiteSpace size="md" />

                <WingBlank
                    size="md"
                    style={styles.myBorderTop}
                >
                    <Flex
                        justify="between"
                        align="start"
                        style={{ ...styles.myPaddingTopBottom, ...styles.itemBgc }}
                    >
                        <Flex>
                            <View style={styles.imgBox}>
                                <Image
                                    style={styles.newPutAwayItemHeader}
                                    source={require('./../../libs/imgs/0005.png')}
                                />
                            </View>
                            <Flex
                                direction="column"
                                justify="between"
                                align="start"

                            >
                                <Flex style={styles.myPadding}>
                                    <Text style={{ ...styles.myFont }}>魔王寨</Text>
                                    <Text style={{ ...styles.myFont }}> | </Text>
                                    <Text style={{ ...styles.myFont }}>69级</Text>
                                </Flex>
                                <Flex style={styles.myPadding}>
                                    <Text style={{ ...styles.myFont }}>总评分:11111   人物评分:11111</Text>

                                </Flex>
                                <Flex style={styles.myPadding}>
                                    <Text style={styles.textRed}>神兽x2</Text>
                                    <Text style={styles.textRed}>11红神宠</Text>
                                    <Text style={styles.textRed}>激活经脉</Text>
                                </Flex>
                            </Flex>
                        </Flex>
                        <Flex
                            direction="column"
                            style={styles.myPadding}
                        >
                            <Flex
                                align="stretch"
                            >
                                <Text style={{ ...styles.myFont }}>
                                    双平台-你妈死了
                                </Text>
                                <Text style={styles.myPaddingLeft}>
                                    <Image
                                        style={styles.deviceIcon}
                                        source={require('./../../libs/imgs/apple.png')}
                                    />
                                </Text>
                            </Flex>
                            <Flex>
                                <Text style={styles.money}>
                                    ￥ 699.00
                                </Text>
                            </Flex>
                        </Flex>
                    </Flex>
                </WingBlank>


                <WhiteSpace size="md" />
            </View>
        );
    }
}