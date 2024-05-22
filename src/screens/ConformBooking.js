import React, { useState } from 'react'
import { FlatList, Image, Modal, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { Fonts } from '../components/style'
import Button from '../components/common/Button'
import Input from '../components/common/Input'
import { bookAppointment } from '../api/patient'
const ConfromBoking = ({ route, navigation }) => {
  const { item } = route?.params ||{ }

  console.log('asdadajsdkabvdasdam,s  ', item)

  const [gender, setGender] = useState('male');
  const [selectedItem, setSelectedItem] = useState(null)
  const [paymentCash, setPaymentCash] = useState(true)

  const handleGenderPress = (gender) => {
    setGender(gender);

  };
  const [patientName, setPatientName] = useState('')
  const [MobileNumber, setMobileNumber] = useState('')


  

  const handleSelectItem = (item) => {
    setPaymentCash(item);
  };
  const dataObject = {
    vehicles: [
      {
        id: '1',
        brand: "Pay Cash at Clinic",
        name: "$. 3,000",
        isCash:true

      },
      {
        id: '2',
        brand: "Online Payment",
        name: "$. 3,000",
        isCash:false

      },
    ]
  };

  const [isLogoutModalVisible, setIsLogoutModalVisible] = useState(false);

  const handleCancel = () => {
    setIsLogoutModalVisible(false);
  };

  const showLogoutModal = () => {
    setIsLogoutModalVisible(true);
  };

  const handleConfirmBooking = async() => {
    let body={
      "doctorId":item?._id,
      "appointmentDate":item?.availableDate,
      "gender":gender,
      "paymentDetails":{
          "cash":paymentCash,
          "online":!paymentCash,
          "amount":"300$"
      },
      "personalDetails":{
          "patientName":patientName,
          "mobileNumber":MobileNumber
      }
  }

    try {

      const response = await bookAppointment(body)
      showLogoutModal()

      
    } catch (error) {
      console.log(error.message)
    }
  }

  return (
    <View style={{ backgroundColor: '#e3eeeb', flex: 1, justifyContent: 'space-around' }}>

      <Text style={{ fontFamily: Fonts.REGULAR, textAlign: 'center', color: 'black', fontSize: 25, paddingTop: 10 }}>Confirm Booking</Text>

      <View style={{
        marginHorizontal: 15, backgroundColor: 'white', borderRadius: 8, marginTop: 15,
        padding: 15, paddingBottom: 2
      }}>
        <Text style={{ fontFamily: Fonts.MEDIUM, fontSize: 18, color: '#116754' }}>Personal Details</Text>
        <Text style={{ fontFamily: Fonts.LIGHT, fontSize: 12, color: 'black', paddingTop: 5, paddingBottom: 14 }}>We share this information with the doctor</Text>
        <Input placeholder="Patient’s Name" value={patientName} onChangeText={(text) => setPatientName(text)} />
        <Input placeholder="Mobile Numer" value={MobileNumber} onChangeText={(text) => setMobileNumber(text)}  keyboardType="number-pad" />
        <Text style={{ fontFamily: Fonts.MEDIUM, fontSize: 16, color: '#116754', paddingTop: 10, paddingBottom: 5 }}>Gender</Text>
        <View style={styles.genderContainer}>

          <TouchableOpacity
            style={[styles.genderButton, gender === 'male' && styles.selectedGenderButton]}
            onPress={() => handleGenderPress('male')}
          >
            <Text style={[styles.genderText, gender === 'male' && { color: 'white' }]}>Male</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.genderButton, gender === 'female' && styles.selectedGenderButton]}
            onPress={() => handleGenderPress('female')}
          >
            <Text style={[styles.genderText, gender === 'female' && { color: 'white' }]}>Female</Text>
          </TouchableOpacity>
        </View>

      </View>

      <View style={{
        marginHorizontal: 15, backgroundColor: 'white', borderRadius: 8, marginTop: 10,
        padding: 15
      }}>
        <Text style={{ fontFamily: Fonts.MEDIUM, fontSize: 18, color: '#116754' }}>Payment Details</Text>
        <Text style={{ fontFamily: Fonts.LIGHT, fontSize: 12, color: 'black', paddingTop: 5, paddingBottom: 14 }}>How will you pay for the appointment?</Text>
        <FlatList
          data={dataObject.vehicles}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => handleSelectItem(item.isCash)}>
              <View style={[styles.mainBoxCarNameSelect, selectedItem === item && styles.selectedItem]}>
                <TouchableOpacity
                  
                  style={{
                    width: 20,
                    height: 20,
                    borderRadius: 10,
                    borderWidth: 2,
                    borderColor: selectedItem === item ? '#116754' : '#116754', // Change border color when selected
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                >
                  {paymentCash === item.isCash && <View style={{ width: 10, height: 10, borderRadius: 5, backgroundColor: '#747EEF' }} />}
                </TouchableOpacity>
                <View style={{ paddingLeft: 10, flexDirection: 'row', justifyContent: 'space-between', width: '90%' }}>
                  <Text style={{ fontFamily: Fonts.REGULAR, fontSize: 14, color: 'black' }}>
                    {item.brand}
                  </Text>
                  <Text style={{ fontFamily: Fonts.REGULAR, fontSize: 14, color: 'black' }}>
                    {item.name}
                  </Text>

                </View>
              </View>
            </TouchableOpacity>
          )}
        />
      </View>
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
            <Image source={require('../images/conform.png')} style={{ width: '100%', height: 200, objectFit: 'contain' }} />
            <Text style={[styles.modalText, { marginTop: -40 }]}>Confirmed!</Text>
            <Text style={{ fontFamily: Fonts.REGULAR, fontSize: 14, color: 'white', paddingBottom: 10 }}>Your appointment has been confirmed.</Text>
            <Text style={{ fontFamily: Fonts.REGULAR, fontSize: 14, color: 'white', paddingBottom: 5 }}>We Encourage you to be on time in order to
              mitigate the wastage of time.</Text>
            <Text style={{ fontFamily: Fonts.REGULAR, fontSize: 14, color: 'white', paddingBottom: 15 }}>Thank You!</Text>
            <View style={styles.buttonContainer}>

              <Button text='OK' Link={() => navigation.navigate('dashboard')} />


            </View>
          </View>
        </View>

      </Modal>
      <View style={{ paddingHorizontal: 15, marginBottom: 20 }}>
        <Button text="Conform Booking" Link={handleConfirmBooking} />
      </View>

    </View>
  )
}

