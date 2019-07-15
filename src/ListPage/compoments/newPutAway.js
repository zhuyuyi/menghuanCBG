import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import { WingBlank, WhiteSpace, Flex } from '@ant-design/react-native';
import styles from './../styles.js';
import { format } from './../../../utils/utils';

export default class NewPutAway extends Component {
    state = {
        data: [
            {
                highlights: ['神兽x2', '11红神宠', '激活经脉'],
                price: 629900,
                storage_type: 4,
                serverid: 131,
                collect_num: 836,
                server_name: '雷浪穿云',
                level_desc: '69级',
                game_ordersn: '201907021701716-131-W0WGWFQVVJ84',
                equip_level: 69,
                format_equip_name: '魔王寨',
                area_name: '双平台',
                desc_sumup_short: '总评分:31215   人物评分:16590'
            },
            {
                highlights: ['神兽x2', '11红神宠', '激活经脉'],
                price: 629900,
                storage_type: 4,
                serverid: 131,
                collect_num: 836,
                server_name: '雷浪穿云',
                level_desc: '69级',
                game_ordersn: '201907021701716-131-W0WGWFQVVJ84',
                equip_level: 69,
                format_equip_name: '魔王寨',
                area_name: '双平台',
                desc_sumup_short: '总评分:31215   人物评分:16590'
            }
        ]
    }

    render() {

        const {
            data
        } = this.state;

        const {
            navigation
        } = this.props;

        return (
            <View >
                <WingBlank size="md" style={{ ...styles.newPutAwayOutBox, ...styles._newPutAwayOutBox }}>
                    <Text style={styles.recommendTitle}>
                        <Image
                            style={styles.recommendTitleImage}
                            source={require('./../../../libs/imgs/left.png')}
                        />
                        最新上架
                        <Image
                            style={styles.recommendTitleImage}
                            source={require('./../../../libs/imgs/right.png')}
                        />
                    </Text>
                </WingBlank>
                <View>
                    {
                        data.map((item, index) => {
                            return (
                                <WingBlank
                                    size="md"
                                    style={styles.myBorderTop}
                                    key={index}
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
                                                    source={require('./../../../libs/imgs/0005.png')}
                                                />
                                            </View>
                                            <Flex
                                                direction="column"
                                                justify="between"
                                                align="start"

                                            >
                                                <Flex style={styles.myPadding}>
                                                    <Text style={{ ...styles.myFont }}>
                                                        {item.format_equip_name}
                                                    </Text>
                                                    <Text style={{ ...styles.myFont }}> | </Text>
                                                    <Text style={{ ...styles.myFont }}>
                                                        {item.level_desc}
                                                    </Text>
                                                </Flex>
                                                <Flex style={styles.myPadding}>
                                                    <Text style={{ ...styles.myFont }}>
                                                        {item.desc_sumup_short}
                                                    </Text>

                                                </Flex>
                                                <Flex style={styles.myPadding}>
                                                    {
                                                        item.highlights.map((i, idx) => {
                                                            return (
                                                                <Text
                                                                    style={styles.textRed}
                                                                    key={idx}
                                                                >
                                                                    {i}
                                                                </Text>
                                                            )
                                                        })
                                                    }
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
                                                    {item.area_name}-{item.server_name}
                                                </Text>
                                                <Text style={styles.myPaddingLeft}>
                                                    <Image
                                                        style={styles.deviceIcon}
                                                        source={require('./../../../libs/imgs/apple.png')}
                                                    />
                                                </Text>
                                            </Flex>
                                            <Flex>
                                                <Text style={styles.money}>
                                                    {item.price && format(item.price)}
                                                </Text>
                                            </Flex>
                                        </Flex>
                                    </Flex>
                                </WingBlank>
                            )
                        })
                    }
                </View>
                <Flex
                    justify="center"
                    style={styles.lookMoreBox}
                >
                    <Text style={styles.lookMore} onPress={() => {
                        navigation.navigate('LongList')
                    }}>
                        查看全部
                    </Text>
                </Flex>
            </View>
        )
    }
}