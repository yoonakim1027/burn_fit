const { View } = require('react-native')
import React, { useEffect, useState } from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { NavigationContext } from '@react-navigation/native'
import {
  verticalScale,
  horizontalScale,
  moderateScale,
} from '../components/Scailing'
import HomeStack from './HomeStack'
import CalendarStack from './CalendarStack'
import LibraryStack from './LibraryStack'
import MyPageStack from './MyPageStack'

const Tab = createBottomTabNavigator()

const BottomTabStack = ({ route }) => {
  const navigation = React.useContext(NavigationContext)

  useEffect(() => {
    SystemNavigationBar.setNavigationColor('#161616', true)
  }, [])

  const insets = useSafeAreaInsets()

  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          width: width / 1.1,
          height:
            Platform.OS === 'ios'
              ? verticalScale(60)
              : androidVerticalScale(60),

          elevation: 2,
        },
        tabBarActiveTintColor: 'rgba(255, 255, 255, 1)',
        tabBarInactiveTintColor: 'rgba(255, 255, 255, 0.6)',
        tabBarShowLabel: false,
        tabBarBackground: () => (
          <View style={{ flex: 1 }}>
            <LinearGradient
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 1 }}
              colors={['rgba(120, 231, 255, 1)', 'rgba(174, 171, 255, 1)']}
              style={{ flex: 1, borderRadius: 50 }}
            />
          </View>
        ),
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeStack}
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
              <CustomIcon
                name="home"
                color={color}
                size={
                  Platform.OS === 'ios'
                    ? verticalScale(30)
                    : androidVerticalScale(30)
                }
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Calendar"
        component={CalendarStack}
        options={{
          tabBarIcon: ({ color }) => (
            // <CustomIcon name="story" color={color} size={23} />
            <View
              style={
                Platform.OS === 'ios'
                  ? {
                      position: 'absolute',
                      top: verticalScale(10),
                    }
                  : { marginBottom: androidVerticalScale(8) }
              }
            >
              <CreateNewcontentsButton
                navigation={navigation}
                createStatus={createStatus}
                isCreatingContent={isCreatingContent}
                myHumanList={myHumanList}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Library"
        component={LibraryStack}
        options={{
          tabBarIcon: ({ color }) => (
            // <CustomIcon name="story" color={color} size={23} />
            <View
              style={
                Platform.OS === 'ios'
                  ? {
                      position: 'absolute',
                      top: verticalScale(10),
                    }
                  : { marginBottom: androidVerticalScale(8) }
              }
            >
              <CreateNewcontentsButton
                navigation={navigation}
                createStatus={createStatus}
                isCreatingContent={isCreatingContent}
                myHumanList={myHumanList}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="MyPage"
        component={MyPageStack}
        options={{
          tabBarIcon: ({ color }) => (
            <View
              style={{
                justifyContent: 'flex-end',
                alignItems: 'flex-end',
                flex: 1,
                paddingTop:
                  Platform.OS === 'ios'
                    ? verticalScale(10)
                    : androidVerticalScale(25),
                elevation: 0,
              }}
            >
              <CustomIcon
                name="my"
                color={color}
                size={
                  Platform.OS === 'ios'
                    ? verticalScale(23)
                    : androidVerticalScale(23)
                }
                style={
                  Platform.OS === 'ios'
                    ? {
                        elevation: 0,
                        position: 'absolute',
                        flex: 1,
                        right: horizontalScale(-20),
                        // bottom: verticalScale(-10),
                        top: verticalScale(17),
                      }
                    : {
                        marginTop: androidVerticalScale(5),
                        elevation: 0,
                        position: 'absolute',
                        flex: 1,
                        right: androidHorizontalScale(-20),
                        bottom: androidVerticalScale(20),
                      }
                }
              />
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  )
}

export default BottomTabStack
