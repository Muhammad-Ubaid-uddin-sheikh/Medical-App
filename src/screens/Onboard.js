import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  StatusBar,
} from 'react-native';
import React from 'react';
import Carousel from '../components/common/Carousel';
import {useNavigation} from '@react-navigation/native';
import { Fonts } from '../components/style';

const Onboard = () => {
  const navigation = useNavigation();
  const handleStartSubmit = () => {
    navigation.navigate('signin');
  };
  return (
    // <SafeAreaView>
    <View style={{flex:1,backgroundColor:'#e3eeeb'}}>

   
      <StatusBar barStyle="dark-content" backgroundColor={'#e3eeeb'}/>
      <View style={styles.mainCon}>
        <View style={styles.childOne}>
          <Image source={require('../images/logo.png')} />
        </View>
        <View style={styles.childTwo}>
          <Carousel />
        </View>
        <View style={styles.childThree}>
          <TouchableOpacity onPress={handleStartSubmit} style={styles.buttonOne}>
            <Text style={styles.buttonOneText}>Sign In</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.buttonTwo}
            onPress={()=>navigation.navigate('signup')}>
            <Text style={styles.buttonTwoText}>Get Started</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.lastChild}>
          <Text style={styles.textSub}>Health Comes First, Join In!</Text>
          
        </View>
      </View>
      </View>
  );
};

export default Onboard;
const styles = StyleSheet.create({
  mainCon: {
    height: '100%',
    paddingVertical: 50,
    backgroundColor:'#e3eeeb'
  },
  childOne: {
    alignSelf: 'center',
    backgroundColor:'#e3eeeb'
  },
  childTwo: {
    height: 400,
    marginVertical: 35,
    backgroundColor:'#e3eeeb'
  },
  childThree: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  lastChild: {
    alignSelf: 'center',
    marginTop: 15,
    fontFamily:Fonts.MEDIUM,
    flexDirection:'row'
  },
  buttonOne: {
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 5,
    alignItems: 'center',
    backgroundColor: 'white',
    width: '40%',
    borderWidth:1,
    borderColor:'#116754'
  },
  buttonOneText: {
    fontSize: 15,
    // color: '#AEB4B2',
    fontFamily:Fonts.LIGHT,
    color:'black',
    
  },
  buttonTwo: {
    backgroundColor: '#116754',
    paddingVertical: 14,
    paddingHorizontal: 24,
    borderRadius: 5,
    alignItems: 'center',
    width: '40%',
  },
  buttonTwoText: {
    color: 'white',
    fontSize: 14,
    fontFamily:Fonts.LIGHT
  },
  textSub:{
    fontFamily:Fonts.LIGHT,
    color:'#1E1E1E'
  }
});
