import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  SafeAreaView,
  StatusBar,
  ScrollView,
} from 'react-native';
import CarouselDashboard from '../components/common/CarouselDashboard';
import Header from '../components/layout/Header';
import {useNavigation} from '@react-navigation/native';
import Footer from '../components/layout/Footer';
import SearchBar from '../components/common/SearchBar';
import { Fonts } from '../components/style';

const Dashboard = () => {
  const navigation = useNavigation();
  const handleDoctorCategory = () => {
    navigation.navigate('doctorscategory');
  };

  return (
    <SafeAreaView >
      <StatusBar barStyle="dark-content" backgroundColor={'white'} />
      <View style={[styles.main,{backgroundColor:'#e3eeeb'}]}>
        <Header />
        <View style={{paddingHorizontal:15,backgroundColor:'white',paddingBottom:15}}>
      <SearchBar />
      </View>
      <ScrollView showsVerticalScrollIndicator={false} showsHorizontalScrollIndicator={false}>
        <View style={styles.carousel}>
          <CarouselDashboard />
        </View>
        <TouchableOpacity onPress={handleDoctorCategory}>
          <View style={styles.thirdchild}>
            <View style={styles.thirdchildOne}>
              <Image style={{width:40,height:40,objectFit:'contain',marginLeft:12}} source={require('../images/doctor.png')} />
              <Text style={styles.headingMian}>Consult Doctors</Text>
              <Text style={styles.textPara}>
                Lorem Ipsum Dolor Sit Amet , Lorem Ipsum Dolor Sit Amet
              </Text>
            </View>
            <View style={{width:'50%'}}>
              <Image style={{width:'100%',objectFit:'contain',height:120,right:0}} source={require('../images/doctors.png')} />
            </View>
          </View>
        </TouchableOpacity>
        

       
        <View style={styles.fourthChild}>
        
          <View style={styles.fourthChildOne}>
          <TouchableOpacity onPress={()=>navigation.navigate('LabsNearBY')}>
            <View style={{width:'100%'}}>
              <Text style={styles.headingMian}>Diagnostics</Text>
              <Text style={styles.textPara}>
                Lorem Ipsum Dolor Sit Amet, Lorem Ipsum Dolor Sit Amet
              </Text>
            </View>
            <View style={styles.fourthChildOneTwo}>
              <View style={{width:'50%'}}> 
              <Image style={{width:'100%',height:50,objectFit:'contain',left:-10}} source={require('../images/testube.png')} />
              </View>
              <View style={{width:'50%',}}>
              <Image style={{width:'100%',height:120,objectFit:'contain',right:-10}} source={require('../images/hand.png')} />
              </View>
             
              
            </View>
            </TouchableOpacity>
          </View>
          
          <View style={styles.fourthChildTwo}>
            <View>
              <Text style={styles.headingMian}>Hire Nurses</Text>
              <Text style={styles.textPara}>
                Lorem Ipsum Dolor Sit Amet, Lorem Ipsum Dolor Sit Amet
              </Text>
            </View>
            <View style={[styles.fourthChildOneTwo,{justifyContent:'flex-end',width:'100%',marginTop:10}]}>
              <Image style={{width:'100%',height:120,objectFit:'contain',bottom:-10,right:-10}} source={require('../images/doctorsTwo.png')} />
              {/* <Image source={require('../images/symbol.png')} /> */}
            </View>
          </View>
        </View>
        <View style={styles.fifthChild}>
          <View style={{width:'10%',flex:1,alignItems:'center',justifyContent:'center'}}>
            <Image style={{width:40,height:40,objectFit:'contain'}} source={require('../images/report.png')} />
          </View>
          <View style={{width:'60%'}}>
            <Text style={styles.headingMian}>Test Reports</Text>
            <Text style={styles.textPara}>
              Lorem Ipsum Dolor Sit Amet, Lorem Ipsum Dolor Sit Amet
            </Text>
          </View>
          <View style={{width:'30%',alignItems:'center',justifyContent:'center'}}>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Upload Report</Text>
          </TouchableOpacity>
          </View>
          
        </View>
        </ScrollView>
        {/* <Footer /> */}
      </View>
   
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  textPara:{
    fontFamily:Fonts.LIGHT,
    fontSize:11,
    paddingLeft:10,
    color:'white'
  },
  carousel: {
    height: 150,
  },
  headingMian:{
    fontFamily:Fonts.MEDIUM,
    color:'white',
    fontSize:20,
    paddingLeft:10
  },
  main: {
    backgroundColor: '#E7F0EE',
    height: '100%',
  },

  top: {
    display: 'flex',
    flexDirection: 'column',
    margin: 5,
    padding: 5,
  },

  topOne: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  topOneOne: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },

  topOneOneText: {
    fontSize: 10,
    color: '#116754',
    fontWeight: '600',
    marginLeft: 4,
  },

  topOneOneHead: {
    fontSize: 8,
    color: 'black',
    marginLeft: 4,
  },

  thirdchild: {
    // margin: 10,
    padding: 4,
    marginHorizontal:13,
    borderRadius: 5,
    backgroundColor: '#5B8F6B',
    flexDirection: 'row',
    alignItems:'center',
    justifyContent:'space-between'

  },
  thirdchildOne: {
    width: '50%',

  },
  heading: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#160846',
  },
  text: {
    fontSize: 7,
    color: 'white',
  },
  headingRight: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#160846',
    textAlign: 'right',
  },
  textRight: {
    fontSize: 7,
    color: 'white',
    textAlign: 'right',
  },
  fourthChild: {
    display: 'flex',
    flexDirection: 'row',
    margin: 10,
    justifyContent: 'space-between',
  },
  fourthChildOne: {
    backgroundColor: '#D06161',
    padding: 10,
    borderRadius: 5,
    width: '47%',
  },
  fourthChildOneTwo: {
    marginTop: 2,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  fourthChildTwo: {
    backgroundColor: '#69AEE0',
    padding: 10,
    borderRadius: 5,
    width: '50%',
  },
  fifthChild: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems:'center',
    margin: 10,
    padding: 10,
    borderRadius: 5,
    backgroundColor: '#8A69B5',
  },
  button: {
    backgroundColor: 'white',
    borderRadius: 5,
    alignItems: 'center',

    justifyContent: 'center',
    padding:8,
  },
  buttonText: {
    color: '#8A69B5',
    fontSize: 10,
    fontFamily:Fonts.REGULAR
  },
});
export default Dashboard;
