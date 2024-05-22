import React from 'react';
import {View, StyleSheet} from 'react-native';
import Header from './Header';
import Footer from './Footer';

const Layout = ({children}) => {
  return (
    <View style={styles.container}>
      <View style={styles.navbar}>
        <Header />
      </View>
      <View style={styles.content}>{children}</View>
      <View style={styles.footer}>
        <Footer />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1, // Makes the layout fill the entire screen
  },
  navbar: {
    flexDirection: 'row', // Adjust styles for your navbar
    justifyContent: 'space-between', // Or center alignment
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#f0f0f0', // Or your preferred color
  },
  content: {
    flex: 1, // Allows child component to expand
    padding: 10,
  },
  footer: {
    flexDirection: 'row', // Adjust styles for your footer
    justifyContent: 'center', // Or other alignment
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#f0f0f0', // Or your preferred color
  },
});

export default Layout;
