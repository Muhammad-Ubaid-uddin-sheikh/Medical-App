import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import Swiper from 'react-native-swiper';
import {DashboardCarouselData} from '../../../Data';
import { Fonts } from '../style';

const CarouselDashboard = () => {
  return (
    <Swiper showsPagination={false} loop>
      {DashboardCarouselData.map((item, index) => (
        <View key={index} style={styles.slide}>
          <View style={styles.leftchild}>
            <View style={styles.leftchildOne}>
              <Text style={styles.heading}>{item.heading}</Text>
            </View>
            <Text style={styles.text}>{item.text}</Text>
          </View>
          <View style={styles.rightchild}>
            <Image style={{width:70,objectFit:'contain'}} source={item.image} />
          </View>
        </View>
      ))}
    </Swiper>
  );
};

const styles = StyleSheet.create({
  slide: {
    marginHorizontal: 12,
    marginTop:10,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 5,
    paddingHorizontal:20,
    height: 130,
  },
  leftchild: {
    width: '80%',
  },
  leftchildOne: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    marginLeft: 15,
    width:100,
    height:50,
    objectFit:'contain'
  },
  heading: {
    fontSize: 20,
  fontFamily:Fonts.MEDIUM,
    color: '#160846',
  },
  text: {
    fontSize: 10,
    color: 'grey',
    fontFamily:Fonts.REGULAR,
  },
});

export default CarouselDashboard;
