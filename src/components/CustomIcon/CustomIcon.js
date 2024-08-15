import React from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import {Colors} from '../../themes/Colors';
import {TouchableOpacity} from 'react-native';
// Import other icon sets as needed

const iconSets = {
  MaterialIcons,
  FontAwesome,
  Ionicons,
  Entypo,
  AntDesign,
  Feather,
  // Add more icon sets here
};

const CustomIcon = ({
  name,
  size = 30,
  color = Colors.Black,
  type = '',
  onPress,
  disabled = false,
  buttonStyle,
}) => {
  const IconComponent = iconSets[type] || MaterialIcons; // Default to MaterialIcons if type is not provided

  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={disabled}
      style={{...buttonStyle}}>
      <IconComponent name={name} size={size} color={color} />
    </TouchableOpacity>
  );
};

export default CustomIcon;
