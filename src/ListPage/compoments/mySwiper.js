import React, { Component } from 'react';
import { Image } from 'react-native';
import styles from './../styles';
import { Carousel } from '@ant-design/react-native';

export default class MySwiper extends Component {
    state = {

        imgs: [
            {
                id: 0,
                url: 'https://s2.ax1x.com/2019/07/12/ZWRg4e.jpg',
            }, {
                id: 1,
                url: 'https://s2.ax1x.com/2019/07/12/ZWgLdS.png',
            }, {
                id: 2,
                url: 'https://s2.ax1x.com/2019/07/12/ZWgHqf.png',
            }
        ]
    }

    render() {
        return (
            <Carousel
                autoplay
                infinite
                dots={false}
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