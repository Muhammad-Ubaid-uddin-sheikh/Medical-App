// import {
//   View,
//   Text,
//   TouchableOpacity,
//   Image,
//   StyleSheet,
//   Alert,
//   SafeAreaView,
// } from 'react-native';
// import React, {useState} from 'react';
// import Link from '../components/common/Link';
// import Heading from '../components/common/Heading';
// import Input from '../components/common/Input';
// import Button from '../components/common/Button';
// import {useNavigation} from '@react-navigation/native';
// import {login} from '../api/auth';
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import BackIcon from 'react-native-vector-icons/Ionicons'
// import { Fonts } from '../components/style';
// const SignIn = () => {
//   const [formData, setFormData] = useState({identifier: '', password: '',role:'patient'});
//   const [isLoading, setIsLoading] = useState(false);

//   console.log(formData)

//   const handleRoleSelection = (role) => {
//     setFormData({...formData, role});
//   };

  
//   const renderRoleButton = (role, text) => (
//     <TouchableOpacity
//       style={[
//         styles.button,
//         formData.role === role && { borderWidth: 1, borderColor: '#000' },
//       ]}
//       onPress={() => handleRoleSelection(role)}>
//       <Text
//         style={[
//           styles.buttonText,
//           formData.role === role && { color: '#160846' },
//         ]}>
//         {text}
//       </Text>
//       {formData.role === role && (
//         <Image
//           source={require('../images/tick.png')}
//           style={styles.tickMark}
//         />
//       )}
//     </TouchableOpacity>
//   );
//   const navigation = useNavigation();
//   const handleCreateAccountPress = () => {
//     navigation.navigate('signup');
//   };

//   const handleBackPress = () => {
//     navigation.goBack();
//   };

//   const handleForgotPress = () => {
//     navigation.navigate('recoveraccount');
//   };

//   const handleFormChange = (name, value) => {
//     setFormData(prev => ({...prev, [name]: value}));
//   };

//   const handleSubmit = () => {
//     setIsLoading(true);
//     login(formData)
//       .then(async res => {
//         const response = res.data;
//         const user = response[formData.role]
//         const token = response.accessToken;
//         await AsyncStorage.setItem('accessToken', token);
//         await AsyncStorage.setItem('user',JSON.stringify(user))
//         await AsyncStorage.setItem('role',formData.role)

//         setIsLoading(false);
//         // // Redirect to respective dashboard based on selected role
//         if (formData.role === 'patient') {
//           navigation.navigate('dashboard');
//         } else if (formData.role === 'doctor') {
//           navigation.navigate('Doctordashboard');
//         }
//         else if (formData.role === 'Nurse') {
//           navigation.navigate('ParticularPatientScreen');
//         }
//       })
//       .catch(error => {
//         setIsLoading(false)
//         Alert.alert(error)
//       });
//   };
//   return (
//     <SafeAreaView style={{backgroundColor:'#e3eeeb',flex:1}}>
//       <View style={styles.parent}>
//         <View style={styles.firstChild}>
//           <TouchableOpacity onPress={handleBackPress}>
          
//             <BackIcon name = 'chevron-back' size={25} color='black'/>
//           </TouchableOpacity>
         
//           <Link text="Create Account" onPress={handleCreateAccountPress} />
//         </View>
//         <View style={styles.secondChild}>
//           <Heading text="Sign In To Your" />
//           <Heading text="Account" />
//         </View>
//         <View>
//           <View style={styles.buttonCon}>
//             {renderRoleButton('patient', 'Patient')}
//             {renderRoleButton('doctor', 'Doctor')}
//             {renderRoleButton('nurse', 'Nurse')}
//           </View>
//           </View>
//         <View>
//           <View>
//             <Input
//               style={styles.input}
//               placeholder="Email"
//               keyboardType="email-address"
//               textContentType="emailAddress"
//               value={formData?.identifier}
//               onChangeText={value => handleFormChange('identifier', value)}
//             />
//             <Input
//               placeholder="Password"
//               secureTextEntry={true}
//               textContentType="password"
//               value={formData?.password}
//               onChangeText={value => handleFormChange('password', value)}
//             />
//             <Link
//               text="Forgot Password?"
//               style={styles.link}
//               onPress={handleForgotPress}
//             />
//           </View>
//           <View style={styles.bottomCon}>
//             <Button
//               text="Sign In"
//               onPress={handleSubmit}
//               disabled={isLoading}
//             />
//             <Text style={{fontFamily:Fonts.REGULAR,color:'black'}}>Or Create With</Text>
//             <TouchableOpacity style={{backgroundColor:'white',padding:10,borderRadius:5}}>
//               <Image source={require('../images/google.png')} style={{width:30,height:30,objectFit:'contain'}} />
//             </TouchableOpacity>
//           </View>
//         </View>
//       </View>
//     </SafeAreaView>
//   );
// };

// const styles = StyleSheet.create({
//   parent: {
//     paddingVertical: 30,
//     paddingHorizontal: 15,
//   },
//   firstChild: {
//     display: 'flex',
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//   },

//   button: {
//     paddingVertical: 12,
//     paddingHorizontal: 30,
//     borderRadius: 5,
//     alignItems: 'center',
//     backgroundColor: 'white',
//   },
//   buttonText: {
//     fontSize: 15,
//     fontWeight: '600',
//     color: 'grey',
//     fontFamily: Fonts.REGULAR,
//   },
//   buttonCon: {
//     display: 'flex',
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     fontFamily: Fonts.LIGHT,
  
