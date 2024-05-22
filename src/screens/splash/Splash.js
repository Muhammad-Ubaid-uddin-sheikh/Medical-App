import React, { useEffect } from 'react'
import { Image,  StatusBar,  StyleSheet, View} from 'react-native'

const SplashScreen = ({ navigation }) => {
    useEffect(() => {
        setTimeout(() => {
          navigation.replace('onboard');
        }, 3000); 
      }, []);

    return (
        <View style={styles.maincontainer}>
            <StatusBar backgroundColor={'#116754'}/>
            <View style={styles.container}>
                <Image style={styles.logo} source={require('../../images/Splash.png')} />
            </View>
        </View>
    )
}

export default SplashScreen

const styles = StyleSheet.create({
    maincontainer:{
        flex:1,
        paddingHorizontal:50,
        backgroundColor:'#116754'
    },
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    logo: {
        width: '100%',
        // height: 400,
        objectFit: 'contain'
    },
    backgroundImage: {
        flex: 1,
        resizeMode: 'cover',
        justifyContent: 'center',
    },
});
