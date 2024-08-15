import {StyleSheet, Text, TextInput, View} from 'react-native';
import React from 'react';
import CustomIcon from '../CustomIcon';
import {Colors} from '../../themes/Colors';
import {scale} from '../../themes/Scale';

const SearchBar = ({isFilter = true, onChangeText, value, placeholder}) => {
  return (
    <View style={styles.container}>
      <View style={styles.searchBar}>
        <CustomIcon
          name={'search'}
          type={'Feather'}
          size={25}
          color={Colors.Black}
        />
        <TextInput
          onChangeText={onChangeText}
          value={value}
          placeholder={placeholder}
          placeholderTextColor={Colors.Text_100}
          style={styles.input}
        />
        <CustomIcon
          name={'microphone'}
          type={'FontAwesome'}
          size={25}
          color={Colors.Black}
        />
      </View>
      {isFilter && (
        <CustomIcon
          buttonStyle={styles.filterButton}
          name={'options-outline'}
          type={'Ionicons'}
          color={Colors.Black}
        />
      )}
    </View>
  );
};

export default SearchBar;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    margin: 10,
  },
  filterButton: {
    backgroundColor: Colors.Gray_100,
    borderRadius: 5,
    padding: 5,
  },
  searchBar: {
    backgroundColor: Colors.Gray_100,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    paddingHorizontal: 15,
    paddingVertical: 8,
    flex: 1,
  },
  input: {
    fontSize: scale(15),
    color: Colors.Text_100,
    flex: 1,
    fontWeight: '600',
  },
});
