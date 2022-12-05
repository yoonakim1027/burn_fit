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
    <Tab.Navigator>
      <Tab.Screen
        name="home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <View
              style={
                Platform.OS === 'ios'
                  ? {
                      width: '32.5%',
                      justifyContent: 'center',
                      alignItems: 'center',
                      top: verticalScale(15),
                      elevation: 0,
                      zIndex: 10,
                      position: 'absolute',
                    }
                  : {}
              }
            >
              <Fontisto name="home" size={30} />
            </View>
          ),
          tabBarActiveTintColor: 'black',
          tabBarInactiveTintColor: 'gray',
        }}
      ></Tab.Screen>
      <Tab.Screen name="calendar" component={CalendarScreen} />
      <Tab.Screen name="library" component={LibraryScreen} />

      <Tab.Screen name="mypage" component={MyPageScreen} />
    </Tab.Navigator>
  )
}

export default TabNavigation
