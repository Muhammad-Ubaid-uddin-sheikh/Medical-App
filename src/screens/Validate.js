import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  SafeAreaView,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import Heading from '../components/common/Heading';
import Input from '../components/common/Input';
import Button from '../components/common/Button';
import {useNavigation} from '@react-navigation/native';
import {useForm} from 'react-hook-form';

const Validate = () => {
  const {
    register,
    handleSubmit,
    formState: {errors},
    reset,
  } = useForm();

  const navigation = useNavigation();
  const handleFormSubmit = () => {};

  const handleBackPress = () => {
    navigation.navigate('recoveraccount');
  };

  const [seconds, setSeconds] = useState(60);
  const [isTimerRunning, setIsTimerRunning] = useState(true);

  const onTimerComplete = () => {
    setSeconds(60);
    setIsTimerRunning(true);
  };

  useEffect(() => {
    if (isTimerRunning && seconds > 0) {
      const timer = setTimeout(() => {
        setSeconds(seconds - 1);
      }, 1000);

      return () => clearTimeout(timer);
    } else {
      setIsTimerRunning(false);
    }
  }, [seconds, isTimerRunning]);

  return (
    <SafeAreaView style={{backgroundColor:'#e3eeeb',flex:1}}>
      <View style={styles.parent}>
        <View style={styles.firstChild}>
          <TouchableOpacity onPress={handleBackPress}>
            <Image source={require('../images/back.png')} />
          </TouchableOpacity>
        </View>
        <View style={styles.secondChild}>
          <Heading text="Let Us" />
          <Heading text="Validate" />
        </View>
        <View>
          <View>
            <Input placeholder="Enter Recovery Email" keyboardType="numeric" />
          </View>
          <Text style={{textAlign: 'right'}}>
            {seconds > 0 ? `${seconds} sec` : 'Resend Code'}
          </Text>
          <View style={styles.bottomCon}>
            <Button
              text={isTimerRunning ? 'Validate' : 'Resend Code'}
              onPress={isTimerRunning ? handleFormSubmit : onTimerComplete}
              disabled={isTimerRunning}
            />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  parent: {
    paddingVertical: 30,
    paddingHorizontal: 15,
  },
  firstChild: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  bottomCon: {
    marginTop: 20,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 150,
  },

  secondChild: {
    marginVertical: 40,
  },

  link: {
    alignSelf: 'flex-end',
  },
});

export default Validate;
