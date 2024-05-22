import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  SafeAreaView,
} from 'react-native';
import React from 'react';
import Link from '../components/common/Link';
import Heading from '../components/common/Heading';
import Input from '../components/common/Input';
import Button from '../components/common/Button';
import {useNavigation} from '@react-navigation/native';
import BackIcon from 'react-native-vector-icons/Ionicons'
const RecoverAccount = () => {
  const navigation = useNavigation();
  const handleSubmit = () => {
    navigation.navigate('validate');
  };

  const handleBackPress = () => {
    navigation.navigate('signin');
  };

  return (
    <SafeAreaView style={{backgroundColor:'#e3eeeb',flex:1}}>
      <View style={styles.parent}>
        <View style={styles.firstChild}>
          <TouchableOpacity onPress={handleBackPress}>
            {/* <Image source={require('../images/back.png')} /> */}
            <BackIcon name = 'chevron-back' size={25} color='black'/>
          </TouchableOpacity>
        </View>
        <View style={styles.secondChild}>
          <Heading text="Recover Your" />
          <Heading text="Account" />
        </View>
        <View>
          <View>
            <Input
              placeholder="Enter Recovery Email"
              keyboardType="email-address"
              textContentType="emailAddress"
            />
          </View>
          <View style={styles.bottomCon}>
            <Button text="Send Code" onPress={handleSubmit} />
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

export default RecoverAccount;
