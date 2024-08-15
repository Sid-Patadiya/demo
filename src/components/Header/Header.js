import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {Colors} from '../../themes/Colors';
import {scale} from '../../themes/Scale';
import Entypo from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons';
import CustomIcon from '../CustomIcon';

const Header = ({title, onPressMenu, onPressNotification}) => {
  return (
    <View style={styles.container}>
      <CustomIcon
        name={'menu'}
        type={'Entypo'}
        size={30}
        onPress={onPressMenu}
        color={Colors.Black}
      />
      <Text style={styles.headingText}>{title}</Text>
      <CustomIcon
        name={'notifications-outline'}
        type={'Ionicons'}
        size={30}
        onPress={onPressNotification}
        color={Colors.Black}
      />
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.White_100,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: scale(15),
    shadowColor: Colors.Black,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.18,
    shadowRadius: 1.0,

    elevation: 1,
  },
  headingText: {
    fontSize: scale(16),
    fontWeight: 'bold',
    color: Colors.Text_100,
  },
});
