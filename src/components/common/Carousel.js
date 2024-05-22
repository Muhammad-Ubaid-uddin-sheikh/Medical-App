import React, {useState} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import Swiper from 'react-native-swiper';
import {carouselData} from '../../../Data';
import { Fonts } from '../style';

const ImageTextCarousel = () => {
  return (
    <Swiper style={styles.container} paginationEnabled loop>
      {carouselData.map((item, index) => (
        <View key={index} style={styles.slide}>
          <Image source={item.image} style={styles.image} />
          <Text style={styles.text}>{item.text} 
          <Text style={[styles.text,{fontFamily:Fonts.MEDIUM}]}>{item.bold}</Text>
          {item.afterBold}
          </Text>
        </View>
      ))}
    </Swiper>
  );
};

const styles = StyleSheet.create({
  slide: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    resizeMode: 'contain',
    width:'100%',
    height:300
  },
  text: {
    fontSize: 17,
    textAlign: 'center',
    color: '#160846',
    fontFamily:Fonts.LIGHT,
    width:320
    
  },
  pagination: {
    position: 'absolute',
    bottom: 10,
    right: 10,
  },
});

export default ImageTextCarousel;
