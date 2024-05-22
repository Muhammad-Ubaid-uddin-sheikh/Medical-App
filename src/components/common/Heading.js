import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import { Fonts } from '../style';

const Heading = ({text}) => {
  return <Text style={styles.heading}>{text}</Text>;
};
const styles = StyleSheet.create({
  heading: {
    color: '#160846',
    fontSize: 30,
    fontFamily:Fonts.MEDIUM
  },
});

export default Heading;
