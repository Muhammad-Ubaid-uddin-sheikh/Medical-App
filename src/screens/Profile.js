import React, { useEffect, useState } from 'react';
import { View, Image, StyleSheet, Text, TouchableOpacity , Platform,} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Fonts } from '../components/style';

const ProfilePage = () => {
  const [counter, setCounter] = useState(3);

  useEffect(() => {
    const interval = setInterval(() => {
      setCounter((prevCounter) => (prevCounter > 0 ? prevCounter - 1 : prevCounter));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.profileContainer}>
        <View style={styles.imageContainer}>
          <View style={styles.imageBorder}>
            <Image source={{ uri: 'https://static.vecteezy.com/system/resources/previews/008/957/225/non_2x/female-doctor-avatar-clipart-icon-in-flat-design-vector.jpg' }} style={styles.profileImage} />
          </View>
        </View>
        <Text style={styles.counterText}>Patient Name Here</Text>
        <Text style={[styles.counterText, { fontFamily: Fonts.REGULAR, fontSize: 13, marginTop: 4 }]}>Living Healthy, Living Happy!</Text>
      </View>
      <View style={styles.counterContainer}>
        <View style={{ padding: 5 }}>
          <Text style={[styles.counterItem, { borderRightWidth: 1, borderColor: '#116754' }]}>130</Text>
          <Text style={styles.textHeadingCounter}>Appointments</Text>
        </View>
        <View style={{ padding: 5 }}>
          <Text style={[styles.counterItem, { borderRightWidth: 1, borderColor: '#116754' }]}>30</Text>
          <Text style={styles.textHeadingCounter}> Completed </Text>
        </View>
        <View style={{ padding: 5 }}>
          <Text style={styles.counterItem}>300</Text>
          <Text style={styles.textHeadingCounter}> Pending </Text>
        </View>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={[styles.button, { backgroundColor: '#116754' }]}>
          <Text style={{ color: 'white', fontFamily: Fonts.REGULAR, fontSize: 14 }}>Edit Profile</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, { backgroundColor: '#C54B4B' }]}>
          <Text style={{ color: 'white', fontFamily: Fonts.REGULAR, fontSize: 14 }}>Logout</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e3eeeb',
    alignItems: 'center',
    justifyContent: 'center'
  },
  profileContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  textHeadingCounter: {
    fontFamily: Fonts.REGULAR,
    color: '#116754',
    paddingHorizontal: 10
  },
  imageContainer: {
    position: 'relative',
    width: 180, // Adjust width as needed
    height: 180, // Adjust height as needed
    borderRadius: 90, // Half of width and height to make it circular
    overflow: 'hidden', // Clip content to the border
  },
  imageBorder: {
    flex: 1, // Take up all available space
    borderRadius: 90, // Half of width and height to make it circular
    borderColor: '#5B8F6B',
    borderWidth: 1.5,
    overflow: 'hidden', // Clip content to the border
    ...Platform.select({
      ios: {
        shadowColor: 'green',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.5,
        shadowRadius: 4,
      },
      android: {
        elevation: 5,
      },
    }),
  },
  profileImage: {
    flex: 1, // Take up all available space
    width: undefined, // Use the image's original width
    height: undefined, // Use the image's original height
  },
  counterText: {
    marginTop: 10,
    fontSize: 20,
    color: '#116754',
    fontFamily: Fonts.MEDIUM
  },
  counterContainer: {
    marginBottom: 20,
    backgroundColor: 'white',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  counterItem: {
    fontSize: 22,
    marginBottom: 5,
    fontFamily: Fonts.MEDIUM,
    textAlign: 'center',
    color: 'black'
  },
  buttonContainer: {
    flexDirection: 'row',
    marginTop: 30
  },
  button: {
    backgroundColor: '#eee',
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 5,
    marginHorizontal: 20,
  },
});

export default ProfilePage;
