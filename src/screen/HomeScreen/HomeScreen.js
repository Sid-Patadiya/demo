import {SafeAreaView, Text, View} from 'react-native';
import React from 'react';
import Header from '../../components/Header';
import {styles} from './styles';

const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Header title={'Home'} />
      <View style={styles.mainContainer}>
        <Text style={styles.welcomeText}>Welcome</Text>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
