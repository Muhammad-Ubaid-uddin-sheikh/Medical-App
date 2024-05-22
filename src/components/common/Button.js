import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';
import { Fonts } from '../style';

const Button = ({text,Link, ...props}) => {
  return (
    <TouchableOpacity style={styles.button} onPress={Link}  {...props}>
      <Text style={styles.buttonText}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#116754',
    paddingVertical: 14,
    paddingHorizontal: 24,
    borderRadius: 5,
    alignItems: 'center',
    width: '100%',
  },
  buttonText: {
    color: 'white',
    fontSize: 15,
    fontFamily:Fonts.REGULAR
  },
});

export default Button;
