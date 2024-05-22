import React, {useState} from 'react';
import {View, TextInput, StyleSheet, Image,Box} from 'react-native';
import SearchIcon from 'react-native-vector-icons/Octicons'
import { Fonts } from '../style';
const SearchBar = () => {
  const [search, setSearch] = useState('');

  return (
    <View style={styles.container}>

      <SearchIcon style={styles.searchIcon} name='search' size={20} color={'#116754'}/>
      <TextInput
        style={styles.input}
        placeholder="search for doctors"
        onChangeText={setSearch}
        value={search}
        placeholderTextColor="#116754"
      />
     </View>
     

    
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#E7F0EE',
    flexDirection: 'row',
    borderRadius: 5,
    paddingHorizontal: 10,
    marginTop: 5,
    shadowColor: 'black',
    shadowOffset: {width: 10, height: 10},
    shadowOpacity: 0.5,
    shadowRadius: 2,
    elevation: 5,
    borderWidth:0.5,
    borderColor:'#116754'
  },
  searchIcon: {
    alignSelf: 'center',
    height: 20,
    width: 20,
    marginRight: 10,
  },
  input: {
    flex: 1,
    fontSize: 15,
    fontFamily:Fonts.LIGHT,
    color:'black'
  },
});

export default SearchBar;
