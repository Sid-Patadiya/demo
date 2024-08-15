import * as React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {CategoryScreen, HomeScreen} from '../screen';
import {Colors} from '../themes/Colors';
import {scale} from '../themes/Scale';
import CustomIcon from '../components/CustomIcon';

const Tab = createBottomTabNavigator();

export default function BottomTab() {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        // tabBarShowLabel: false,
        tabBarLabelStyle: {
          color: Colors.Text_100,
          fontSize: scale(10),
        },
        headerShown: false,
        tabBarHideOnKeyboard: true,

        tabBarIcon: ({focused}) => {
          let iconName = '';
          if (route.name === 'Home') {
            iconName = 'home';
          } else {
            iconName = 'wechat';
          }
          return (
            <CustomIcon
              disabled={true}
              name={iconName}
              color={focused ? Colors.Secondary_100 : Colors.Black}
              type={'FontAwesome'}
              size={30}
            />
          );
        },
      })}>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Category" component={CategoryScreen} />
    </Tab.Navigator>
  );
}
