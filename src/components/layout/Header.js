import {View, Text, StyleSheet, Image, TouchableOpacity, Alert, Modal} from 'react-native';
import React, { useState } from 'react';
import {useNavigation} from '@react-navigation/native';
import LocationIcon from 'react-native-vector-icons/Entypo'
import { Fonts } from '../style';
import Notification from 'react-native-vector-icons/Ionicons'
import LogOut from 'react-native-vector-icons/AntDesign'
import Spinner from 'react-native-loading-spinner-overlay';
const Header = () => {
  const navigation = useNavigation();
  const [isLoggingOut, setIsLoggingOut] = useState(false);
  
  const [isLogoutModalVisible, setIsLogoutModalVisible] = useState(false);
  const handleLogout = () => {
    setTimeout(() => {
      setIsLoggingOut(false);
      navigation.navigate('onboard');
    }, 500);
    setIsLogoutModalVisible(false);
  };

  const handleCancel = () => {
    // Close the modal
    setIsLogoutModalVisible(false);
  };

  const showLogoutModal = () => {
    setIsLogoutModalVisible(true);
  };
  return (
    <View style={styles.top}>
      <View style={styles.topOne}>
        <View style={styles.topOneOne}>
          {/* <View style={{backgroundColor:'#116754',padding:10,borderRadius:50}}>
           <LocationIcon name='location' size={20} color={'white'}/>
          </View> */}
          <View>
            {/* <Text style={styles.topOneOneHead}>Current Location</Text> */}
            <Text style={styles.topOneOneText}>Hello, John</Text>
          </View>
        </View>
        <View style={{flexDirection:'row',width:80,justifyContent:'space-between',alignItems:'center'}}>
        <TouchableOpacity style={{backgroundColor:'#116754',padding:10,borderRadius:50}} onPress={()=>navigation.navigate('Notification')} >
           <Notification name='notifications' size={15} color={'white'} />
          </TouchableOpacity>
      
          <TouchableOpacity style={{backgroundColor:'#116754',padding:10,borderRadius:50}} onPress={showLogoutModal}>
            {/* <Text style={styles.buttonText}>Logout</Text> */}
            <LogOut name='logout' size={15} color={'white'}/>
          </TouchableOpacity>
          <Modal
        visible={isLogoutModalVisible}
        animationType="slide"
        transparent={true}
        onRequestClose={handleCancel}
        onBackdropPress={handleCancel}
        onBackButtonPress={handleCancel}
      >
        <View style={styles.modalBackground}>
          <View style={styles.modalContent}>
            <Text style={styles.modalText}>Are you sure you want to logout?</Text>
            <View style={styles.buttonContainer}>
            
                
                <TouchableOpacity  style={[styles.ButtonTwo,{backgroundColor:'#E7F0EE'}]} onPress={handleCancel}>
                  <Text style={[styles.buttonTwoText,{color:'black'}]}>Cencel</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.ButtonTwo} onPress={handleLogout}>
                  <Text style={styles.buttonTwoText}>Logout</Text>
                </TouchableOpacity>
            </View>
          </View>
        </View>
        <Spinner
        visible={isLoggingOut}
        textContent={'Relojándose...'}
        textStyle={styles.loaderText}
        animation="fade"
        overlayColor="rgba(0, 0, 0, 0.7)"
        color="black" 
      />
      </Modal>
        </View>
      </View>
      
    </View>
  );
};

const styles = StyleSheet.create({
  loaderText:{
    color:'green'
  },
  top: {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor:'white'
  },

  topOne: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal:13,
    paddingVertical:15,
  },
  buttonTwoText: {
    color: 'white',
    fontSize: 14,
    fontFamily:Fonts.LIGHT
  },
  topOneOne: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },

  topOneOneText: {
    fontSize: 25,
    color: '#116754',
    fontWeight: '600',
    marginLeft: 4,
    fontFamily:Fonts.MEDIUM
  },

  topOneOneHead: {
    fontSize: 12,
    color: 'black',
    marginLeft: 4,
    fontFamily:Fonts.REGULAR
  },

  button: {
    backgroundColor: '#116754',
    paddingVertical: 5,
    paddingHorizontal: 8,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 12,
    fontWeight: '500',
  },
  modalBackground: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
   
  },
  modalContent: {
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    elevation: 5,
    width:'85%'
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
    fontFamily:Fonts.MEDIUM,
    color:'black',
    fontSize:16
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginTop: 20,
    gap:20
  },
  ButtonTwo:{
    backgroundColor: '#116754',
    paddingVertical: 14,
    paddingHorizontal: 24,
    borderRadius: 5,
    alignItems: 'center',
    width:'48%',
    borderWidth:1,
  borderColor:'#116754'
  }
});

export default Header;