const styles = StyleSheet.create({
  buttonContainer: {
    width: 200
  },
  mainBoxCarNameSelect: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: '100%',
    padding: 15,
    borderRadius: 12,
    marginTop: 10,
    borderWidth: 1,
    borderColor: '#116754'
  },
  genderContainer: {
    flexDirection: 'row',
    // justifyContent: 'space-between',
    marginBottom: 20,
    gap: 20
  },
  genderButton: {
    fontFamily: Fonts.REGULAR,
    fontSize: 13,
    color: '#000',
    borderWidth: 1,
    borderColor: '#116754',
    textAlign: 'center',
    borderRadius: 8,
    padding: 8,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 25,
    backgroundColor: '#e3eeeb'
  },
  selectedGenderButton: {
    backgroundColor: '#116754',
    fontFamily: Fonts.REGULAR,
    fontSize: 13,
    color: 'white',
    borderWidth: 1,
    borderColor: '#116754',
    textAlign: 'center',
    borderRadius: 8,
    padding: 8,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 25

  },
  genderText: {
    color: 'white',
    fontFamily: Fonts.REGULAR,
    fontSize: 13,
    color: '#000',

  },
  modalBackground: {
    flex: 1,
    backgroundColor: '#4d4d4d',
    justifyContent: 'center',
    alignItems: 'center',
    opacity: 0.8,


  },
  modalContent: {
    // backgroundColor: 'white',
    padding: 35,
    alignItems: 'center',
    width: '90%'
  },
  modalText: {
    // marginBottom: 15,
    textAlign: 'center',
    fontFamily: Fonts.BOLD,
    color: '#E7F0EE',
    fontSize: 36
  },
})
export default ConfromBoking