import {
    View,
    Text,
    StyleSheet,
    Image,
    ScrollView,
    TouchableOpacity,
    SafeAreaView,
  } from 'react-native';
  import React, {useEffect, useState} from 'react';
  import {getDoctors} from '../api/auth';
  import SearchBar from '../components/common/SearchBar';
  import { Fonts } from '../components/style';
  import BookIcon from 'react-native-vector-icons/FontAwesome6'
  const DoctorsList = ({navigation,route}) => {
    const [doctors, setDoctors] = useState([]);
    useEffect(() => {
      const fetchCategories = async () => {
        try {
          const response = await getDoctors();
          setDoctors(response.data.data);
        } catch (error) {
          console.error('Error fetching categories:', error);
        }
      };
      fetchCategories();
    }, []);
  
    return (
      <SafeAreaView style={{backgroundColor:'#e3eeeb',flex:1}}>
        <View style={styles.main}>
          <View style={{paddingHorizontal:15,backgroundColor:'white',paddingBottom:15,paddingTop:15}}>
        <SearchBar />
        </View>
        <Text style={{fontFamily:Fonts.MEDIUM,fontSize:20,paddingTop:10,color:'black',paddingHorizontal:15,paddingBottom:3}}>Labs Nearby</Text>
          <View style={{paddingHorizontal:5}}>
            <ScrollView style={styles.scroll}>
              {doctors.map((item, index) => (
                <View style={styles.container} key={index}>
                  <View style={styles.childOne}>
                    {/* <Image style={{width:'100%',height:70,objectFit:'cover'}} source={{ uri: item.profileImage }} /> */}
                    <Image style={{width:'100%',height:80,objectFit:'cover',borderRadius:5}} source={{ uri: 'https://storage.googleapis.com/treatspace-prod-media/pracimg/u-1998/pagewebp_0_Rj4uKkZ.webp' }} />
                  </View>
                  <View style={styles.childTwo}>
                    <View style={styles.childTwoOne}>
                      <Text style={styles.headingText}>Lab Name</Text>
                      <Text style={styles.badge}>Available</Text>
                     </View>
                    <View style={styles.childTwoTwo}>
                      <Text style={styles.light}> All Tests</Text>
                      <Text style={styles.light}> 10AM - 10PM</Text>
                    </View>
                    <View style={styles.childThree}>
                      {/* <TouchableOpacity style={styles.childThreeThree} onPress={()=>navigation.navigate('ParticularDoctorScreen',{item})}>
                        <BookIcon name='book-medical' size={13} color={'white'}/>
                        <Text style={styles.childThreeThreeText}>
                          Book Appointment
                        </Text>
                      </TouchableOpacity> */}
                      <Text style={{fontFamily:Fonts.REGULAR,fontSize:13}}>
                      Location:  <Text style={{fontFamily:Fonts.REGULAR,fontSize:12}}>Lorem Ipsum Hospital, Dolor Sit Road,
Amet City</Text>
                      </Text>
                     
                    </View>
                  </View>
                </View>
              ))}
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
      justifyContent:'space-between',
      padding: 5,
      margin: 5,
      borderRadius: 5,
      paddingHorizontal:10,
      marginHorizontal:10
    },
    scroll: {
      height: '81%',
    },
    headingText: {
      fontSize: 16,
      color: '#116754',
      fontFamily:Fonts.MEDIUM,
      // paddingLeft:13
      paddingLeft:5
    },
    main: {
      backgroundColor: '#E5EEEC',
      height: '100%',
    },
    childOne: {
      width: '25%',
      backgroundColor:'#e3eeeb',
      borderWidth:2,
      borderRadius:5,
      borderColor:'#116754'
      
    },
    childTwo: {
      width: '75%',
      paddingLeft:10
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
      fontFamily:Fonts.REGULAR,
      paddingHorizontal:10,
      marginRight:10
    },
    light: {
      backgroundColor: '#E7F0EE',
      color: '#116754',
      padding: 5,
      borderRadius: 5,
      margin: 5,
      fontSize: 10,
      fontFamily:Fonts.MEDIUM,
      borderWidth:1,
      borderColor:'#116754',
     width:'35%',
     textAlign:'center'
  
    },
    childTwoTwo: {
      display: 'flex',
      flexDirection: 'row',
      width:'100%'
      // paddingLeft:9
    },
    childThree: {
      // paddingLeft:10
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
      fontFamily:Fonts.REGULAR,
      paddingLeft:5
    },
  });
  
  export default DoctorsList;
  