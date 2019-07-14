import React, { Component } from 'react';
import { View, Text, ImageBackground, Image } from 'react-native';
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
        } = this.state

        return (
            <View >
                <View style={{ ...styles.newPutAwayOutBox, ...styles._newPutAwayOutBox }}>
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
                </View>
                <View style={{ ...styles.newPutAwayBox, ...styles.newPutAwayOutBox }}>
                    {
                        data.map((item, index) => {
                            return (
                                <View key={index} style={styles.newPutAwayItem}>
                                    <View style={styles.middle}>
                                        <View>
                                            <Image
                                                style={styles.newPutAwayItemHeader}
                                                source={require('./../../../libs/imgs/0005.png')}
                                            />
                                        </View>
                                        <View style={styles.newPutAwayItemMiddle}>
                                            <View style={styles.newPutAwayItemMiddleItem}>
                                                <Text style={styles.schoolText}>
                                                    {item.format_equip_name}
                                                </Text>
                                                <Text style={{ ...styles.text, ...styles.line }}>|</Text>
                                                <Text style={{ ...styles.subText, ...styles.text }}>
                                                    {item.level_desc}
                                                </Text>
                                            </View>
                                            <View style={styles.newPutAwayItemMiddleItem}>
                                                <Text style={styles.text}>
                                                    {item.desc_sumup_short}
                                                </Text>
                                            </View>
                                            <View style={styles.subTextRed}>
                                                {
                                                    item.highlights.map((i, index) => {
                                                        return (
                                                            <Text
                                                                key={index}
                                                                style={styles.textRed}
                                                            >
                                                                {i}
                                                            </Text>
                                                        )
                                                    })
                                                }
                                            </View>
                                        </View>
                                    </View>
                                    <View style={styles.newPutAwayItemRight}>
                                        <View style={styles.newPutAwayItemMiddleItem}>
                                            <Text style={{ ...styles.text, ...styles.serverText }}>
                                                {item.area_name}-{item.server_name}
                                            </Text>
                                            <Text>
                                                <Image
                                                    style={styles.deviceIcon}
                                                    source={require('./../../../libs/imgs/apple.png')}
                                                />
                                            </Text>
                                        </View>
                                        <View>
                                            <Text style={styles.money}>
                                                {item.price && format(item.price)}
                                            </Text>
                                        </View>
                                    </View>
                                </View>
                            )
                        })
                    }
                </View>
                <View style={styles.lookMoreBox}>
                    <Text style={styles.lookMore}>
                        查看全部
                    </Text>
                </View>
            </View>
        )
    }
}