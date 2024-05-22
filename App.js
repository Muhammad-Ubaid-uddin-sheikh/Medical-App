import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer,} from '@react-navigation/native';
import BackIcon from 'react-native-vector-icons/AntDesign'
import NotificationIcon from 'react-native-vector-icons/Ionicons'
import SignUp from './src/screens/Signup.js';
import SignIn from './src/screens/Signin.js';
import RecoverAccount from './src/screens/RecoverAccount.js';
import Validate from './src/screens/Validate.js';
import Onboard from './src/screens/Onboard.js';
import DoctorsCategory from './src/screens/DoctorCategory.js';
import DoctorsList from './src/screens/DoctorsList.js';
import SplashScreen from './src/screens/splash/Splash.js';
import BottomNavRender from './src/screens/BottomNavRender.js';
import ParticularDoctorScreen from './src/screens/ParticularDoctorScreen.js';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Fonts } from './src/components/style/CustomFonts.js';
import ConfromBoking from './src/screens/ConformBooking.js';
import SeletedCategory from './src/screens/SeletedCategory.js'
import LabsNearBY from './src/screens/LabsNearby.js'
import Notification from './src/screens/Notification.js';
import DoctorDashboard from './src/screens/doctorscreen/DoctorDashboard.js';
import PatientList from './src/screens/PatientList.js';
import ParticularPatientScreen from './src/screens/ParticularPatientScreen.js';
import NurseList from './src/screens/NurseList.js';
const Stack = createNativeStackNavigator();
const App = ({navigation}) => {
  // const navigation = useNavigation()
  
  return (
    // <GestureHandlerRootView>
      <NavigationContainer>
      
        <Stack.Navigator screenOptions={{
        cardStyle: { backgroundColor: 'white' },
        cardStyleInterpolator: ({ current, layouts }) => {
          return {
            cardStyle: {
              transform: [
                {
                  translateX: current.progress.interpolate({
                    inputRange: [0, 1],
                    outputRange: [layouts.screen.width * 2, 0], // Adjusted from layouts.screen.width
                  }),
                },
              ],
            },
          };
        },
        headerStyle: {
          borderBottomWidth: 0, // Remove bottom border
          elevation: 0,
          borderColor:'white',
          backgroundColor:'white', 
          shadowColor: 'transparent',
          borderColor:'white'
          // Remove box shadow for Android
          
        },
      }}
          >
            <Stack.Screen options={{ headerShown: false }} name="SplashScreen" component={SplashScreen} />
          <Stack.Screen
            name="onboard"
            component={Onboard}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="signup"
            component={SignUp}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="dashboard"
            component={BottomNavRender}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="signin"
            component={SignIn}
            options={{headerShown: false}}
          />
           <Stack.Screen
            name="ParticularDoctorScreen"
            component={ParticularDoctorScreen}
            options={({ navigation }) => ({
              headerLeft: () => (
                <TouchableOpacity style={{flexDirection:"row",marginLeft: 0,}} onPress={() => navigation.goBack()}>
                   <BackIcon name="arrowleft" size={23} color='#116754' style={{ marginRight: 18 }} />
                  <Text style={[styles.backicontext,{marginLeft: -10}]}>Doctor</Text>
                </TouchableOpacity>
              ),
              title: null, 
              headerRight: () => (
                <View style={{ flexDirection: 'row', gap: -5 ,}}>
                  <TouchableOpacity style={{backgroundColor:'#116754',padding:10,borderRadius:50}} onPress={()=>navigation.navigate('Notification')} >
               <NotificationIcon name='notifications' size={15} color={'white'} />
              </TouchableOpacity>
                </View>
              ),
              tabBarLabel: 'Profile',
              tabBarIcon: ({ color }) => <Entypo name="user-circle-o" color={color} size={25} />,
            })}
          />
           <Stack.Screen
            name="ParticularPatientScreen"
            component={ParticularPatientScreen}
            options={({ navigation }) => ({
              headerLeft: () => (
                <TouchableOpacity style={{flexDirection:"row",marginLeft: 0,}} onPress={() => navigation.goBack()}>
                   <BackIcon name="arrowleft" size={23} color='#116754' style={{ marginRight: 18 }} />
                  <Text style={[styles.backicontext,{marginLeft: -10}]}>Doctor</Text>
                </TouchableOpacity>
              ),
              title: null, 
              headerRight: () => (
                <View style={{ flexDirection: 'row', gap: -5 ,}}>
                  <TouchableOpacity style={{backgroundColor:'#116754',padding:10,borderRadius:50}} onPress={()=>navigation.navigate('Notification')} >
               <NotificationIcon name='notifications' size={15} color={'white'} />
              </TouchableOpacity>
                </View>
              ),
              tabBarLabel: 'Profile',
              tabBarIcon: ({ color }) => <Entypo name="user-circle-o" color={color} size={25} />,
            })}
          />
          <Stack.Screen
            name="ConfromBooking"
            component={ConfromBoking}
            options={({ navigation }) => ({
              headerLeft: () => (
                <TouchableOpacity style={{flexDirection:"row",marginLeft: 0,}} onPress={() => navigation.goBack()}>
                   <BackIcon name="arrowleft" size={23} color='#116754' style={{ marginRight: 18 }} />
                  <Text style={[styles.backicontext,{marginLeft: -10}]}>Back</Text>
                </TouchableOpacity>
              ),
              title: null, 
              headerRight: () => (
                <View style={{ flexDirection: 'row', gap: -5 ,}}>
                  <TouchableOpacity style={{backgroundColor:'#116754',padding:10,borderRadius:50}} onPress={()=>navigation.navigate('Notification')} >
               <NotificationIcon name='notifications' size={15} color={'white'} />
              </TouchableOpacity>
                </View>
              ),
             
              tabBarIcon: ({ color }) => <Entypo name="user-circle-o" color={color} size={25} />,
            })}
          />
           <Stack.Screen
            name="Notification"
            component={Notification}
            options={({ navigation }) => ({
              headerLeft: () => (
                <TouchableOpacity style={{flexDirection:"row",marginLeft: 0,}} onPress={() => navigation.goBack()}>
                   <BackIcon name="arrowleft" size={23} color='#116754' style={{ marginRight: 18 }} />
                  <Text style={[styles.backicontext,{marginLeft: -10}]}>Notification</Text>
                </TouchableOpacity>
              ),
              title: null, 
              // headerRight: () => (
              //   <View style={{ flexDirection: 'row', gap: -5 ,}}>
              //     <TouchableOpacity style={{backgroundColor:'#116754',padding:10,borderRadius:50}}  >
              //  <NotificationIcon name='notifications' size={15} color={'white'} />
              // </TouchableOpacity>
              //   </View>
              // ),
             
              tabBarIcon: ({ color }) => <Entypo name="user-circle-o" color={color} size={25} />,
            })}
          />
          <Stack.Screen
            name="LabsNearBY"
            component={LabsNearBY}
            options={({ navigation }) => ({
              headerLeft: () => (
                <TouchableOpacity style={{flexDirection:"row",marginLeft: 0,}} onPress={() => navigation.goBack()}>
                   <BackIcon name="arrowleft" size={23} color='#116754' style={{ marginRight: 18 }} />
                  <Text style={[styles.backicontext,{marginLeft: -10}]}>Back</Text>
                </TouchableOpacity>
              ),
              title: null, 
              headerRight: () => (
                <View style={{ flexDirection: 'row', gap: -5 ,}}>
                  <TouchableOpacity style={{backgroundColor:'#116754',padding:10,borderRadius:50}} onPress={()=>navigation.navigate('Notification')} >
               <NotificationIcon name='notifications' size={15} color={'white'} />
              </TouchableOpacity>
                </View>
              ),
             
              tabBarIcon: ({ color }) => <Entypo name="user-circle-o" color={color} size={25} />,
            })}
          />
          <Stack.Screen
            name="PatientList"
            component={PatientList}
            options={({ navigation }) => ({
              headerLeft: () => (
                <TouchableOpacity style={{flexDirection:"row",marginLeft: 0,}} onPress={() => navigation.goBack()}>
                   <BackIcon name="arrowleft" size={23} color='#116754' style={{ marginRight: 18 }} />
                  <Text style={[styles.backicontext,{marginLeft: -10}]}>Back</Text>
                </TouchableOpacity>
              ),
              title: null, 
              headerRight: () => (
                <View style={{ flexDirection: 'row', gap: -5 ,}}>
                  <TouchableOpacity style={{backgroundColor:'#116754',padding:10,borderRadius:50}} onPress={()=>navigation.navigate('Notification')} >
               <NotificationIcon name='notifications' size={15} color={'white'} />
              </TouchableOpacity>
                </View>
              ),
             
              tabBarIcon: ({ color }) => <Entypo name="user-circle-o" color={color} size={25} />,
            })}
          />
          <Stack.Screen
            name="NurseList"
            component={NurseList}
            options={({ navigation }) => ({
              headerLeft: () => (
                <TouchableOpacity style={{flexDirection:"row",marginLeft: 0,}} onPress={() => navigation.goBack()}>
                   <BackIcon name="arrowleft" size={23} color='#116754' style={{ marginRight: 18 }} />
                  <Text style={[styles.backicontext,{marginLeft: -10}]}>Back</Text>
                </TouchableOpacity>
              ),
              title: null, 
              headerRight: () => (
                <View style={{ flexDirection: 'row', gap: -5 ,}}>
                  <TouchableOpacity style={{backgroundColor:'#116754',padding:10,borderRadius:50}} onPress={()=>navigation.navigate('Notification')} >
               <NotificationIcon name='notifications' size={15} color={'white'} />
              </TouchableOpacity>
                </View>
              ),
             
              tabBarIcon: ({ color }) => <Entypo name="user-circle-o" color={color} size={25} />,
            })}
          />
          <Stack.Screen
            name="recoveraccount"
            component={RecoverAccount}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="validate"
            component={Validate}
            options={{headerShown: false}}
          />

           <Stack.Screen
            name="Doctordashboard"
            component={DoctorDashboard}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="doctorscategory"
            component={DoctorsCategory}
            options={({ navigation }) => ({
              headerLeft: () => (
                <TouchableOpacity style={{flexDirection:"row",marginLeft: 0,}} onPress={() => navigation.goBack()}>
                   <BackIcon name="arrowleft" size={23} color='#116754' style={{ marginRight: 18 }} />
                  <Text style={[styles.backicontext,{marginLeft: -10}]}>Back</Text>
                </TouchableOpacity>
              ),
              title: null, 
              headerRight: () => (
                <View style={{ flexDirection: 'row', gap: -5 ,}}>
                  <TouchableOpacity style={{backgroundColor:'#116754',padding:10,borderRadius:50}} onPress={()=>navigation.navigate('Notification')} >
               <NotificationIcon name='notifications' size={15} color={'white'} />
              </TouchableOpacity>
                </View>
              ),
             
              tabBarIcon: ({ color }) => <Entypo name="user-circle-o" color={color} size={25} />,
            })}
          />
          <Stack.Screen
            name="doctorslist"
            component={DoctorsList}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="SeletedCategory"
            component={SeletedCategory}
            options={({ navigation }) => ({
              headerLeft: () => (
                <TouchableOpacity style={{flexDirection:"row",marginLeft: 0,}} onPress={() => navigation.goBack()}>
                   <BackIcon name="arrowleft" size={23} color='#116754' style={{ marginRight: 18 }} />
                  <Text style={[styles.backicontext,{marginLeft: -10}]}>Back</Text>
                </TouchableOpacity>
              ),
              title: null, 
              headerRight: () => (
                <View style={{ flexDirection: 'row', gap: -5 ,}}>
                  <TouchableOpacity style={{backgroundColor:'#116754',padding:10,borderRadius:50}} onPress={()=>navigation.navigate('Notification')} >
               <NotificationIcon name='notifications' size={15} color={'white'} />
              </TouchableOpacity>
                </View>
              ),
             
              tabBarIcon: ({ color }) => <Entypo name="user-circle-o" color={color} size={25} />,
            })}
          />
        </Stack.Navigator>
      </NavigationContainer>
    // </GestureHandlerRootView>
  );
};
const styles = StyleSheet.create({
  backicontext:{
      color: 'black',
      fontSize: 16,
      fontFamily: Fonts.REGULAR,
  }
});
export default App;
