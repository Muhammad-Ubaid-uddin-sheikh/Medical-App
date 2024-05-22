import React from 'react';
import { View, Text, Image, FlatList, Button, TouchableOpacity, StyleSheet } from 'react-native';

// const DATA = [
//   { id: '1', name: 'John Doe', image: 'http://example.com/images/john.jpg', experience: '5 years', degree: 'Bachelors' },
//   { id: '2', name: 'Jane Smith', image: 'http://example.com/images/jane.jpg', experience: '8 years', degree: 'Masters' },
//   { id: '3', name: 'Tom Brown', image: 'http://example.com/images/tom.jpg', experience: '3 years', degree: 'PhD' },
//   // Add more data objects as needed
// ];

const Item = ({ name, image, experience, degree }) => {
    return(
  <View style={styles.item}>
    <Image style={styles.image} source={{ uri: image }} />
    <Text style={styles.name}>{name}</Text>
    <View style={styles.infoContainer}>
      <Text>Experience: {experience}</Text>
      <Text>Degree: {degree}</Text>
    </View>
    <TouchableOpacity style={styles.button}>
      <Button title="View Details" onPress={() => console.log('Details button pressed')} />
    </TouchableOpacity>
  </View>
);


};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 30,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  infoContainer: {
    flex: 1,
    marginLeft: 10,
  },
  button: {
    marginLeft: 'auto',
  },
});

export default Item;
