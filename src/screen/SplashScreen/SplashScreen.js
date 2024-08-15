import {Alert, AppState, Image, StatusBar, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {Images} from '../../themes/Images';
import {styles} from './styles';

const Splash = ({navigation}) => {
  useEffect(() => {
    const timerId = setTimeout(async () => {
      navigation.replace('BottomTab');
    }, 3000);
    return () => clearTimeout(timerId);
  }, []);

  return (
    <View style={styles.container}>
      <Image
        source={Images.splash_screen}
        style={styles.imageContainer}
        resizeMode="contain"
      />
    </View>
  );
};

export default Splash;
