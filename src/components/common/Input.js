import React, {useState} from 'react';
import {Controller} from 'react-hook-form';
import EyeIcon from 'react-native-vector-icons/FontAwesome5'
import {
  View,
  TextInput,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';
import { Fonts } from '../style';

const Input = ({
  props,
  placeholder,
  onChangeText,
  value,
  secureTextEntry,
  keyboardType,
  textContentType,
}) => {
  const [showPassword, setShowPassword] = useState(false);
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  return (
    <View style={styles.container}>
      <TextInput
        {...props}
        style={styles.input}
        placeholder={placeholder}
        placeholderTextColor="gray"
        onChangeText={onChangeText}
        value={value}
        secureTextEntry={!showPassword && secureTextEntry}
        keyboardType={keyboardType}
        textContentType={textContentType}
      />
      {secureTextEntry && (
        <TouchableOpacity
          onPress={togglePasswordVisibility}
          style={styles.toggleButton}>
            <EyeIcon name="eye" size={21} color={'black'}/>
          
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 8,
  },
  input: {
    backgroundColor: '#E7F0EE',
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 8,
    fontSize: 13,
    color: 'black',
    fontFamily:Fonts.LIGHT,
    borderWidth:0.5,
    borderColor:'#116754'
  },
  toggleButton: {
    position: 'absolute',
    top: 12,
    right: 10,
  },
  eyeIcon: {
    width: 24,
    height: 24,
  },
});

export default Input;
