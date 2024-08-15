import {
  FlatList,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import Header from '../../components/Header';
import {Colors} from '../../themes/Colors';
import SearchBar from '../../components/SearchBar/SearchBar';
import {category, categoryList} from '../../constant/List';
import {styles} from './styles';

const CategoryScreen = () => {
  const [searchText, setSearchText] = useState('');

  const [categoryListData, setCategoryListData] = useState(categoryList);

  const filteringData = (data, isSearch) => {
    if (isSearch) {
      if (data !== '') {
        const filteredList = categoryList.filter(
          item =>
            item.name.toLowerCase().includes(searchText.toLowerCase()) ||
            item.country.toLowerCase().includes(searchText.toLowerCase()),
        );
        setCategoryListData(filteredList);
        setSearchText(data);
      } else {
        setSearchText(data);
        setCategoryListData(categoryList);
      }
    } else {
      const filteredList = categoryList.filter(item =>
        item.type.toLowerCase().includes(data.toLowerCase()),
      );
      setSearchText(data);
      setCategoryListData(filteredList);
    }
  };

  const ProfileItem = ({profile}) => (
    <View style={styles.profileContainer}>
      <View>
        <Image
          source={{uri: profile.profile_image}}
          style={styles.profileImage}
        />
        <Image
          source={{uri: profile.country_flag}}
          style={styles.countryFlag}
        />
      </View>
      <Text style={styles.profileName}>{profile.name}</Text>
    </View>
  );

  const renderItem = ({item}) => {
    return (
      <TouchableOpacity
        style={styles.cardContainer}
        onPress={() => filteringData(item.title, false)}>
        <Image source={{uri: item.image}} style={styles.image} />
        <Text style={styles.title}>{item.title}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header title={'Category'} />
      <View style={styles.mainContainer}>
        <FlatList
          data={category}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          showsHorizontalScrollIndicator={false}
          style={styles.headingViewContainer}
          horizontal
        />
        <View style={styles.mainContainer}>
          <SearchBar
            placeholder={'Search'}
            onChangeText={text => filteringData(text, true)}
            value={searchText}
          />
          <FlatList
            data={categoryListData}
            renderItem={({item}) => <ProfileItem profile={item} />}
            showsVerticalScrollIndicator={false}
            keyExtractor={item => item.id}
            contentContainerStyle={styles.gridContainer}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default CategoryScreen;
