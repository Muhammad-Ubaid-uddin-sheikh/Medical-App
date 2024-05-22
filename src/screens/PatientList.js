import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import React, { useEffect, useLayoutEffect, useState } from 'react';
import Header from '../components/layout/Header';
import { DoctorDetails } from '../../Data';
import Footer from '../components/layout/Footer';
import { getDoctors } from '../api/auth';
import SearchBar from '../components/common/SearchBar';
import { Fonts } from '../components/style';
import BookIcon from 'react-native-vector-icons/FontAwesome6'
import { getAppointment } from '../api/doctor';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { getMyAppointment } from '../api/nurse';
const PatientList = ({ navigation }) => {
  const [Patient, setPatient] = useState([]);

  
  const fetchDoctorApointment = async () => {
    try {
      const response = await getAppointment();
      setPatient(response.data);
    } catch (error) {
      console.error('Error fetching categories:', error);
    }
  };

  const fetchNurseApointment = async () => {
    try {
      const response = await getMyAppointment();
      setPatient(response.data);
    } catch (error) {
      console.error('Error fetching categories:', error);
    }
  };

  useEffect(async () => {
   let role =  await AsyncStorage.getItem('role')
    if(role === 'nurse'){
      fetchNurseApointment()

    }else{

      fetchDoctorApointment()

    }

  }, []);

useLayoutEffect

  return (
    <SafeAreaView style={{ backgroundColor: '#e3eeeb', flex: 1 }}>
      <View style={styles.main}>
        <View>
          <Header />
        </View>
        <View style={{ paddingHorizontal: 15, backgroundColor: 'white', paddingBottom: 15 }}>
          <SearchBar />
        </View>
        <View style={{ paddingHorizontal: 5 }}>
          <ScrollView style={styles.scroll}>
            {Patient.map((item, index) => {
                console.log('patent => ', item['patientId']?.username)
              return (
                <View style={styles.container} key={index}>
                  <View style={styles.childOne}>
                    {/* <Image style={{width:'100%',height:70,objectFit:'cover'}} source={{ uri: item.profileImage }} /> */}
                    <Image style={{ width: '100%', height: 80, objectFit: 'cover', borderRadius: 5 }} source={{ uri: 'https://i.pinimg.com/736x/8b/e9/70/8be970b311337d17d37b354b571565b9.jpg' }} />
                  </View>
                  <View style={styles.childTwo}>
                    <View style={styles.childTwoOne}>
                      <Text style={styles.headingText}>{item['patientId']?.email.split('@')?.[0] || item['patientId']?.username }</Text>
                      <Text style={styles.badge}>Online</Text>
                    </View>
                    <View style={styles.childTwoTwo}>
                      <Text style={styles.light}>Patient #{item.education}</Text>
                      <Text style={styles.light}>Disease Category</Text>
                    </View>
                    <View style={styles.childThree}>
                      <TouchableOpacity style={styles.childThreeThree} onPress={() => navigation.navigate('ParticularPatientScreen', { item })}>
                        {/* <Image source={require('../images/homeOne.png')} /> */}
                        {/* <BookIcon name='book-medical' size={13} color={'white'}/> */}
                        <Text style={styles.childThreeThreeText}>
                          View More
                        </Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>
              )
            })}
          </ScrollView>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    justifyContent: 'space-between',
    padding: 5,
    margin: 5,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginHorizontal: 10
  },
  scroll: {
    height: '90%',
  },
  headingText: {
    fontSize: 16,
    color: '#116754',
    fontFamily: Fonts.MEDIUM,
    // paddingLeft:13
    paddingLeft: 5
  },
  main: {
    backgroundColor: '#E5EEEC',
    height: '100%',
  },
  childOne: {
    width: '25%',
    backgroundColor: '#e3eeeb',
    borderWidth: 2,
    borderRadius: 5,
    borderColor: '#116754'

  },
  childTwo: {
    width: '75%',
    paddingLeft: 10
  },
  childTwoOne: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  badge: {
    borderRadius: 50,
    padding: 3,
    color: 'white',
    fontSize: 10,
    backgroundColor: '#116754',
    fontFamily: Fonts.REGULAR,
    paddingHorizontal: 10,
    marginRight: 10
  },
  light: {
    backgroundColor: '#E7F0EE',
    color: '#116754',
    padding: 5,
    borderRadius: 2,
    margin: 5,
    fontSize: 10,
    fontFamily: Fonts.MEDIUM,
    borderWidth: 1,
    borderColor: '#116754'

  },
  childTwoTwo: {
    display: 'flex',
    flexDirection: 'row',
    // paddingLeft:9
  },
  childThree: {
    display: 'flex',
  },
  childThreeThree: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 8,
    borderRadius: 5,
    backgroundColor: '#116754',
    margin: 5,
  },
  childThreeThreeText: {
    color: 'white',
    fontSize: 11,
    marginLeft: 3,
    fontFamily: Fonts.REGULAR,
    paddingLeft: 5
  },
});

export default PatientList;
