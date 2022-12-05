import React from 'react'
import {
  createStackNavigator,
  CardStyleInterpolators,
} from '@react-navigation/stack'
import HomeScreen from '../screens/HomeScreen'

const Stack = createStackNavigator()

function HomeStack() {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      activeColor="#e91e63"
      labelStyle={{ fontSize: 12 }}
      screenOptions={{
        headerShown: false,
        gestureEnabled: false,
      }}
    >
      <Stack.Screen name="Home" component={HomeScreen} />
    </Stack.Navigator>
  )
}

export default HomeStack
