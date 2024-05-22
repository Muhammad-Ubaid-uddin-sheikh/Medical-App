import React, { useState } from 'react'
import { FlatList, Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { Fonts } from '../components/style'
import Headers from '../components/layout/Header'
import  SearchBar  from '../components/common/SearchBar'
const History = () => {
  const [data, setData] = useState([
    { id: 1, text: 'Booking complted', status: 'completed', image: 'https://i.pinimg.com/736x/8b/e9/70/8be970b311337d17d37b354b571565b9.jpg',date:'10/7/2024' },
    { id: 2, text: 'Booking pending', status: 'pending', image: 'https://i.pinimg.com/736x/8b/e9/70/8be970b311337d17d37b354b571565b9.jpg',date:'2/3/2024' },
    { id: 3, text: 'Booking complted', status: 'completed', image: 'https://i.pinimg.com/736x/8b/e9/70/8be970b311337d17d37b354b571565b9.jpg',date:'5/22/2024' },
    { id: 4, text: 'Booking pending', status: 'pending', image: 'https://i.pinimg.com/736x/8b/e9/70/8be970b311337d17d37b354b571565b9.jpg',date:'7/2/2024' },
    { id: 5, text: 'Booking #1', status: 'Not Attended', image: 'https://i.pinimg.com/736x/8b/e9/70/8be970b311337d17d37b354b571565b9.jpg',date:'7/2/2024'},
    { id: 6, text: 'Booking pending', status: 'pending', image: 'https://i.pinimg.com/736x/8b/e9/70/8be970b311337d17d37b354b571565b9.jpg',date:'7/2/2024'},
    { id: 7, text: 'Booking Not Attended ', status: 'Not Attended', image: 'https://i.pinimg.com/736x/8b/e9/70/8be970b311337d17d37b354b571565b9.jpg',date:'3/3/2024'},
    { id: 8, text: 'Booking Not Attended', status: 'Not Attended', image: 'https://i.pinimg.com/736x/8b/e9/70/8be970b311337d17d37b354b571565b9.jpg',date:'5/2/2024'},

  ]);
  const [selectedCategory, setSelectedCategory] = useState('All');

  const renderListItem = ({ item }) => (
    <View style={styles.listItem}>
      {/* <Image source={{ uri: item.image }} style={styles.image} /> */}
      <View style={{width:'20%',backgroundColor:'#e3eeeb',flexDirection:'row',alignItems:'center',justifyContent:'center',borderRadius:10}}>
        <Image source={require('../images/histroy.png')} style={{width:40,objectFit:'contain'}}/>
      </View>
     <View style={{width:'80%'}}>

   
     <View style={{flexDirection:'row',justifyContent:'space-between',justifyContent:'center',paddingRight:15}}>
    <View style={{width:'43%',paddingBottom:10}}>
    <Text numberOfLines={1} ellipsizeMode="tail" style={{fontFamily:Fonts.REGULAR,fontSize:14,color:'black',textAlign:'left'}} >{item.text}</Text>
      </View> 
     <View style={{flexDirection:'row',width:'57%',paddingRight:10}}>
<TouchableOpacity  ><Text  style={[styles.badge,{backgroundColor:'#e3eeeb',color:'#116754',width:70,}]}>{item.date}</Text></TouchableOpacity>
<TouchableOpacity ><Text style={[styles.badge,{color: item.status === 'pending' ? 'black' : 'white', backgroundColor: item.status === 'completed' ? '#116754' : item.status === 'pending' ? '#EAD72B' : item.status === 'Not Attended' ? '#EA2B2B' : 'transparent' }]}>{item.status}</Text></TouchableOpacity>
     </View>
    
     </View>
     <Text style={{fontFamily:Fonts.REGULAR,fontSize:10,color:'#160846',paddingRight:15}}>Lorem Ipsum Hospital, Dolor Sit Road, Amet City. Lorem Ipsum   Hospital, Dolor Sit Road, Amet City.</Text>
     </View>
    </View>
  );

  const filterData = (category) => {
    if (category === 'All') {
      return data;
    }
    return data.filter(item => item.status.toLowerCase() === category.toLowerCase());
  };

  return (
    <View style={{backgroundColor:'#e3eeeb',flex:1,}}>
        <Headers/>
        <View style={{paddingHorizontal:15,backgroundColor:'white',paddingBottom:15}}> 
<SearchBar/>
        </View>
        <SafeAreaView style={{backgroundColor:'#e3eeeb',flex:1,paddingHorizontal:15}}>
        <View style={styles.container}>
      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={() => setSelectedCategory('All')} style={[styles.button, selectedCategory === 'All' && styles.activeButton]}>
          <Text style={[styles.buttonText, selectedCategory === 'All' && styles.activeButtonText]}>All</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setSelectedCategory('Completed')} style={[styles.button, selectedCategory === 'Completed' && styles.activeButton]}>
          <Text style={[styles.buttonText, selectedCategory === 'Completed' && styles.activeButtonText]}>Completed</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setSelectedCategory('Pending')} style={[styles.button, selectedCategory === 'Pending' && styles.activeButton]}>
          <Text style={[styles.buttonText, selectedCategory === 'Pending' && styles.activeButtonText]}>Pending</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setSelectedCategory('Not Attended')} style={[styles.button, selectedCategory === 'Delete' && styles.activeButton]}>
          <Text style={[styles.buttonText, selectedCategory === 'Not Attended' && styles.activeButtonText]}>Not Attended</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={filterData(selectedCategory)}
        renderItem={renderListItem}
        keyExtractor={item => item.id.toString()}
      />
    </View>
    </SafeAreaView>
        {/* <Text style={{fontFamily:Fonts.MEDIUM,fontSize:30,textAlign:'center',color:'black'}}>History Page</Text> */}
    </View >
  )
}
const styles = StyleSheet.create({
  badge: {
    borderRadius: 50,
   paddingHorizontal:8,
    color: 'white',
    fontSize: 9,
    backgroundColor: '#116754',
    fontFamily:Fonts.REGULAR,
    marginRight:5,
    paddingVertical:4,
    width:77,
    textAlign:'center'
  },
  buttonText:{
    fontFamily:Fonts.REGULAR,
    fontSize:10,
    color:'black',
    textAlign:'center'
  },
  activeButtonText:{
    color:'white'
  },
  container: {
    flex: 1,
    paddingTop: 15,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
    gap:10
  },
  button: {
    backgroundColor: '#e3eeeb',
    paddingVertical: 10,
    // paddingHorizontal: 20,
    borderRadius: 5,
    width:'24%',
    flex:1,
    justifyContent:'center',
    borderWidth:0.5,
    borderColor:'#116754',
    elevation:4
  },
  listItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    backgroundColor:'white',
    padding:5,
    width:'100%',
    gap:10
  },
  image: {
    width: 50,
    height: 50,
    marginRight: 10,
  },
  activeButton: {
    backgroundColor: '#116754',
  },
})
export default History