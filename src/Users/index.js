import React, { Component } from 'react';
import { View, Text, Image, ImageBackground } from 'react-native';
import { WingBlank, WhiteSpace, Flex, Button, List, Icon } from '@ant-design/react-native';
import styles from './styles.js';

export default class Users extends Component {

    render() {
        return (
            <View
                style={styles.box}
            >
                <Text
                    style={styles.title}
                >
                    我的藏宝阁
                </Text>
                <ImageBackground
                    source={require('./../../libs/imgs/header-bg.jpg')}
                    imageStyle={styles.imgBgpic}
                    style={styles.picBox}
                >
                    <Image
                        style={styles.header}
                        source={require('./../../libs/imgs/touxiang.png')}
                    />
                    <Button
                        style={styles.button}
                        activeStyle={styles.activeStyle}
                    >
                        <Text style={styles.white}>登录</Text>
                    </Button>
                </ImageBackground>
                <Flex
                    direction="column"
                    justify="between"
                    align="start"
                >
                    <Flex
                        justify="between"
                        style={styles.listBox}
                    >
                        <Flex>
                            <Image source={require('./../../libs/imgs/list1.png')} />
                            <Text style={styles.text}>
                                我的钱包
                                </Text>
                        </Flex>
                        <Flex>
                            <Icon name="right" />
                        </Flex>
                    </Flex>
                    <Flex
                        justify="between"
                        style={styles.listBox}
                    >
                        <Flex>
                            <Image source={require('./../../libs/imgs/list2.png')} />
                            <Text style={styles.text}>
                                帮助中心
                            </Text>
                        </Flex>
                        <Icon name="right" />
                    </Flex>
                </Flex>
            </View >
        );
    }
}