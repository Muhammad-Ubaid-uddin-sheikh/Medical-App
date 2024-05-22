import React, { useState } from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { Fonts } from '../components/style'
import BookIcon from 'react-native-vector-icons/FontAwesome6'
import { Calendar } from 'react-native-calendars'
import { format } from 'date-fns';
import Button from '../components/common/Button'
const ParticularDoctorScreen = ({ route, navigation }) => {
  const { item } = route.params

  console.log("CONFIRM booking", item)
  
  console.log('itemsparam', item)
  const [selectedDate, setSelectedDate] = useState('Select a Time Slot');
  
  console.log('seleteddate', selectedDate)
  const handleDayPress = (day) => {
    const formattedDate = format(new Date(day.dateString), 'd MMM yyyy');
    setSelectedDate(formattedDate);
  };
  return (
    <View style={{ backgroundColor: '#e3eeeb', flex: 1, }}>

      <View style={styles.container} >
        <View style={styles.childOne}>
          {/* <Image style={{width:'100%',height:70,objectFit:'cover'}} source={{ uri: item.profileImage }} /> */}
          <Image style={{ width: '100%', height: 80, objectFit: 'cover', borderRadius: 5 }} source={{ uri: 'https://i.pinimg.com/736x/8b/e9/70/8be970b311337d17d37b354b571565b9.jpg' }} />

        </View>
        <View style={styles.childTwo}>
          <View style={styles.childTwoOne}>
            <Text style={styles.headingText}> {item?.email.split('@')?.[0] || item?.username}</Text>

          </View>
          {/* <View style={styles.childTwoTwo}>
                    <Text style={styles.light}>{item.education}</Text>
                    <Text style={styles.light}>{item.experience}</Text>
                  </View> */}
          <Text style={[styles.badge,]}>Fees:
            <Text style={{ fontFamily: Fonts.REGULAR, fontSize: 13, color: 'black' }}>
              $30.00
            </Text>

          </Text>
          <Text style={[styles.badge,]}>Location:
            <Text style={{ fontFamily: Fonts.REGULAR, fontSize: 13, color: 'black' }}>
              Abcd location address
            </Text>
          </Text>
          <Text style={[styles.badge,]}>Specialist:
            <Text style={{ fontFamily: Fonts.REGULAR, fontSize: 13, color: 'black' }}>Lorem Ipsum Hospital, Dolor Sit Road,
              Amet City</Text>
          </Text>

        </View>
      </View>

      <Text style={{ fontFamily: Fonts.REGULAR, textAlign: 'center', color: 'black', fontSize: 25, paddingTop: 10 }}>{selectedDate}</Text>
      <View style={{ paddingHorizontal: 10 }}>
        <Calendar
          onDayPress={handleDayPress}
          style={styles.calendar}
          theme={{
            calendarBackground: '#e3eeeb',
            textSectionTitleColor: 'black',
            selectedDayTextColor: 'white',
            selectedDayBackgroundColor: 'green',
            todayTextColor: '#116754',
            dayTextColor: 'black',
            textDisabledColor: '#8C8C8C',
            dotColor: '#116754',
            selectedDotColor: 'black',
            arrowColor: '#116754',
            monthTextColor: 'black',
            textDayFontFamily: Fonts.REGULAR,
            textMonthFontFamily: Fonts.REGULAR,
            textDayHeaderFontFamily: Fonts.REGULAR,
            textDayFontSize: 15,
            textMonthFontSize: 15,
            textDayHeaderFontSize: 14,
            borderWidth: 1,
            borderColor: 'black'
          }}
          markedDates={{
            [selectedDate]: { selectedDate: true, selectedColor: 'green' },
            current: { selectedDate: true, selectedColor: 'green' }
          }}
        />
      </View>
      <View style={{ backgroundColor: 'white', flex: 1, paddingTop: 10, justifyContent: 'space-around' }}>


        <View style={{ paddingHorizontal: 15, }}>
          <Button text="Next" Link={() => navigation.navigate('ConfromBooking',{item:{
            ...item,
            availabeleDate:selectedDate
          }})} />
        </View>
      </View>


    </View>
  )
}

const styles = StyleSheet.create({
  calendar: {
    borderBottomRightRadius: 12,
    borderBottomLeftRadius: 12,
    borderColor: 'green'
  },
  timeSlotsText: {
    fontFamily: Fonts.REGULAR,
    fontSize: 13,
    color: '#000',
    borderWidth: 1,
    borderColor: '#116754',
    width: '23%',
    textAlign: 'center',
    borderRadius: 8,
    padding: 8,
    justifyContent: 'center',
    alignItems: 'center'
  },
  container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    justifyContent: 'space-between',
    borderRadius: 5,
    paddingHorizontal: 10,
    backgroundColor: 'white',
    paddingHorizontal: 20,
    paddingTop: 10,
    paddingBottom: 10
  },
  // scroll: {
  //   height: 575,
  // },
  headingText: {
    fontSize: 20,
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
    borderWidth: 2,
    borderRadius: 5,
    borderColor: '#116754'

  },
  childTwo: {
    width: '75%',
    paddingLeft: 10
  },
  badge: {
    color: '#116754',
    fontSize: 14,
    fontFamily: Fonts.REGULAR,
    paddingHorizontal: 5,

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
    flexDirection: 'row',
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
    fontFamily: Fonts.REGULAR,
    paddingLeft: 5
  },
})
export default ParticularDoctorScreen