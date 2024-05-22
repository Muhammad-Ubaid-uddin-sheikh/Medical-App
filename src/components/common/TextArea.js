import React, {useState} from 'react';
import {View, TextInput, Text, StyleSheet} from 'react-native';

const TextArea = ({placeholder, onChangeText, value, maxLength}) => {
  const [remainingWords, setRemainingWords] = useState(maxLength);

  const handleTextChange = text => {
    const words = text.trim().split(/\s+/).filter(Boolean);
    const remaining = maxLength - words.length;
    setRemainingWords(remaining >= 0 ? remaining : 0);
    onChangeText(text);
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.textArea}
        placeholder={placeholder}
        onChangeText={handleTextChange}
        value={value}
        multiline={true}
        maxLength={maxLength}
        textAlignVertical="top"
      />
      <Text style={styles.remainingWords}>
        {remainingWords} words remaining
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
  },
  textArea: {
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 8,
    fontSize: 16,
    minHeight: 100,
  },
  remainingWords: {
    alignSelf: 'flex-end',
    marginTop: 5,
    marginRight: 10,
    color: 'gray',
  },
});

export default TextArea;
