import {TouchableOpacity, Text, StyleSheet} from 'react-native';
import { Fonts } from '../style';

const Link = ({onPress, text, ...props}) => {
  return (
    <TouchableOpacity style={styles.link} onPress={onPress} {...props}>
      <Text style={styles.linkText}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  link: {},
  linkText: {
    color: '#116754',
    fontFamily:Fonts.MEDIUM
  },
});

export default Link;
