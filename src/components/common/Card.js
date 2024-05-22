import React, {useEffect, useState} from 'react';
import {View, Image, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {getCategories} from '../../api/patient';

const Card = () => {
  const navigation = useNavigation();
  const [categories, setCategories] = useState([]);
console.log(categories)
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await getCategories();
        setCategories(response.data);
        console.log(response.data)
      } catch (error) {
        console.error('Error fetching categories:', error);
      }
    };
    fetchCategories();
  }, []);

  const handleDoctorList = (category) => {
    navigation.navigate('SeletedCategory',{category});
  };
  return (
    <>
      <View style={styles.main}>
        {categories.map((category, index) => (
          <TouchableOpacity onPress={()=> navigation.navigate('SeletedCategory',{category})} key={index}>
            <View style={styles.card}>
              <Image
                source={require('../../images/eyeTwo.png')}
                style={styles.image}
              />
              <Text style={styles.text}>{category.name}</Text>
            </View>
          </TouchableOpacity>
        ))}
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  main: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    margin: 10,
  },
  card: {
    backgroundColor: 'white',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    margin: 5,
    borderRadius: 5,
    padding: 10,
    height: 100,
    width: 100,
  },

  image: {
    height: 60,
    width: 60,
  },

  text: {
    fontSize: 12,
  },
});

export default Card;
