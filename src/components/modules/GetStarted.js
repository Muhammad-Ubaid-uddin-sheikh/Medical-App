import React from 'react';
import {StyleSheet, View, Text, ImageBackground} from 'react-native';
import Button from '../common/Button';

const GetStarted = () => {
  return (
    <ImageBackground
      source={require('../../images/healthbg.jpg')} // Replace './background_image.jpg' with the path to your image
      style={styles.backgroundImage}
      resizeMode="cover">
      <View style={styles.content}>
        <Text style={styles.heading}>More Comfortable Chat with Doctor</Text>
        <Text style={styles.paragraph}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur nam
          architecto id ullam laudantium eos ad accusamus ipsam consectetur
          commodi ducimus esse doloribus
        </Text>
        <Button text="Get Started" />
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    width: '100%',
    height: '100%',
    justifyContent: 'flex-end',
  },

  content: {
    backgroundColor: 'white',
    padding: 30,
    borderRadius: 20,
    alignItems: 'center',
  },
  heading: {
    textAlign: 'center',
    fontSize: 24,
    fontWeight: '700',
    marginBottom: 10,
  },
  paragraph: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 10,
  },
});

export default GetStarted;
