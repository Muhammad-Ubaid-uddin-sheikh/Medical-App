// import React from 'react'
// import { Image, SafeAreaView, StyleSheet, Text, View } from 'react-native'

// const Notification = () => {
//   return (
//     <SafeAreaView style={{backgroundColor:'#e3eeeb',flex:1,paddingHorizontal:15}}>
//     <View>
//         <Text>Notification</Text>
//         <View>
// <View style={{flexDirection:'row',justifyContent:"space-between",alignItems:'center'}}>
//   <View style={{width:'30%',padding:15}}>
//     <Image source={{ uri: 'https://www.opentechinfo.com/wp-content/uploads/2018/08/whatsapp-dp.png' }} style={{width:'100%',height:'60%',objectFit:'contain'}}/>
//   </View>
//   <View style={{width:'70%'}}>
//     <Text>Player Name</Text>
//     <Text>Lorem Ipsum Hospital, Dolor Sit Road, Amet City. Lorem Ipsum   Hospital, Dolor Sit Road, Amet City.</Text>
//   </View>
// </View>

//         </View>
//     </View>
//     </SafeAreaView>
//   )
// }
// const style = StyleSheet.create({

// })
// export default Notification

import React from 'react';
import { FlatList, Image, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { Fonts } from '../components/style';

const NotificationPage = () => {
  const notifications = [
    { id: 1, image: 'https://sm.ign.com/ign_pk/cover/a/avatar-gen/avatar-generations_rpge.jpg', playerName: 'John Doe', message: 'You have a new message' },
    { id: 2, image: 'https://static-prod.adweek.com/wp-content/uploads/2022/06/Instagram-3D-Avatar-Hero-652x367.png', playerName: 'Jane Smith', message: 'Your match has been scheduled' },
    { id: 3, image: 'https://cdn.icon-icons.com/icons2/2438/PNG/512/boy_avatar_icon_148455.png', playerName: 'Alex Johnson', message: 'You have a new friend request' },
    { id: 4, image: 'https://cdn.icon-icons.com/icons2/2438/PNG/512/boy_avatar_icon_148455.png', playerName: 'Emily Brown', message: 'Your match result is available' },
    { id: 5, image: 'https://cdn.icon-icons.com/icons2/2438/PNG/512/boy_avatar_icon_148455.png', playerName: 'Michael Wilson', message: 'You have a new notification' },
    { id: 6, image: 'https://cdn.icon-icons.com/icons2/2438/PNG/512/boy_avatar_icon_148455.png', playerName: 'Jessica Lee', message: 'Your subscription has expired' },
  ];

  const renderNotificationItem = ({ item }) => (
    <View style={styles.notificationItem}>
      <Image source={{ uri: item.image }} style={styles.avatar} />
      <View style={styles.notificationContent}>
        <Text style={styles.playerName}>{item.playerName}</Text>
        <Text style={styles.message}>{item.message}</Text>
      </View>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={notifications}
        renderItem={renderNotificationItem}
        keyExtractor={(item) => item.id.toString()}
        style={{paddingTop:10}}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#e3eeeb',flex:1,paddingHorizontal:10
  },
  notificationItem: {
    flexDirection: 'row',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    backgroundColor:'white',
    borderRadius:11,marginBottom:7
  },
  avatar: {
    width: '15%',
    aspectRatio: 1, // Ensure image maintains its aspect ratio
    marginRight: 10,
    borderRadius: 50,
    // Assuming circular avatars
  },
  notificationContent: {
    flex: 1,
  },
  playerName: {
    fontSize: 15,
   fontFamily:Fonts.MEDIUM,
    marginBottom: 5,
    color: 'black',
  },
  message: {
    fontSize: 14,
    color: 'black',
    fontFamily:Fonts.REGULAR
  },
});

export default NotificationPage;
