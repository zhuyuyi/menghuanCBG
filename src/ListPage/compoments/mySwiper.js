import React, { Component } from 'react';
import { Image, View, Text } from 'react-native';
import styles from './../styles';
import { Carousel } from '@ant-design/react-native';

export default class MySwiper extends Component {
    state = {

        imgs: [
            {
                id: 0,
                url: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg',
            },
            {
                id: 1,
                url: 'https://s2.ax1x.com/2019/04/09/AIpqyQ.png',
            }
        ]
    }

    render() {
        return (
            <Carousel
                selectedIndex={2}
                autoplay
                infinite
            >
                {
                    this.state.imgs.map((item, index) => {
                        return (
                            <Image
                                style={styles.swiperImg}
                                key={index}
                                source={{ uri: item.url }}
                            />
                        )
                    })
                }
            </Carousel>
        )
    }
}