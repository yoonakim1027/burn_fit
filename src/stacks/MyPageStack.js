import React from 'react'
import {
  createStackNavigator,
  CardStyleInterpolators,
} from '@react-navigation/stack'
import MyPageScreen from '../screens/MyPageScreen'

const Stack = createStackNavigator()

function MyPageStack() {
  return (
    <Stack.Navigator
      initialRouteName="MyPage"
      activeColor="#e91e63"
      labelStyle={{ fontSize: 12 }}
      screenOptions={{
        headerShown: false,
        gestureEnabled: false,
      }}
    >
      <Stack.Screen name="MyPage" component={MyPageScreen} />
    </Stack.Navigator>
  )
}

export default MyPageStack
