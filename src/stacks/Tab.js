import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import HomeStack from './HomeStack'
import CalendarStack from './CalendarStack'
import LibraryStack from './LibraryStack'
import MyPageStack from './MyPageStack'
import HomeScreen from '../screens/HomeScreen'
import CalendarScreen from '../screens/CalendarScreen'
import LibraryScreen from '../screens/LibraryScreen'
import MyPageScreen from '../screens/MyPageScreen'
import Fontisto from 'react-native-vector-icons/Fontisto'
import { View } from 'react-native'
import {
  verticalScale,
  horizontalScale,
  moderateScale,
} from '../components/Scailing'
const Tab = createBottomTabNavigator()

const TabNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Tab.Screen
        name="home"
        component={HomeScreen}
        // options={{
        //   tabBarIcon: ({ color }) => (
        //     <View>{/* <Fontisto name="mad" size={30} /> */}</View>
        //   ),
        // }}
      ></Tab.Screen>
      <Tab.Screen name="calendar" component={CalendarScreen} />
      <Tab.Screen name="library" component={LibraryScreen} />

      <Tab.Screen name="mypage" component={MyPageScreen} />
    </Tab.Navigator>
  )
}

export default TabNavigation