//   },

//   bottomCon: {
//     marginTop: 20,
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'space-between',
//     height: 150,
//   },

//   secondChild: {
//     marginVertical: 40,
//   },
//   tickMark: {
//     position: 'absolute',
//     top: 5,
//     right: 5,
//   },
//   parent: {
//     paddingVertical: 30,
//     paddingHorizontal: 15,
//     // backgroundColor:'#e3eeeb',
//     // flex:1
//   },
//   firstChild: {
//     display: 'flex',
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//   },
//   bottomCon: {
//     marginTop: 20,
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'space-between',
//     height: 150,
//   },
//   buttonCon: {
//     display: 'flex',
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     fontFamily: Fonts.LIGHT,
//   },

//   secondChild: {
//     marginVertical: 40,
//   },

//   link: {
//     alignSelf: 'flex-end',
//   },
// });

// export default SignIn;
import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  Alert,
  SafeAreaView,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import BackIcon from 'react-native-vector-icons/Ionicons';
import { Fonts } from '../components/style';
import Link from '../components/common/Link';
import Heading from '../components/common/Heading';
import Input from '../components/common/Input';
import Button from '../components/common/Button';
import {login} from '../api/auth';

const SignIn = () => {
  const [formData, setFormData] = useState({identifier: '', password: '', role: 'patient'});
  const [isLoading, setIsLoading] = useState(false);

  const navigation = useNavigation();

  const handleRoleSelection = (role) => {
    setFormData({...formData, role});
  };

  const renderRoleButton = (role, text) => (
    <TouchableOpacity
      style={[
        styles.button,
        formData.role === role && { borderWidth: 1, borderColor: '#000' },
      ]}
      onPress={() => handleRoleSelection(role)}>
      <Text
        style={[
          styles.buttonText,
          formData.role === role && { color: '#160846' },
        ]}>
        {text}
      </Text>
      {formData.role === role && (
        <Image
          source={require('../images/tick.png')}
          style={styles.tickMark}
        />
      )}
    </TouchableOpacity>
  );

  const handleCreateAccountPress = () => {
    navigation.navigate('SignUp');
  };

  const handleBackPress = () => {
    navigation.goBack();
  };

  const handleForgotPress = () => {
    navigation.navigate('recoveraccount');
  };

  const handleFormChange = (name, value) => {
    setFormData(prev => ({...prev, [name]: value}));
  };

  const handleSubmit = () => {
    setIsLoading(true);
    login(formData)
      .then(async res => {
        const response = res.data;
        const user = response.user
        const token = response.accessToken;
        await AsyncStorage.setItem('accessToken', token);
        await AsyncStorage.setItem('user', JSON.stringify(user));
        await AsyncStorage.setItem('role', formData.role);

        setIsLoading(false);

        if (formData.role === 'patient') {
          navigation.navigate('dashboard');
        } else  {
          navigation.navigate('Doctordashboard');
        } 
      })
      .catch(error => {
        setIsLoading(false)
        Alert.alert(error.message)
      });
  };

  return (
    <SafeAreaView style={{backgroundColor: '#e3eeeb', flex: 1}}>
      <View style={styles.parent}>
        <View style={styles.firstChild}>
          <TouchableOpacity onPress={handleBackPress}>
            <BackIcon name='chevron-back' size={25} color='black' />
          </TouchableOpacity>
          <Link text="Create Account" onPress={handleCreateAccountPress} />
        </View>
        <View style={styles.secondChild}>
          <Heading text="Sign In To Your" />
          <Heading text="Account" />
        </View>
        <View>
          <View style={styles.buttonCon}>
            {renderRoleButton('patient', 'Patient')}
            {renderRoleButton('doctor', 'Doctor')}
            {renderRoleButton('nurse', 'Nurse')}
          </View>
        </View>
        <View>
          <View>
            <Input
              style={styles.input}
              placeholder="Email"
              keyboardType="email-address"
              textContentType="emailAddress"
              value={formData.identifier}
              onChangeText={value => handleFormChange('identifier', value)}
            />
            <Input
              placeholder="Password"
              secureTextEntry
              textContentType="password"
              value={formData.password}
              onChangeText={value => handleFormChange('password', value)}
            />
            <Link
              text="Forgot Password?"
              style={styles.link}
              onPress={handleForgotPress}
            />
          </View>
          <View style={styles.bottomCon}>
            <Button
              text="Sign In"
              onPress={handleSubmit}
              disabled={isLoading}
            />
            <Text style={{fontFamily: Fonts.REGULAR, color: 'black'}}>Or Create With</Text>
            <TouchableOpacity style={{backgroundColor: 'white', padding: 10, borderRadius: 5}}>
              <Image source={require('../images/google.png')} style={{width: 30, height: 30, objectFit: 'contain'}} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  parent: {
    paddingVertical: 30,
    paddingHorizontal: 15,
  },
  firstChild: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  button: {
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 5,
    alignItems: 'center',
    backgroundColor: 'white',
  },
  buttonText: {
    fontSize: 15,
    fontWeight: '600',
    color: 'grey',
    fontFamily: Fonts.REGULAR,
  },
  buttonCon: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    fontFamily: Fonts.LIGHT,
  },
  bottomCon: {
    marginTop: 20,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 150,
  },
  secondChild: {
    marginVertical: 40,
  },
  tickMark: {
    position: 'absolute',
    top: 5,
    right: 5,
  },
  link: {
    alignSelf: 'flex-end',
  },
});

export default SignIn;
